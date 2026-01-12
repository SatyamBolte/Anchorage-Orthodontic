import React, { useEffect, useState } from "react";

import img1 from "../assests/slider/1.png";
import img2 from "../assests/slider/2.png"
import img3 from "../assests/slider/3.png"
import img4 from "../assests/slider/4.jpg";
import img5 from "../assests/slider/5.jpg";
import img6 from "../assests/slider/6.jpg";
import img7 from "../assests/slider/7.jpg";
import img8 from "../assests/slider/8.jpg";
import img9 from "../assests/slider/9.jpg";
import img10 from "../assests/slider/10.jpg";
import img11 from "../assests/slider/11.jpg";
import img12 from "../assests/slider/12.jpg";
import img13 from "../assests/slider/13.jpg";
import img14 from "../assests/slider/14.jpg";



const DEFAULT_IMAGES = [
  { url: img1, alt: "Clinic photo 1" },
  { url: img2, alt: "Clinic photo 2" },
  { url: img3, alt: "Clinic photo 3" },
  { url: img4, alt: "Clinic photo 1" },
  { url: img5, alt: "Clinic photo 2" },
  { url: img6, alt: "Clinic photo 3" },
  { url: img7, alt: "Clinic photo 1" },
  { url: img8, alt: "Clinic photo 2" },
  { url: img9, alt: "Clinic photo 3" },
  { url: img10, alt: "Clinic photo 1" },
  { url: img11, alt: "Clinic photo 2" },
  { url: img12, alt: "Clinic photo 3" },
  { url: img13, alt: "Clinic photo 1" },
  { url: img14, alt: "Clinic photo 2" }
];

export default function ImageSlider({ images = DEFAULT_IMAGES }) {
  const list = images && images.length ? images : DEFAULT_IMAGES;
  const [current, setCurrent] = useState(0);
  const active = list[current];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % list.length);
    }, 4000);
    return () => clearInterval(id);
  }, [list.length]);

  const next = () => setCurrent((prev) => (prev + 1) % list.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + list.length) % list.length);

  return (
    <div className="relative mx-auto mt-8 mb-12 w-full max-w-5xl overflow-hidden rounded-3xl bg-slate-200/60 shadow-2xl animate-fadeInUp">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <img
          src={active.url}
          alt={active.alt}
          className="absolute inset-0 h-full w-full object-cover rounded-3xl"
        />

        <button
          onClick={prev}
          type="button"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-1 text-lg font-bold text-slate-700 shadow hover:bg-white"
        >
          ‹
        </button>

        <button
          onClick={next}
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-1 text-lg font-bold text-slate-700 shadow hover:bg-white"
        >
          ›
        </button>
      </div>

      <div className="absolute bottom-4 flex w-full justify-center gap-2">
        {list.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 cursor-pointer rounded-full border border-white transition ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
