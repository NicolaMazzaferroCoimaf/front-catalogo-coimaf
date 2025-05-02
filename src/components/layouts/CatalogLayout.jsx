import { Link } from "react-router-dom";
import logo from "../../assets/coimaf_logo.png";
import '../../assets/css/catalogLayout.css';


export default function CatalogLayout({ children, page, pagination = null }) {
  return (
    <div className="bg-stone-100">
      <div className="min-h-screen bg-white text-sm text-gray-600 flex-1 max-w-6xl mx-auto pb-10">

        {/* Header */}
        <header className="relative px-8 py-4 flex items-center justify-between bg-no-repeat bg-header">
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto m-4 z-10">
            {/* <div>
              <img src={logo} alt="Logo Header" className="h-7 mb-2" />
              <p className="leading-tight text-white">
                Via Piani di Bella, snc, 88060 San Sostene CZ <br />
                Telefono: 0967 522303
              </p>
            </div> */}
            <Link to={'/'}><span className="text-2xl text-white font-semibold uppercase">Catalogo 2025</span></Link>
          </div>
        </header>

        {/* Contenuto */}
        <main className="flex-1 max-w-6xl mx-auto px-4 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-[#06215D] py-9 text-sm text-gray-600 w-full px-4">
          <div className="max-w-6xl mx-auto w-full flex flex-col gap-6">
            {/* Riga centrale responsive */}
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              
              {/* Numero pagina */}
              <span className="text-[#06215D] font-bold text-xl text-center md:text-left">
                {page}
              </span>

              {/* Paginazione (se presente) */}
              {pagination && (
                <div className="flex justify-center flex-grow">{pagination}</div>
              )}

              {/* Logo e contatti */}
              <div className="text-center md:text-right">
                <img src={logo} alt="Logo Footer" className="h-7 mb-2 mx-auto md:ml-auto" />
                <p className="text-sm leading-tight">
                  Via Piani di Bella, snc, 88060 San Sostene CZ <br />
                  Telefono: 0967 522303
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}