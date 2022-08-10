/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Flex, Link } from 'theme-ui';

export default function PostCard({
  src,
  alt,
  postLink,
  title,
  authorName,
  date,
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.thumbnail}>
        <Image src={src} alt={alt} />
      </Box>

      <Flex sx={styles.postContent}>
        <Heading sx={styles.title}>
          <Link href={postLink} variant="blog">
            {title}
          </Link>
        </Heading>

        <Flex sx={styles.postFooter}>
          <Text sx={styles.postFooter.name}>{authorName}</Text>
          <Text sx={styles.postFooter.date}>{date}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

const styles = {
  card: {
    backgroundColor: '#041c32',
    boxShadow:"0 4px 10px rgba(238,63,34, 0.5)",
    borderRadius: '7px',
    m: '0 15px 40px',
    transition: 'ease-in-out 0.4s',
    '&:hover': {
      boxShadow:"rgba(238,63,34, 0.25) 0px 5px 25px, rgba(238,63,34, 0.12) 0px -20px 30px, rgba(238,63,34, 0.12) 0px 4px 6px, rgba(238,63,34, 0.17) 0px 12px 13px, rgba(238,63,34, 0.09) 0px -5px 25px",
    },
  },

  thumbnail: {
    borderRadius: '7px 7px 0 0',
    overflow: 'hidden',
    display: 'flex',
    justifyContent:"center",
    paddingTop:"50px",
    img: {
      width: '40%',
      height:"40%",
      borderRadius:"50%",
      boxShadow:"rgba(238,63,34, 0.25) 0px 5px 25px, rgba(238,63,34, 0.12) 0px -20px 30px, rgba(238,63,34, 0.12) 0px 4px 6px, rgba(238,63,34, 0.17) 0px 12px 13px, rgba(238,63,34, 0.09) 0px -5px 25px",    
    },
  },
  postContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: ['15px 20px', '25px 30px'],
  },
  title: {
    fontSize: [3, null, null, null, null, 4],
    color: 'heading',
    lineHeight: [1.4, 1.5],
    fontWeight: 700,
    mb: [3, 4, 5],
    pr: [0, null, null, null, 5],
  },
  postFooter: {
    width: '100%',
    justifyContent: 'space-between',
    alignItem: 'center',
    name: {
      fontSize: ['14px', null, 2],
      fontWeight: 500,
      color: 'primary',
      lineHeight: 1.4,
    },
    date: {
      fontSize: ['14px', null, 2],
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
};
