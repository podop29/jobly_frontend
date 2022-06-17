import '../css/singup.css'
import {useState} from 'react'
import {useNavigate} from "react-router-dom"


function SignUp({signup}) {
  const navigate  = useNavigate()

    const INITIAL_STATE = {
      username:"",
      password:"",
      firstName:"",
      lastName:"",
      email:""
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
    try{
      signup(formData)
      setFormData(INITIAL_STATE)
      navigate(`/`)

    }catch(e){
      return(<h1>Duplicate username</h1>)
    }
  }



    return (
      <div className="SignUp">
          <h1>Sign Up</h1>
           <form className='signupForm'>
              <label  className='mt-2' htmlFor="username">UserName</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange}/>

              <label  className='mt-2' htmlFor="password">Password</label>
              <input type="text" name="password" value={formData.password} onChange={handleChange}/>

              <label  className='mt-2' htmlFor="firstName">FirstName</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>

              <label  className='mt-2' htmlFor="lastName">LastName</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>

              <label  className='mt-2' htmlFor="email">Email</label>
              <input type="text" name="email" value={formData.email} onChange={handleChange}/>

              <button className='mt-4' onClick={handleSubmit}>Sign Up</button>
           </form>
      </div>
    );
  }
  
  export default SignUp;
  