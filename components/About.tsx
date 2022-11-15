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
        <h1 className="text-4xl text-slate-700 font-semibold">
          About <br />
          Myself
        </h1>
        <p className="text-slate-500">
          I’m a software developer! I can help you build a product, feature or
          website. Look through some of my work and experience! If you like what
          you see and have a project you need coded, don’t hestiate to contact
          me.
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
        <div className="flex items-center gap-x-4">
          <a
            className="flex items-center gap-x-2 py-2 text-sm text-slate-600 bg-slate-50 px-2 rounded-md"
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
        <FreelancingStack />
      </div>
    </div>
  );
}
