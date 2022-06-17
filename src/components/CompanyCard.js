import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import {useNavigate} from "react-router-dom"
import "../css/companyCard.css"
function CompanyCard({handle,name, description, logoUrl}) {
  const navigate  = useNavigate()


  const handleChange = () =>{
    navigate(`/companies/${handle}`)
    window.location.reload(false);
  }


    return (
        <Card onClick={handleChange} className="cardP">
            <CardBody>
            <CardTitle tag="h4" className="font-weight-bold text-center">
            {name}
          </CardTitle>
          <CardText className="font-italic">{description}</CardText>
            </CardBody>
        </Card>

    );
  }
  
  export default CompanyCard;
  