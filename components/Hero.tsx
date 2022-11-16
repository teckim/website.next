import FreelancingStack from "./FreelancingStack";
import SocialStack from "./SocialStack";

export default function Hero() {
  return (
    <div className="container">
      <div className="min-h-screen flex flex-col justify-center gap-y-4">
        <h1 className="text-5xl text-slate-700 font-semibold">
          I’m Hakim <br />
          Glad to see you!
        </h1>
        <p className="text-slate-500 max-w-xl">
          An Upwork freelancer who has worked on a number of websites regarding
          cryptocurrencies, vehicle leasing, event organizing, and other topics.
          utilizing the most cutting-edge tools and technologies, like
          TypeScript, Testing, Sass, and GraphQL.
        </p>
        <h2 className="text-primary-400">LET’S CONNECT</h2>
        <SocialStack />
        <FreelancingStack />
      </div>
    </div>
  );
}
