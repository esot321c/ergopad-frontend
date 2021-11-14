<<<<<<< HEAD
// import { useEffect } from 'react';
import { useMediaQuery, Container, Box } from '@mui/material';
import { styled, useTheme } from '@mui/system';
// import { useSnackbar } from 'notistack';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import BottomNav from '@components/navigation/BottomNav';
import Gradients from '@components/stylistic/Gradients';

const Root = styled('div')(({ theme }) => ({
  position: 'relative',
  overflowX: 'hidden'
=======
import { useEffect } from 'react';
import { useMediaQuery, Container } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnackbar } from 'notistack';

import Header from '@components/Header';
import Footer from '@components/Footer';
import BottomNav from '@components/navigation/BottomNav';
// import Aurora from '@components/stylistic/Aurora';
import Gradients from '@components/stylistic/Gradients';
import makeStyledScrollbar from 'styles/makeStyledScrollbar';
import pageTransitions from './pageTransitions';
// import { useAuth } from 'src/auth';


const Root = styled('div')(({ theme }) => ({
  position: 'relative',
  // top: 0,
  // left: 0,
  // height: '100vh',
  // width: '100vw',
  overflowX: 'hidden',
  // overflowY: 'hidden',
>>>>>>> 791e4dcbf4cd16420d287c5106e4dacade942115
}));

const PageWrapper = styled('div')(({ theme }) => ({
  minHeight: '20vh',
   // marginBottom: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
     marginBottom: theme.spacing(4),
<<<<<<< HEAD
   }
=======
   },
  // position: 'relative',
  // width: '100vw',
  // height: '100vh',
  // overflowY: 'scroll',
  // overflowX: 'hidden',
  // [theme.breakpoints.up('md')]: {
  //   ...makeStyledScrollbar(theme),
  // },
>>>>>>> 791e4dcbf4cd16420d287c5106e4dacade942115
}));

const Layout = ({ children }) => {
  const theme = useTheme();
<<<<<<< HEAD
=======
  const router = useRouter();
>>>>>>> 791e4dcbf4cd16420d287c5106e4dacade942115
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Snackbars
//  const { enqueueSnackbar } = useSnackbar();

<<<<<<< HEAD
=======
  // Auth State
  // const { dispatch, authState, actions } = useAuth();
//  const { fetchUserFromToken } = actions;

/*   // Check for user auth token and log user and attempt fetching user info if available.
  useEffect(() => {
    // Wrap function so that we can await it inside the useEffect
    const _fetchUserFromToken = async (token) => {
      const res = await fetchUserFromToken(token);
      if (res.success) {
        enqueueSnackbar(`Welcome back ${authState?.user?.userName}!`);
      }
    };

    //1. Get token from Local Storage
    const token = localStorage.getItem('access_token');

    //2. If token exists, get user
    if (token && Object.keys(authState?.user) === 0) {
      _fetchUserFromToken(token);
    }
  }, []); */
>>>>>>> 791e4dcbf4cd16420d287c5106e4dacade942115
  return (
    <Root>
      
      <PageWrapper
         /*  as={motion.div}
          key={router.route}
          variants={pageTransitions}
          initial='hidden'
          animate='visible'
          exit='hidden' */
        >
<<<<<<< HEAD
=======
        
        
      {/* <AnimatePresence exitBeforeEnter>
        <Aurora key={router.route} />
      </AnimatePresence> */}
>>>>>>> 791e4dcbf4cd16420d287c5106e4dacade942115

      <Box maxWidth='lg' sx={{ position: 'relative', mx: 'auto', height: '0', pointerEvents: 'none', zIndex: '-100' }} aria-hidden="true">
        <Gradients />
      </Box>
      
      <Container maxWidth='lg'>
        <Header />
      </Container>
<<<<<<< HEAD
      {/* <Container sx={{ minHeight: '65vh' }}> */}
        {children}
      {/* </Container> */}
      <Container maxWidth='lg' sx={{ position: 'relative', pt: theme.spacing(6), pb: { xs: theme.spacing(6), md: theme.spacing(3) } }}>
=======
      <Container maxWidth='lg' sx={{ minHeight: '75vh' }}>
        {children}
      </Container>
      <Container maxWidth='lg' sx={{ position: 'relative', pt: theme.spacing(6), pb: theme.spacing(3) }}>
>>>>>>> 791e4dcbf4cd16420d287c5106e4dacade942115
        <Footer />
      </Container>
      
      {isMobile && <BottomNav />}
      </PageWrapper>
      
    </Root>
  );
};

export default Layout;
