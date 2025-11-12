import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({logData}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate();
  const verification = (e) => {
    e.preventDefault();
    if (logData?.email === email && logData?.password === password) {
      alert("login successffully")
      navigate('/dashboard');
    } else {
      alert("invalid credentials")
    }
   }
    return (
      <>
        <div>Login</div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button onClick={verification} type="button" class="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
}

export default Login