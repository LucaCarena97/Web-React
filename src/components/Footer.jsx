import Slider from "react-slick";
import destacados from "../json/destacados/destacados.json";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiTwotoneTags } from "react-icons/ai";

export function Footer() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <footer className="text-center p-6">
      <section className="mt-2 mb-10 p-3 animate__animated animate__bounceInRight">
        <p className="animate-bounce select-none font-quicksand font-semibold flex items-center justify-center text-xl ">
          <AiTwotoneTags className="mr-2" />
          Productos destacados
        </p>

        <Slider {...settings} className="destacados">
          {destacados.map((item, id) => (
            <div key={id++} className="p-4">
              <p>{item.producto}</p>
              <p className="font-semibold">$ {item.precio}</p>
            </div>
          ))}
        </Slider>
      </section>
      <section className="ubicacion p-3 select-none animate__animated animate__backInUp">
        <p className="font-quicksand font-semibold flex items-center justify-center scale-animation">
          <FaMapLocationDot className="mr-2" />
          Ubicación
        </p>
        <p>Sáenz Peña 728, Alcira</p>
        <p>Código Postal 5813</p>
      </section>

      <section className="font-quicksand mt-6 create animate__animated animate__backInUp link">
        <p className="select-none">Hecho por</p>
        <a
          href="https://luca-carena.netlify.app/"
          className="url  scale-animation"
        >
          - Luca Carena -
        </a>
      </section>
    </footer>
  );
}
