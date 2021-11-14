import { Typography, Box }  from '@mui/material';

const CenterTitle = ({ title, subtitle }) => {
    return (
        <Box sx={{ my: '5rem', display: 'flex', justifyContent: 'center' }}>
            <Box
                sx={{
                    textAlign: 'center'
                    , maxWidth: '768px'
                }}
            >
                <Typography variant='h1'>
                    {title}
                </Typography>

                <Typography
                    variant='subtitle1'
                >
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    )
}

export default CenterTitle