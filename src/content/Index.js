
import React from "react";

// core components
import NavBar from "./Header";
import Footer from "./Footer";

// index page sections
import Hero from "./HeroCarousel2";
import AboutUs from "./AboutUs";
import ContactMenu from "./ContactMenu";
import Features from "./Features";
import ContactUs from "./ContactUs2";
import BookVisit from './BookVisit';
import HowItWorks from './HowItWorks';
import PurityMeter from './PurityMeter';
import FAQ from './FAQ';
import Blog from './Blog';

class Index extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <main ref="main">
          <Hero />
          <ContactMenu />
          <AboutUs />
          <Features />
          <Blog />
          <PurityMeter />
          <BookVisit />
          <FAQ />
          <HowItWorks />
          <ContactUs />
        </main>
        <Footer />
      </>
    );
  }
}

export default Index;
