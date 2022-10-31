import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { CompanyModel } from "../models/CompanyModel";
import authService from "../Service/AuthService";
import notificationService from "../Service/NotificationService";


function Register(): JSX.Element {
    const { register, handleSubmit } = useForm<CompanyModel>();
    const navigate = useNavigate();

    function send(user: CompanyModel) {
        authService.register(user)
            .then(() => {
                notificationService.success("Registered successfully!");
                navigate("/companies");
            })
            .catch((err) => notificationService.error(err))
    }


    return (<div className='container-scroller'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className=' text-center m-1'>Register</h2>

                <form onSubmit={handleSubmit(send)}>
                    <div className='.-1'>
                        <label htmlFor='Name' className='form-label'>Company name.
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter company name.'
                            name='name'
                            {...register("name")}
                            required
                        />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor='Email' className='form-label'>E-maill
                        </label>
                        <input
                            type={"email"}
                            className="form-control"
                            placeholder='Enter E-mail'
                            name='email'
                            {...register("email")}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Password' className='form-label'>Password.
                        </label>
                        <input
                            type={"password"}
                            className="form-control"
                            placeholder='Enter password.'
                            name='password'
                            {...register("password")}
                            required
                        />
                    </div>

                    <button type='submit' className='btn btn-outline-primary'>
                        Submit
                    </button>
                    <Link className='btn btn-outline-danger mx-2' to="/companies">
                        Cancel
                    </Link>


                </form>

            </div>
        </div>
    </div>
    );
}
export default Register