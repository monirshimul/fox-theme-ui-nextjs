/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.img} />

      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    mb: -1,
    padding:"15px",
    boxShadow:"rgba(132,243,253, 0.25) 0px 5px 25px, rgba(132,243,253, 0.12) 0px -20px 30px, rgba(132,243,253, 0.12) 0px 4px 6px, rgba(132,243,253, 0.17) 0px 12px 13px, rgba(132,243,253, 0.09) 0px -5px 25px",
    borderRadius:"15px",
    transition: 'ease-in-out 0.4s',
      '&:hover':{
        boxShadow:"0 4px 10px rgba(39, 83, 123, 0.5)",
      }
  },

  img: {
    width: ['70px', null, null, '80px', '90px', '70px'],
    height: '70px',
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: 1,
  },
  wrapper: {
    
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [2, 3],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ['10px', null, '15px'],
      
    },

    subTitle: {
      fontSize: [1, '15px'],
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};
