import React from "react";
import { UncontrolledCarousel } from "reactstrap";

import banner1 from "../assets/img/banners/b1.png";
import banner2 from "../assets/img/banners/b2.png";

const items = [
  {
    src: banner1,
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: banner2,
    altText: '',
    caption: '',
    header: ''
  }
];

class Carousels extends React.Component {
  render() {
    return (
      <>
        <UncontrolledCarousel items={items} />
      </>
    );
  }
}

export default Carousels;