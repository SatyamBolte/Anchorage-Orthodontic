import React, { useState } from "react";

// 🔹 Use your Web App URL here:
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby2OwjSHNSNfv7l8udhiBNm-CmCycQ1p3fEr475Kk0za8zIYNU-ZXJPdGLPZ_e9eEU/exec";

export default function ContactSection({ clinicName, phone }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDate: "",
    treatment: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      // 🔹 Send as form-encoded data (so Apps Script can use e.parameter)
      const body = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        preferredDate: formData.preferredDate,
        treatment: formData.treatment,
        message: formData.message,
      }).toString();

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // 🔸 avoids CORS preflight
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body,
      });

      // We can't read the response in no-cors mode,
      // but if no JS error occurred, we assume it was sent.
      setStatus({
        loading: false,
        success: "Thank you! Your appointment request has been submitted.",
        error: null,
      });

      setFormData({
        name: "",
        phone: "",
        preferredDate: "",
        treatment: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: null,
        error: "Something went wrong. Please try again or call us directly.",
      });
    }
  };

  return (
    <section id="contact" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          {/* LEFT: FORM */}
          <div className="animate-fadeInUp">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Book your appointment
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Share your details and our team will get in touch to confirm your
              appointment slot.
            </p>

            <form
              className="mt-6 space-y-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-clinicPrimary/30 focus:border-clinicPrimary focus:ring-2"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-clinicPrimary/30 focus:border-clinicPrimary focus:ring-2"
                    placeholder="Your mobile number"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700">
                    Preferred date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-clinicPrimary/30 focus:border-clinicPrimary focus:ring-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700">
                    Treatment / concern
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-clinicPrimary/30 focus:border-clinicPrimary focus:ring-2"
                  >
                    <option value="">Select</option>
                    <option>Braces / Aligners</option>
                    <option>Teeth pain / RCT</option>
                    <option>Cleaning / Polishing</option>
                    <option>Smile makeover</option>
                    <option>Kids dental check-up</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Additional message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-clinicPrimary/30 focus:border-clinicPrimary focus:ring-2"
                  placeholder="Share any specific concerns or questions"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full rounded-full bg-clinicPrimary px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-sky-700 disabled:opacity-70"
              >
                {status.loading ? "Submitting..." : "Submit request"}
              </button>

              {status.success && (
                <p className="mt-2 text-xs text-emerald-600">
                  {status.success}
                </p>
              )}
              {status.error && (
                <p className="mt-2 text-xs text-red-500">{status.error}</p>
              )}

              <p className="text-[11px] text-slate-500">
                Your details will be used only to schedule and confirm your
                appointment. For urgent concerns, please call us directly.
              </p>
            </form>
          </div>

          {/* RIGHT: CLINIC INFO + MAP */}
          <div className="space-y-4 animate-fadeInUp">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Clinic details
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                {clinicName}
                <br />
                Clinic Address Line 1 (edit in code)
                <br />
                Your City, Your State, India
              </p>
              <div className="mt-3 space-y-1 text-xs text-slate-600">
                <p>
                  <span className="font-semibold">Call:</span>{" "}
                  <a href={`tel:${phone}`} className="text-clinicPrimary">
                    {phone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:example@yourclinic.com"
                    className="text-clinicPrimary"
                  >
                    example@yourclinic.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Timings:</span> Mon - Sat,
                  10:00 AM - 8:00 PM
                </p>
              </div>
              <a
                href={`https://wa.me/${phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-600"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-sm">
              <iframe
                title="Clinic location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.7404705497665!2d73.77559007519436!3d18.63073948248429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90f895bccb1%3A0x3ba29480ad41418e!2sAnchorage%20Orthodontic%20and%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1764954460045!5m2!1sen!2sin"
                className="h-72 w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
