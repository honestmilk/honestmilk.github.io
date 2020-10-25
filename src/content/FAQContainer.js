
import React from "react";

// core components
import NavBar from "./Header";
import Footer from "./Footer";
import ContactMenu from "./ContactMenu";

// index page sections
import FAQ from './FAQ';

class FAQC extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <main ref="main">
          <FAQ />
          <ContactMenu />
        </main>
        <Footer />
      </>
    );
  }
}

export default FAQC;
