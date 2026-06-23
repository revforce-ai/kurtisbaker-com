# Gemma Local LLM — Rollout TODO

Action checklist to roll out the local-first Gemma setup for a small team (<10
users) under ~$5k. Derived from the [hardware report](./gemma-hardware-recommendations.md)
(Sections 10–15). Hardware: new **BIZON V3000 G4 (1× RTX 5090 32GB)** as the
primary inference server; existing **Lenovo IdeaPad "nemoclaw" (i5-1135G7 / 20GB /
Iris Xe — no discrete GPU)** repurposed as the control-plane + fallback node.

## Phase 0 — Buy the box
- [ ] Get a BIZON V3000 G4 quote: 1× RTX 5090 32GB, 128GB RAM, 2TB NVMe, Ubuntu 24.04 — confirm **price, stock, lead time** (site blocks automated access) → https://bizon-tech.com/bizon-v3000.html
- [ ] Compare alt: DIY 5090 build (~$3.8–4.4k, https://pcpartpicker.com/list/) or iBUYPOWER RDY Y70 B05 (~$4,799, https://www.ibuypower.com/store/rdy-y70-b05)
- [ ] Purchase primary inference server (~$3.8–4.7k)

## Phase 0b — Harden existing stack (do now, free)
- [ ] Tailscale: least-privilege ACLs + device approval + key expiry + enforce MFA/SSO + ACL `tests`
- [ ] Google Drive: run external-sharing audit, restrict external sharing, enforce 2SV, add DLP, enable CSE for sensitive folders

## Phase 1 — Stand up the inference server
- [ ] Install Ubuntu 24.04 LTS with **LUKS** full-disk encryption
- [ ] NVIDIA driver 570+ and CUDA 12.8+ (verify `nvidia-smi`)
- [ ] Install **vLLM** (primary serving, continuous batching) + **Ollama** (under systemd, `OLLAMA_KEEP_ALIVE`)
- [ ] Pull **Gemma 3 27B Q4** (primary) + **Gemma 3 4B** (warm); serve 27B via vLLM
- [ ] Join Tailscale; no open inbound ports

## Phase 2 — Control plane + fallback on the laptop (nemoclaw)
- [ ] **LiteLLM gateway** — one OpenAI-compatible endpoint, tiered failover
- [ ] **Microsoft Presidio** redaction before any cloud call
- [ ] **Gemma 3n E4B** as the always-on local fallback (edge-optimized; fits the iGPU/CPU)
- [ ] **restic** client-side-encrypted backup → Google Drive (timer)
- [ ] Monitoring/alerts (VRAM, OOM, uptime)

## Phase 3 — Failover + privacy boundary
- [ ] Failover chain: `cloud (Claude/Gemini) → local 27B → local 4B`; private tasks stay local
- [ ] Test **lifeboat mode** by pulling the network — confirm local still answers
- [ ] Lock egress so the trusted zone reaches the internet only via the gateway

## Phase 4 — Quality + ops
- [ ] Pin model + quant versions (no silent upgrades)
- [ ] Build a small **golden eval set**; run on any model/quant/prompt change
- [ ] Config-as-code in git (LiteLLM, systemd units, Tailscale ACLs, prompts)
- [ ] Write DR runbook (RPO/RTO) + run a **restore drill**

## Phase 5 — Roll out to the team (<10)
- [ ] Onboard users onto the tailnet
- [ ] Document the endpoint + usage; set up cloud-burst API keys for spikes

## Scaling triggers (Year 1–3)
- [ ] If load grows: add a 2nd RTX 5090 to the BIZON (~$2,700) → 64GB VRAM
- [ ] If bigger models needed: run 70B-class across 2× 5090, or add cloud autoscale
- [ ] Optional: move control plane to a dedicated mini-PC (~$600); retire laptop dependency

---
*Created 2026-06-23. Confirm BIZON live pricing/stock before purchase.*
