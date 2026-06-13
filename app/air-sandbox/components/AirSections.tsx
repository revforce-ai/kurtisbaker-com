import {
  ArrowRight,
  Heart,
  Dog,
  GraduationCap,
  HandHeart,
  Footprints,
  Sparkles,
  Shirt,
  CalendarDays,
} from "lucide-react";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { air, stats, programs, involve, events } from "@/app/air-sandbox/data";

const programIcons = [GraduationCap, Dog, Sparkles, Footprints, Heart, Shirt];

export function AirHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-slate-50 to-slate-50">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-teal-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-amber-200/40 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 text-center md:pt-28 md:pb-28">
        <ScrollReveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-teal-700">
            Youth Mental Health · Suicide Prevention
          </p>
          <h1 className="mx-auto max-w-4xl font-serif text-[2.6rem] leading-[1.02] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            Start the conversation.{" "}
            <span className="text-teal-700">Save a life.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            {air.mission}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={air.links.donate}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-base font-semibold text-slate-900 shadow-[0_8px_24px_-8px_rgba(245,158,11,0.6)] transition-all hover:-translate-y-0.5 hover:bg-amber-400"
            >
              <Heart className="h-5 w-5" aria-hidden /> Donate now
            </a>
            <a
              href={air.links.bringToSchool}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-medium text-slate-800 transition-all hover:-translate-y-0.5 hover:border-slate-900"
            >
              Bring AIR to your school
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 0.08} className="text-center">
            <p className="font-serif text-4xl font-semibold text-teal-700 md:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm text-slate-600">{s.label}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export function Mission() {
  return (
    <section id="mission" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Our Mission</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-slate-900 md:text-4xl">
            Mental health is health. We make sure every young person knows it.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            AIR brings honest, age-appropriate mental health education into classrooms and communities —
            erasing stigma, teaching the warning signs, and pointing students toward help before a crisis.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Because no family should ever have to learn these lessons the way ours did, our programs are
            delivered free to the youth who need them — regardless of ability to pay.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-teal-50 to-sky-50 p-8 md:p-10">
            <HandHeart className="h-10 w-10 text-teal-700" aria-hidden />
            <blockquote className="mt-6 font-serif text-2xl leading-snug text-slate-800">
              “For many students, an AIR program is the first time they ever felt they had permission to
              ask for help.”
            </blockquote>
            <p className="mt-6 text-sm text-slate-500">
              Founded in {air.founded} in {air.location}, in loving memory of Kenny Baker.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function Programs() {
  return (
    <section id="programs" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">What We Do</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-slate-900 md:text-4xl">
            Programs that meet young people where they are
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            From elementary classrooms to college campuses, every AIR program is built to start a
            conversation that lasts long after we leave the room.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => {
            const Icon = programIcons[i % programIcons.length];
            return (
              <ScrollReveal key={p.name} delay={(i % 3) * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_18px_40px_-22px_rgba(15,118,110,0.45)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-slate-900">
                    {p.name}
                    {p.trademark && <sup className="text-[0.6em] text-slate-400">{p.trademark}</sup>}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-teal-700">{p.audience}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{p.summary}</p>
                  <p className="mt-4 border-t border-slate-200 pt-4 text-sm font-medium text-slate-800">
                    {p.outcome}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-slate-900 py-20 text-white md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-900/40 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">Our Story</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            Born from loss. Built for hope.
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-slate-300">
            In 2010, the Baker family lost their son and brother Kenny to suicide after a long battle with
            depression and anxiety. Out of that loss, they founded Attitudes In Reverse® — determined that
            other families would have the education, language, and support that could change an outcome.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            More than a decade later, AIR has reached over a quarter of a million students. Every
            presentation, every therapy dog visit, every conversation carries Kenny&apos;s memory forward.
          </p>
          <a
            href={air.links.donate}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-base font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-amber-400"
          >
            <Heart className="h-5 w-5" aria-hidden /> Carry the mission forward
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function GetInvolved() {
  return (
    <section id="involved" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <ScrollReveal className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Get Involved</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-slate-900 md:text-4xl">
          There&apos;s a place for you in this work
        </h2>
      </ScrollReveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {involve.map((item, i) => (
          <ScrollReveal key={item.title} delay={(i % 4) * 0.07}>
            <a
              href={item.href}
              className={`group flex h-full flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 ${
                item.featured
                  ? "border-amber-300 bg-amber-50 hover:shadow-[0_18px_40px_-22px_rgba(245,158,11,0.6)]"
                  : "border-slate-200 bg-white hover:border-teal-300 hover:shadow-[0_18px_40px_-22px_rgba(15,118,110,0.45)]"
              }`}
            >
              <h3 className="font-serif text-xl text-slate-900">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{item.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                {item.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-16">
        <h3 className="flex items-center gap-2 font-serif text-2xl text-slate-900">
          <CalendarDays className="h-6 w-6 text-teal-700" aria-hidden /> Events that bring us together
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {events.map((e) => (
            <div key={e.name} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-serif text-lg text-slate-900">{e.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.blurb}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
