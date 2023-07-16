import Slider from "react-slick";
import destacados from "../json/destacados/destacados.json";

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
        <h2 className="font-quicksand font-semibold text-lg mb-2">
          Productos destacados
        </h2>

        <Slider {...settings}>
          {destacados.map((item, id) => (
            <div key={id++} className="p-5">
              <p>{item.producto}</p>
              <p>$ {item.precio}</p>
            </div>
          ))}
        </Slider>
      </section>
      <section className="border-2 bg-slate-400 p-3 boton-color">
        <p className="font-quicksand font-semibold">Ubicación</p>
        <p>123 Calle Principal, Alcira</p>
        <p>Código Postal 5813</p>
      </section>
    </footer>
  );
}
