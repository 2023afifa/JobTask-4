import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const Login = () => {
    const { logInUser, logInUserGoogle } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessage("");

        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                if (result.data.success) {
                    navigate(location?.state ? location?.state : "/");
                }
            })
            .catch(error => {
                console.error(error);
                setErrorMessage(error.message);
            })
    }

    const handleGoogleLogIn = () => {
        logInUserGoogle()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL,
                }
                fetch("http://localhost:5000/user", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>
            <div className="card max-w-xl shadow-xl bg-sky-300 my-20 mx-auto rounded-sm">
                <h2 className="text-center text-2xl text-sky-700 font-semibold pt-10">Log In</h2>
                <p className=" text-center">If you do not have any account <Link to="/register"><span className="text-sky-700 font-semibold">Sign up</span></Link> here</p>
                <p className="text-center">Or, You Can Login with <a onClick={handleGoogleLogIn} className="text-sky-700 font-semibold">Google</a></p>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered rounded-sm" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered rounded-sm" required />
                    </div>
                    {
                        errorMessage && <p className="text-center text-red-500">{errorMessage}</p>
                    }
                    <div className="mt-6 mx-auto">
                        <button className="btn normal-case text-lg bg-sky-700 text-white hover:bg-sky-600 rounded-sm border-none">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;