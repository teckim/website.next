import Image from "next/image";
import { scrollEvent } from "../modules/ga";

const testimonials = [
  "/images/testimonial-1.png",
  "/images/testimonial-7.png",
  "/images/testimonial-2.png",
  "/images/testimonial-3.png",
  "/images/testimonial-4.png",
  "/images/testimonial-5.png",
  "/images/testimonial-6.png",
];

export default function Testimonials() {
  let tracked = false;
  const handleScroll = () => {
    if (tracked) return;
    tracked = true;
    scrollEvent();
  };
  return (
    <div className="container">
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-primary-500 uppercase tracking-wider">
          Testimonials
        </h2>
        <p className="text-slate-600 text-sm">Upwork and Fiverr clients</p>
      </div>
      <div
        className="flex flex-1 gap-x-8 snap-x overflow-x-auto overflow-y-hidden py-16"
        onScroll={handleScroll}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial}
            className=" max-h-44 snap-start shrink-0 max-w-full border rounded-md p-4 bg-white"
          >
            <Image
              width={500}
              height={500}
              src={testimonial}
              alt={testimonial}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
