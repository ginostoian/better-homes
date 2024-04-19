import FeaturesListicle from "@/components/FeaturesListicle";
import Problem from "@/components/Problem";
import WithWithout from "@/components/WithWithout";
import ContentRow from "@/components/contentRow/ContentRow";
import Hero from "@/components/hero/Hero";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import SocialProof from "@/components/socialProof/SocialProof";
import config from "@/config";

export default function Page() {
  const homepageCopy = config.copy.homepage;
  const whatWeDoCopy = config.copy.homepage.whatWeDoSection;
  const whatWeDoArr = [
    whatWeDoCopy.bathroom,
    whatWeDoCopy.kitchen,
    whatWeDoCopy.generalRenovation,
    whatWeDoCopy.interiorDesign,
    whatWeDoCopy.houseExtension,
    whatWeDoCopy.smartHome,
  ];
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
        <SectionTitle
          title="What we do"
          subtitle="Full service renovation company"
        />
        {whatWeDoArr.map((item, i) => {
          return (
            <ContentRow
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              subtitleAccent={item.subtitleAccent}
              p1={item.p1}
              p2={item.p2}
              cta={item.CTA}
              imgSrc={item.imgSrc}
              order={i % 2 === 0 ? false : true}
              slug={item.slug}
            />
          );
        })}
        <WithWithout />
      </main>
    </>
  );
}
