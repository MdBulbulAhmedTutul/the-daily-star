import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="mt-10 md:w-full lg:w-1/2 mx-auto">
                <h2 className="text-2xl font-semibold my-4">Please Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email..." name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password..." name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold my-3">Dont have an account <Link className="text-xl text-orange-600" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;