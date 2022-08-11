import { Link } from "react-router-dom";
import "./styles.scss";

function Wallet() {
    return (
      <>
        <main>
          <section className="common">
            <article className="balance">
              <h2>Current balance</h2>
                <ul>
                  <li>UAH: 100</li>
                  <li>USD: 500</li>
                </ul>
            </article>
            <article className="cash">
              <h3>Cash amount</h3>
                <ul>
                    <li>100 UAH<button>Edit</button></li>
                    <li>200 USD<button>Edit</button></li>
                </ul> 
            </article>
            <article className="cards">
              <h3>My cards</h3>
              <ul>
                  <li>100 USD
                  {/* <NavLink to={`cardId=${popularMovie.id}`}/> */}
                    <button>Edit</button></li>
                  <li>200 USD<button>Edit</button></li>
              </ul>  
            </article>
          </section>
          <section className="cards-holder">
            <div className="cards-holder__btn">
              <Link to="/create-card"><button>Add card</button></Link>
              <Link to="/create-cash"><button>Add cash</button></Link>
            </div>
            <ul>
              <li className="card">
                <div>
                  <p>CARDNUMBER</p>
                  <p>CARDDATE</p>
                  <p>AMOUNT</p>
                </div>
                <button>Delete</button>
                </li>
              <li className="card">
                <div>
                  <p>CARDNUMBER</p>
                  <p>CARDDATE</p>
                  <p>AMOUNT</p>
                </div>
                <button>Delete</button></li>
            </ul>  
          </section>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }

  export default Wallet;