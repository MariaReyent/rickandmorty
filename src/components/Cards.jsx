import { Card, CardBody, Text } from "@chakra-ui/react";

function Cards(props) {
  const { name, image } = props;

  return (
    <Card className="card" backgroundColor="rgba(189, 248, 126, 0.42)">
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
