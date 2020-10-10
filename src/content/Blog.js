
import React from "react";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import blog1 from "../assets/img/blogs/blog1.jpeg";
import blog2 from "../assets/img/blogs/blog2.jpeg";
import blog3 from "../assets/img/blogs/blog3.jpeg";
import blog4 from "../assets/img/blogs/blog4.jpeg";

import {
  Card,
  Container,
  Row,
  CardImg,
  CardImgOverlay, 
  CardTitle, 
  CardText
} from "reactstrap";

class Features extends React.Component {
  state = {};
  componentDidMount() {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <section className="section section-lg pt-0" id="blog">
          <Container>
            <h1>
              Blog
            </h1>
            <Row className="justify-content-center mt-4">
              <Carousel
                additionalTransfrom={0}
                arrows
                showDots
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={true}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={true}
                renderDotsOutside={true}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                <Card className="shadow border-0 ms-2" style={{flexGrow: 1}}>
                  <CardImg className="card-image" width="100%" src={blog1} alt="Card image cap" />
                  <CardImgOverlay>
                    <CardTitle>
                      <h3 className="text-white">
                        Most Common Adulterants in Milk
                      </h3>
                    </CardTitle>
                    <CardText className="text-white">Urea, Formalin, Detergents, Ammonium Sulfate, Boric Acid, Caustic Soda, Benzoic Acid, Salicylic Acid, Hydrogen peroxide, Sugars, and Melamine.</CardText>
                  </CardImgOverlay>
                </Card>
                <Card className="shadow border-0 ms-2" style={{flexGrow: 1}}>
                  <CardImg className="card-image" width="100%" src={blog2} alt="Card image cap" />
                  <CardImgOverlay>
                    <CardTitle>
                      <h3 className="text-white">
                        Most Common Adulterants in Milk
                      </h3>
                    </CardTitle>
                    <CardText className="text-white">Urea, Formalin, Detergents, Ammonium Sulfate, Boric Acid, Caustic Soda, Benzoic Acid, Salicylic Acid, Hydrogen peroxide, Sugars, and Melamine.</CardText>
                  </CardImgOverlay>
                </Card>
                <Card className="shadow border-0 ms-2" style={{flexGrow: 1}}>
                  <CardImg className="card-image" width="100%" src={blog3} alt="Card image cap" />
                  <CardImgOverlay>
                    <CardTitle>
                      <h3 className="text-white">
                        Most Common Adulterants in Milk
                      </h3>
                    </CardTitle>
                    <CardText className="text-white">Urea, Formalin, Detergents, Ammonium Sulfate, Boric Acid, Caustic Soda, Benzoic Acid, Salicylic Acid, Hydrogen peroxide, Sugars, and Melamine.</CardText>
                  </CardImgOverlay>
                </Card>
                <Card className="shadow border-0 ms-2" style={{flexGrow: 1}}>
                  <CardImg className="card-image" width="100%" src={blog4} alt="Card image cap" />
                  <CardImgOverlay>
                    <CardTitle>
                      <h3 className="text-white">
                        Most Common Adulterants in Milk
                      </h3>
                    </CardTitle>
                    <CardText className="text-white">Urea, Formalin, Detergents, Ammonium Sulfate, Boric Acid, Caustic Soda, Benzoic Acid, Salicylic Acid, Hydrogen peroxide, Sugars, and Melamine.</CardText>
                  </CardImgOverlay>
                </Card>
              </Carousel>
            </Row>
          </Container>
        </section>
      
      </>
    );
  }
}

export default Features;

