import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("../assets/img/banners/b1.png"),
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: require("../assets/img/banners/b2.png"),
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