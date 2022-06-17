import './App.css';
import JoblyApi from "./api"
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { useState, useEffect } from 'react';


import NavBar from './components/navbar';
import Home from './components/home';
import Companies from "./components/companies"
import Jobs from "./components/jobs"
import Signup from "./components/signup"
import Profile from "./components/profile"
import Login from "./components/login"



function App() {
  const currUserInitial ={
    username:'',
    email:'',
    isAdmin:'',
    firstName:'',
    lastname:'',
    applications:[],
    token:''
  }

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [username, setUsername] = useState(localStorage.getItem('username'))
  const [currUser, setCurrUser] = useState(currUserInitial);
 


  useEffect(()=>{
    const setUser = async()=>{
      if(token){
        JoblyApi.token = token;
        const res = await JoblyApi.getUser(username)
        setCurrUser(currUser =>({
          ...res,
      }))
      }
      else if(!token){
        JoblyApi.token = null;
        setCurrUser(currUserInitial)
      }
    }
    setUser()
  },[token])

  


  const signup = (userdata) =>{
    JoblyApi.register(userdata).then((json)=>{
      handleLogin(userdata)
    }).catch(error=>{
      alert(error)
    })
  }

  const handleLogin = (userdata) =>{
    const {username, password} = userdata;
    JoblyApi.login({username,password}).then((json)=>{
      setToken(json.token)
      JoblyApi.token = token;
      localStorage.setItem('token', json.token);
      localStorage.setItem('username', username);

      setUsername(username)
      alert("Success")
    }).catch(error=>{
      alert(error)
    })
  }

  const logout = () =>{
    localStorage.clear()
    setToken(null)
    JoblyApi.token = null;
    setUsername('')
  }
  return (
    <div className="App">


      <BrowserRouter>
      <NavBar token={token} logout={logout}/>
        <Routes>

          <Route exact path='/' element={<Home/>}/>


          <Route exact path='/companies'  element={<Companies user={currUser}/>}/>

          <Route  path='/companies/:handle' element={<Companies user={currUser}/>}/>


          <Route exact path='/jobs' element={<Jobs user={currUser}/>}/>

          
          <Route exact path='/login' element={<Login login={handleLogin}/>}/>

          <Route exact path='/signup' element={<Signup signup={signup}/>}/>

          <Route exact path='/profile' element={<Profile user={currUser}/>}/>




        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
