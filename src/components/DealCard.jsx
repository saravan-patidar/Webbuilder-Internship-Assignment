import Image from "../assets/computer.png";
const DealCard = () => {
  return (
    <div className=" sm:w-60 ">
      <div className="p-5">
        <img src={Image} alt="img" className=" m-auto" />
      </div>
      <div>
        <div className="text-[9px] text-blue-600">
          <span className="bg-slate-200 p-1 rounded mr-4 my-2">20% off</span>
          <span className="bg-slate-200 p-1 rounded mr-4">Limited Time</span>
        </div>
        <h4 className="text-center p-2">Webbuilder 1</h4>
        <p className="text-sm">Computer Modern clasic with wix support</p>
        <div className="p-1">
          <span>$39.96</span>
          <span className="px-1 text-gray-500 text-[12px]">$49.96</span>
          <span className="text-red-800 text-[10px] px-2">(20% off)</span>
        </div>
        <button className="px-5 mx-5 py-1 rounded-lg bg-button text-white w-[90%] ">
          View Deal
        </button>
      </div>
    </div>
  );
};
export default DealCard;
