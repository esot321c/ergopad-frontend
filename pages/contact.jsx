import { Typography, Container, Divider } from '@mui/material';
import PageTitle from '@components/PageHeader';

const Contact = () => {
  return (
    <>
        <Container sx={{ maxWidth: '760px', mx: 'auto' }}>
            <PageTitle 
                title="Get in touch with the ErgoPad team"
                subtitle="We are always happy to answer your questions and consider any suggestions. "
            />
            
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
    </>
  );
};

export default Contact;