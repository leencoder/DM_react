import React from 'react';
import './../App.css';
import Header from './Header';
import Footer from './Footer';
import Contact_Main from './ContactMain';

const Home = () => {
    return (
        <div>
            <Header />
            <Contact_Main />
            <Footer />
        </div>
    );
}

export default Home;
