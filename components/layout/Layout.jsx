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
}));

const PageWrapper = styled('div')(({ theme }) => ({
  minHeight: '20vh',
   // marginBottom: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
     marginBottom: theme.spacing(4),
   }
}));

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Snackbars
//  const { enqueueSnackbar } = useSnackbar();

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

      <Box maxWidth='lg' sx={{ position: 'relative', mx: 'auto', height: '0', pointerEvents: 'none', zIndex: '-100' }} aria-hidden="true">
        <Gradients />
      </Box>
      
      <Container maxWidth='lg'>
        <Header />
      </Container>
      {/* <Container sx={{ minHeight: '65vh' }}> */}
        {children}
      {/* </Container> */}
      <Container maxWidth='lg' sx={{ position: 'relative', pt: theme.spacing(6), pb: { xs: theme.spacing(6), md: theme.spacing(3) } }}>
        <Footer />
      </Container>
      
      {isMobile && <BottomNav />}
      </PageWrapper>
      
    </Root>
  );
};

export default Layout;
