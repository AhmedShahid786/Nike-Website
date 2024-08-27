//? Local imports (icons,images,data to be displayed)
import { PopularProductCard } from "../components";
import { products } from "../constants";

//? Main component
const PopularProducts = () => {
  return (
    <section
      id="products"
      data-aos="fade-up"
      data-aos-duration={2000}
      className="max-container max-sm:mt-12 sm:mt-0"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our
          <span className="text-coral-red dark-text-special"> Popular </span>
          Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat  dark-text-p">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design and value.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 place-content-center sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
