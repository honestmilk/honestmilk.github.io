
import React from "react";

// core components
import NavBar from "./Header";
import Footer from "./Footer";

// index page sections
import Hero from "./HeroCarousel";
import AboutUs from "./AboutUs";
import Features from "./Features";
import ContactUs from "./ContactUs2";
import BookVisit from './BookVisit';
import HowItWorks from './HowItWorks';
import Blog from './Blog';

class Index extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <main ref="main">
          <Hero />
          <AboutUs />
          <Features />
          <Blog />
          <BookVisit />
          <HowItWorks />
          <ContactUs />
        </main>
        <Footer />
      </>
    );
  }
}

export default Index;
