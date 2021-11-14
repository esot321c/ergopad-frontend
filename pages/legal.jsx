import { Typography, Box, Divider } from '@mui/material';
<<<<<<< HEAD
import PageTitle from '@components/PageHeader';
import MuiNextLink from '@components/MuiNextLink'
=======
>>>>>>> 791e4dcbf4cd16420d287c5106e4dacade942115

const Legal = () => {
  return (
    <>
        <Box sx={{ maxWidth: '760px', mx: 'auto' }}>
<<<<<<< HEAD
            <PageTitle 
                title="Legal Info"
                subtitle="Details about the DAO and corporate structure behind Ergopad"
            />
            
            <Typography variant="p">
                <Typography variant="span" sx={{ color: 'text.primary' }}>ErgoPad is created and run by a Decentralized Autonomous Organization (DAO),</Typography> controlled by 5 
                board members who decide how to utilize funds and which projects to launch on ErgoPad. This 
                DAO also appoints a CEO, CTO, and CMO to run ErgoPad on a day-to-day basis, but keeps a close 
                eye on the projects and votes on any major decisions when necessary. 
            </Typography>

            <Typography variant="p">
                As a decentralized organization, the DAO does not fall under any one country's legal 
                jurisdiction. With that in mind, an investment in ErgoPad requires that you place your 
                trust in the actions of the board members. Each board member is motivated by an appreciation 
                for the tech behind Ergo, and a desire to see the ecosystem thrive. The DAO will always 
                strive to follow the philosophies laid out in the <MuiNextLink id="manifesto-01" 
                href="https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/" target="_blank">Ergo Manifesto</MuiNextLink>.
            </Typography>

            <Typography variant="p">
                Legally speaking, because of the organization of the DAO, there will be no corporation to 
                sue if you are unhappy with the results of an IDO. An investment in any token launched by 
                ErgoPad has the potential to go to zero. By interacting with the smart contracts on 
                the Ergo blockchain through this website, you accept full responsibility for your decisions 
                and agree to not hold the members of the DAO responsible for the price changes in the open 
                market. 
            </Typography>

            <Typography variant="p">
                The developers behind this website will take steps necessary to provide a bug-free and 
                secure experience, but there is no guarantee of an absence of bugs and errors. 
            </Typography>

            <Typography variant="p">
                The team believes that everyone should have the right to have full control of their finances 
                and no government should be able to stop you from investing your crypto in whatever you wish, 
                but with those freedoms come inherent risks. 
=======
            <Box sx={{ mt: '5rem'}}>
                <Typography variant="h1">
                    Legal Info
                </Typography>
                <Typography variant="subtitle1">
                    Details about the DAO and corporate structure behind Ergopad
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

export default Legal;