import { Card, CardBody, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Cards(props) {
  const { id, name, image } = props;
  

  return (
    <Card className="card" backgroundColor="rgba(189, 248, 126, 0.42)">
      <CardBody>
        {!!image && <img src={image} alt="charpicture"/>}
        {!!name && (
          <Text color="white" textAlign="center" fontSize="30px">
            {name}
          </Text>
        )}
        <Link to={`/character/${id}`} className="btn">
          See Details
        </Link>
      </CardBody>
    </Card>
  );
}
export { Cards };
