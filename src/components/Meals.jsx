import { useGlobalContext } from "../context";

export default function Meals() {
  const { meals } = useGlobalContext();

  return (
    <section>
      {meals.map((singleMeal) => {
        console.log(singleMeal);
        return <h4>singleMeal</h4>;
      })}
    </section>
  );
}
