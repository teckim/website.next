/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const testimonials = [
  "/images/testimonial-2.png",
  "/images/testimonial-3.png",
  "/images/testimonial-4.png",
  "/images/testimonial-5.png",
  "/images/testimonial-6.png",
  "/images/testimonial-7.png",
  "/images/testimonial-1.png",
];

export default function Testimonials() {
  return (
    <div className="container">
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-primary-500">
          Testimonials
        </h2>
        <p className="text-slate-600 text-sm">In Upwork and Fiverr</p>
      </div>
      <div className="flex flex-1 gap-x-8 snap-x overflow-x-auto py-16">
        {testimonials.map((testimonial) => (
          <div key={testimonial} className="snap-start shrink-0 border rounded-md p-4">
            <img
              className="rounded-md"
              src={testimonial}
              alt={testimonial}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
