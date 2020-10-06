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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <title>Loctech IT Training Institute - Study IT courses online</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Loctech - Best in web training" />
                <meta name="og:title" property="og:title" content="Loctech - Best in web training"></meta>
                <meta name="twitter:card" content="Loctech - Best in web training"></meta>
                <link rel="canonical" href="https://www.loctechng.com/"></link>

                <script async src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script async src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script async src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </Head>

            {children}

            {loader ? <Preloader /> : null}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />

            <ToastContainer transition={Slide} />
        </React.Fragment>
    );
}

export default Layout;