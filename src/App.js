import { nanoid } from "nanoid";
import "./App.css";
import "./Products";
import Products from "./Products";
import "./Users";
import Users from "./Users";

function App() {
  // function idd(s) {
  //   let a = nanoid(s);
  //   return a;
  // }
  return (
    <>
      {/* <Products/> */}
      <Users />
    </>
  );
}
export default App;
