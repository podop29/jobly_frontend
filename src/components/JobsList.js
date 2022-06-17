import JobCard from "./jobCard";


function JobsList({jobs, user}) { 

    return (
      <div>
        {jobs.map((j)=>(
            <JobCard key={j.id} id={j.id} user={user} title={j.title} salary={j.salary} equity={j.equity}/>
        ))}
         

      </div>
    );
  }
  export default JobsList;
  