import { Link } from "react-router-dom";
import userIcon from "../assets/resources/assets/user.png"
import logo from "../../src/assets/resources/assets/logo.png"
const NavBar = () => {
    return (
        <div className="flex justify-between items-center mt-2">
            <div className="">
            <h2 className="text-lg font-bold">The Dragon News</h2>
            </div>

            <div className="nav space-x-10 text-lg">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>

            <div className="login flex gap-4 items-center">
                <div className="">
                    <img src={userIcon} alt="" />
                </div>
                <button className="btn btn-neutral rounded-none">Login</button>
            </div>
        </div>
    );
};

export default NavBar;