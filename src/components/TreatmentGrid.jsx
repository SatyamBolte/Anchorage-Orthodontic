import React from "react";

const TREATMENTS = [
  {
    title: "Braces & Aligners",
    description: "Metal, ceramic, and clear aligner options for teens and adults.",
  },
  {
    title: "Root Canal Treatment (RCT)",
    description: "Painless RCT with advanced technology to save your natural tooth.",
  },
  {
    title: "Smile Makeover",
    description: "Veneers, laminates, and cosmetic contouring for a perfect smile.",
  },
  {
    title: "Teeth Cleaning & Polishing",
    description: "Professional cleaning to remove plaque, stains, and tartar.",
  },
  {
    title: "Kids Dentistry",
    description: "Gentle dental care for children with a friendly environment.",
  },
  {
    title: "Crowns & Bridges",
    description: "Durable, natural-looking crowns and bridges to restore function.",
  },
];

export default function TreatmentGrid() {
  return (
    <section id="treatments" className="border-t bg-white pt-6">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              What are you looking for today?
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Explore our most popular orthodontic and dental treatments.
            </p>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Not sure which treatment is right for you? Book a consultation and
            our doctor will guide you through the best options.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((item, idx) => (
            <div
              key={item.title}
              className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-clinicPrimary/60 hover:bg-white hover:shadow-lg animate-fadeInUp"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-semibold text-clinicPrimary">
                  Popular
                </span>
              </div>
              <p className="text-xs text-slate-600 flex-1">{item.description}</p>
              <button className="mt-3 w-max text-[11px] font-semibold text-clinicPrimary group-hover:underline">
                Book this treatment
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
