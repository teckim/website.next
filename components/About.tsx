import SocialStack from "./SocialStack";
import DownloadIcon from "../assets/icons/download.svg";
import EmailIcon from "../assets/icons/email.svg";
import Link from "next/link";
import FreelancingStack from "./FreelancingStack";

export default function About() {
  return (
    <div className="grid md:grid-cols-2">
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
          >
            <DownloadIcon />
            <span>Get my resume</span>
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="w-full flex items-center justify-center gap-x-4 md:w-auto px-6 py-2 text-primary-600 hover:text-white bg-white hover:bg-primary-600 border border-primary-600 hover:shadow-md rounded-md font-medium capitalize"
          >
            <EmailIcon />
            <span>Email me</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <h2 className="text-primary-400">LET’S CONNECT</h2>
        <SocialStack />
        <FreelancingStack />
      </div>
    </div>
  );
}
