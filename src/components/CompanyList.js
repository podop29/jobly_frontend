import CompanyCard from "./CompanyCard";
import CompanyDetails from "./CompanyDetails";


function CompaniesList({companies, user}) {  




    return (
      <div className="Companies">
        
        {companies instanceof Array ? 
        companies.map((c)=>(
          <CompanyCard key={c.handle} handle={c.handle} name={c.name} description={c.description} logoUrl={c.logoUrl}/>
          ))
        :
        <CompanyDetails key={companies.handle} user={user} jobs={companies.jobs} handle={companies.handle} name={companies.name} description={companies.description} logoUrl={companies.logoUrl}/>
        }
         

      </div>
    );
  }
  
  export default CompaniesList;
  