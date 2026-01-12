import React, { useState } from "react";

const FAQS = [
  {
    q: "Do I need an appointment or can I walk in?",
    a: "We recommend booking an appointment so that we can give you dedicated time without waiting. However, in case of emergency, you may visit the clinic directly (subject to doctor availability).",
  },
  {
    q: "Are dental treatments painful?",
    a: "Most treatments are done under local anesthesia, which makes the procedure comfortable. We focus on gentle techniques and explain every step to reduce anxiety.",
  },
  {
    q: "What age is ideal to start orthodontic treatment (braces)?",
    a: "An orthodontic evaluation is usually recommended by the age of 9+. However, adults can also get braces or aligners.",
  },
  {
    q: "How often should I get a dental check-up?",
    a: "Typically every 6–12 months, depending on your oral health status. Regular check-ups help catch problems early and keep your teeth and gums healthy.",
  },
];

function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-slate-100 bg-white animate-fadeInUp">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="text-sm font-medium text-slate-900">{q}</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-xs text-slate-600">
          {open ? "-" : "+"}
        </span>
      </button>
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-xs text-slate-600">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="animate-fadeInUp">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Frequently asked questions
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Quick answers to common queries about orthodontic and dental care.
            </p>
          </div>
          <p className="text-xs text-slate-500 max-w-xs animate-fadeInUp">
            You can replace or add more FAQs according to your patients&apos;
            common doubts and your clinic policies.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, index) => (
            <FAQItem
              key={item.q}
              q={item.q}
              a={item.a}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
