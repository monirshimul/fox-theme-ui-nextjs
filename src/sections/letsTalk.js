/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import FeatureThumb from "assets/contact.png";
import shapePattern from "assets/shape-pattern2.png";
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import EmailIcon from '@material-ui/icons/Email';
import { motion, useAnimation } from "framer-motion";
import { Divider } from "@material-ui/core";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa';
import { useRouter } from 'next/router'

const proName = () => {
  return (
    <>
      <h3>
        <span style={{ color: "#ee3f22" }}>Contact Us, and lets have a Chat</span>
      </h3>
    </>
  );
};

const data = {
  subTitle: "Modernizing Office Attendance",
  // title: `Meet Our Latest Product, i-client`,
  description:
    "No More Fingerprint Devices on Office Premise for Attendance. State of art Facial Recognition and Geolocation based Mobile Apps Solution will Revolutionize Your Employee Attendance Management.",
  btnName: "Learn More",
  btnURL: "#",
};

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      minWidth:200,
      backgroundColor: "#06283D",
      marginBottom:"30px",
      borderRadius:"10px",
      boxShadow:
      "rgba(132,243,253, 0.25) 0px 5px 25px, rgba(132,243,253, 0.12) 0px -20px 30px, rgba(132,243,253, 0.12) 0px 4px 6px, rgba(132,243,253, 0.17) 0px 12px 13px, rgba(132,243,253, 0.09) 0px -5px 25px",
    },
  }));

export default function LetsTalk() {
    const classes = useStyles();
    const router = useRouter();

    const colorChnage = (data)=>{
        return (
            <span style={{color:"#ee3f22"}}>{data}</span>
        )
    }


    const routingToSocialPage = (word)=>{
      console.log("In the YouTube")
      router.push(word)
    }



  return (
    <section sx={{ variant: "section.coreFeature"}} id="new-product">
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={proName()}
            // description={"Hey, If you have any quieres, Let's have a conversation"}
          />
          <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor:"#0F3460"}}>
            <SettingsPhoneIcon style={{color:"#ee3f22"}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText  primary="Phone" secondary={colorChnage("+8801711516677, +8801912991020")} style={{color:"#fff"}} />
      </ListItem>
      <Divider style={{backgroundColor:"#4B8673"}}/>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor:"#0F3460"}}>
            <EmailIcon style={{color:"#ee3f22"}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary={colorChnage("contact@foxcatcherits.com")} style={{color:"#fff"}} />
      </ListItem>
      <Divider style={{backgroundColor:"#4B8673"}}/>
      <ListItem>
        <ListItemAvatar style={{cursor:"pointer"}} onClick={()=>routingToSocialPage("https://www.facebook.com/")}>
          <Avatar style={{backgroundColor:"#0F3460"}}>
            <FaFacebookF style={{color:"#ee3f22"}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemAvatar style={{cursor:"pointer"}} onClick={()=>routingToSocialPage("https://twitter.com/")}>
          <Avatar style={{backgroundColor:"#0F3460"}}>
            <FaTwitter style={{color:"#ee3f22"}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemAvatar style={{cursor:"pointer"}} onClick={()=>routingToSocialPage("https://github.com/FoxCatcher-IT-Solutions")}>
          <Avatar style={{backgroundColor:"#0F3460"}}>
            <FaGithub style={{color:"#ee3f22"}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemAvatar style={{cursor:"pointer"}} onClick={()=>routingToSocialPage("https://www.linkedin.com/")}>
          <Avatar style={{backgroundColor:"#0F3460"}}>
            <FaLinkedin style={{color:"#ee3f22"}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemAvatar style={{cursor:"pointer"}} onClick={()=>routingToSocialPage("https://www.youtube.com/")}>
          <Avatar style={{backgroundColor:"#0F3460"}}>
            <FaYoutube style={{color:"#ee3f22"}} />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
    </List>
        </Box>


        
       
        <Box sx={styles.thumbnail}>
          <motion.img
            src={FeatureThumb}
            alt="Thumbnail"
            animate={{
              scale: [0.3, 0.4, 0.3, 0.4, 0.3],
              rotate: [0, 0, 180, 180, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
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
    display: "flex",
    paddingTop: "50px",
    marginTop: "70px",
    boxShadow:
      "rgba(132,243,253, 0.25) 0px 5px 25px, rgba(132,243,253, 0.12) 0px -20px 30px, rgba(132,243,253, 0.12) 0px 4px 6px, rgba(132,243,253, 0.17) 0px 12px 13px, rgba(132,243,253, 0.09) 0px -5px 25px",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 3],
    borderRadius: "15px",
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
    ml: ["auto", null, null, null, 8],
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 11],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto",400,560],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
};
