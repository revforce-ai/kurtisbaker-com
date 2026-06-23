# Gemma Hardware Recommendations & Cost (2025–2026)

A practical buyer's guide to the hardware needed to run Google's **Gemma** open
models locally for inference, with approximate USD costs for each option. Covers
per-model memory requirements, consumer GPUs, Apple Silicon Macs,
workstation/datacenter GPUs, and cloud rental as an alternative.

> **Read this first — pricing is abnormal right now.** A severe DRAM/GDDR memory
> shortage in 2026 (foundry capacity monopolized by AI accelerators; GDDR7
> scarce) has inflated GPU prices well above MSRP. The RTX 5090 ($1,999 MSRP) is
> selling at ~$4,200–$4,700; RTX 40-series is discontinued and overpriced on the
> used market. Treat every "new" price below as a wide, volatile range and verify
> live before buying. Datacenter cards (A100/H100/H200) are quoted in
> $20k–$45k+ ranges and are usually *rented*, not bought.

---

## 1. How much memory does each Gemma model need?

LLM token generation is **memory-bound**: the model's weights must fit in
VRAM (or Apple unified memory), and generation speed scales with memory
*bandwidth*. The single most important number for "will it run" is the weight
size at your chosen quantization, plus KV-cache/runtime overhead.

**Quantization in one line:** FP16/BF16 = full precision (2 bytes/param);
INT8/Q8 ≈ half that; INT4/Q4 ≈ a quarter — with a modest quality trade-off that
is small for Q8 and usually acceptable for Q4 (especially Google's
Quantization-Aware-Trained "QAT" int4 checkpoints).

### Gemma 3 (1B, 4B, 12B, 27B) — weights only

| Model | FP16/BF16 | INT8 / Q8 | INT4 / Q4 (Google QAT) | Ollama Q4 on-disk |
|-------|-----------|-----------|------------------------|-------------------|
| Gemma 3 1B  | ~2 GB  | ~1 GB  | ~0.5 GB | ~0.8 GB |
| Gemma 3 4B  | ~8 GB  | ~4 GB  | ~2.6 GB | ~3.3 GB |
| Gemma 3 12B | ~24 GB | ~12 GB | ~6.6 GB | ~8.1 GB |
| Gemma 3 27B | ~54 GB | ~27 GB | ~14.1 GB | ~17 GB |

BF16 and int4 figures are from Google's official QAT blog; Q8 is interpolated
(~half BF16) since Google publishes official QAT figures only for int4 and BF16.
The **27B int4 = 14.1 GB (Google) vs ~17 GB (Ollama Q4_K_M)** gap is expected, not
a contradiction: Google quotes pure int4 weights; Ollama's Q4_K_M is a
mixed-precision GGUF (some tensors kept at higher bit-width) measured on disk.

### Gemma 3n (E2B, E4B — mobile/edge optimized)

"E" = *effective* parameters. Per-Layer Embeddings (PLE) offload embedding tables
to CPU RAM, so accelerator memory behaves like a smaller model.

| Model | Raw params | BF16 (full) | INT4 / Q4 | Official minimum |
|-------|-----------|-------------|-----------|------------------|
| Gemma 3n E2B | ~5B (~2B effective) | ~5 GB | ~2 GB | **2 GB** |
| Gemma 3n E4B | ~8B (~4B effective) | ~8 GB | ~3–4 GB | **3 GB** |

The "2 GB / 3 GB" figures are *minimums* (max quantization, short context, PLE
offloaded); BF16 full loads are meaningfully larger (~5 GB / ~8 GB).

### Gemma 2 (2B, 9B, 27B) — weights only

No official Google QAT table exists for Gemma 2; figures are weights-only
estimates (bytes-per-param) corroborated by Ollama on-disk sizes.

| Model | FP16/BF16 | INT8 / Q8 | INT4 / Q4 | Ollama Q4 on-disk |
|-------|-----------|-----------|-----------|-------------------|
| Gemma 2 2B  | ~5 GB  | ~2.5 GB | ~1.2–1.5 GB | 1.6 GB |
| Gemma 2 9B  | ~18 GB | ~9 GB   | ~5–6 GB     | 5.4 GB |
| Gemma 2 27B | ~54 GB | ~27 GB  | ~13.5–16 GB | 16 GB  |

### Context / KV-cache overhead (don't forget this)

All weight figures above **exclude the KV cache**, which grows with context
length and often decides whether a long-context job fits.

- **Rule of thumb:** add ~15–20% on top of weight size for runtime + activations +
  short (≤2K-token) context. Long 32K–128K contexts can add several GB more,
  especially on the 12B/27B variants.
- **Gemma 3** uses interleaved local/global attention (5:1 ratio, 1024-token
  sliding window). Only ~1/6 of layers store K/V for the full 128K window,
  cutting long-context KV overhead from ~60% (Gemma 1 style) to **under 15%**.
- **Gemma 2** uses a 1:1 local/global ratio with a 4096-token window → higher KV
  overhead than Gemma 3 at equivalent context.

---

## 2. Consumer / prosumer GPUs (NVIDIA + AMD)

The practical dividing line: **24 GB VRAM is the floor for running 27B
comfortably at Q4.** 16 GB cards are excellent for the 12B tier but force 27B
into degraded Q3 quants. 12 GB handles 4B and 12B-Q4.

| GPU | VRAM | ~USD price (2026, volatile) | Best Gemma fit |
|-----|------|------------------------------|----------------|
| **RTX 3060** | 12 GB | ~$280–$466 new / ~$200–$250 used | 4B (any), 12B Q4. **Best budget entry**; 2026 relaunch rumored. |
| **RTX 4060 Ti 16GB** | 16 GB | ~$499 MSRP (often higher) | 12B at Q8, or 12B Q4 long-context. Good VRAM/watt. |
| **RTX 4070 / 4070 Ti Super** | 12 / 16 GB | ~$549–$700 / ~$799 MSRP (now ~$740 used) | 12B Q4 (4070); 12B Q8 (Ti Super). Discontinued. |
| **RTX 4080 / 4080 Super** | 16 GB | $999 MSRP (inflated now) | 12B Q8 fast; 27B only at low (Q3) quant. |
| **RTX 4090** | 24 GB | ~$1,599 MSRP → ~$2,300 used / ~$2,755 new | Classic 27B-Q4 card (~31 tok/s). Discontinued, pricey. |
| **RTX 5070 / 5070 Ti** | 12 / 16 GB | ~$549 / $749 MSRP | 12B Q4 (5070); 12B Q8 (Ti). **Best balanced new buy.** |
| **RTX 5080** | 16 GB | $999 MSRP, often +45% | 12B Q8 fast; 16 GB caps 27B. |
| **RTX 5090** | 32 GB | $1,999 MSRP → street ~$4,200–$4,700 | **Best single consumer card:** 27B Q4 long-context or near-Q8 (~42 tok/s). |
| **AMD RX 7900 XTX** | 24 GB | ~$750–$850 used / ~$1,100–$1,400 new | **Best value for 27B Q4** — half a 4090's price for the same 24 GB. ROCm 7.x. |
| **AMD RX 9070 XT** | 16 GB | $599 MSRP / ~$689 new | RDNA4, 12B Q8 tier; 16 GB caps 27B. ROCm maturing. |

### Recommended consumer card by target

| Target | Practical minimum | Recommended |
|--------|-------------------|-------------|
| Gemma 4B (Q4/Q8) | RTX 3060 12GB (or any 8 GB) | RTX 3060 12GB |
| Gemma 12B Q4 | RTX 3060 12GB | RTX 5070 Ti / 4070 Ti Super (more bandwidth) |
| Gemma 12B Q8 | RTX 4060 Ti 16GB | RTX 5070 Ti / 5080 / RX 9070 XT |
| Gemma 27B Q4 | RTX 4090 24GB **or** RX 7900 XTX 24GB | RTX 5090 32GB (headroom); RX 7900 XTX for value |
| Gemma 27B Q8 | RTX 5090 32GB (tight) | RTX 5090 32GB, or dual 24 GB / workstation card |

---

## 3. Apple Silicon Macs (unified memory)

Macs share one memory pool between CPU and GPU. They're a strong, power-efficient
option for the 12B–27B tier because you can buy a lot of "VRAM" cheaply — but
**memory bandwidth (Pro → Max → Ultra) drives token speed far more than the
M-generation number.**

- **Usable as VRAM:** macOS caps GPU memory at ~2/3 of RAM (≤36 GB machines) or
  ~75% (>36 GB). Raise it with `sudo sysctl iogpu.wired_limit_mb=<MB>` (leave
  8–16 GB for the system). This matters mainly for 27B-Q8 / large context on
  32–48 GB Macs.
- **Bandwidth by tier:** base M4 ~120 GB/s · M4 Pro ~273 GB/s · M4 Max ~410–546
  GB/s · M3 Ultra ~800 GB/s. A Max roughly doubles a Pro's token rate; the Ultra
  is the fastest single box and the only path to 128–512 GB.
- **Reference speed:** Gemma 27B Q4 ≈ **24 tok/s on M3 Ultra** (Ollama; MLX/LM
  Studio a bit faster). Backend speed: MLX ≥ LM Studio ≥ llama.cpp Metal ≈ Ollama.

| Target | Recommended Mac | Chip / Bandwidth | RAM | ~USD |
|--------|-----------------|------------------|-----|------|
| 4B — entry | MacBook Air M4 13" | M4 / 120 GB/s | 16 GB | **$999** |
| 4B + light 12B | Mac mini M4 | M4 / 120 GB/s | 16 GB | **$599** (24 GB ~$799) |
| 12B sweet spot | Mac mini M4 Pro | M4 Pro / 273 GB/s | 24 GB | **~$1,399** |
| 12B comfortable | Mac mini M4 Pro | M4 Pro / 273 GB/s | 48 GB | **~$1,999** |
| 27B Q4 — best laptop | MacBook Pro 14/16" M4 Max | M4 Max / 410–546 GB/s | 48 GB | **~$3,200–3,500** |
| 27B Q4 — best value desktop | Mac Studio M4 Max | M4 Max / 410–546 GB/s | 64 GB | **~$2,500** ($1,999 base 36 GB) |
| 27B Q8 / long context | MacBook Pro 16" M4 Max | M4 Max / 546 GB/s | 64–128 GB | **~$4,159 → $4,700+** |
| 27B fastest + future-proof | Mac Studio M3 Ultra | M3 Ultra / 800 GB/s | 96 GB (→512) | **$3,999 → $14,099 maxed** |

Memory caps to know: MacBook Air M4 maxes at 32 GB; Mac mini M4 Pro maxes at
48 GB; M4 Max scales to 128 GB; M3 Ultra scales to 512 GB.

---

## 4. Workstation / datacenter GPUs (for 27B at full precision or serving)

Gemma 3 27B at **BF16 needs ~54 GB for weights alone** (more with KV cache and
batching). A single 48 GB card therefore *cannot* hold full-precision 27B with
overhead — you must quantize (INT8/FP8/4-bit) or use two cards. **80 GB+ cards
run it comfortably at BF16** with room for long context and batched serving.

| GPU | VRAM | ~USD purchase (volatile) | Gemma 27B fit / notes |
|-----|------|--------------------------|------------------------|
| **RTX A6000** (Ampere) | 48 GB | ~$3,500–$6,250 (~$5,200 avg) | Quantize for single-card, or 2× for BF16. Cheapest 48 GB; no FP8. |
| **RTX 6000 Ada** | 48 GB | ~$6,800–$8,100 | Faster than A6000, FP8 support. Quantize or pair for BF16. |
| **RTX PRO 6000 Blackwell** | 96 GB GDDR7 | ~$11,400–$13,250 (MSRP raised ~55% in a year) | **Best single-card BF16 fit** — full weights + big context, newest arch, FP8/FP4. |
| **NVIDIA L4** | 24 GB | ~$2,000–$3,000 | Too small for 27B even quantized; fine for 1B/4B. Low-power (75W). |
| **NVIDIA L40S** | 48 GB | ~$7,500 | Quantize or 2× for BF16; better serving throughput than A6000, FP8. |
| **NVIDIA A100 40GB** | 40 GB | ~$10,000–$15,000 new | Can't hold BF16 27B alone; needs quant or 2×. 80 GB sibling is the better target. |
| **NVIDIA A100 80GB** | 80 GB | ~$8,000–$15,000 new; ~$4k–9k used | **Comfortable BF16 fit** + KV/batching. Great value vs H100 for serving. No FP8. |
| **NVIDIA H100 80GB** | 80 GB | PCIe ~$25k–$30k; SXM ~$35k–$40k | **Excellent BF16 serving**, high throughput, FP8. Usually rented. |
| **NVIDIA H200 141GB** | 141 GB | ~$28k–$45k | Overkill-comfortable: huge context/batch on one card (4.8 TB/s). Rent unless heavy 24/7. |

**By use case:** single full-precision card → RTX PRO 6000 Blackwell 96GB
(~$13k); production serving → A100 80GB (value) or H100 80GB (perf + FP8); max
context/batch → H200. Avoid L4 and single A100 40GB for 27B BF16.

---

## 5. Cloud GPU rental — the alternative to buying

For bursty, experimental, or low-duty workloads, renting (or just using a
per-token API) is almost always cheaper than buying. Specialized providers
(Vast.ai, RunPod, Lambda) run **2–5× cheaper** than the AWS/GCP/Azure hyperscalers
for the same silicon.

| Provider | GPU | ~USD/hour (on-demand) |
|----------|-----|------------------------|
| Vast.ai | RTX 4090 24GB | $0.35–$0.40 |
| Vast.ai | RTX 5090 32GB | $0.36–$0.45 (up to ~$2.00) |
| Vast.ai | H100 80GB | $2.15–$4.00+ |
| RunPod | RTX 4090 24GB | $0.34 (Community) – $0.69 (Secure) |
| RunPod | L4 24GB | ~$0.39 |
| RunPod | L40S 48GB | ~$0.79 |
| RunPod | A100 80GB | ~$1.49–$1.99 |
| RunPod | H100 80GB | ~$2.89 (Secure) |
| Lambda Labs | A100 80GB PCIe | ~$1.99 |
| Lambda Labs | H100 PCIe / SXM | ~$3.29 / ~$3.99–$4.29 |
| AWS | A100 80GB (p4d, 8-GPU) | ~$4.10/GPU |
| AWS | H100 (p5) | ~$6.88/GPU |
| GCP | A100 80GB (a2) | ~$3.28/GPU |
| GCP | H100 (a3-high) | ~$3.00–$3.67/GPU |
| Azure | H100 (NC H100 v5) | ~$6.98/GPU |

For Gemma you rarely need an H100: 1B–12B run happily on an **L4 ($0.39)**, **RTX
4090 ($0.35–0.69)**, or **L40S ($0.79)**; 27B fits a single **A100 80GB
(~$1.50–2.00)**.

### Per-token / serverless APIs (no GPU to manage)

| Provider | Gemma offering | Price |
|----------|----------------|-------|
| **Google AI Studio** (Gemini API) | Gemma | **Free** (rate-limited; free-tier prompts may train Google products) |
| **OpenRouter** | Gemma free + paid variants | $0 free variants; paid adds ~5.5% fee, $5 min credit |
| **Together AI** | Gemma serverless | ~$0.20 / 1M input, ~$0.50 / 1M output (Batch up to 50% off) |
| **Google Vertex AI** | Self-deployed Gemma endpoint | Pay underlying GPU machine hourly; can autoscale to zero |

The cheapest path for most low-to-moderate volume is **Google AI Studio's free
Gemma tier**, then OpenRouter/Together AI per-token, with self-hosted GPU only
justified at high sustained volume or for privacy/control.

### Rent vs. buy — break-even rule of thumb

| Card | Buy | Rent | Break-even |
|------|-----|------|------------|
| RTX 4090 | ~$1,800 + system | ~$0.40/hr | ~4,500–5,000 GPU-hours (~6–7 mo @ 24/7) |
| A100 80GB | ~$15,000–18,000 | ~$1.50/hr | ~10,000+ hours (>1 yr @ 24/7) |
| H100 | ~$30,000+ | ~$3/hr | ~10,000 hours (+ obsolescence risk) |

**Buy** only for sustained 24/7 production on a fixed model, or for
privacy/always-on needs — and factor in power, cooling, depreciation, and fast
GPU-generation turnover. Otherwise **rent** (or use the free Gemma API).

---

## 6. Recommended setup: local Linux box + cloud backup

This is the recommended architecture for the stated preference — **own a local
Linux box for day-to-day inference, with the cloud as failover/burst capacity and
for off-site backup.** You get data privacy, no per-hour meter for routine use,
and a safety valve for spikes or hardware failure.

### Hardware — pick by the largest model you run regularly

| Tier | GPU | VRAM | ~USD (GPU) | Runs |
|------|-----|------|------------|------|
| **Budget** | RTX 3060 12GB (or used 4070 Ti Super 16GB) | 12–16 GB | ~$280–$740 | 4B any · 12B Q4/Q8 |
| **Sweet spot (recommended)** | **AMD RX 7900 XTX 24GB** *or* used **RTX 3090 24GB** | 24 GB | ~$750–$900 | 27B Q4 with real context |
| **Headroom** | RTX 5090 32GB | 32 GB | ~$2,000 MSRP (street higher) | 27B near-Q8, long context |
| **Pro single-card BF16** | RTX PRO 6000 Blackwell 96GB | 96 GB | ~$11k–$13k | 27B full precision + serving |

> **NVIDIA vs AMD on Linux:** NVIDIA + CUDA remains the most frictionless path
> (best driver/runtime support across Ollama, llama.cpp, vLLM). A **used RTX 3090
> 24GB** (~$700–$900) is often the best value-per-VRAM local card and is
> CUDA-native. AMD's **RX 7900 XTX 24GB** is cheaper still and well-supported by
> ROCm 7.x for inference, but expect occasional rough edges versus CUDA. If you
> want zero driver hassle, go NVIDIA; if you want maximum VRAM-per-dollar and
> don't mind ROCm, go 7900 XTX.

A sensible **recommended build**: Ryzen 7/9 or Core i5/i7 CPU, **64 GB system RAM**
(lets you offload layers to CPU and run bigger quants than VRAM alone allows),
1–2 TB NVMe, a 24 GB GPU, and a 750W+ PSU. Budget roughly **$1,500–$2,000 all-in**
with a used 3090, or **~$2,500–$3,000** with an RTX 5090.

### Linux software stack

- **Distro:** Ubuntu 24.04 LTS or Debian 13 — best driver/CUDA/ROCm coverage and
  the path most guides assume.
- **NVIDIA:** install the proprietary driver + CUDA toolkit (`nvidia-driver-xxx`,
  CUDA 12.x). Verify with `nvidia-smi`.
- **AMD:** install **ROCm 7.x** (check your GPU is on the supported list — gfx1100
  for the 7900 XTX) and use ROCm-enabled builds of llama.cpp/Ollama.
- **Inference runtime:**
  - **Ollama** — easiest; one command pulls quantized Gemma (`ollama run gemma3:27b`).
    Great default for a personal box.
  - **llama.cpp** — most control over quantization, GPU/CPU offload split, and
    context; pair with GGUF quants (e.g. Q4_K_M).
  - **vLLM** — if you'll serve multiple users/high throughput from the box.
  - **LM Studio** — GUI option if you want a desktop app on Linux.
- **Remote access:** expose Ollama's OpenAI-compatible API on your LAN, or tunnel
  via Tailscale/WireGuard for secure access from elsewhere.

### Cloud as backup / burst

Two distinct meanings — set up both:

1. **Compute failover / burst** — when the box is busy, down, or a job needs more
   VRAM than you own (e.g. 27B at full BF16, or many concurrent users):
   - **On-demand rental:** RunPod or Vast.ai — RTX 4090 ~$0.35–0.69/hr, A100 80GB
     ~$1.50–2.00/hr. Because Ollama/vLLM expose the same OpenAI-style API locally
     and in the cloud, you can point your client at either with a config flip.
   - **Zero-ops fallback:** Google AI Studio's **free Gemma API** or
     OpenRouter/Together AI per-token — ideal as an emergency backstop with no
     instance to spin up.
2. **Data / model backup** — back up your models, fine-tunes, prompts, and configs
   off-site:
   - Object storage (Backblaze B2 ~$6/TB-month, Cloudflare R2, or AWS S3) synced
     with **restic** or **rclone** on a cron/systemd timer. Re-downloadable base
     weights don't need backup — prioritize your *own* artifacts (LoRAs, datasets,
     configs, `~/.ollama` customizations).

**Net cost picture:** a one-time ~$1,500–$2,000 local box handles all routine
Gemma work at zero marginal cost; cloud rental is reserved for overflow (a few
dollars per burst) and backup runs ~$5–$10/month for storage. This beats renting
24/7 within ~6–7 months for a 4090-class workload (see break-even table above).

---

## 7. Making the architecture HIPAA-compliant

> **Reality check first.** HIPAA compliance is *organizational and legal*, not a
> setting you switch on. No architecture is "HIPAA compliant" by itself — your
> *organization* is, once it has signed BAAs, a documented risk analysis,
> policies, workforce training, and breach-notification procedures in place. What
> follows is an architecture **designed to support** HIPAA compliance for a system
> handling **PHI** (Protected Health Information). This is engineering guidance,
> not legal advice — have counsel/your compliance officer review before going
> live with real PHI.

### The one rule that reshapes the design: BAAs

Under HIPAA, **any third party that can access PHI is a Business Associate and
must sign a Business Associate Agreement (BAA)** with you. No BAA → you may not
send PHI to that service, period. This forces two corrections to Section 6:

- ❌ **OpenRouter is out of any PHI path** — aggregators don't sign BAAs.
- ❌ **Free API tiers are out** — Google AI Studio's free Gemma tier, Claude
  Free/Pro/Max/Team, and OpenAI consumer tiers are **not** BAA-eligible (and some
  train on your prompts).

**Cloud LLMs that DO offer a BAA (verified June 2026 — confirm current terms):**

| Provider | BAA-eligible surface | Notes |
|----------|----------------------|-------|
| **Anthropic (Claude)** | First-party **Messages API** + Enterprise | NOT Console/Workbench or Free/Pro/Max/Team. Covered models require **30-day retention** (no zero-retention). BAAs signed after 2025-12-02 cover API + Enterprise together. |
| **OpenAI** | API endpoints that are **ZDR-eligible** | Request via `baa@openai.com`. Live web-search tool is **not** eligible. ZDR needs a managed/Enterprise agreement. |
| **Google Cloud Vertex AI** | Vertex AI (Gemini, and Gemma via Model Garden) | Sign the **Google Cloud BAA at the org level**; use only HIPAA-eligible services; consumer Gemini / AI Studio are **not** covered. |

For the cloud leg, pick **one or two** of these under signed BAAs and route only to
them. Your **local Gemma box never needs a BAA** — PHI that stays on hardware you
control isn't disclosed to a third party. That's the strongest argument for the
local-first design here.

### Redaction is defense-in-depth, not legal de-identification

Presidio-style PII stripping (Section 6) is valuable, but **automated redaction
does not make data "de-identified" under HIPAA.** True de-identification requires
either **Safe Harbor** (removing all 18 specified identifiers *and* having no
actual knowledge the residual could re-identify) or **Expert Determination**.
Automated detection is best-effort and will occasionally miss an identifier, so:

- **Do not** rely on redaction to send PHI to a non-BAA service.
- **Do** keep redaction as a *minimum-necessary* control on top of a BAA'd
  channel — send the cloud model the least PHI required for the task.

### Technical safeguards on the local Linux box (HIPAA Security Rule)

Because you're self-hosting, *you* own the safeguards a SaaS BAA would otherwise
provide:

- **Encryption at rest:** full-disk encryption with **LUKS/dm-crypt** on the box
  and on every backup target. PHI at rest unencrypted is a finding.
- **Encryption in transit:** TLS 1.2+ for all egress; keep the trusted zone on a
  private network; remote access only via **WireGuard/Tailscale**, never an open
  port.
- **Access control & authentication:** unique per-user accounts, **MFA**,
  role-based access (least privilege), and automatic session logoff. No shared
  logins.
- **Audit controls:** log every PHI access and every model call. LiteLLM can log
  request metadata; pair with OS-level `auditd` and ship logs to append-only
  storage. Retain audit logs (HIPAA expects ~6 years of compliance
  documentation).
- **Integrity & availability:** checksums/versioning on PHI stores; tested
  **encrypted backups** with a documented disaster-recovery plan.
- **Physical safeguards:** a local box storing PHI must be **physically secured**
  (locked room/rack, controlled facility access) — this is a real obligation that
  cloud users outsource but you now own.

### Cloud backup/burst — HIPAA version

Section 6's cloud backup must also sit under BAAs:

- **Backup storage:** use a **HIPAA-eligible, BAA-covered** object store — **AWS
  S3, Google Cloud Storage, or Azure Blob** (all sign BAAs). **Backblaze B2 does
  not sign a BAA**, so it's out for PHI backups. Encrypt client-side with
  restic/rclone regardless.
- **Compute burst:** rent only from a provider that will sign a BAA and lets you
  run in an isolated, encrypted environment (e.g. a dedicated GPU instance in your
  BAA'd cloud account). Generic Vast.ai/RunPod marketplace hosts are **not**
  appropriate for PHI without a BAA and tenancy guarantees — keep PHI workloads on
  your local box or a BAA'd cloud VM, and reserve cheap marketplace GPUs for
  non-PHI/de-identified work only.

### Administrative requirements (don't skip these)

Architecture alone won't pass an audit. You also need: a documented **risk
analysis**, written **policies & procedures**, **workforce training**, a
**breach-notification** process, signed BAAs with every vendor, and (if you're a
Business Associate yourself) the obligations that flow down from your covered
entity.

### Net effect on the design

The local-first architecture is *already* the HIPAA-friendly shape: keep PHI on
the encrypted local box by default; when a frontier model is genuinely needed,
send the **minimum necessary**, **redacted**, over TLS, **only** to a
**BAA-covered** endpoint (Claude Messages API / OpenAI ZDR-eligible / Vertex AI);
log everything; back up encrypted to a BAA'd store. OpenRouter, free tiers, and
marketplace GPU hosts move to the "non-PHI / de-identified only" lane.

---

## 8. Verifying your current stack (Tailscale + Google Drive)

You're already running **Tailscale** (secure transport) and **Google Drive**
(cloud storage/backup). Both can meet the Section 7 security bar — the task is
verifying they're *configured* to, not just present. Healthcare/HIPAA is not the
driver here, so BAAs are optional; the bar is the security posture: encryption,
least-privilege access, enforced MFA, audit logging, and keeping private info
private.

> **Prerequisite — confirm this is Google Workspace, not consumer Drive.** A
> custom domain (`@cwmi.us`) implies Workspace. Only Workspace exposes the admin
> console, audit logs, and DLP needed to *verify* anything below. If it's a
> consumer Gmail Drive, you cannot verify to this standard — migrate to Workspace
> first.

### Tailscale checklist (secure transport layer)

- [ ] **Least-privilege ACLs** — Admin console → *Access Controls*. Default-deny;
      only specific users/devices reach the local box, only on needed ports. Not
      the default allow-all (`"*" : ["*"]`).
- [ ] **Device approval ON** — *Settings → Device management*. New machines need
      admin sign-off before joining the tailnet.
- [ ] **Key expiry enabled** — *Machines* list. No device shows "Key expiry
      disabled"; keys rotate on schedule.
- [ ] **MFA enforced via SSO** — identity provider (Google/Okta). No
      personal-account backdoors into the tailnet.
- [ ] **No public exposure** — Tailscale **Funnel off** unless deliberately
      publishing a service; nodes reachable only inside the tailnet.
- [ ] **ACL tests** — add a `tests` block to the policy file asserting who *can*
      and *cannot* reach the box, so the config can't silently regress.
- [ ] **Tailnet lock** (optional, high value) — *Settings → Tailnet lock*.
      Cryptographically blocks rogue node injection.
- [ ] **Audit logging** — configuration + network-flow logs enabled and shipped
      somewhere you review.

Local sanity checks: `tailscale status` (who's on the tailnet) and
`tailscale ping <box>` (confirm a direct, encrypted path). Transport is WireGuard
end-to-end by default — the work is the *access policy*, not the crypto.

### Google Drive checklist (cloud storage / backup leg)

First decide the data question: in the Section 6/7 design, **private info should
stay local**. So either (a) only non-sensitive / already-sanitized data lives in
Drive, or (b) sensitive data is there but **client-side encrypted** so Google
holds only ciphertext.

- [ ] **Workspace + DPA** — confirm it's Workspace (not consumer) and Google's
      Data Processing Amendment is accepted. (Workspace can also sign a BAA later
      if healthcare ever returns.)
- [ ] **External sharing locked down** — *Apps → Drive → Sharing settings*.
      Restricted or warn-on-external; default link sharing = **"restricted,"** not
      "anyone with the link."
- [ ] **2-Step Verification enforced** — *Security → Authentication*. Mandatory
      for all users, not optional.
- [ ] **Audit logging** — *Security → Investigation tool / Drive log events*. You
      can see who viewed/shared/downloaded what; alert on external shares.
- [ ] **DLP rules** — *Security → Data protection*. Block/warn when content
      matching private-data patterns is shared externally.
- [ ] **Sharing audit** — run an Investigation-tool query for files shared
      publicly/externally; remediate anything unexpected.
- [ ] **Third-party app access** — *Security → API controls*. OAuth apps
      allowlisted; block unverified apps from Drive scopes.
- [ ] **Client-side encryption** — *Security → Client-side encryption*. Enable for
      sensitive folders if private data must live in Drive; Google then holds only
      ciphertext.
- [ ] **Encryption baseline** — Google encrypts at rest + in transit by default;
      fine for non-sensitive data, but **not sufficient alone** for your most
      private data without CSE.

### Highest-value checks

Across both tools, the two checks that surface the most real-world exposure:
**(1) enforce MFA** (Tailscale SSO + Workspace 2SV), and **(2) run the Drive
external-sharing audit**. Do those first.

### Bottom line

- **Tailscale** is the right transport and easy to pass — tighten ACLs to
  least-privilege, enable device approval + key expiry, enforce MFA via SSO, and
  add ACL `tests`.
- **Google Drive** works as the cloud-backup/collaboration leg **for non-sensitive
  or client-side-encrypted data**. Decide: keep genuinely private info *off* Drive
  (local-only, per the architecture), or turn on **CSE + DLP + restricted external
  sharing** so Drive holds only data Google can't read and you can audit access.

---

## 9. Operational best practices: reliability, resilience, security, results & backup

The design principle that ties this all together: **the local box is the floor.**
Every cloud dependency is an enhancement that can fail without taking you to zero.
Build so that if every external LLM is down, you still operate locally — degraded
in quality, never offline.

### Reliability (keep the local box healthy)

- **Run the runtime as a managed service.** Put Ollama/vLLM under **systemd** with
  `Restart=always` so a crash self-heals. Add a watchdog that pings the model
  endpoint and restarts on failure.
- **Keep models warm.** Use keep-alive (e.g. Ollama `OLLAMA_KEEP_ALIVE`) so the
  weights stay resident and you avoid multi-second cold starts.
- **Monitor the box.** Track GPU temp/VRAM, OOM-kills, disk, and service uptime
  (Prometheus + node/DCGM exporters, or a simple cron health check). Alert before
  you run out of VRAM, not after.
- **Timeouts, retries, queueing.** Every model call gets a timeout + bounded retry
  with backoff; serialize heavy jobs through a queue so concurrent requests don't
  OOM the GPU.
- **Pin everything offline.** Pre-download and pin model weights + quant by digest
  so a registry outage never blocks startup. The box must boot and serve with **no
  network**.

### Resilience / failover (when an LLM goes down)

- **Tiered fallback chain** through the **LiteLLM gateway**:
  `primary cloud → secondary cloud → local Gemma 27B → local Gemma 4B`. The chain
  *ends* on local, so there's always an answer.
- **Health-aware routing + circuit breakers.** The gateway marks a failing
  provider unhealthy and stops hammering it; it retries that provider later
  instead of blocking every request.
- **Local-only "lifeboat" mode.** A single flag (or automatic trigger when all
  cloud backends are unhealthy) routes 100% locally. Test it deliberately by
  pulling the network.
- **Response caching.** A semantic/result cache means repeated or recent queries
  keep working through an outage and cut load. Cache lives on the local box.
- **Graceful degradation, signalled.** When you fall back to a smaller/local
  model, **tag the response as "degraded mode"** so downstream users/systems know
  the quality tier changed.
- **Capacity headroom.** Keep enough free VRAM that the local fallback can actually
  load when cloud traffic suddenly lands on it — don't size the box to exactly the
  primary model.

### Security (recap, enforced continuously)

- **Encryption everywhere:** LUKS at rest on box + backups; TLS 1.2+ and
  **Tailscale/WireGuard** in transit; no open inbound ports.
- **Access:** enforced MFA/SSO, least-privilege accounts, auto-logoff; secrets
  (API keys) in a vault or env file with strict perms — never in code or git.
- **Egress boundary:** the trusted zone reaches the internet **only** through the
  gateway, which applies minimum-necessary redaction before any cloud call.
- **Patch & rotate:** keep OS/drivers/runtime patched; rotate API keys and
  Tailscale keys on a schedule.
- **Audit:** log every model call + PHI/private-data access to append-only storage;
  review periodically (ties to Section 8).

### Results / quality (don't let reliability cost correctness)

- **Pin model + quant versions.** Don't silently auto-upgrade; a model swap can
  change behavior. Promote new versions deliberately.
- **Golden eval set.** Keep a small regression suite of representative
  prompts+expected outputs; run it whenever you change model, quant, or prompt to
  catch quality drops — *especially* before trusting a fallback model.
- **Validate outputs.** Use structured/JSON mode + schema validation; reject or
  retry malformed results rather than passing them downstream.
- **Quality-aware routing.** Hard tasks → strongest available model; add a
  critique/verify pass for high-stakes outputs; keep a human in the loop where it
  matters.
- **Version prompts in git** alongside the gateway and infra config.

### Backup protocols

- **3-2-1 rule:** ≥3 copies, on 2 media types, with 1 off-site. Off-site = your
  **Google Drive** (client-side encrypted) and/or S3/GCS.
- **Back up what you can't re-download.** Base Gemma weights are re-pullable (just
  record the version+digest); prioritize your **own artifacts**: fine-tunes/LoRAs,
  datasets, prompts, gateway config, **Tailscale ACL policy**, vector DB/embeddings,
  and data stores.
- **Encrypt client-side, then sync.** `restic` or `rclone crypt` → Drive/S3 so the
  cloud holds only ciphertext. Automate via systemd timer/cron; keep **versioned,
  append-only** snapshots to survive ransomware/accidental deletion.
- **Config-as-code.** Keep box setup (compose/systemd units, LiteLLM config,
  Tailscale ACLs, prompts) in **git** so the entire environment is reproducible
  from scratch.
- **Test restores.** A backup you've never restored is a hope, not a backup.
  Schedule periodic restore drills.
- **Write a DR runbook** with target **RPO/RTO** (how much data you can lose / how
  fast you must be back) and the exact steps to rebuild the box from backups.

### One-line summary

Local Gemma is the always-on floor; LiteLLM gives tiered, health-checked failover
ending locally; everything private is encrypted in transit and at rest with
enforced MFA and an audited egress boundary; quality is protected by pinned
versions + a golden eval set; and a 3-2-1, client-side-encrypted, config-as-code,
restore-tested backup regime lets you rebuild the whole box on demand.

---

## 10. The optimized plan (recommended build)

This is the single opinionated blueprint, tuned to the stated constraints:
**local-first for private data, cloud LLMs for the hard parts, resilient to any
model going down, Linux, not healthcare, already on Tailscale + Google Drive.**
Everything below is a concrete pick, not a menu.

### Hardware — one box

| Part | Pick | Why |
|------|------|-----|
| **GPU** | **RTX 5090 32GB** (primary) · *RTX 3090 24GB used (~$800) = value pick* | 32 GB runs Gemma 3 27B Q4 **and** keeps a small fallback model warm at the same time — that headroom *is* the resilience. |
| **CPU** | Ryzen 9 / Core i7 | Handles redaction + CPU-offload of extra layers. |
| **RAM** | **64 GB** | Lets you offload layers / run bigger quants than VRAM alone. |
| **Storage** | 2 TB NVMe, **LUKS-encrypted** | Encryption at rest; room for multiple model weights. |
| **OS** | **Ubuntu 24.04 LTS** | Best NVIDIA/CUDA support; what the guides assume. |

**All-in: ~$2,500–3,000 (RTX 5090) or ~$1,500–2,000 (used RTX 3090).**

### Software stack — one of each

- **Runtime:** **Ollama**, run under **systemd** (`Restart=always`, `OLLAMA_KEEP_ALIVE`).
  *(gemma.cpp is the Google-first-party alternative; Ollama wins on ease + speed.)*
- **Models, both kept warm:**
  - **Gemma 3 27B (Q4)** — primary local model for private data.
  - **Gemma 3 4B** — triage/routing, redaction helper, and fast last-resort fallback.
- **Gateway:** **LiteLLM proxy** — one OpenAI-compatible endpoint, health-checked
  tiered failover.
- **Privacy boundary:** **Microsoft Presidio** — minimum-necessary redaction before
  any cloud call; default-route private data to local only.
- **Access:** **Tailscale** (already in place) — hardened ACLs, enforced MFA/SSO,
  no open inbound ports.
- **Backup:** **restic** (client-side encrypted) → **Google Drive** (already in
  place) + a second target (S3/GCS) for 3-2-1.

### The one failover chain (drives resilience)

```
complex/non-private task →  Claude (API)  →  Gemini (Vertex)  →  local Gemma 27B  →  local Gemma 4B
private/sensitive task   →  local Gemma 27B  →  local Gemma 4B          (never leaves the box)
```

The chain **always ends locally**, so no external outage takes you to zero. Cloud
models are used only for hard, non-private (or redacted) work. Since you're not in
healthcare, BAAs are optional — but still prefer API tiers that **don't train on
your data** and avoid free tiers that do.

### Rollout — phased for fastest value, lowest risk

1. **Phase 0 — Harden what you already run** *(do first, cheap)*: Tailscale ACLs to
   least-privilege + device approval + enforced MFA; run the **Google Drive
   external-sharing audit**, restrict external sharing, enable CSE for sensitive
   folders. (Section 8.)
2. **Phase 1 — Stand up the box:** Ubuntu 24.04 + LUKS; NVIDIA driver + CUDA;
   Ollama under systemd; pull Gemma 27B + 4B; expose only over Tailscale. *You now
   have a working private local LLM.*
3. **Phase 2 — Gateway + failover:** LiteLLM with the fallback chain above + result
   cache; **test lifeboat mode by pulling the network** and confirming local still
   answers.
4. **Phase 3 — Privacy boundary:** Presidio redaction + default-local routing;
   lock egress so the trusted zone reaches the internet only through the gateway.
5. **Phase 4 — Quality + ops:** pin model/quant versions; build a small **golden
   eval set**; add monitoring/alerts (VRAM, OOM, uptime).
6. **Phase 5 — Backup + DR:** automate restic → Drive/S3 (versioned, append-only);
   put all config (LiteLLM, systemd units, Tailscale ACLs, prompts) in **git**;
   run a **restore drill**; write the DR runbook with RPO/RTO.

### Running cost after build

- **Routine work:** ~$0 marginal (runs locally).
- **Cloud burst/complex tasks:** a few dollars/month at low volume (per-token APIs).
- **Backup:** ~$0 extra on existing Google Drive; ~$5–10/mo if adding S3/GCS.

### Why this is the optimum

It maximizes local/private operation, makes the cloud purely additive (so reliability
never depends on it), reuses your existing Tailscale + Google Drive instead of new
tooling, and stays a single maintainable box. Scale up later by swapping the GPU
(toward RTX PRO 6000 / Mac Studio M3 Ultra) or adding a BAA'd cloud backend — no
redesign required.

---

## 11. Shopping list — real boxes, pricing & purchase links (June 2026)

> **Price-shock warning.** A 2026 AI-driven memory shortage has roughly **doubled
> DDR5/SSD prices** and pushed the **RTX 5090 35–100%+ over its $1,999 MSRP**.
> Analysts expect elevated prices through 2027–2028. Major retailer pages
> (Newegg, Best Buy, eBay, Amazon, builder sites) block automated fetching, so
> every figure below comes from search snapshots and price trackers, **not live
> page reads — confirm price and stock in a browser before buying.** All three
> 24–32 GB tiers run Gemma 3 27B at Q4 (~16–17 GB) comfortably.

### Tier A — Premium: RTX 5090 32GB (the Section 10 primary pick)

32 GB runs Gemma 27B Q4 *and* keeps a small model warm beside it.

**GPU alone (cheapest first):**
| Card | Retailer | ~Price | Link |
|------|----------|--------|------|
| Gigabyte RTX 5090 Aorus Master 32G | Best Buy | ~$2,700 | [bestbuy.com](https://www.bestbuy.com/site/gigabyte-nvidia-geforce-rtx-5090-aorus-master-32g-gddr7-pci-express-5-0-graphics-card-black/6615931.p?skuId=6615931) |
| ASUS TUF Gaming RTX 5090 32GB | Newegg | ~$2,910 | [newegg.com](https://www.newegg.com/asus-tuf-gaming-tuf-rtx5090-32g-gaming-geforce-rtx-5090-32gb-graphics-card-triple-fans/p/N82E16814126752) |
| Gigabyte Gaming OC / MSI Trio OC | Newegg | ~$3,300 | [Newegg 5090 list](https://www.newegg.com/p/pl?d=rtx+5090) |
| MSI Suprim Liquid SOC 32GB (premium) | Newegg | ~$3,500 | [newegg.com](https://www.newegg.com/msi-rtx-5090-32g-suprim-liquid-soc-geforce-rtx-5090-32gb-graphics-card-liquid-cooler/p/N82E16814137916) |

**Prebuilt desktops (64 GB RAM):**
| System | CPU / RAM / Storage | ~Price | Link |
|--------|---------------------|--------|------|
| **iBUYPOWER RDY Y70 B05** ⭐ best value, in stock | Core Ultra 9 285K / 64GB / 4TB | ~$4,799 | [ibuypower.com](https://www.ibuypower.com/store/rdy-y70-b05) |
| NZXT Player Three Prime | Ryzen 7 9800X3D / 64GB / 4TB | ~$4,999 | [nzxt.com](https://nzxt.com/products/player-three-prime) |
| Skytech Legacy 4 | Ryzen 9 9950X3D / 64GB / 4TB | ~$4,999–5,799 | [skytechgaming.com](https://skytechgaming.com/product/legacy-4-amd-r9-9950x3d-nvidia-rtx-5090-32gb-4-tb-nvme-gen4-64gb-ram) |
| CyberPowerPC Gamer Supreme | Ryzen 9 9950X / 64GB / 4TB | ~$5,100 | [bestbuy.com](https://www.bestbuy.com/product/cyberpowerpc-gaming-desktop-amd-ryzen-9-9950x-nvidia-geforce-rtx-5090-32gb-64gb-ddr5-4tb-pcie-4-0-ssd-black/J3L7GQW86X) |

*Linux note: the 5090 (Blackwell) needs NVIDIA driver 570+ and CUDA 12.8+ — all of Ollama/llama.cpp/vLLM support it.*

### Tier B — Value: used RTX 3090 24GB (best $/VRAM, the value pick)

The consensus value champion: ~87 tok/s class on 27B Q4, ~20% slower than a
4090 at a third of the price, CUDA-native.

| Option | ~Price | Link |
|--------|--------|------|
| **Used RTX 3090 24GB** (EVGA/FE preferred) | ~$800–1,050 | [eBay listings](https://www.ebay.com/sch/i.html?_nkw=rtx+3090+24gb&_sop=15) · [price tracker](https://bestvaluegpu.com/history/new-and-used-rtx-3090-price-history-and-specs/) · [r/hardwareswap](https://www.reddit.com/r/hardwareswap/) |
| AMD RX 7900 XTX 24GB (new, warranty) | ~$1,100–1,340 new / ~$790–900 used | [Sapphire Pulse @ Newegg](https://www.newegg.com/sapphire-tech-pulse-11322-02-20g-radeon-rx-7900-xtx-24gb-graphics-card-triple-fans/p/N82E16814202429) · [tracker](https://bestvaluegpu.com/history/new-and-used-rx-7900-xtx-price-history-and-specs/) |
| RTX 4090 24GB (skip — poor value now) | ~$2,200–2,470 used | [eBay](https://www.ebay.com/sch/i.html?_nkw=rtx+4090&_sop=12) · [tracker](https://bestvaluegpu.com/history/new-and-used-rtx-4090-price-history-and-specs/) |

**DIY build around a used 3090 (≈ $2,635–2,770 total):**
| Part | Pick | ~Price |
|------|------|--------|
| GPU | Used RTX 3090 24GB | ~$950 |
| CPU | Ryzen 7 9700X | ~$300 |
| Motherboard | B650/B650E (AM5) | ~$170 |
| RAM | 64GB DDR5-5600 *(shortage-inflated)* | ~$600–710 |
| SSD | 2TB Gen4 NVMe (990 Pro / SN850X) | ~$345–370 |
| PSU | Seasonic Focus GX-1000 | ~$140 |
| Case + air cooler | Fractal/Phanteks + Peerless Assassin | ~$130 |

Build live on [PCPartPicker](https://pcpartpicker.com/list/) to pull current prices. *RAM is ~⅓ of the cost right now thanks to the shortage; 32 GB (~$375) also works since the model lives in VRAM.* AMD note: on the 7900 XTX, llama.cpp's **Vulkan** backend currently beats ROCm — viable but more setup friction than CUDA.

### Tier C — Turnkey Linux AI workstations (Ubuntu/Pop!_OS preinstalled, AI-literate support)

Pay a premium for a tested, driver-ready, warrantied box from a vendor who knows CUDA-on-Linux.

| Vendor / model | GPU | Base price | As-configured for 27B | Ubuntu | Link |
|----------------|-----|-----------|------------------------|--------|------|
| **BIZON V3000 G4** ⭐ lowest-cost turnkey single-GPU | up to RTX 5090 32GB | $3,191 | ~$3.5k–4.5k w/ 5090 | ✅ preinstalled + AI stack | [bizon-tech.com](https://bizon-tech.com/bizon-v3000.html) |
| **System76 Thelio Mira** | up to RTX 5090 32GB | $1,699 | ~$8.5k–9.5k w/ 5090 *(5090 upgrade alone +$5,299)* | ✅ Pop!_OS/Ubuntu | [system76.com](https://system76.com/desktops/thelio-mira) |
| **Puget Single-GPU AI tower** (buy-409) | up to RTX 5090 32GB | quote | ~$5k–8k (est.) | ✅ HW supported; not the OS | [pugetsystems.com](https://www.pugetsystems.com/solutions/ai/develop/buy-409/) |
| **Maingear MG-1 / Pro WS** | RTX 5090 32GB | quote | ~$6k–8.5k (est.) | ✅ Ubuntu/dual-boot; explicit AI marketing | [maingear.com](https://maingear.com/collections/new-mg-1) |
| System76 Thelio Major | RTX PRO 6000 96GB | $6,999 | ~$16k–22k (FP16 27B + headroom) | ✅ | [system76.com](https://system76.com/desktops/thelio-major) |
| Exxact Valence (VWS-135223847) | RTX PRO 6000 96GB | $6,215 | low-to-mid five figures | ✅ + CUDA-X stack | [configurator](https://configurator.exxactcorp.com/configure/VWS-135223847) |
| Puget Multi-GPU Threadripper PRO (buy-570) | RTX PRO 6000 96GB | quote | ~$13k–18k+ | ✅ HW supported; not the OS | [pugetsystems.com](https://www.pugetsystems.com/solutions/ai/develop/buy-570/) |

BIZON and System76 ship Ubuntu + a preinstalled AI stack (CUDA, Ollama, vLLM, llama.cpp, PyTorch) — "power on and run Gemma in minutes." **Maingear** explicitly offers Ubuntu/dual-boot and markets local-LLM workstations (its Pro AI line). **Puget** preinstalls Ubuntu and validates the AI stack but warns it does **not** support the Linux OS itself (hardware/labor only). **Origin PC** is a weaker Linux fit — Windows-default; you'd order no-OS (~$129 off) and self-install ([configurator](https://www.originpc.com/configurator/genesis/)). **Lambda is no longer an option** — it exited hardware in Aug 2025 (its free [Lambda Stack](https://lambda.ai/lambda-stack-deep-learning-software) installer still works on any Ubuntu box). *Turnkey vendor sites all blocked automated fetching, so as-configured prices are estimates — get a live quote from the configurator.*

### Which to buy (mapped to the Section 10 plan)

- **Best overall (premium):** **iBUYPOWER RDY Y70 B05 (~$4,799)** — RTX 5090 32GB, 64 GB, 4 TB, in stock, cheapest turnkey 5090; wipe and install Ubuntu. Or **DIY 5090 build ~$3,800–4,400** to save ~$700–1,200.
- **Best value:** **DIY used-RTX-3090 build (~$2,650–2,800)** — runs the exact same Gemma 27B Q4 workload; spend the savings on a second backup drive.
- **Best zero-hassle Linux:** **BIZON V3000 G4** w/ single RTX 5090 (~$3.5k–4.5k) — Ubuntu + AI stack preinstalled, AI-literate support, up to 5-yr warranty.
- **Want FP16 27B / room to grow to 70B+:** System76 Thelio Major or Exxact Valence with RTX PRO 6000 96GB (low-to-mid five figures).

---

## TL;DR recommendations

- **Just want to try Gemma cheaply:** use **Google AI Studio's free Gemma API**, or
  rent an **RTX 4090 at ~$0.40/hr**.
- **Cheapest local box (4B / 12B-Q4):** **RTX 3060 12GB** (~$280–$466) in a PC, or a
  **Mac mini M4 16 GB** (~$599).
- **12B daily driver:** **RTX 5070 Ti 16GB** (~$749 MSRP) or **Mac mini M4 Pro 24–48
  GB** (~$1,399–1,999).
- **27B at Q4, best value:** **AMD RX 7900 XTX 24GB** (~$750–$850 used) or **Mac Studio
  M4 Max 64 GB** (~$2,500).
- **27B with headroom / near-Q8, single box:** **RTX 5090 32GB** (premium right now) or
  **Mac Studio M3 Ultra 96 GB+** (~$3,999+).
- **27B at full BF16 / serving many users:** rent an **A100/H100 80GB**, or buy an **RTX
  PRO 6000 Blackwell 96GB** (~$13k) for a single full-precision card.

---

## Sources

**Model memory requirements**
- Google Developers Blog — Gemma 3 QAT: https://developers.googleblog.com/en/gemma-3-quantized-aware-trained-state-of-the-art-ai-to-consumer-gpus/
- Ollama library — gemma3: https://ollama.com/library/gemma3 · gemma2: https://ollama.com/library/gemma2
- Gemma 3n docs: https://ai.google.dev/gemma/docs/gemma-3n · HF blog: https://huggingface.co/blog/gemma3n
- Gemma 3 Technical Report (KV/attention): https://arxiv.org/html/2503.19786v1
- APXML model pages: https://apxml.com/models/gemma-3-27b · https://apxml.com/models/gemma-2-27b
- bartowski GGUF quants: https://huggingface.co/bartowski/gemma-2-27b-it-GGUF

**Consumer GPUs & pricing**
- Will It Run AI — Gemma 3 guide: https://willitrunai.com/blog/gemma-3-local-inference-guide
- Best GPUs for Local AI 2026: https://localaimaster.com/blog/best-gpus-for-ai-2025
- Tom's Hardware (RTX 50-series MSRP, 5070 Ti $750, 4080 Super $999, 3060 2026 comeback): https://www.tomshardware.com/pc-components/gpus/
- BestValueGPU price trackers (5090, 4090): https://bestvaluegpu.com/
- RX 7900 XTX for local AI: https://localaimaster.com/blog/radeon-7900-xtx-local-ai · RX 9070 XT: https://gamersnexus.net/gpus/amd-rx-9070-9070-xt-gpu-prices-specs-release-date

**Apple Silicon**
- Increase VRAM on Apple Silicon: https://blog.peddals.com/en/fine-tune-vram-size-of-mac-for-llm/
- M-series bandwidth: https://craftrigs.com/benchmarks/apple-silicon-m-series-llm-benchmark-m1-m5/ · https://en.wikipedia.org/wiki/Apple_silicon
- Gemma 3 LM Studio vs Ollama on M3 Ultra: https://medium.com/google-cloud/gemma-3-performance-tokens-per-second-in-lm-studio-vs-ollama-mac-studio-m3-ultra-7e1af75438e4
- Apple Store: Mac Studio https://www.apple.com/shop/buy-mac/mac-studio · Mac mini https://www.apple.com/shop/buy-mac/mac-mini · MacBook Air specs https://www.apple.com/macbook-air/specs/
- Maxed M3 Ultra $14,099: https://www.macrumors.com/2025/03/05/maxed-out-m3-ultra-mac-studio-14099/

**Datacenter GPUs & pricing**
- RTX PRO 6000 Blackwell pricing: https://www.thundercompute.com/blog/nvidia-rtx-pro-6000-pricing · VideoCardz/Tom's Hardware MSRP-hike coverage
- L4/L40S: https://modal.com/blog/nvidia-l40s-price-article · https://getdeploying.com/gpus/nvidia-l40s
- A100: https://www.northflank.com/blog/nvidia-a100-gpu-cost · https://directmacro.com/blog/post/nvidia-a100-in-2025
- H100: https://www.gmicloud.ai/en/blog/nvidia-h100-gpu-pricing-2026-rent-vs-buy-cost-analysis · H200: https://www.thundercompute.com/blog/nvidia-h200-pricing
- Gemma 3 27B VRAM (deploy): https://www.spheron.network/blog/deploy-gemma-3-gpu-cloud

**Cloud rental & APIs**
- RunPod pricing: https://www.runpod.io/pricing · Vast.ai: https://vast.ai/pricing · Lambda: https://lambda.ai/pricing
- Cloud GPU comparison: https://www.cloudzero.com/blog/cloud-gpu-pricing-comparison/ · https://getdeploying.com/gpus
- GCP GPU pricing: https://cloud.google.com/compute/gpus-pricing
- Together AI: https://www.together.ai/pricing · OpenRouter Gemma: https://openrouter.ai/google
- Gemini/Gemma API pricing: https://ai.google.dev/gemini-api/docs/pricing · Vertex AI: https://cloud.google.com/vertex-ai/pricing

---

*Compiled June 2026. GPU and cloud pricing is volatile — especially during the
current memory shortage — so confirm live figures before purchasing. A few
source pages returned HTTP 403 to automated fetching; figures from those rest on
search-result extracts plus standard bytes-per-parameter math, and are flagged as
approximate throughout.*
