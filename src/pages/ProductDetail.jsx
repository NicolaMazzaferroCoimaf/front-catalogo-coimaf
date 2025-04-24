import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api/products";

export default function ProductDetail() {
  const { id } = useParams(); // this is the product code
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((res) => {
        setProduct(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading product:", err);
        setError("Product not found or server error.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-6 text-lg">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{product.description}</h1>
      <p className="text-gray-600 mb-4">Code: {product.code}</p>

      {product.prices && Object.keys(product.prices).length > 0 ? (
        <>
          <h2 className="text-xl font-semibold mt-6 mb-2">Prices</h2>
          {Object.entries(product.prices).map(([listKey, listData]) => (
            <div key={listKey} className="mb-4">
              <h3 className="font-medium">{listData.list}</h3>
              <ul className="ml-4 list-disc">
                {listData.items.map((item, i) => (
                  <li key={i}>
                    {item.unit} – {parseFloat(item.net_price).toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €

                    {item.discount ? ` (discount ${item.discount}%)` : ""}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      ) : (
        <p className="text-gray-500 italic">No price information available.</p>
      )}

      {product.images?.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Images</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={img.file_name}
                className="rounded shadow"
                onError={(e) => {
                  if (!e.target.dataset.fallback) {
                    e.target.src = "/fallback-image.png";
                    e.target.dataset.fallback = "true";
                  }
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
