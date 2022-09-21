/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/fox-client.png";
import Partnership from "assets/key-feature/customer.png";
import Subscription from "assets/key-feature/chat.png";
import Support from "assets/key-feature/onboarding.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fox Attend",
    title: "Fox Attend",
    text: "Struggling to monitor your employee attendance? But don't want to invest much in biometrics devices. Fox Attend is the solution you are looking for.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Onboard Plus",
    title: "Onboard Plus",
    text: "Struggling to maintain customer information for your organization? Onboard Plus is an end-to-end platform for customer onboarding and CRM.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Fox Chat",
    title: "Fox Chat",
    text: "Streamline real-time communication for your organization. Fox Chat provides personalized communication application for your organization.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Fox RIMS",
    title: "Fox RIMS",
    text: "Fox RIMS is an end-to-end Real Estate portfolio and information management platform. Helps to digitalize Real Estate business in a cost-effective way.",
  },
];

export default function KeyFeature() {
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
    <section sx={{ variant: "section.keyFeature" }} id="products">
      <Container>
        <SectionHeader
          slogan="Software products to maximize business value"
          title="OUR FUTURISTIC PRODUCTS"
        />
        <section>
          <Grid sx={styles.grid}>
            {data.map((item) => (
              <FeatureCardColumn
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                title={item.title}
                text={item.text}
              />
            ))}
          </Grid>
        </section>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
