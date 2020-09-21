import React from 'react';
import { useSelector } from 'react-redux';
import NavbarTwo from '../components/_App/NavbarTwo';
import MainBanner from '../components/HomeThree/MainBanner';
import SearchLocationForm from '../components/HomeThree/SearchLocationForm';
import Features from '../components/HomeThree/Features';
import AboutUs from '../components/HomeThree/AboutUs';
import Services from '../components/HomeThree/Services';
import HowItWorksTwo from '../components/Common/HowItWorksTwo';
import Pricing from '../components/HomeThree/Pricing';
import ProductCard from '../components/Common/ProductCard';
import VirtualDisinfectionServices from '../components/Common/MoreAbout';
import Testimonials from '../components/Common/Testimonials';
import MakeAnAppointment from '../components/HomeThree/MakeAnAppointment';
import LatestNews from '../components/Common/LatestNews';
import GetOffer from '../components/Common/GetOffer';
import Footer from '../components/_App/Footer';

const Index3 = () => {
    const products = useSelector((state) => state.products)
    return (
        <React.Fragment>
            <NavbarTwo />
            <MainBanner />
            <SearchLocationForm />
            <Features />
            <AboutUs />
            <Services />
            <HowItWorksTwo />
            <Pricing />
            <div className="pt-100 pb-70">
                <ProductCard products={products.slice(0, 3)} />
            </div>
            <VirtualDisinfectionServices />
            <Testimonials />
            <MakeAnAppointment />
            <LatestNews />
            <GetOffer />
            <Footer />
        </React.Fragment>
    );
}

export default Index3;