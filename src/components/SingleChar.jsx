import { getSingleCharacter } from "../api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardBody, Text, Image } from "@chakra-ui/react";

function SingleChar() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const navigation = useNavigate();

  function goBack() {
    navigation(-1);
  }

  useEffect(() => {
    getSingleCharacter(id).then((data) => setData(data));
  }, [id]);

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go back
      </button>
      <Card className="card" backgroundColor="rgba(189, 248, 126, 0.42)">
        <CardBody>
          <Image src={data.image} />
          <Text>{data.name}</Text>
        </CardBody>
      </Card>
    </>
  );
}

export { SingleChar };
