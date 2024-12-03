import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
const FindUs = () => {
    return (
        <div>
            <h2 className="text-base font-semibold mb-3 mt-10">Find Us On</h2>

            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start pl-7"><FaFacebook/> Facebook</button>
                <button className="btn join-item justify-start pl-7"><FaTwitter/>Twitter</button>
                <button className="btn join-item justify-start pl-7"><FaInstagramSquare/>Instagram</button>
            </div>

        </div>
    );
};

export default FindUs;