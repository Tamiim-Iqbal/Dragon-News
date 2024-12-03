import moment from "moment";
import logo from "../../src/assets/resources/assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-3">
            <div className="logo">
                <img className="w-[300px]" src={logo} alt="" />
            </div>
            <h2 className="text-gray-500">Journalism Without Fear or Favour</h2>
            <p className="font-medium">{moment().format("dddd, Do MMMM  YYYY")}</p>
        </div>
    );
};

export default Header;