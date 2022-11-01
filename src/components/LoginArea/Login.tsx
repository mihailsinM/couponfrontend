import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {Credentials} from "../models/Credentials";
import authService from "../Service/AuthService";
import notificationService from "../Service/NotificationService";
import authStore from "../States/AuthState";

function Login(): JSX.Element {

    const {register, handleSubmit} = useForm<Credentials>();
    const navigate = useNavigate();

    function send(cred: Credentials) {
        authService.login(cred)
            .then(() => {
                notificationService.success("Hello " + authStore.getState().credentials.clientType);
                navigate("/companies")
            })
            .catch(err => notificationService.error(err));
    }

    return (
        <div className='Login container'>
            <div className='row'>
                <div className='col-md-4 offset-md-4 border rounded p-4 mt-2 shadow'>
                    <h2 className=' text-center m-1'>Login</h2>

                    <form onSubmit={handleSubmit(send)}>
                        <div className='mb-1'>
                            <label htmlFor="email" className='form-label'>E-maill:</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder='E-mail'
                                autoComplete="off"
                                {...register("email")}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password" className='form-label'>Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder='Password'
                                {...register("password")}
                                required
                            />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="clientType" className='form-label'>ClientType:</label>

                            <select {...register("clientType")}>
                                <option value="ADMINISTRATOR">ADMINISTRATOR</option>
                                <option value="COMPANY">COMPANY</option>
                                <option value="CUSTOMER">CUSTOMER</option>
                            </select>
                        </div>


                        <button className='btn btn-outline-primary'>Sign In</button>
                        <Link className='btn btn-outline-primary mx-2' to="/register">
                            Register
                        </Link>

                    </form>
                </div>
            </div>
        </div>

    );
}

export default Login;