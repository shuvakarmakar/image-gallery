import React from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner style={{ height: '200px' }} />
            <ImageGallery></ImageGallery>
            <Footer></Footer>
        </>
    );
};

export default Home;