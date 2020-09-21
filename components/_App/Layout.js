import React from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import Head from "next/head"
import GoTop from './GoTop'
import Preloader from './Preloader'

const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1000);
    }, [])

    return(
        <React.Fragment>
            <Head>
                <title>Loctech IT Training Institute - Study IT courses online</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Loctech - Best in web training" />
                <meta name="og:title" property="og:title" content="Loctech - Best in web training"></meta>
                <meta name="twitter:card" content="Loctech - Best in web training"></meta>
                <link rel="canonical" href="https://www.loctechng.com/"></link>
            </Head>

            {children}

            {loader ? <Preloader /> : null}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />

            <ToastContainer transition={Slide} />
        </React.Fragment>
    );
}

export default Layout;