import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import JoblyApi from "../api";
import JobsList from './JobsList';

function Jobs({user}) {
    const title = useParams()
    const [jobs, setJobs] = useState([])
    const [searchData, setSearchData] = useState("")
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
      const  getJobs = async() =>{
        const jobs = await JoblyApi.getJobs()
        setJobs(jobs)
        setIsLoading(false)
      }
      getJobs()
    },[])

    if(isLoading){
      return(<h1>Loading</h1>)
    }

  const handleChange = async(e) =>{
    setSearchData(e.target.value)  
    let jobs = await JoblyApi.getJobsNameLike(e.target.value)
    setJobs(jobs)

  }

    return (

  
      <div className="Jobs">

        {user.firstName ?
        <>
        <h1>Jobs</h1>
        { title.title ?  null
            :
            <input className="mt-5" type="text" placeholder="Search Jobs..." value={searchData} onChange={handleChange}/>
            }

            <JobsList user={user} jobs={jobs}/>
            </>
              
              :
          <h3 className="mt-5">Please log in to continue</h3>


              }


          
        
      </div>
    );
  }
  
  export default Jobs;
  