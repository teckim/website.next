import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import MediumIcon from "../assets/icons/medium.svg";
import GithubIcon from "../assets/icons/github.svg";
import AngelListIcon from "../assets/icons/angel-list.svg";
import UpworkIcon from "../assets/icons/upwork.svg";
import FiverrIcon from "../assets/icons/fiverr.svg";
import Link from "next/link";

const socialAcounts = [
  {
    name: "Twitter",
    icon: <TwitterIcon />,
    link: "https://twitter.com/hakim_bhd",
  },
  {
    name: "Linkedin",
    icon: <LinkedinIcon />,
    link: "https://www.linkedin.com/in/hakim-bhd/",
  },
  {
    name: "Medium",
    icon: <MediumIcon />,
    link: "https://medium.com/@hakim.bhd",
  },
  {
    name: "Github",
    icon: <GithubIcon />,
    link: "https://github.com/teckim",
  },
  {
    name: "AngelList",
    icon: <AngelListIcon />,
    link: "https://angel.co/u/hakim-bhd",
  },
];

export default function SocialStack() {
  return (
    <ul className="flex items-center gap-x-4">
      {socialAcounts.map((account) => (
        <li key={account.name}>
          <Link href={account.link} target="_blank">{account.icon}</Link>
        </li>
      ))}
    </ul>
  );
}
