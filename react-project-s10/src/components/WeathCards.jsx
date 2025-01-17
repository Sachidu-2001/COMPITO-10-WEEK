import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

function WeathCards() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const findWeather = async (cityName) => {
      try {
        const response = await fetch(
          `api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=bbc6ad64da844d903705ded4dc362775`
        );
        const data = await response.json();
        setCity(data.list ? data.list : []);
      } catch (error) {
        console.log("il tempo non passa", error);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      findWeather(city);
    };
  });
  return (
    <Container>

    
     <Row>
        <h2>Trova le Previsioni</h2>
       <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="cityName">
            <Form.Label>Nome della Città</Form.Label>
            <Form.Control type="text" placeholder="(Es.milano)" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant='primary' type='submit'>Cerca</Button>
          </Form.Group>
        </Form>
      </Row>

      <Row>
        {weather.list.map((element, indice) => (
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
