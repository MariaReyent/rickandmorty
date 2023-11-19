import { Card, CardHeader, CardBody, CardFoote, Text } from "@chakra-ui/react";

function Cards(props) {
  const { name, image } = props;

  return (
    <Card className="card">
      <CardBody>
        {!!image && <img src={image} />}
        {!!name && (
          <Text color="green" textAlign="center" fontSize="20px">
            {name}
          </Text>
        )}
      </CardBody>
    </Card>
  );
}
export { Cards };
