import { useState, useEffect } from "react";
import Card from "./Card";

function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                console.log(data); // Para verificar los datos en consola
                setProducts(data); // Guardar en el estado correctamente
            })
            .catch(error => console.error("Error al cargar los productos:", error));
    }, []);

    return (
        <div key="product-grid" className="grid grid-cols-4 place-items-stretch gap-4 p-8 dark:bg-gray-900">
            {products.map(e => (
                <Card key={e.id} title={e.title} paragraph={e.description} image={e.image} model={e.price} />
            ))}
        </div>
    );
}

export default ProductGrid;