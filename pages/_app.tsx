import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import '/styles/globals.css';
import theme from '../styles/theme';
import Layout from '@components/layout/Layout';
import { SnackbarProvider } from 'notistack';
import { WalletProvider } from 'utils/WalletContext';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps)  {
	const emotionCache = clientSideEmotionCache;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>ErgoPad</title>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			{/* MUI Theme Provider */}
			<ThemeProvider theme={theme}>
				
				<SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} maxSnack={3} dense> 
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
						<WalletProvider>
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</WalletProvider>
				</SnackbarProvider>
				
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
