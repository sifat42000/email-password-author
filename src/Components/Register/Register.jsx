
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase";
import { useState } from "react";

const Register = () => {
  const [registererror,setRegistererror] = useState('')
  const [success,setSuccess] = useState('')

    const handelsubmit = e =>{
        e.preventDefault()
        console.log('from submit')
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setRegistererror('')
        setSuccess('')
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
          console.log(result.user)
          setSuccess('loging success')
        })
        .catch(error =>{
          console.error(error)
          setRegistererror(error.message)
        })
    }

    return (
        
   <div className="w-full flex justify-center">
     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     
     <div className="card-body">
        <form onSubmit={handelsubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        </form>
        {
          registererror && <p className="text-red-600">{registererror}</p>
        }
        {
          success && <p className="text-green-400">{success}</p>
        }
      </div>
     
    </div>
   </div>
  
    );
};

export default Register;