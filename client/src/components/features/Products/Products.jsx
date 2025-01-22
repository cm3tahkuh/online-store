import { useEffect, useState } from "react";
import "./Products.scss"

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:5074/api/Product");

        if (!response.ok) {
          throw new Error("Что то пошло не так.");
        }

        const data = await response.json();
        setProducts(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) return <h1 className="loading">ЗАГРУЗКА...</h1>;

  if (error) return <h1 className="error">ОШИБКА! - {error}</h1>;

  return (
    <section className="products">
      <div className="container">
        <div className="products__row">
          {products.map((product) => (
            <a href="#"  key={product.id} className="products__card">
              <img
                className="products__card-image"
                src={product.imageLink}
                alt={product.title}
              />
              <p className="products__card-name">{product.name}</p>
              <span className="products__card-price">${product.price}</span>
            </a>
          ))};
     
        </div>
      </div>
    </section>
  );
};

export default Products;
