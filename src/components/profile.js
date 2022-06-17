import '../css/profile.css'
import {useState} from 'react'
import JoblyApi from '../api'
function Profile({user}) {
  const INITIAL_DATA = {
    firstName:user.firstName,
    lastName:user.lastName,
    email:user.email,
    password:""
  }
 
 
    const [formData, setFormData] = useState(INITIAL_DATA)


    const handleChange = (e) =>{
      const {name,value} = e.target;
      setFormData(formData =>({
          ...formData,
          [name]:value
      }))
  }

      const onSubmit = (e) =>{
        e.preventDefault();
        const username = user.username
        JoblyApi.update({username, ...formData})
      }

    return (
      <div className="Profile">
          <h3 className="mt-1">{user.username}s Profile</h3>
          <form>
          <label  className='mt-1' htmlFor="firstName: "> First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>

            <label  className='mt-2' htmlFor="lastName: "> First Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>

            <label  className='mt-2' htmlFor="email: "> First Name</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange}/>

            <label  className='mt-2' htmlFor="password: ">Confirm Password</label>
            <input type="text" name="password" value={formData.password} onChange={handleChange}/>
            <button onClick={onSubmit} className='mt-4'>Change Profile</button>
          </form>
          
        
      </div>
    );
  }
  
  export default Profile;
  