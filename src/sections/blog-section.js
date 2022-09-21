/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import PostThumb1 from 'assets/testimonial/olivine.svg';
import PostThumb2 from 'assets/testimonial/clientOne.png';
import PostThumb3 from 'assets/testimonial/clientTwo.png';
import PostThumb4 from 'assets/testimonial/olivine.svg';
import PostThumb5 from 'assets/testimonial/olivine.svg';
import PostThumb6 from 'assets/testimonial/olivine.svg';

const data = [
  {
    id: 1,
    imgSrc: PostThumb1,
    altText: 'Marketing',
    postLink: '#',
    title: '“ Olivine  IT has developed a great working partnership with Foxcatcher IT Solutions after providing us with their excellent back end game development services. Remarkable infrastructure work and attention to details ”',
    authorName: 'Olivine IT',
    date: 'July 20, 2022',
  },
  {
    id: 2,
    imgSrc: PostThumb2,
    altText: 'Creative',
    postLink: '#',
    title: '"After working with Foxcatcher ITS who are providing us with their call centre services since 2019, I was impressed with their remarkable sense of meeting deadlines and efficient approach towards meeting the customer needs ”',
    authorName: 'David Hadzor',
    date: 'Oct 20, 2019',
  },
  {
    id: 3,
    imgSrc: PostThumb3,
    altText: 'Startup',
    postLink: '#',
    title: '“ Foxcatcher ITS has helped  us develop our website dashboard and mobile phone applications. Their work on the dashboard integration was finesse and more impressive was their client management way. ”',
    authorName: 'Silviu Ciocan',
    date: 'Sep 16, 2020',
  },
  
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function BlogSection() {
  return (
    <section sx={{ variant: 'section.news' }} style={{marginTop:"150px"}} id="testimonial">
      <Container>
        <SectionHeader
          slogan="TESTIMONIAL"
          title="Meet Client Satisfaction"
        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item) => (
              <PostCard
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                postLink={item.postLink}
                title={item.title}
                authorName={item.authorName}
                date={item.date}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    
    '.carousel-container': {
      mx: -3,
      paddingTop:"30px",
    },
  },
};
