import './globals.css'
import './fonts.css'
import {Inter} from 'next/font/google'
import dynamic from "next/dynamic";
import {Navbar} from '../components/Navbar.jsx'
import {Footer} from '../components/Footer.jsx'
import { StateProvider } from '@/context/StateContext';

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Inland Marine',
    description: 'Generated by create next app'
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <head>
                {/* meta tag for view port */}
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                {/* meta tag for description */}
            </head>
            <body>
                <StateProvider>
                    <Navbar/>
                    {children}
                    <Footer/>
                </StateProvider>
            </body>
        </html>
    )
}
