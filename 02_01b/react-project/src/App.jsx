import "./App.css";
import { useReducer, useEffect } from "react";
import chef from "./images/chef.png";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen </h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = ["Macaroni and Cheese", "Salmon with Potatoes", "Tofu with Vegetables", "Minestrone Soup"];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));
console.log(dishObjects);

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button onClick={onStatus}>I want to be Open</button>
        <h2>Welcome to this beautiful restaurant! {openStatus ? "Open" : "Closed"}</h2>
      </div>
      <main>
        <img src={chef} height={200} alt="A photo of a smiling chef owner" />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "None" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  // const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer((status) => !status, true);
  useEffect(() => {
    console.log(`This restaurant is ${status ? "Open" : "Closed"}`);
  }, [status]);
  return (
    <>
      <div>
        <h1>The Restaurant is currently {status ? "open" : "closed"}.</h1>
        <button onClick={toggle}>{status ? "Close" : "Open"} Restaurant</button>
        <Header name="Alex" year="2025"></Header>
        <Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
      </div>
    </>
  );
}

export default App;
