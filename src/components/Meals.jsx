import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

export default function Meals() {
  const { loading, meals, selectMeal } = useGlobalContext();

  if (loading) {
    return (
      <section className="section">
        <h1>Loading...</h1>
      </section>
    );
  }

  if (meals.length < 1) {
    return (
      <section className="section">
        <h1>No meals matched your search criteria. Please try again!</h1>
      </section>
    );
  }

  return (
    <section className="section-center">
      {meals.map((singleMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;

        return (
          <article key={idMeal} className="single-meal">
            <img
              src={image}
              className="img"
              onClick={() => selectMeal(idMeal)}
            />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn">
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
}
