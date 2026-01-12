import React from "react";

export default function TopBar({ clinicName, phone }) {
  return (
    <div className="w-full border-b bg-sky-900 text-sky-50 text-xs">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold">{clinicName}</span>
          <span className="hidden h-3 w-px bg-sky-400/60 sm:inline-block" />
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Open: Mon - Sat, 10:00 AM - 8:00 PM
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href={`tel:${phone}`} className="flex items-center gap-1 hover:underline">
            <span className="text-[11px] font-medium">Call:</span>
            <span className="text-[11px] sm:text-xs">{phone}</span>
          </a>
          <a
            href={`https://wa.me/${phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-emerald-500 px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-emerald-600"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
