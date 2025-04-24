import ecoIcon from "../assets/icons/eco.svg";
import officeIcon from "../assets/icons/office.svg";
import hotelIcon from "../assets/icons/water.svg";
import industryIcon from "../assets/icons/wifi.svg";
import cashRegister from "../assets/cassa.png";

export default function ProductCard({ product }) {
  const price = parseFloat(product.price);
  const image = product.images?.[0]?.url || "/fallback-image.png";

  return (
    <div className="flex flex-col md:flex-row gap-6 border-t border-gray-300 py-2">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src={image}
          alt={product.description}
          onError={(e) => {
            if (!e.target.dataset.fallback) {
              e.target.src = "/fallback-image.png";
              e.target.dataset.fallback = "true";
            }
          }}
          className="w-[400px] h-[460px] object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between text-sm text-gray-700">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{product.code}</h3>
          <p className="text-sm mt-1">{product.description}</p>

          <p className="mt-4 font-semibold text-gray-900 text-sm uppercase">
            Extra Info
          </p>
          <div className="flex gap-4 mt-2">
            <img src={ecoIcon} alt="Residential" className="w-6 h-6" />
            <img src={officeIcon} alt="Office" className="w-6 h-6" />
            <img src={hotelIcon} alt="Hotel" className="w-6 h-6" />
            <img src={industryIcon} alt="Industry" className="w-6 h-6" />
          </div>
          <img src={cashRegister} alt="Cash Register" />
        </div>

        <div className="mt-4 pt-4 border-t border-gray-300">
          <p className="uppercase text-sm text-gray-600">Price</p>
          <p className="text-[#06215D] font-bold text-xl">
            {isNaN(price)
              ? "–"
              : price.toLocaleString("it-IT", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
            })} <span className="text-sm">€</span>
          </p>
        </div>
      </div>
    </div>
  );
}
