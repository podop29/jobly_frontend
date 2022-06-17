import {useState} from 'react'
import {useNavigate} from "react-router-dom"


function Login({login}) {
  const navigate  = useNavigate()

  const INITIAL_STATE = {
    username:"",
    password:"",
  }

  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData(formData =>({
        ...formData,
        [name]:value
    }))
}

const handleSubmit = (e) =>{
  e.preventDefault()
  login(formData)
  setFormData(INITIAL_STATE)
  navigate(`/`)
}

  return (
    <div className="Login">
        <h1>Login</h1>
         <form className='signupForm'>
            <label  className='mt-2' htmlFor="username">UserName</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange}/>

            <label  className='mt-2' htmlFor="password">Password</label>
            <input type="text" name="password" value={formData.password} onChange={handleChange}/>

            <button className='mt-4' onClick={handleSubmit}>Sign in</button>
         </form>
    </div>
  );
}

export default Login;
