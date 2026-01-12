import React, { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Rohan",
    text: "I had braces treatment here and the experience was excellent. The doctor explained every step clearly and the results are amazing.",
  },
  {
    name: "Shruti",
    text: "Very gentle and patient-friendly. My RCT was completely painless and I finally got over my fear of dental treatments.",
  },
  {
    name: "Mrs. & Mr. Deshmukh",
    text: "Our daughter's orthodontic treatment went very smoothly. The clinic maintains time, hygiene, and gives personal attention.",
  },
  {
    name: "Akash",
    text: "Clean clinic, minimal waiting time and very polite staff. The doctor listened to all my concerns and guided me properly.",
  },
  {
    name: "Neha",
    text: "Got my smile makeover done here. The results are beyond my expectations. Highly recommended for cosmetic work.",
  },
  {
    name: "Vikas",
    text: "My son had his first dental visit here and the doctor handled him very kindly. Now he is not afraid of the dentist anymore.",
  },
];

const TOTAL_REVIEWS = 248; // change to your real number of reviews
const AVERAGE_RATING = 5.0;
const ITEMS_PER_SLIDE = 3; // how many review blocks to show per slide on desktop
const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/dfsBDCGsErGXi97WA";


function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, idx) => (
        <span key={idx} className="text-[14px] text-amber-400">
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [slide, setSlide] = useState(0);

  const totalSlides = Math.ceil(TESTIMONIALS.length / ITEMS_PER_SLIDE);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);
    return () => clearInterval(id);
  }, [totalSlides]);

  const next = () => {
    setSlide((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const startIndex = slide * ITEMS_PER_SLIDE;
  const currentItems = TESTIMONIALS.slice(
    startIndex,
    startIndex + ITEMS_PER_SLIDE
  );

  return (
    <section id="testimonials" className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {/* Header + rating summary */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2 animate-fadeInUp">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              What our patients say
            </h2>
            <p className="text-sm text-slate-600">
              Real experiences from patients who trusted us with their smiles.
            </p>
          </div>

          <div className="animate-fadeInUp">
            <div className="rounded-2xl bg-white px-4 py-3 shadow-md border border-slate-100 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
  <div>
    <p className="text-[28px] leading-none font-semibold text-slate-900">
      {AVERAGE_RATING.toFixed(1)}
    </p>
    <StarRow />
  </div>
  <div className="text-xs text-slate-600 flex-1">
    <p className="font-semibold text-slate-800">Patient rating</p>
    <p>Based on {TOTAL_REVIEWS}+ reviews</p>
    <p className="text-[11px] text-emerald-600 mt-1">
      Verified Google & in-clinic feedback
    </p>
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noreferrer"
      className="mt-2 inline-flex rounded-full bg-clinicPrimary px-4 py-1.5 text-[11px] font-semibold text-white hover:bg-sky-700"
    >
      View all reviews on Google
    </a>
  </div>
</div>

          </div>
        </div>

        {/* Slider with multiple review blocks */}
        <div className="relative animate-fadeInUp">
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg px-4 py-5 sm:px-6 sm:py-6">
            <div className="grid gap-4 md:grid-cols-3">
              {currentItems.map((t, idx) => {
                const globalIndex = startIndex + idx;
                return (
                  <article
                    key={t.name + globalIndex}
                    className="relative flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="absolute -left-3 -top-3 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold text-white shadow">
                      #{globalIndex + 1}
                    </div>
                    <StarRow />
                    <p className="mt-2 text-xs text-slate-600 flex-1 leading-relaxed">
                      “{t.text}”
                    </p>
                    <div className="mt-3">
                      <p className="text-sm font-semibold text-slate-900">
                        {t.name}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Verified patient
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom bar with navigation */}
            <div className="mt-5 flex items-center justify-between gap-3 text-[11px] text-slate-500">
              <p>
                Showing reviews {startIndex + 1}–
                {Math.min(startIndex + ITEMS_PER_SLIDE, TESTIMONIALS.length)} of{" "}
                {TESTIMONIALS.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  ‹ Prev
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Next ›
                </button>
              </div>
            </div>
          </div>

          {/* Slide dots */}
          <div className="mt-3 flex justify-center gap-1.5">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSlide(idx)}
                className={`h-2.5 w-2.5 rounded-full border border-clinicPrimary/40 transition ${
                  slide === idx
                    ? "bg-clinicPrimary"
                    : "bg-white hover:bg-clinicPrimary/40"
                }`}
              />
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}
