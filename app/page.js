import FeaturesListicle from "@/components/FeaturesListicle";
import Problem from "@/components/Problem";
import Hero from "@/components/hero/Hero";
import SocialProof from "@/components/socialProof/SocialProof";
import config from "@/config";

export default function Page() {
  const homepageCopy = config.copy.homepage;
  return (
    <>
      <main>
        <Hero
          title={homepageCopy.title}
          titleAccent={homepageCopy.titleAccent}
          subtitle={homepageCopy.subtitle}
          heroCTA={homepageCopy.heroCTA}
          heroImgUrl={homepageCopy.heroImgUrl}
        />
        <SocialProof />
        <Problem />
        <FeaturesListicle />
      </main>
    </>
  );
}
