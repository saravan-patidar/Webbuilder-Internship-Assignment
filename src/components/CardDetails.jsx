import Image from "../assets/computer.png";
import arrow from "../assets/down_arrow.png";
import Star from "../assets/stars.png";
import Cup from "../assets/cup.png";

const CardDetails = ({ card }) => {
  const { CardData, image, rating } = card;
  return (
    <div className="my-10 sm:grid grid-cols-12 items-center px-3 gap-5 relative md:h-60 text-center sm:text-left">
      <div className="absolute top-5 border rounded-full p-2 w-9 h-9 text-center left-0">
        {card.id}
      </div>
      <div className="col-span-3 text-center">
        <img src={Image} alt="img" className="w-[50%] m-auto" />
        <h5>{image?.name}</h5>
      </div>
      <div className="col-span-7 p-2">
        <p>
          <span className="font-bold ">{CardData?.headline}</span>{" "}
          {CardData?.mainContent}
        </p>
        <div className="py-2">
          <h6 className="font-bold">Main highlights</h6>
          <p className="px-3">{CardData?.highlight?.text}</p>
        </div>
        <button className="text-button">
          <select className="bg-transparent p-2">
            <option> Show more</option>
          </select>
        </button>
      </div>
      <div className="col-span-2 text-center flex flex-col h-full justify-between gap-4">
        <div className="bg-slate-100 py-2 w-24 rounded-b-lg mx-auto ">
          <h3 className="text-3xl">{rating?.rate}</h3>
          <p className="text-sm">{rating?.content}</p>
          <img src={Star} alt="star-img" className="inline-block" />
        </div>
        <button className="px-5 mb-8 py-1 rounded-lg bg-button text-white w-32 m-auto">
          View
        </button>
      </div>
    </div>
  );
};

// high order components
export const TopFlag = (CardDetails) => {
  return (card) => (
    <div className="my-10">
      <div className="-mb-12 items-center p-2 rounded-r-lg bg-orange-400 text-white flex w-28 ">
        <img src={Cup} alt="cup-img" />
        <span className="text-sm">Best Choice</span>
      </div>

      <CardDetails {...card} />
    </div>
  );
};

export default CardDetails;
