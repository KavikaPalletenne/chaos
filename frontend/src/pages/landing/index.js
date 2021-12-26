import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Box } from "@mui/system";
import { BackgroundWrapper, ParticleWallpaper } from "../../components";
import { BoldTitle, Subtitle } from "./landing.styled";
import { SetAppBarTitleContext } from "../../App";

const OAUTH_CALLBACK_URL = process.env.REACT_APP_OAUTH_CALLBACK_URL;

const Landing = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = React.useState(false);
  const setAppBarTitle = useContext(SetAppBarTitleContext);
  useEffect(() => {
    setAppBarTitle("Shrey's Particle Landing Page");
  }, []);

  return (
    <BackgroundWrapper>
      <ParticleWallpaper />
      <BoldTitle variant="h1">Project Chaos</BoldTitle>
      <Subtitle variant="subtitle">
        Recruitment Drives, without the fuss.
      </Subtitle>
      <Box>
        <Button color="secondary" href={OAUTH_CALLBACK_URL}>
          Get Started
        </Button>
      </Box>
    </BackgroundWrapper>
  );
};

export default Landing;
