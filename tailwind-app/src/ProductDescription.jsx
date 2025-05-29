import { useState, useEffect } from "react";

function ProductDescription() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error("Error al obtener el producto:", error));
  }, []);

  if (!product) {
    return <p className="text-center text-gray-600">Cargando producto...</p>;
  }

  return (
    <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <img src={product.image} alt={product.title} className="w-48 h-48 object-cover rounded" />
      <h2 className="text-2xl font-bold text-gray-800 mt-4">{product.title}</h2>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-lg font-semibold text-blue-600 mt-4">Precio: ${product.price}</p>
      <button className="mt-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
        Comprar ahora
      </button>
    </div>
  );
}

export default ProductDescription;