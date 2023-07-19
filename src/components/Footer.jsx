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
    <footer className="text-center p-4">
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
        <p>123 Nombre Calle, Ciudad</p>
        <p>Código Postal 0000</p>
      </section>
    </footer>
  );
}
