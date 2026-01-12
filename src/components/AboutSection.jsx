import React from "react";
import treatment from "../assests/treatment/1.png"; // change to ../assests/... if your folder is named that

export default function AboutSection({ clinicName }) {
  return (
    <section id="about" className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          {/* LEFT TEXT SIDE */}
          <div className="space-y-4 animate-fadeInUp">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              About {clinicName}
            </h2>
            <p className="text-sm text-slate-600 sm:text-[15px]">
              At {clinicName}, we focus on comprehensive, patient-centric
              orthodontic and dental care. Every smile is unique, and so is
              every treatment plan. We take the time to understand your
              concerns, explain all options, and provide the most conservative,
              effective solutions.
            </p>
            <p className="text-sm text-slate-600 sm:text-[15px]">
              From the moment you walk into the clinic, our team strives to
              create a calm and comfortable environment. With modern equipment,
              strict sterilization protocols, and a friendly team, we make
              dental visits stress-free for kids and adults alike.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-3 shadow-sm transition-transform duration-200 hover:-translate-y-1 animate-fadeInUp">
                <p className="text-xs font-semibold text-slate-500">
                  Experience
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  10+ years
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  of clinical orthodontic & dental practice.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-3 shadow-sm transition-transform duration-200 hover:-translate-y-1 animate-fadeInUp">
                <p className="text-xs font-semibold text-slate-500">
                  Patients
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  3,000+
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  smiles treated and counting.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-3 shadow-sm transition-transform duration-200 hover:-translate-y-1 animate-fadeInUp">
                <p className="text-xs font-semibold text-slate-500">
                  Services
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  Full range
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  orthodontic & general dental treatments.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE CARD SIDE */}
          <div className="relative animate-fadeInUp">
            {/* Glow behind card */}
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-clinicPrimary/20 via-sky-200/40 to-emerald-100 blur-2xl" />

            {/* Main card */}
            <div className="relative overflow-hidden rounded-3xl shadow-lg bg-slate-900/90 group">
              {/* IMAGE FULL COVER WITH OVERLAY + ZOOM */}
              <div className="relative w-full h-60 sm:h-72 overflow-hidden">
                <img
                  src={treatment}
                  alt="treatment"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 image-auto-zoom"
                />
                {/* Gradient overlay for nice contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/20 to-transparent" />
              </div>

              {/* TEXT CONTENT OVER DARK BACKGROUND */}
              <div className="space-y-3 p-4 sm:p-5 text-slate-50">
                <p className="text-sm font-semibold">
                  A clinic designed for your comfort
                </p>
                <p className="text-xs text-slate-100/90">
                  Bright, hygienic, and welcoming — our clinic ambience is
                  crafted to reduce anxiety and make every visit pleasant.
                </p>

                <ul className="mt-2 grid gap-2 text-[11px] text-slate-100 sm:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-200 text-[10px] font-bold text-emerald-800">
                      ✓
                    </span>
                    <span>Modern dental chairs & equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-200 text-[10px] font-bold text-emerald-800">
                      ✓
                    </span>
                    <span>Strict sterilization protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-200 text-[10px] font-bold text-emerald-800">
                      ✓
                    </span>
                    <span>Digital X-rays (where available)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-200 text-[10px] font-bold text-emerald-800">
                      ✓
                    </span>
                    <span>Comfortable, family-friendly waiting area</span>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          {/* END RIGHT SIDE */}
        </div>
      </div>
    </section>
  );
}
