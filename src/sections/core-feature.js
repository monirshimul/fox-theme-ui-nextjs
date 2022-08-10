/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import FeatureThumb from 'assets/face-id.png';
import shapePattern from 'assets/shape-pattern2.png';
import { motion, useAnimation } from "framer-motion";
const proName = ()=>{
  return (
    <>
    <h3>
    Meet Our Latest Product, <span style={{color:"#ee3f22"}}>i-client</span>
    </h3>
    </>
    
  )
}

const data = {
  subTitle: 'Core features',
  // title: `Meet Our Latest Product, i-client`,
  description:
    'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
  btnName: 'Learn More',
  btnURL: '#',
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          
          <TextFeature
            subTitle={data.subTitle}
            title={proName()}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <motion.img src={FeatureThumb} alt="Thumbnail"
            animate={{
              scale: [0.7, 0.8, 1, 0.8, 0.7],
              rotate: [0, 0, 180, 180, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
          {/* <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box> */}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    paddingTop:"50px",
    marginTop:"50px",
    boxShadow:"rgba(132,243,253, 0.25) 0px 5px 25px, rgba(132,243,253, 0.12) 0px -20px 30px, rgba(132,243,253, 0.12) 0px 4px 6px, rgba(132,243,253, 0.17) 0px 12px 13px, rgba(132,243,253, 0.09) 0px -5px 25px",
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
    borderRadius:"15px"
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 11],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
