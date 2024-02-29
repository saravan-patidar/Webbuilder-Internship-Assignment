import searchImg from "../assets/IMAGE.png";
const Header = () => {
  return (
    <div className="bg-primary text-white ">
      <ul className="flex justify-around items-center sm:p-5 w-full sm:w-[60%] m-auto flex-col sm:flex-row gap-2 ">
        <li className="flex items-center gap-2 bg-white p-1 rounded-xl shadow shadow-white">
          <img src={searchImg} alt="" />
          <input type="text" className="text-black outline-none w-full" />
        </li>
        <li>Categories</li>
        <li>Website Builders</li>
        <li>Today's deals</li>
      </ul>
    </div>
  );
};
export default Header;
