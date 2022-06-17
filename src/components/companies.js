import CompaniesList from "./CompanyList";
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import JoblyApi from "../api";
function Companies({user}) {

  const {handle} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([])
  const [searchData, setSearchData] = useState("")

    useEffect(()=>{
      async function getCompanies(){
        //If a company handle is true get just one company
        if(handle){
          let company = await JoblyApi.getCompany(handle)
          setCompanies(company)
          setIsLoading(false)
        }//Else get list of all companies
        else{
        let companies = await JoblyApi.getCompanies()
        setCompanies(companies)
        setIsLoading(false)
        }
      }
      getCompanies()

    },[handle])

    if(isLoading){
      return(<h1>Loading</h1>)
    }

    const handleChange = async(e) =>{
      setSearchData(e.target.value)  
      let companies = await JoblyApi.getCompaniesNameLike(e.target.value)
      setCompanies(companies)
  }

   



    return (
      <div className="Companies">

        {
        user.firstName ?
         <>{Companies.handle ?  null
          :
          <input className="mt-5" type="text" placeholder="Search Companies..." value={searchData} onChange={handleChange}/>
         }
      <CompaniesList user={user} companies={companies}/>
      </>
         :
          <h3 className="mt-5">Please log in to continue</h3>
          }
              
      </div>
    );
  }
  
  export default Companies;
  