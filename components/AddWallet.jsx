import { useState, useContext, useEffect } from "react";
import { Button, Dialog, TextField, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useWallet } from 'utils/WalletContext'

export const AddWallet = ({ children }) => {
    const [walletInput, setWalletInput] = useState('');
    const [open, setOpen] = useState(false);
    const [walletButtonText, setWalletButtonText] = useState('Connect Wallet');

    const { wallet, setWallet } = useWallet()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setWalletInput('');
    };

    const handleWalletFormChange = (e) => {
        setWalletInput(e.target.value);
    };

    const handleSubmitWallet = () => {
        // console.log('wallet input = ' + walletInput)
        localStorage.setItem('Address', walletInput);
        setWalletButtonText(walletInput)
        setWallet({wallets: walletInput})
        setOpen(false);
        setWalletInput('');
    };

    const clearWallet = () => {
        setWallet({wallets: ''})
        setOpen(false);
        localStorage.removeItem('Address');
        setWalletButtonText('Connect Wallet');
        // console.log(wallet.wallets)
    }

    useEffect(() => {
        if (localStorage.getItem('Address')) {
            const item = localStorage.getItem('Address')
            if (walletButtonText != item) {
                setWallet({wallets: item})
                setWalletButtonText(item)
                // console.log(wallet.wallets)
            }
        }
    }, []);

  return (
    <>
        <Button 
        variant="contained"
        id="walletButton"
        sx={{
            color: '#fff',
            fontSize: '1rem',
            px: '1.2rem',
            textTransform: 'none',
            backgroundColor: '#3ABAB4',
            '&:hover': {
                backgroundColor: '#4BD0C9',
                boxShadow: 'none',
            },
            '&:active': {
                backgroundColor: '#3ABAB496',
            },
            textOverflow: 'ellipsis',
            maxWidth: '10em',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
        }}
        onClick={handleClickOpen}>
            {walletButtonText}
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Connect Wallet</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Enter your Ergo wallet public key. This will be used to interact with smart contracts and display assets on the dashboard. Your public key
                will never be stored on our server. 
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Wallet address"
                type="wallet"
                fullWidth
                variant="standard"
                value={walletInput}
                onChange={handleWalletFormChange}
            />
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'space-between' }}>
                <Button onClick={ () => clearWallet() }>Remove wallet</Button>
                <Button onClick={handleClose}>Close Window</Button>
                <Button onClick={handleSubmitWallet}>Connect wallet</Button>
            </DialogActions>
        </Dialog>
    </>
  );
};

export default AddWallet;