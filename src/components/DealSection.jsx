import DealCard from "./DealCard";

const DealSection = () => {
  return (
    <div className="my-4 p-4">
      <h2 className="text-xl py-5">Related deals you might like for</h2>
      <div className="sm:flex items-center justify-between ">
        <DealCard />
        <DealCard />
        <DealCard />
      </div>
    </div>
  );
};
export default DealSection;
