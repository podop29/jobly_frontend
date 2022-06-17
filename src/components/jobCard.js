import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import JoblyApi from "../api";



function JobCard({title,salary,equity,user,id}) {





  const handleClick =(e) =>{ 
    JoblyApi.apply(user.username, id)
    window.location.reload(false);
  }
 
    return (
        <Card className="cardP2 mb-2">
        <CardBody>
        <CardTitle tag="h4" className="font-weight-bold text-center">
        {title}
      </CardTitle>
      <CardText className="font-italic">{`salary: ${salary}`}</CardText>
      <CardText className="font-italic">{`Equity: ${equity}`}</CardText>


      {user.applications.includes(id) ? <button onClick={handleClick} className="off">Applied</button> :
      <button onClick={handleClick} className="red">Apply</button>
    }
    

        </CardBody>
    </Card>
    );
  }
  
  export default JobCard;
  