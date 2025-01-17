import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

function WeathCards() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const findWeather = async (cityname) => {
      try {
        const response = await fetch(
          `api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=bbc6ad64da844d903705ded4dc362775`
        );
        const data = await response.json();
        setCity(data.list ? data.list : []);
      } catch (error) {
        console.log("il tempo non passa", error);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      findWeather();
    };
  });
  return (
    <Container>
        <Row>
            <h2>Trova le Previsioni</h2>
            <Form></Form>
        </Row>








      <Row>
        {city.map((element) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default WeathCards;
