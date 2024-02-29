const Footer = () => {
  return (
    <div className="sm:flex justify-evenly items-start bg-footer p-12 text-white  ">
      <div className="flex justify-between w-full sm:w-[50%]">
        <div>
          <h6>CATEGORIES</h6>
          <ul className="text-sm">
            <li className="p-2">Web Builder</li>
            <li className="p-2">Hosting</li>
            <li className="p-2">Data Center</li>
            <li className="p-2">Robotics Automation</li>
          </ul>
        </div>
        <div>
          <h6>CONTACT</h6>
          <ul className="text-sm">
            <li className="p-2">Contact</li>
            <li className="p-2">Privacy Policy</li>
            <li className="p-2">Terms Of Service</li>
            <li className="p-2">Categories</li>
            <li className="p-2">About</li>
          </ul>
        </div>
      </div>
      <div>
        <select className="bg-transparent p-2">
          <option value="Us">United States</option>
        </select>
      </div>
    </div>
  );
};
export default Footer;
