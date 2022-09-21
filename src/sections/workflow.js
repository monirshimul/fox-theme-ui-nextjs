/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text, Image } from "theme-ui";
import SectionHeader from "components/section-header";

import PatternBG from "assets/patternBG.png";
import ArrowOdd from "assets/arrowOdd.svg";
import ArrowEven from "assets/arrowEven.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa';
import One from "assets/product/employee.png";
import Two from "assets/product/software.png";
import Three from "assets/product/mobile.png";
import Four from "assets/product/dashboard.png";
import { Divider } from "@material-ui/core";
const data = [
  {
    id: 1,
    imgSrc:One,
    title: "Employee Record Management",
    text: "Enroll your employee record with biometrics informations, Always be up to date with employee contact information.",
  },
  {
    id: 2,
    imgSrc:Two,
    title: "Extensively Parameterized System",
    text: "Supports multiple office locations and multi-shift workforce. Ideal for Financial Institutions, Large Enterprises, and Chain Shops.",
  },
  {
    id: 3,
    imgSrc:Three,
    title: "Mobile Application Based Attendance",
    text: "Leverages advanced facial recognition-based technology. So at your office premises attendance is one selfie away.",
  },
  {
    id: 4,
    imgSrc:Four,
    title: "Robust Dashboard and Reporting",
    text: "Daily, Monthly, and Yearly attendance reports can provide insight into the business and employee punctuality.",
  },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="PRODUCT FOX ATTEND"
          title="Let's jump into the core"
          isWhite={true}
          forWorkflow={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box>
              <Image src={item.imgSrc} sx={styles.memberThumb} />
              <Divider style={{backgroundColor:"#ee3f22", marginTop:"2px", marginBottom:"10px"}}/>
              </Box>
              
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Divider style={{backgroundColor:"#ee3f22", marginTop:"2px", marginBottom:"10px"}}/>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10],
  },
  memberThumb: {
    width: ['70px', '80px', '100px', null, null, '90px'],
    height: ['70px', '80px', '100px', null, null, '90px'],
    flexShrink: 0,


  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      "35px 0",
      null,
      "45px 30px",
      null,
      "50px 25px",
      null,
      null,
      "50px 65px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
  card: {
    backgroundColor:"#041c32",
    borderRadius:"10px",
    display: "flex",
    alignItems:"center",
    flexDirection: "column",
    position: "relative",
    textAlign: ["center", null, "left"],
    width: ["100%", "80%", "100%","110%"],
    mx: ["auto"],
    px: [4, null, null, 4],
    py: [4, null, null, 3],
    boxShadow:"rgba(6, 44, 48, 0.25) 0px 5px 25px, rgba(6, 44, 48, 0.12) 0px -20px 30px, rgba(6, 44, 48, 0.12) 0px 4px 6px, rgba(6, 44, 48, 0.17) 0px 12px 13px, rgba(6, 44, 48, 0.09) 0px -5px 25px",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      width: 215,
      height: 60,
      "@media screen and (max-width:1220px)": {
        display: "none",
      },
    },
    // "&:nth-of-type(2n-1)::before": {
    //   backgroundImage: `url(${ArrowOdd})`,
    // },
    // "&:nth-of-type(2n)::before": {
    //   backgroundImage: `url(${ArrowEven})`,
    //   top: 17,
    // },
    "&:last-child::before": {
      display: "none",
    },
  },

  iconBox: {
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
