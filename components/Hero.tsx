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
          I’m a software developer! I can help you build a product, feature or
          website. Look through some of my work and experience! If you like what
          you see and have a project you need coded, don’t hestiate to contact
          me.
        </p>
        <h2 className="text-primary-400">LET’S CONNECT</h2>
        <SocialStack />
        <FreelancingStack />
      </div>
    </div>
  );
}
