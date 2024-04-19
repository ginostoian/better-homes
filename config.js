import themes from "daisyui/src/theming/themes.js";
import Link from "next/link";

const config = {
  // REQUIRED
  appName: "Better Homes",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Better Homes is the one stop shop for all your design and build needs. Take the hassle out of construction.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "bhstudio.co.uk",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Starter",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for small projects",
        // The price you want to display, the one user will be charged on Stripe.
        price: 79,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 99,
        features: [
          {
            name: "NextJS boilerplate",
          },
          { name: "User oauth" },
          { name: "Database" },
          { name: "Emails" },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Advanced",
        description: "You need more power",
        price: 99,
        priceAnchor: 149,
        features: [
          {
            name: "NextJS boilerplate",
          },
          { name: "User oauth" },
          { name: "Database" },
          { name: "Emails" },
          { name: "1 year of updates" },
          { name: "24/7 support" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `ShipFast <noreply@mg.shipfa.st>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Marc at ShipFast <marc@mg.shipfa.st>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "marc@mg.shipfa.st",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "marc.louvion@gmail.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "light",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes[`[data-theme=light]`]["primary"],
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
  copy: {
    homepage: {
      title: "Renovate stress free with ",
      titleAccent: "Better Homes Studio",
      subtitle:
        "Builders don't have to be unreliable and hard to work with. We make your house renovation and refurbishment a breeze.",
      heroCTA: "take the first step",
      heroImgUrl: "misc/best-of-houzz-winner.png",
      servicesSectionTitle: "What we do",
      servicesSectionSubtitle: "Full service renovation company",
      whatWeDoSection: {
        bathroom: {
          title: "Bathroom renovation",
          subtitle: "We create outstanding bathrooms. ",
          subtitleAccent: "Design, Supply & Install.",
          p1: "Renovating your bathroom can be quite the task. There are a lot of big decisions to be made from design and practicality to plumbing and drainage.",
          p2: "Our team will help you make the best decisions whether you are doing a full Design, Supply & Install or just the installation with us.",
          CTA: "Renovate your bathroom",
          imgSrc: "/assets/img/bathroom/industrial-bathroom.webp",
          slug: "pages/bathroom-renovation",
        },
        kitchen: {
          title: "Kitchen renovation",
          subtitle: "A well planned, beautifully designed kitchen adds ",
          subtitleAccent: "huge value and comfort to any home.",
          p1: "Renovating your kitchen is one of the biggest undertakings when planning your perfect home.",
          p2: "Our team of kitchen refurbishment experts will guide you through the whole process to maximise your investment.",
          CTA: "Renovate your kitchen",
          imgSrc: "/assets/img/kitchen/contemporary-kitchen.webp",
          slug: "pages/kitchen-renovation",
        },
        generalRenovation: {
          title: "Home Renovation",
          subtitle: "We create stunning interiors. ",
          subtitleAccent: "Design, Flooring, Decorating, Structural and more.",
          p1: "Your house should feel like home. It doesn't matter if it is a flat, house or container house. It should match your style.",
          p2: "Forever home or not, your home should represent you. A well done house renovation can greatly increase your comfort level and your house's value!",
          CTA: "Renovate your home",
          imgSrc: "/assets/img/general/london-grey-living-room.webp",
          slug: "pages/general-renovation",
        },
        interiorDesign: {
          title: "Interior Design",
          subtitle: "Our team does more than design homes. ",
          subtitleAccent: "The create living experiences.",
          p1: "Our team of designers interpret each client’s passions and style to provide innovative and exquisite interiors, curating furniture, textiles, even art and antiques.",
          p2: "Interior spaces are often completely re-imagined beyond the decorative, to eliminate boundaries between the built environment and a better way of life.",
          CTA: "Do your home a favour",
          imgSrc: "/assets/img/general/living-room-1.webp",
          slug: "pages/interior-design",
        },
        smartHome: {
          title: "Smart Homes",
          subtitle: "We get smarter as times passes ",
          subtitleAccent: "Our homes should do the same.",
          p1: "Our team of trained proffesionals will transform your home into a tech fest.",
          p2: "Letting your home deal with menial tasks enables you and your family to focus on what matters most to you.",
          CTA: "Automate your home",
          imgSrc: "/assets/img/smarthome/smarthome-1.webp",
          slug: "pages/smart-home",
        },
        houseExtension: {
          title: "House Extensions",
          subtitle: "Increase your houses square footage. ",
          subtitleAccent: "It's value will grow as a bonus.",
          p1: "When you need more space but you're in love with your current home or simply dread the idea of moving, the solution is quite simple.",
          p2: "Our team will help you make the best decisions when planning for your house extension to maximise both space and value.",
          CTA: "Extend your home",
          imgSrc: "/assets/img/extension/extension-1.webp",
          slug: "pages/house-extension",
        },
      },
      howWeDoItSection: {
        bigGridTitle: "Easy, transparent and different",
        bigGridText:
          "From design to refurbishment you can rest assured that your experience with Better Homes Studio will be second to none.",
        gridOneNum: "1.",
        gridOneTitle: "Book an appointment",
        gridOneText:
          "Use our quick and easy online form to book a date which suits you best. One of our experienced operators will be in touch to finalise your appointment.",
        gridTwoNum: "2.",
        gridTwoTitle: "Receive your free & transparent quote",
        gridTwoText:
          "Based on your preferences discussed during the initial meeting, our team of expert estimators will craft a clear and transparent quote.",
        gridThreeNum: "3.",
        gridThreeTitle: "We carry out the work",
        gridThreeText:
          "Our friendly team of highly skilled professionals will effortlessly refurbish your home so you won't have to worry about a thing.",
        gridFourNum: "4.",
        gridFourTitle: "Enjoy your new home + The BHS Guarantee",
        gridFourText:
          "Now it's time to sit back, relax and marvel at how your vision became a reality. It really is that simple, so what are you waiting for?",
      },
      reviewsSection: {
        darkBgTextTitle:
          "You are our top priority. Your satisfaction is our goal.",
        darkBgTextSubtitle:
          "We've built our business on the back of our clients satisfaction. If you are happy, we are happy. To read even more reviews, scroll to the bottom where you'll find links to different platforms with verified reviews.",
        darkBgTextBtn: "Let's discuss",
      },
      faqs: [
        {
          question: "Who is Better Homes Studio?",
          answer: (
            <div className="space-y-2 leading-relaxed">
              We are a full service renovation company based in London. We do
              everything from interior design to building extensions and
              converting lofts. We bet there is nothing you can throw at us that
              we can&apos;t do.
            </div>
          ),
        },
        {
          question: "Are your quotes free?",
          answer: (
            <div className="space-y-2 leading-relaxed">
              Yes, our quotes are 100% free, detailed and transparent.
            </div>
          ),
        },
        {
          question: "Do you offer a work guarantee?",
          answer: (
            <div className="space-y-2 leading-relaxed">
              Yes. The BH Studio workmanship guarantee covers our work from 1
              year to 10 years depending on the project. You can read more about{" "}
              <Link href="/pages/our-guarantee">our guarantee here.</Link>
            </div>
          ),
        },
        {
          question: "Can I use BHS just for the build phase?",
          answer: (
            <div className="space-y-2 leading-relaxed">
              Yes, if you provide us with the design, our team will take care of
              translating your ideas into reality
            </div>
          ),
        },
        {
          question: "How long will my project take?",
          answer: (
            <div className="space-y-2 leading-relaxed">
              It depends on the size of your project. A bathroom renovation
              usually takes between 10 and 14 working days. A full flat or home
              renovation can take from 3 weeks to 1 and a half months and up
              depending on complexity. For a more specific answer, reach out to
              us.
            </div>
          ),
        },
        {
          question: "Do you offer refferal rewards?",
          answer:
            "Yes, we run the BHS Scheme. This allows you to win a reward for every client you refer that we end up working with. For more information, please reach out.",
        },
        {
          question: "I have another question",
          answer: (
            <div className="space-y-2 leading-relaxed">
              Great, give us a call or fill our form.
            </div>
          ),
        },
      ],
      blogHighlights: [
        {
          title: "We won the Best of Houzz Service Award - 2023",
          date: "23 February 2023",
          imgUrl: "/assets/img/misc/best-of-houzz-winner.png",
          slug: "best-of-houzz-winner-2023",
        },
        {
          title: "Top 5 bathroom design trends in 2023",
          date: "23 January 2023",
          imgUrl: "/assets/img/bathroom/bathroom-design-trend-terrazzo.jpeg",
          slug: "top-5-bathroom-design-trends-in-2023",
        },
        {
          title: "Save money and time with a smart home",
          date: "05 March 2023",
          imgUrl: "/assets/img/smarthome/smarthome-1.webp",
          slug: "smart-home-ideas-2023",
        },
        {
          title: "Small bathroom design & renovation ideas",
          date: "15 February 2023",
          imgUrl:
            "/assets/img/bathroom/vertical-layout-in-small-bathroom-design.jpeg",
          slug: "small-bathroom-design-ideas",
        },
      ],
    },
  },
};

export default config;
