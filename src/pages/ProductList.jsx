import { useEffect, useRef, useState } from "react";
import { fetchProducts } from "../api/products";
import ProductCard from "../components/ProductCard";
import CatalogLayout from "../components/layouts/CatalogLayout";
import leftIcon from "../assets/icons/left.svg";
import rightIcon from "../assets/icons/right.svg";
import ProductSkeleton from "../components/ProductSkeleton";
import { Link, useSearchParams } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastPage, setLastPage] = useState(1);
  const [triggeredByPaginate, setTriggeredByPaginate] = useState(false);
  const paginationRef = useRef(null);
  const perPage = 2;

  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = useState(initialPage);

  // Sincronizza lo stato page quando cambia la query string
  useEffect(() => {
    const queryPage = parseInt(searchParams.get("page") || "1", 10);
    if (queryPage !== page) setPage(queryPage);
  }, [searchParams]);

  useEffect(() => {
    setLoading(true);
    fetchProducts(page, perPage).then((res) => {
      setProducts(res.data);
      setLastPage(res.last_page);
      setLoading(false);

      if (triggeredByPaginate) {
        setTimeout(() => {
          requestAnimationFrame(() => {
            paginationRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
          });
          setTriggeredByPaginate(false);
        }, 150);
      }
    });
  }, [page]);

  const handlePageChange = (newPage) => {
    setTriggeredByPaginate(true);
    setSearchParams({ page: newPage });
    setPage(newPage);
  };

  const pagination = (
    <div ref={paginationRef} className="flex justify-center items-center gap-4">
      <button
        onClick={() => handlePageChange(Math.max(page - 1, 1))}
        disabled={page === 1}
        className="px-4 py-2 text-gray-600 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <img src={leftIcon} alt="previous" className="h-8" />
      </button>

      <span className="text-gray-700 text-lg font-medium">
        Page {page} of {lastPage}
      </span>

      <button
        onClick={() => handlePageChange(Math.min(page + 1, lastPage))}
        disabled={page === lastPage}
        className="px-4 py-2 text-gray-600 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <img src={rightIcon} alt="next" className="h-8" />
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
          {products.map((product, i) => (
            <Link
              to={`/products/${product.code}`}
              state={{ fromPage: page }}
              key={i}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      )}
    </CatalogLayout>
  );
}
