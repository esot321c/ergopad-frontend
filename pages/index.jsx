import Features from '@components/Features';
import Hero from '@components/Hero';
<<<<<<< HEAD
import { Container } from '@mui/material';
=======
import { Typography } from '@mui/material';
>>>>>>> 791e4dcbf4cd16420d287c5106e4dacade942115

const Homepage = () => {
  return (
    <>
<<<<<<< HEAD
      <Container maxWidth='lg'>
        <Hero
          title='Welcome to ErgoPad'
          subtitle='We are a token launch platform for Ergo giving you an opportunity to get in on the ground floor with Ergo token IDOs. We help projects navigate Ergoscript to build safe apps for you to invest in.'
        />

        <Features />
      </Container>
=======
      <Hero
        title='Welcome to ErgoPad'
        subtitle='We are a token launch platform for Ergo giving you an opportunity to get in on the ground floor with Ergo token IDOs. We help projects navigate Ergoscript to build safe apps for you to invest in.'
      />

      <Features />

>>>>>>> 791e4dcbf4cd16420d287c5106e4dacade942115
    </>
  );
};
/* 
<style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`}</style> */

export default Homepage;
