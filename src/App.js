import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import "./scss/index.scss";

import Wallet from "./components/Wallet";
import CreateCard from "./components/Cards/CreateCard";

function App() {
  return (
    <div className="App">
      <h1 className="title">My wallet</h1>
      <Routes>
        <Route path="/" element={<Wallet/>}/>
        {/* <Route path=":movieId" element={<Movie/>}/> */}
        <Route path="/create-card" element={<CreateCard/>}/>
        {/* <Route path="/create-cash" element={<CreateCash/>}/> */}
        {/* <Route path="create element={<CreateCard/>}/>
        <Route path="cards" element={<Cards/>}>
          <Route index element={<Card/>}/>
          <Route path=":cardId" element={<Card/>}/>
        </Route> */}
        <Route
          path="*"
          element={
            <main style={{padding: "1rem"}}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;



// function About() {
//   return (
//     <>
//       <main>
//         <h2>Who are we?</h2>
//         <p>
//           That feels like an existential question, don't you
//           think?
//         </p>
//       </main>
//       <nav>
//         <Link to="/">Home</Link>
//       </nav>
//     </>
//   );
// }