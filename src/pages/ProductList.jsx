import { useEffect, useRef, useState } from "react";
import { fetchProducts } from "../api/products";
import ProductCard from "../components/ProductCard";
import CatalogLayout from "../components/layouts/CatalogLayout";
import leftIcon from "../assets/icons/left.svg";
import rightIcon from "../assets/icons/right.svg";
import ProductSkeleton from "../components/ProductSkeleton";


export default function ProductList() {
  const [prodotti, setProdotti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [triggeredByPaginate, setTriggeredByPaginate] = useState(false);
  const paginationRef = useRef(null);
  const perPage = 2;

  useEffect(() => {
    setLoading(true);
    fetchProducts(page, perPage).then((res) => {
      setProdotti(res.data);
      setLastPage(res.last_page);
      setLoading(false);

      if (triggeredByPaginate) {
        setTimeout(() => {
          requestAnimationFrame(() => {
            paginationRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
          });
          setTriggeredByPaginate(false);
        }, 150); // 100–200ms, regola in base al tuo layout
      }
      
    });
  }, [page]);
  

  const pagination = (
    <div ref={paginationRef} className="flex justify-center items-center gap-4">
      <button
        onClick={() => {
          setTriggeredByPaginate(true);
          setPage((prev) => Math.max(prev - 1, 1));
        }}
        disabled={page === 1}
        className="px-4 py-2 text-gray-600 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <img src={leftIcon} alt="left" className="h-8" />
      </button>

      <span className="text-gray-700 text-lg font-medium">
        Pagina {page} di {lastPage}
      </span>

      <button
        onClick={() => {
          setTriggeredByPaginate(true);
          setPage((prev) => Math.min(prev + 1, lastPage));
        }}
        disabled={page === lastPage}
        className="px-4 py-2 text-gray-600 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <img src={rightIcon} alt="right" className="h-8" />
      </button>
    </div>
  );

  return (
    <CatalogLayout page={page} pagination={pagination}>
      {loading ? (
        <>
          <ProductSkeleton />
          <ProductSkeleton />
        </>
      ) : (
        <div className="flex flex-col gap-10 animate-fadeIn">
          {prodotti.map((p, i) => (
            <ProductCard key={i} prodotto={p} />
          ))}
        </div>
      )}
    </CatalogLayout>
  );
}
