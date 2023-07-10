import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//cart container
let cart_items = [
  {
    id: 1,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYulZVgagUbjPO-HWe7iua4Sm6jgHEr72xhQ&usqp=CAU",
    productName: "Bi-Cycle",
    color: "Color-Black",
    company: "Company-TATA",
    price: "1000",
  },
  {
    id: 2,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxbAJ4ZD7XvUzZO1OUGMejryfvWJ_y9TMEtYJJ_p708uDEKei2T-NfRFV5ZzhKpfhSCY0&usqp=CAU",
    productName: "T-shirt",
    color: "Color-Black",
    company: "Company-Adidas",
    price: "2000",
  },
  {
    id: 3,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7i-7MeIzDilFzj0uZh-1rZbVm4Q4TcPb49Q&usqp=CAU",
    productName: "Water Bottles",
    color: "Color-B,W,P",
    company: "Company-Sports",
    price: "3000",
  },
  {
    id: 4,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuod9VIc4BfTiQE3ByX979346KS9DjbDy0ug&usqp=CAU",
    productName: "Laptop",
    color: "Color-Black",
    company: "Company-HP",
    price: "3000",
  },
  {
    id: 5,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1k_0tcK6qyRUW2o-uf7tcnrcm9KRLzUGPHQ&usqp=CAU",
    productName: "Mobile(Apple)",
    color: "Color-Grey",
    company: "Company-Apple",
    price: "3000",
  },
  {
    id: 6,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpW_4zbmA21O7w6kAr9BwfZqBYOBh5dPrHJQ&usqp=CAU",
    productName: "Mobile Back Cover",
    color: "Color-Transparent",
    company: "Company-Amazon",
    price: "3000",
  },
  {
    id: 7,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9mQF0Fv5gQXkR_ira03uEaRoRdtCWR2Ocg&usqp=CAU",
    productName: "Table Mate",
    color: "Color-Black",
    company: "Company-Naptol",
    price: "3000",
  },
  {
    id: 8,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfz6sm0t3xBbuNnknhTOayLj_34ATgyg14Sg&usqp=CAU",
    productName: "Mouse",
    color: "Color-Black",
    company: "Company-Logitech",
    price: "3000",
  },
];

function App() {
  let [cart, setCart] = useState([]);

  //Cart item Added
  function cartAdder(id) {
    // console.log(id, cart_item);
    var cart_copy = [...cart];
    cart_items.map((ci) => {
      if (ci.id == id) {
        cart_copy.push(ci);
      }
    });
    setCart(cart_copy);
  }

  //cart item remover

  function cartRemover(id) {
    let cart_copy1 = [...cart];
    cart_copy1 = cart.filter((cc) => cc.id != id);
    setCart(cart_copy1);
  }

  return (
    <div>
      {/* Header */}
      <Header cart_count={cart.length} />
      {/* section */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {cart_items.map((d, i) => (
              <Content
                key={`cart-items-${i}`}
                data={d}
                cartRemover={cartRemover}
                cartAdder={cartAdder}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
