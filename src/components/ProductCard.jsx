import ecoIcon from "../assets/icons/eco.svg";
import officeIcon from "../assets/icons/office.svg";
import hotelIcon from "../assets/icons/water.svg";
import industryIcon from "../assets/icons/wifi.svg";

export default function ProductCard({ prodotto }) {
  const prezzo = parseFloat(
    Object.values(prodotto.prezzi || {})[0]?.voci?.[0]?.prezzo
  );
  const immagine = prodotto.immagini?.[0]?.url || "/fallback-image.png";

  return (
    <div className="flex flex-col md:flex-row gap-6 border-t border-gray-300 py-2">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src={immagine}
          alt={prodotto.descrizione}
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
          <h3 className="text-xl font-bold text-gray-900">{prodotto.codice}</h3>
          <p className="text-sm mt-1">{prodotto.descrizione}</p>

          <p className="mt-4 font-semibold text-gray-900 text-sm uppercase">
            INFO EXTRA
          </p>
          <div className="flex gap-4 mt-2">
            <img src={ecoIcon} alt="Residenziale" className="w-6 h-6" />
            <img src={officeIcon} alt="Uffici" className="w-6 h-6" />
            <img src={hotelIcon} alt="Hotel" className="w-6 h-6" />
            <img src={industryIcon} alt="Industria" className="w-6 h-6" />
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-300">
          <p className="uppercase text-sm text-gray-600">Prezzo</p>
          <p className="text-[#06215D] font-bold text-xl">
            {isNaN(prezzo) ? "–" : prezzo.toFixed(2)} <span className="text-sm">Euro</span>
          </p>
        </div>
      </div>
    </div>
  );
}
