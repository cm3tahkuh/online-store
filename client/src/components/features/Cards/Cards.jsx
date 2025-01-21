import "./Cards.scss";
import { useState, useEffect } from "react";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:5074/api/get");
        if (!response.ok) {
          throw new Error("Что то пошло не так.");
        }
        const data = await response.json();
        setCards(data);
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
    <section className="cards">
      <div className="container">
        <div className="cards__row" id="album-container">
          {cards.map((card) => (
            <div key={card.id} className="cards__column">
              <img
                className="cards__image"
                src={card.imageUrl}
                alt={card.title}
              />
              <div className="cards__text-block">
                <h2 className="cards__title">{card.title}</h2>
                <p className="cards__description">{card.description}</p>
                <a className="cards__link" href={card.link}>
                  Listen
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
