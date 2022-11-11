import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import MediumIcon from "../assets/icons/medium.svg";
import GithubIcon from "../assets/icons/github.svg";
import AngelListIcon from "../assets/icons/angel-list.svg";
import Link from "next/link";
import { contactLinkClickEvent } from "../modules/ga";

const socialAcounts = [
  {
    name: "twitter",
    icon: <TwitterIcon />,
    link: "https://twitter.com/hakim_bhd",
  },
  {
    name: "linkedin",
    icon: <LinkedinIcon />,
    link: "https://www.linkedin.com/in/hakim-bhd/",
  },
  {
    name: "medium",
    icon: <MediumIcon />,
    link: "https://medium.com/@hakim.bhd",
  },
  {
    name: "github",
    icon: <GithubIcon />,
    link: "https://github.com/teckim",
  },
  {
    name: "angel-list",
    icon: <AngelListIcon />,
    link: "https://angel.co/u/hakim-bhd",
  },
];

export default function SocialStack() {
  return (
    <ul className="flex items-center gap-x-4">
      {socialAcounts.map((account) => (
        <li key={account.name}>
          <Link href={account.link} target="_blank" onClick={() => contactLinkClickEvent(account.name)}>{account.icon}</Link>
        </li>
      ))}
    </ul>
  );
}
