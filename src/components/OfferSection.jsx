import React from "react";

const POINTS = [
  {
    title: "Personalized treatment plans",
    text: "We analyze your facial profile, bite, and dental health to design a plan tailored just for you.",
  },
  {
    title: "Transparent communication",
    text: "We clearly explain treatment options, timelines, and costs before you begin.",
  },
  {
    title: "Modern techniques",
    text: "From advanced orthodontics to painless RCT, we follow evidence-based, up-to-date protocols.",
  },
];

export default function OfferSection() {
  return (
    <section id="why-us" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4 animate-fadeInUp">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Why choose us for your smile?
            </h2>
            <p className="text-sm text-slate-600 sm:text-[15px]">
              Your smile and oral health are long-term investments. We are
              committed to providing ethical, high-quality care with a focus on
              long-lasting results — not just quick fixes.
            </p>
            <div className="space-y-3">
              {POINTS.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-2xl bg-slate-50 p-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md animate-fadeInUp"
                >
                  <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-clinicPrimary/10 text-clinicPrimary flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-clinicPrimary to-clinicAccent p-6 text-slate-50 shadow-lg animate-fadeInUp">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-50/90">
              New patient offer
            </p>
            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
              Comprehensive dental check-up package
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Dental check-up & consultation</li>
              <li>• Treatment planning</li>
              <li>• Oral hygiene & brushing guidance</li>
              <li>• Discount on full-mouth cleaning (if needed)</li>
            </ul>
            <p className="mt-4 text-xs text-sky-50/90">
              *This is a template. Customize the exact pricing and offer
              details according to your clinic&apos;s policy.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold text-clinicPrimary shadow hover:bg-slate-100"
            >
              Book your check-up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
