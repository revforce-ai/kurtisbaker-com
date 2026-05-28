import { credentials } from "@/app/data/site";

export function About() {
  return (
    <section id="about" className="bg-ink text-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-accent font-medium mb-4">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
              A life&apos;s work, in service of others.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-bg/85">
            <p>
              I&apos;ve spent my career as a private wealth manager helping
              successful business owners answer the questions that money alone
              can&apos;t — <em className="text-accent not-italic">What is enough? What is this for? What do I want this to mean?</em>
            </p>
            <p>
              In 2010, my family lost our son Kenny. Out of that loss, my wife
              Tricia and I co-founded{" "}
              <a
                href="https://attitudesinreverse.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent transition-colors"
              >
                Attitudes In Reverse®
              </a>
              {" "}— a nonprofit working to eliminate the stigma around mental
              health by bringing real education into schools.
            </p>
            <p>
              Everything I build — from wealth management at{" "}
              <a
                href="https://www.cwmi.us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent transition-colors"
              >
                CWMI
              </a>
              {" "}to the AI work at{" "}
              <a
                href="https://revforce.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent transition-colors"
              >
                RevForce
              </a>
              {" "}to the conversations on{" "}
              <a
                href="https://masteryourfinances.us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent transition-colors"
              >
                Master Your Finances
              </a>
              {" "}— is held together by the same idea: build things that help
              good people thrive, and make them ready for whatever comes next.
            </p>
            <div className="pt-6 border-t border-bg/15">
              <p className="text-xs uppercase tracking-[0.18em] text-accent font-medium mb-4">
                Credentials & Recognition
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-bg/80">
                {credentials.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-accent">·</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
