/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/logo.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        
        <Box sx={styles.banner.contentBox}>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="banner" />
        </Box>
          <Heading as="h1" variant="heroPrimary">
            FOXCATCHER IT SOLUTIONS
          </Heading>
          <Text as="p" variant="heroSecondary">
          Founded on 2019, Foxcatcher IT solutions is a business process outsourcing firm providing extensive offshoring services to overseas clients, focusing on  Real Estate Management, Database Management, App Development (Android, iOS, Appcelerator Titanium platform) etc.
          </Text>
          <Button variant="primary">Explore</Button>
        </Box>

        {/* <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="banner" />
        </Box> */}
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      // backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      // backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      backgroundColor:"#06283D",
      width: ['100%', '90%', '535px', null, '60%', '70%', '80%', '90%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
      boxShadow:"rgba(238,63,34, 0.25) 0px 40px 45px, rgba(238,63,34, 0.25) 0px -30px 45px, rgba(238,63,34, 0.12) 0px 14px 16px, rgba(238,63,34, 0.17) 0px 10px 35px, rgba(238,63,34, 0.09) 0px -5px 10px",
      padding:"30px 50px",
      borderRadius:"20px"
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      
      img: {
        position: 'relative',
        width:"120px",
        height: '120px',
        borderRadius:"50%",
        mb: ['30px', null, null, null, null, 5],
        boxShadow:"rgba(132,243,253, 0.25) 0px 5px 15px, rgba(132,243,253, 0.12) 0px -10px 20px, rgba(132,243,253, 0.12) 0px 4px 6px, rgba(132,243,253, 0.17) 0px 12px 13px, rgba(132,243,253, 0.09) 0px -5px 25px",
      },
    },
  },
};
