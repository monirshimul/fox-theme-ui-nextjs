/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa";

import Member1 from "assets/team/moon.png";
import Member2 from "assets/team/pappu.png";
import Member3 from "assets/team/titu.png";
import Member4 from "assets/team/ariq.png";
import Member5 from "assets/team/shawon.png";
import Member6 from "assets/team/monirTwo.png";

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: "Saimon Harmer",
    title: "Moon Kowsive Rifat",
    designation: "Co-Founder & COO",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "https://www.facebook.com/moon.kasif",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "https://twitter.com/kowsive",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "https://www.linkedin.com/in/moon-kowsive-b60506149",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: "Aaron Nunez",
    title: "S M Mahbubur Rahman",
    designation: "Co-Founder & CEO",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "https://www.facebook.com/mahbub99x",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "https://twitter.com/smmrahman90",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "https://www.linkedin.com/in/smmahbuburrahman",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: "Aaron Nunez",
    title: "Md. Ashd-Uz-Zaman",
    designation: "Co-Founder & CIO",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "https://www.facebook.com/tito.tr.1",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "https://www.twitter.com/Ashadza97308973",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "https://www.linkedin.com/in/ashad-zaman-b76024179",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: "Lina Jutila",
    title: "Ariq Hossain",
    designation: "Co-Founder & CMO",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: "Saimon Harmer",
    title: "Md. Ifte Khairul Islam",
    designation: "Co-Founder & Technical Manager",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: "Aaron Nunez",
    title: "Md. Monirul Islam",
    designation: "Co-Founder & Technical Manager",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "https://www.facebook.com/monir.shimul/",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "github",
        path: "https://github.com/monirshimul",
        icon: <FaGithub />,
      },
      {
        id: 3,
        name: "instagram",
        path: "https://www.linkedin.com/in/monir-shimul-a88263135/",
        icon: <FaLinkedin />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section style={{ margin: "50px 0px 50px 0px" }} id="team">
      <Container>
        <SectionHeader slogan="our team" title="TOGETHER WE ARE AN OCEAN" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
