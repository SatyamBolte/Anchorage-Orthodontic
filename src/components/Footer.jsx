import React from "react";

export default function Footer({ clinicName }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-sky-900 text-sky-50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-xs">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold">{clinicName}</p>
            <p className="text-[11px] text-sky-100/80">
              Template created with React + Tailwind CSS. Customize the content,
              treatments, and offers to match your clinic.
            </p>
          </div>
          <p className="text-[11px] text-sky-100/80">
            © {year} {clinicName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
