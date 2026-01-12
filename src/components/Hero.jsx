import React from "react";
import doctor1 from "../assests/doctors/1.png";
import doctor2 from "../assests/doctors/2.jpg";

export default function Hero({ clinicName, phone }) {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-sky-50 via-white to-emerald-50"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-10 pb-12 md:flex-row md:items-center">
        {/* LEFT TEXT SIDE */}
        <div className="flex-1 space-y-6 animate-fadeInUp">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Personalized orthodontic & dental care
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Confident smiles start at{" "}
            <span className="text-clinicPrimary">{clinicName}</span>
          </h1>

          <p className="max-w-xl text-base text-slate-600">
            We offer gentle, comprehensive orthodontic and dental treatments for
            kids, teens, and adults. From braces and aligners to painless
            root canals and smile makeovers — all under one roof.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-clinicPrimary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-sky-200 hover:bg-sky-700 transition-transform duration-200 hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
            <a
              href={`tel:${phone}`}
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-transform duration-200 hover:-translate-y-0.5"
            >
              Call: {phone}
            </a>
          </div>

          <div className="flex flex-wrap gap-8 pt-4 text-sm text-slate-500">
            <div className="transition-transform duration-200 hover:-translate-y-0.5">
              <p className="font-semibold text-slate-700">Orthodontic experts</p>
              <p>Braces & aligners for all ages.</p>
            </div>
            <div className="transition-transform duration-200 hover:-translate-y-0.5">
              <p className="font-semibold text-slate-700">Complete dental care</p>
              <p>Fillings, RCT, crowns & more.</p>
            </div>
            <div className="transition-transform duration-200 hover:-translate-y-0.5">
              <p className="font-semibold text-slate-700">Patient-centric</p>
              <p>Painless, comfortable experience.</p>
            </div>
          </div>
        </div>

        {/* RIGHT DOCTOR CARDS SIDE */}
        <div className="flex-1 animate-fadeInUp">
          <div className="relative mx-auto max-w-3xl">
            <div className="pointer-events-none absolute -inset-5 rounded-3xl bg-gradient-to-tr from-clinicPrimary/20 via-emerald-200/40 to-sky-100 blur-2xl" />
            <div className="relative rounded-3xl border border-sky-100 bg-white shadow-xl p-6 sm:p-7">
              <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-clinicPrimary">
                Meet your doctors
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Doctor 1 */}
                <div className="space-y-3 transition-transform duration-200 hover:-translate-y-1">
                  <div className="h-60 sm:h-64 w-full overflow-hidden rounded-2xl bg-slate-100">
                    <div className="flex h-full w-full items-center justify-center bg-slate-100">
                      <img
                        src={doctor1}
                        alt="Doctor 1"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-slate-900">
                      Dr. Sammer Phatak
                    </p>
                    <p className="text-sm font-medium text-slate-600">
                      Qualification
                    </p>
                    <p className="text-xs text-slate-500">
                      Speciality
                    </p>
                  </div>
                </div>

                {/* Doctor 2 */}
                <div className="space-y-3 transition-transform duration-200 hover:-translate-y-1">
                  <div className="h-60 sm:h-64 w-full overflow-hidden rounded-2xl bg-slate-100">
                    <div className="flex h-full w-full items-center justify-center bg-slate-100">
                      <img
                        src={doctor2}
                        alt="Doctor 2"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-slate-900">
                      Dr. Shweta Jadhav/Phatak
                    </p>
                    <p className="text-sm font-medium text-slate-600">
                      MDS Orthodontics and Dentofacial Orthopedics
                    </p>
                    <p className="text-xs text-slate-500">
                      Braces and Aligner Specialist and General Dentist
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-[11px] text-slate-500">
                Little description about both of you
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
