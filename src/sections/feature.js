/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/app-development.png";
import Partnership from "assets/feature/team.png";
import Subscription from "assets/feature/service.png";
import Support from "assets/feature/nft.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Software Development",
    title: "Software Development",
    text: "Specialized in developing HR, e-Commerce, FinTech, EdTech, and Biometrics Solutions. We can develop customized software solutions for driving your business.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Dev Team as a Service",
    title: "Dev Team as a Service",
    text: "Got an amazing project plan? But looking for a talented engineering team at an affordable price? We are here to help you build your dream development team.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Business Process Outsourcing",
    title: "Business Process Outsourcing",
    text: "As one of the top players in the BPO industry in Bangladesh. We are providing Real Estate Management, Digital Marketing, Content Design, and SEO services for our valued offshore clients.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Web3 Development",
    title: "Web3 Development",
    text: "We believe in innovation. It's important for businesses to have early access to Web3 technologies like Blockchain, AI/ML,  AR/VR, and Metaverse at an affordable price.",
  },
];

export default function Feature() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.9 } },
    hidden: { opacity: 0, scale: 0, x: 700 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <section
      sx={{ variant: "section.feature" }}
      style={{ marginTop: "50px" }}
      id="services"
    >
      <Container>
        <SectionHeader
          slogan="Serving with Excellence"
          title="OUR AMAZING SERVICES"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
