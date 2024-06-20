"use client";
import Carousel from "react-material-ui-carousel";
import "./Carsoul.css";

const images = [
  {
    src: "https://res.cloudinary.com/dpiie27st/image/upload/v1715062545/house-8629368_1280_by2jab.jpg",
    caption: "استثمر في عقارك... أرباح مضمونة!",
  },
  {
    src: "https://res.cloudinary.com/dpiie27st/image/upload/v1715062676/villa-8342356_1280_eeqcbz.jpg",
    caption: "استثمر بذكاء... امتلك عقارك الآن!",
  },
  {
    src: "https://res.cloudinary.com/dpiie27st/image/upload/v1715062912/realstate/twilight-8171206_1280_afby0t.jpg",
    caption: "استثمر بذكاء... امتلك عقارك الآن!",
  },
];

function Carsoul() {
  return (
    <Carousel
      animation="slide"
      autoPlay={true}
      navButtonsAlwaysVisible={false}
      navButtonsProps={{
        style: {
          display: "none",
        },
      }}
      indicators={false}
      className="carsoul"
    >
      {images.map((image, index) => (
        <div key={index}>
          <img loading="lazy"  src={image.src} alt="Image" />
        </div>
      ))}
    </Carousel>
  );
}

export default Carsoul;
