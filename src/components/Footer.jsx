import Slider from "react-slick";
import destacados from "../json/destacados/destacados.json";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiTag } from "react-icons/hi2";

export function Footer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <footer className="text-center p-4">
      <section className="mt-2 mb-14 p-3">
        <p className="font-quicksand font-semibold flex items-center justify-center text-lg">
          <HiTag className="mr-2" />
          Productos destacados
        </p>

        <Slider {...settings}>
          {destacados.map((item, id) => (
            <div key={id++} className="p-5">
              <p>{item.producto}</p>
              <p className="font-semibold">$ {item.precio}</p>
            </div>
          ))}
        </Slider>
      </section>
      <section className="bg-blue-300 border-blue-600 border-2 p-3 boton-color">
        <p className="font-quicksand font-semibold flex items-center justify-center">
          <FaMapLocationDot className="mr-2" />
          Ubicación
        </p>
        <p>123 Calle Principal, Alcira</p>
        <p>Código Postal 5813</p>
      </section>
    </footer>
  );
}
