import Link from "next/link";
import { contactLinkClickEvent } from "../modules/ga";
import SocialStack from "./SocialStack";
import FreelancingStack from "./FreelancingStack";
import EmailIcon from "../assets/icons/email.svg";
import DownloadIcon from "../assets/icons/download.svg";
import PhoneIcon from "../assets/icons/phone.svg";

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-16">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-4xl text-slate-700 font-semibold">
          About <br />
          Myself
        </h2>
        <p className="text-slate-500">
          I’m a software engineer from Algeria who focuses on cutting-edge web technologies including React, VueJs, Ruby on Rails, and Laravel. in addition to highly sought-after competencies in TypeScript, testing, and GraphQL
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="w-full flex items-center justify-center gap-x-4 md:w-auto px-6 py-2 text-primary-600 hover:text-white bg-white hover:bg-primary-600 border border-primary-600 hover:shadow-md rounded-md font-medium capitalize"
            onClick={() => contactLinkClickEvent("resume_download")}
          >
            <DownloadIcon />
            <span>Get my resume</span>
          </Link>
          <Link
            href="mailto:hakim.bhd@gmail.com"
            className="w-full flex items-center justify-center gap-x-4 md:w-auto px-6 py-2 text-primary-600 hover:text-white bg-white hover:bg-primary-600 border border-primary-600 hover:shadow-md rounded-md font-medium capitalize"
            onClick={() => contactLinkClickEvent("email_me")}
          >
            <EmailIcon />
            <span>Email me</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <h2 className="text-primary-400">LET’S CONNECT</h2>
        <FreelancingStack />
        <div className="flex flex-wrap items-center gap-2">
          <a
            className="h-8 flex items-center gap-x-2 px-2 text-sm text-slate-700 bg-primary-50 hover:shadow rounded-md"
            href="https://wa.me/213555228874"
            target="_blank"
            rel="noreferrer"
            onClick={() => contactLinkClickEvent("phone_number")}
          >
            <PhoneIcon className="w-5 h-5" />
            <span>+213 (555) 228 874</span>
          </a>
          <SocialStack />
        </div>
      </div>
    </div>
  );
}
