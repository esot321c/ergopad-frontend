import { Typography, Grid, Box, TextField, Button, Container } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import PageTitle from '@components/PageTitle';
import theme from '../styles/theme';
import MuiNextLink from '@components/MuiNextLink'
import axios from 'axios';
import { useWallet } from 'utils/WalletContext'
import { useAddWallet } from 'utils/AddWalletContext'
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const initialFormData = Object.freeze({
    name: "",
    email: "",
    sigValue: "",
    ergoAddress: "",
    chatHandle: "",
    chatPlatform: "",
    socialHandle: "",
    socialPlatform: "",
  });

const initialCheckboxState = Object.freeze({
    legal: false,
    risks: false,
    dao: false
})

const Whitelist = () => {
    const [checkboxState, setCheckboxState] = useState(initialCheckboxState)
    const [checkboxError, setCheckboxError] = useState(false)
    const [formData, updateFormData] = useState(initialFormData);
    const [isLoading, setLoading] = useState(false);
    const { wallet } = useWallet()
    const { setAddWalletOpen } = useAddWallet()

    const openWalletAdd = () => {
        setAddWalletOpen(true)
    }

    useEffect(() => {
        updateFormData({
            ...formData,
            ergoAddress: wallet
          });
    }, [wallet])

    const handleChange = (e) => {
        updateFormData({
          ...formData,
            
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
        });
      };

    const handleChecked = (e) => {
        setCheckboxState({
            ...checkboxState,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        // console.log(formData);

        const form = {
            to: "test@faketestemail.com",
            subject: "ErgoPad Seed-Sale Whitelist Application",
            body: JSON.stringify(formData)
          }

          console.log(form)

        axios.post(`${process.env.API_URL}/util/email`, { ...form })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setLoading(false)
            })
            .catch((err) => {
                console.log('ERROR POSTING: ', err);
                setLoading(false)
            }); 

    };

  return (
    <>
        <Container maxWidth="lg" sx={{ px: {xs: 2, md: 3 } }}>
		<PageTitle 
			title="Seed Sale Whitelist"
			subtitle="Apply here to be whitelisted for the ErgoPad seed sale. It is capped at $5000 sigUSD per investor, and we use your social media accounts to confirm unique identities to keep it fair for everyone."
			// main={true}
		/>
        </Container>

        <Grid container maxWidth='lg' sx={{ mx: 'auto', flexDirection: 'row-reverse', px: {xs: 2, md: 3 } }}>

            <Grid item md={4} sx={{ pl: { md: 4, xs: 0 } }}>
				<Box sx={{ mt: { md: 0, xs: 4 } }}>
					<Typography variant="h4" sx={{ fontWeight: '700', lineHeight: '1.2' }}>
						Join the discussion
					</Typography>
				
					<Typography variant="p" sx={{ fontSize: '1rem', mb: 3 }}>
                        You must be in one of the two chatrooms to be eligible for whitelist. 
					</Typography>

					<Box>
						<a href="http://t.me/ergopad" target="_blank" rel="noreferrer">
							<Button 
							variant="contained"
							sx={{
								color: '#fff',
								fontSize: '1rem',
								py: '0.6rem',
								px: '1.2rem',
								mr: '1.7rem',
								textTransform: 'none',
								backgroundColor: theme.palette.primary.main,
								'&:hover': {
								backgroundColor: theme.palette.primary.hover,
								boxShadow: 'none',
								},
								'&:active': {
								backgroundColor: theme.palette.primary.active,
								},
							}}
							>
							Telegram
							</Button>
						</a>

						<a href="https://discord.gg/E8cHp6ThuZ" target="_blank" rel="noreferrer">
							<Button 
							variant="contained"
							sx={{
								color: '#fff',
								fontSize: '1rem',
								py: '0.6rem',
								px: '1.2rem',
								textTransform: 'none',
								backgroundColor: theme.palette.secondary.main,
								'&:hover': {
								backgroundColor: theme.palette.secondary.hover,
								boxShadow: 'none',
								},
								'&:active': {
								backgroundColor: theme.palette.secondary.active,
								},

							}}
							>
							Discord
							</Button>
						</a>
					</Box>
				</Box>

                <Typography variant="h4" sx={{ fontWeight: '700', lineHeight: '1.2', mt: 6 }}>
                    Details
                </Typography>
            
                <Typography variant="p" sx={{ fontSize: '1rem', mb: 3 }}>
                    Seed sale is capped at $5k sigUSD investment. You will receive an email whether your are accepted or if we need further details. We will also notify you in the event that the seed-sale is sold out, if that happens before we get to your application. 
                </Typography>

                <Typography variant="p" sx={{ fontSize: '1rem', mb: 3 }}>
                    You will be sent a URL to go to December 17 when seed-sale is live. Instructions will be provided at that time. 
                </Typography>
			</Grid>


			<Grid item md={8}>
				<Box component="form" noValidate onSubmit={handleSubmit}>
					<Typography variant="h4" sx={{ mb: 4, fontWeight: '700' }}>
						Application Form
					</Typography>
					<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
                            InputProps={{ disableUnderline: true }}
                            required
                            fullWidth
                            id="name"
                            label="Your Name"
                            name="name"
                            type="name"
                            variant="filled"
                            onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
                            InputProps={{ disableUnderline: true }}
                            fullWidth
                            required
                            name="email"
                            label="Your Email"
                            type="email"
                            id="email"
                            variant="filled"
                            helperText="To send approval notice"
                            onChange={handleChange}
						/>
					</Grid>
                    <Grid item xs={12}>
						<TextField
                            InputProps={{ disableUnderline: true }}
                            required
                            fullWidth
                            id="sigValue"
                            label="How much would you like to invest"
                            name="sigValue"
                            type="sigValue"
                            variant="filled"
                            helperText="Enter value in sigUSD (max $5000)"
                            onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
                    <FormControl
                        variant="filled" 
                        fullWidth
                        required
                    >
                        <InputLabel htmlFor="ergoAddress" sx={{'&.Mui-focused': { color: 'text.secondary'}}}>
                            Ergo Wallet Address
                        </InputLabel>
                        <FilledInput
                            id="ergoAddress"
                            value={wallet}
                            onClick={openWalletAdd}
                            readOnly
                            disableUnderline={true}
                            name="ergoAddress"
                            type="ergoAddress"
                            sx={{ 
                                width: '100%', 
                                border: '1px solid rgba(82,82,90,1)', 
                                borderRadius: '4px', 
                            }}
                        />
                        <FormHelperText>
                            Your address must be pre-approved on the whitelist
                        </FormHelperText>
                    </FormControl>
					</Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ color: theme.palette.text.secondary, mt: 3 }}>
                            Join us on either <MuiNextLink href="http://t.me/ergopad" target="_blank" rel="noreferrer">Telegram</MuiNextLink> or <MuiNextLink href="https://discord.gg/E8cHp6ThuZ" target="_blank" rel="noreferrer">Discord</MuiNextLink> to verify for whitelist. Enter your handle below and select which chatroom you&apos;re in.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
						<TextField
                            InputProps={{ disableUnderline: true }}
                            required
                            fullWidth
                            id="chatHandle"
                            label="Your TG or Discord Handle"
                            name="chatHandle"
                            type="chatHandle"
                            variant="filled"
                            onChange={handleChange}
						/>
					</Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl variant="filled" required sx={{ minWidth: '100%', }}>
                            <InputLabel id="chatPlatform" sx={{ '&.Mui-focused': { color: theme.palette.text.secondary } }}>Select Platform</InputLabel>
                            <Select
                                disableUnderline={true}
                                id="chatPlatform"
                                name="chatPlatform"
                                value={formData.chatPlatform}
                                variant="filled"
                                onChange={handleChange}
                                sx={{
                                    border: `1px solid rgba(82,82,90,1)`,
                                    borderRadius: '4px',
                                }}
                            >
                                <MenuItem value="telegram">Telegram</MenuItem>
                                <MenuItem value="discord">Discord</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ color: theme.palette.text.secondary, mt: 3 }}>
                            Please provide another social platform we can confirm your identity on. It&apos;s just a point of reference so we can make sure each person signing up is unique and not trying to exceed the $5k max. We may DM you on there to confirm it is really you. 
                        </Typography>
                    </Grid>
					<Grid item xs={12} sm={6}>
						<TextField
                            InputProps={{ disableUnderline: true }}
                            fullWidth
                            required
                            name="socialHandle"
                            label="Your Handle"
                            type="socialHandle"
                            id="socialHandle"
                            variant="filled"
                            onChange={handleChange}
						/>
					</Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl variant="filled" required sx={{ minWidth: '100%', }}>
                            <InputLabel id="socialPlatform" sx={{ '&.Mui-focused': { color: theme.palette.text.secondary } }}>Select Platform</InputLabel>
                            <Select
                                disableUnderline={true}
                                id="socialPlatform"
                                name="socialPlatform"
                                value={formData.socialPlatform}
                                variant="filled"
                                onChange={handleChange}
                                sx={{
                                    border: `1px solid rgba(82,82,90,1)`,
                                    borderRadius: '4px',
                                }}
                            >
                                <MenuItem value="linkedin">LinkedIn</MenuItem>
                                <MenuItem value="github">GitHub</MenuItem>
                                <MenuItem value="twitter">Twitter</MenuItem>
                                <MenuItem value="reddit">Reddit</MenuItem>
                                <MenuItem value="instagram">Instagram</MenuItem>
                                <MenuItem value="facebook">Facebook</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
					
                    
					</Grid>

                    <FormGroup sx={{mt: 6 }}>
                        <FormControlLabel 
                            control={
                                <Checkbox 
                                    // checked={legal} 
                                    onChange={handleChecked} 
                                    name="legal" 
                                />
                            }
                            label="I have confirmed that I am legally entitled to invest in a cryptocurrency project of this nature in the jurisdiction in which I reside" 
                            sx={{ color: theme.palette.text.secondary, mb: 3 }} 
                        />
                        <FormControlLabel 
                            control={
                                <Checkbox 
                                    // checked={risks} 
                                    onChange={handleChecked} 
                                    name="risks" 
                                />
                            }
                            label="I am aware of the risks involved when investing in a project of this nature. There is always a chance an investment with this level of risk can lose all it's value, and I accept full responsiblity for my decision to invest in this project" 
                            sx={{ color: theme.palette.text.secondary, mb: 3 }} 
                        />
                        <FormControlLabel 
                            control={
                                <Checkbox 
                                    // checked={dao} 
                                    onChange={handleChecked} 
                                    name="dao" 
                                />
                            }
                            label="I understand that the funds raised by this project will be controlled by the ErgoPad DAO, which has board members throughout the world. I am aware that this DAO does not fall within the jurisdiction of any one country, and accept the implications therein." 
                            sx={{ color: theme.palette.text.secondary, mb: 3 }} 
                        />
                        <FormHelperText>{checkboxError && 'You must accept the terms'}</FormHelperText>
                    </FormGroup>
                    <Box sx={{position: 'relative'}}>
                        <Button
                            type="submit"
                            fullWidth
                            disabled={true}
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                        {isLoading && (
                            <CircularProgress
                                size={24}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-9px',
                                    marginLeft: '-12px',
                                }}
                            />
                            )}

                    </Box>
					
				</Box>
			</Grid>

        </Grid>
    </>
  );
};

export default Whitelist;