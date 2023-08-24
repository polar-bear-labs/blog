import { AppProps } from 'next/app'
import '../styles/index.css'
import { UserProvider } from '../lib/UserContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
}