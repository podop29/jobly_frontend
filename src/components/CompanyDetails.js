import {useState,useEffect} from 'react'
import JobsList from './JobsList';

function CompanyDetails({handle,name, description, logoUrl,jobs, user}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    setIsLoading(false)
  },[])

  if(isLoading){
    return(<h1>Loading</h1>)
  }

   
  
    return (
        <>
            <h1>{name}</h1>
            <h3>{description}</h3>

            <JobsList user={user} jobs={jobs}/>
        </>
        
    )
     
  }
  
  export default CompanyDetails;
  