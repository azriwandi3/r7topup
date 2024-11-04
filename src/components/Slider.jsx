import { Carousel } from "../assets/data";
import React, { useState } from "react";

export default function Slideraja() {
    const [SlideSaatini, aturSlideSaatini] = useState(0);
    const slides = Object.values(Carousel);

    const slideSelanjutnya = () => {
        aturSlideSaatini((prev) => (prev + 1) % slides.length);
    };

    const slideSebelumnya = () => {
        aturSlideSaatini((prev) => (prev - 1 + slides.length) % slides.length);
    };
    return (
        <div className="relative overflow-hidden rounded-lg h-[500px] mb-6 border-red-600 border-2 mr-32">
            <div className="flex transition-transform duration-10 ease-in-out h-full" style={{ transform: `translateX(-${SlideSaatini * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img
                            src={slide} alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <button
                onClick={slideSebelumnya}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">←
            </button>
            <button
                onClick={slideSelanjutnya}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">→
            </button>
        </div>
    );
}