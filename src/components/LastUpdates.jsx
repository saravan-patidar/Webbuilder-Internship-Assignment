import info from "../assets/info.png";
import success from "../assets/success.png";
const LastUpdates = () => {
  return (
    <div className="flex items-center justify-between border my-3 border-l-0 border-r-0 p-1 flex-col sm:flex-row">
      <div className="flex items-center flex-wrap sm:flex-nowrap sm:gap-5">
        <span>
          <img src={success} alt="img1" className="inline-block p-1" />
          Last Updated - February 22, 2020
        </span>
        <span>
          <img src={info} alt="img2" className="inline-block p-1" />
          Advertising Disclosure
        </span>
      </div>
      <div>
        <select className="bg-transparent p-2">
          <option> Top Relevant</option>
        </select>
      </div>
    </div>
  );
};
export default LastUpdates;
