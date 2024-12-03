import { FaGoogle, FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className="text-base font-semibold mb-3">Login with</h2>
            <div className="*:w-full space-y-2">
                <button className="btn"><FaGoogle />Login with Google</button>
                <button className="btn"><FaGithub />Login with Github</button>
            </div>
        </div>

    );
};

export default SocialLogin;