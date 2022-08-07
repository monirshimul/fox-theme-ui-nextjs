/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Pro Subscription',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export default function KeyFeature() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, x:0, transition:{duration:0.9} },
    hidden: { opacity: 0, scale: 0, x:700 },
  }
  const control = useAnimation()
  const [ref, inView] = useInView()
  useEffect(()=>{
    if(inView){
      control.start("visible")
    }else{
      control.start("hidden")
    }
  },[control, inView])
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature" >
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="MEET OUR PRODUCTS"
        />
      <motion.section ref={ref} variants={boxVariant} animate={control} initial="hidden">
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
      </motion.section>
        
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
