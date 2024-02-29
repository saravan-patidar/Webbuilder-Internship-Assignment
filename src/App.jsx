import "./App.css";

import Header from "./components/Header";
import Features from "./components/Features";
import LastUpdates from "./components/LastUpdates";
import CardDetails, { TopFlag } from "./components/CardDetails";
import { data } from "./utils/constants";
import DealSection from "./components/DealSection";
import Footer from "./components/Footer";

function App() {
  const Promoted = TopFlag(CardDetails);
  // console.log(data.map((card) => console.log(card)));
  return (
    <div>
      <Header />
      <div className="sm:w-[70%] my-7 m-auto  ">
        <h2 className="sm:text-[40px] text-3xl p-2 ">
          Best Website builders in the US
        </h2>
        <LastUpdates />
        <Features />
        {data.map((card) =>
          card.isPromoted === "true" ? (
            <Promoted card={card} key={card.id} />
          ) : (
            <CardDetails card={card} key={card.id} />
          )
        )}
        <DealSection />
        <div className="h-40 flex justify-between items-center p-5">
          <div className="text-[30px] text-gray-600">
            Sign up and get exclusive
            <br /> special deals
          </div>
          <button className="px-5 mx-5 py-1 rounded-lg bg-button text-white ">
            Sign Up
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
