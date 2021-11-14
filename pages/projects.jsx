import { Typography, Box, Container } from '@mui/material';
import CenterTitle from '@components/CenterTitle';

const Projects = () => {
  return (
    <>

        <CenterTitle 
            title="Projects"
            subtitle="Developing the future of Ergo"
        />
    <Box sx={{ 
        background: 'linear-gradient(0deg, rgba(29,29,32,1) 0%, rgba(46,46,51,1) 100%)',
        pt: 6,
    }}>
        
        
        <Container maxWidth='lg' sx={{ }}>

            <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>

            <Typography variant="p">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non 
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
            </Typography>
        </Container>
    </Box>
    </>
  );
};

export default Projects;