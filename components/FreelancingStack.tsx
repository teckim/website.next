import Image from "next/image";
import Link from "next/link";

export default function FreelancingStack() {
  return (
    <div>
      <div className="flex gap-2">
        <Link
          href="https://www.fiverr.com/hakim_bhd"
          target="_blank"
          className="w-full h-12 flex items-center justify-center md:w-auto px-6 hover:shadow-md bg-gradient-to-r from-slate-100/90 to-slate-100/40 backdrop-blur-sm rounded-md"
        >
          <Image
            src="/images/fiverr.png"
            alt="Fiverr logo"
            width={80}
            height={12}
          />
        </Link>
        <Link
          href="https://www.upwork.com/freelancers/~011015179d488fba6a"
          target="_blank"
          className="w-full h-12 flex items-center justify-center md:w-auto px-6 hover:shadow-md bg-gradient-to-r from-slate-100/90 to-slate-100/40 backdrop-blur-sm rounded-md"
        >
          <Image
            src="/images/upwork.png"
            alt="Upwork logo"
            width={80}
            height={12}
          />
        </Link>
      </div>
    </div>
  );
}
