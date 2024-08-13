import React from 'react';
import Products from './Products/Products';
import Header from './shared/Header';
import Footer from './shared/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Products/>
            <Footer/>
        </div>
    );
};

export default Home;