import { useGlobalContext } from "../context";

export default function Meals() {
  const context = useGlobalContext();

  console.log(context);
  return (
    <div>
      <h1>Meals</h1>
    </div>
  );
}
