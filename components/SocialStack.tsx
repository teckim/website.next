import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import MediumIcon from "../assets/icons/medium.svg";
import GithubIcon from "../assets/icons/github.svg";
import AngelListIcon from "../assets/icons/angel-list.svg";
import Link from "next/link";
import { contactLinkClickEvent } from "../modules/ga";

const socialAcounts = [
  {
    name: "github",
    icon: <GithubIcon />,
    link: "https://github.com/teckim",
  },
  {
    name: "linkedin",
    icon: <LinkedinIcon />,
    link: "https://www.linkedin.com/in/hakim-bhd/",
  },
  {
    name: "angel-list",
    icon: <AngelListIcon />,
    link: "https://angel.co/u/hakim-bhd",
  },
  {
    name: "twitter",
    icon: <TwitterIcon />,
    link: "https://twitter.com/hakim_bhd",
  },
  {
    name: "medium",
    icon: <MediumIcon />,
    link: "https://medium.com/@hakim.bhd",
  },
];

export default function SocialStack() {
  return (
    <ul className="flex items-center gap-x-1">
      {socialAcounts.map((account) => (
        <li key={account.name} className="h-8 w-8 flex items-center justify-center hover:bg-primary-50 rounded-md">
          <Link href={account.link} target="_blank" aria-label={account.name} onClick={() => contactLinkClickEvent(account.name)}>{account.icon}</Link>
        </li>
      ))}
    </ul>
  );
}
