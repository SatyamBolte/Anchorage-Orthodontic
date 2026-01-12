import React, { useState } from "react";
import logo from "../assests/logo/logo.png";


const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Treatments", href: "#treatments" },
  { label: "About", href: "#about" },
  // { label: "Why Choose Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ clinicName, phone }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-sky-100 bg-white/95 shadow-md backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 gap-4">
        <a href="#home" className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-2">
  <img
    src={logo}
    alt="clinic logo"
    className="h-12 w-auto sm:h-14 object-contain"
  />

  <div className="leading-tight font-barlow font-bold text-[15px] sm:text-[20px] text-slate-900 tracking-wide">
    <p className="m-0">Anchorage Orthodontic</p>
    <p className="m-0 -mt-[2px]">and Dental Clinic</p>

    {/* SLOGAN */}
    <p className="m-0 mt-[1px] font-barlow font-medium text-[9px] sm:text-[12px] text-slate-600 tracking-wide">
      Lead with your best smile
    </p>
  </div>
</div>



        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-clinicPrimary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-clinicPrimary px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-sky-700 transition-colors"
          >
            Book Appointment
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${phone}`}
            className="rounded-full border border-clinicPrimary px-3 py-1.5 text-[11px] font-medium text-clinicPrimary"
          >
            Call
          </a>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700"
          >
            <span className="sr-only">Toggle menu</span>
            {open ? (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-clinicPrimary px-4 py-2 text-center text-sm font-semibold text-white shadow hover:bg-sky-700"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
