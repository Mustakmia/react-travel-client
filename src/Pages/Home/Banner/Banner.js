import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.britainexpress.com/images/attractions/editor3/Museum-of-London-4266.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Tour your life turn your life</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Neeulm_Valley_AJK_%28Arang_Kel%29.jpg/250px-Neeulm_Valley_AJK_%28Arang_Kel%29.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Safe to travel</h3>
            <p> sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th-thumbnailer.cdn-si-edu.com/CbddkFFO3OB80rRz83Iiuf-Z0FY=/1000x750/filters:no_upscale():focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Always stay with you</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
