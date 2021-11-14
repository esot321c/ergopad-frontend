import { Typography, Box, Divider } from '@mui/material';
<<<<<<< HEAD
import PageTitle from '@components/PageHeader';
import MuiNextLink from '@components/MuiNextLink'
=======
>>>>>>> 791e4dcbf4cd16420d287c5106e4dacade942115

const About = () => {
  return (
    <>
        <Box sx={{ maxWidth: '760px', mx: 'auto' }}>
<<<<<<< HEAD
            <PageTitle 
                title="About ErgoPad"
                subtitle="Read about our team, our philosophy, and how we plan to proceed into the future"
            />

            <Typography variant="p">
                <Typography variant="span" sx={{ color: 'text.primary' }}>ErgoPad is a launch platform</Typography> for offering token IDOs intended to provide funding
                for new projects within the Ergo ecosystem. Ergopad will release its own native token 
                through an IDO (Initial Dex Offering), and users will be able to trade ergo for these 
                tokens and stake them through smart contracts. 
            </Typography>
            
            <Typography variant="p">
                The <MuiNextLink key="tokenomics-01" href="/token">tokenomics</MuiNextLink> will be 
                controlled via smart contracts, and the governing body will be 
                set up as DAO (decentralized autonomous organization). All tokens and smart contracts 
                will be voted on by memebers of the DAO, and no corporate entity will have control over these 
                token issuances. It will all happen on chain. 
            </Typography>

            <Typography variant="h3">
                Our Philosophy
            </Typography>

            <Typography variant="p">
                We believe that all people should have full access to and full control over their finances. 
                No government should have the right to control what someone can and can't invest in, or how 
                they can spend their money. With that in mind, personal responsibility is an import asepct of 
                this philosophy. 
            </Typography>

            <Typography variant="p">
                Many would argue that a fully open economic system as described above opens people up to scams. 
                What really seems to be happening in crypto is that users are learning to be more cautious 
                and getting better at identifying bad actors. Developers are adopting a more transparent
                and communicative approach to producing software, and users are given an opportunity to evaluate 
                project code in an open source environment. 
            </Typography>

            <Typography variant="p">
                As the industry matures, users are expecting better tools to interact with blockchain, and 
                projects that began with creative new features are beginning to show their flaws. Chains like Ergo have 
                arrived at a time where the industry is shifting from the accounting model into an eUTXO system 
                that does away with gas fees and returns to the true philosophies Bitcoin began with: a financial 
                system for anyone that's inexpensive to use and does not allow certain individuals excess control 
                over others. 
            </Typography>

            <Typography variant="p">
                Because the eUTXO system is still in its infancy, the user experience is severly lacking in 
                comparison to other projects that have had a several year head start. However, that leaves a 
                lot of room for growth, and we would like to be part of that growth. ErgoPad was created to 
                generate financial backing to the developers who need it, so we can help the Ergo platform grow 
                into a safe, accessible financial ecosystem where everyone can get involved. All dApps should 
                provide an experience where a user's data is only shared when they want it to, and where they can 
                leverage or spend their money any way they wish with minimal fees for doing so. 
            </Typography>

            <Typography variant="p">
                That is what we'd like to build. We'd love to have you join us on this journey! 
=======
            <Box sx={{ mt: '5rem'}}>
                <Typography variant="h1">
                    About ErgoPad
                </Typography>
                <Typography variant="subtitle1">
                    Learn more about the project
                </Typography>
                <Divider sx={{ width: '2rem' }} />
            </Box>
            
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
>>>>>>> 791e4dcbf4cd16420d287c5106e4dacade942115
            </Typography>
        </Box>
    </>
  );
};

export default About;