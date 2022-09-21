/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image } from "theme-ui";
import BannerImg from "assets/newLogo.png";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Paper } from "@material-ui/core";
import CoreFeature from "./core-feature";
import LetsTalk from "./letsTalk";


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor:"#ee3f22"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  muiBtn:{
    backgroundColor:"#ee3f22",
    color:"#fff",
    transition:"all 0.2s ease-in",
    width:"120px",
    height:"50px",
    "&:hover":{
      backgroundColor:"#707070",
      borderRadius:"25px"
    }
  },
  slideBg:{
    backgroundColor:"#707070"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" style={{backgroundColor:"#707070"}} ref={ref} {...props} />;
});


export default function Banner() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // const boxVariant = {
  //   visible: { opacity: 1, scale: 1, x:0, transition:{duration:0.9} },
  //   hidden: { opacity: 0, scale: 0, x:700 },
  // }
  // const control = useAnimation()
  // const [ref, inView] = useInView()
  // // console.log("__ref__",inView)
  // useEffect(()=>{
  //   if(inView){
  //     control.start("visible")
  //   }else{
  //     control.start("hidden")
  //   }
  // },[control, inView])

  const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `;
  const transitionImage = `
    transition : all ease-in-out
  `;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Box sx={styles.banner.imageBox}>
            {/* <Image src={BannerImg} sx={{animation: `rotate 1.5s linear infinite`}} alt="banner" /> */}
            <motion.img
              src={BannerImg}
              alt="banner"
              // animate={{
              //   scale: 1,
              //   rotate: 360,
              // }}
              // transition={{
              //   duration: 2,
              //   ease: "easeInOut",
              // }}
              style={{ margin: "0", padding: "0" }}
            />
          </Box>
          <Heading
            sx={{ marginTop: "15px", textTransform: "capitalize" }}
            as="h1"
            variant="heroPrimary"
          >
            Looking for a technology partner for your{" "}
            <span style={{ color: "#3AB4F2" }}>business</span>?
          </Heading>
          <Text as="p" variant="heroSecondary">
            Let us help you with <br /> Custom Software Development{" "}
            <span style={{ color: "#ee3f22" }}>|</span> Business Process
            Outsourcing <span style={{ color: "#ee3f22" }}>|</span> Offshore
            Software Development <span style={{ color: "#ee3f22" }}>|</span>{" "}
            SaaS Products
          </Text>

          <Button variant="contained" className={classes.muiBtn} onClick={handleClickOpen}>Let's Talk</Button>

          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <Paper style={{backgroundColor:"#041c32", height:{xs:"100%", md:"100%"}}}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  FoxCatcher ITS
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  Close
                </Button>
              </Toolbar>
            </AppBar>
            <LetsTalk />
            </Paper>
            
          </Dialog>
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
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      // backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      // backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      backgroundColor: "#06283D",
      width: ["100%", "90%", "535px", null, "60%", "70%", "80%", "90%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
      boxShadow:
        "rgba(238,63,34, 0.25) 0px 40px 45px, rgba(238,63,34, 0.25) 0px -30px 45px, rgba(238,63,34, 0.12) 0px 14px 16px, rgba(238,63,34, 0.17) 0px 10px 35px, rgba(238,63,34, 0.09) 0px -5px 10px",
      padding: "30px 50px",
      borderRadius: "20px",
      transition: "ease-in-out 0.4s",
      // "&:hover": {
      //   boxShadow: "none",
      // },
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",

      img: {
        position: "relative",
        width: "200px",
        height: "150px",
        // borderRadius: "7%",
        mb: ["30px", null, null, null, null, 5],
        // boxShadow:
        //   "rgba(132,243,253, 0.25) 0px 5px 15px, rgba(132,243,253, 0.12) 0px -10px 20px, rgba(132,243,253, 0.12) 0px 4px 6px, rgba(132,243,253, 0.17) 0px 12px 13px, rgba(132,243,253, 0.09) 0px -5px 25px",
      },
    },
  },
};
