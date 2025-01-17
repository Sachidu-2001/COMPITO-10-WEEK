import { useState } from "react";
import { Container, Row, Form, Card, Button, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function WeathCards() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const findWeather = async (cityName) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=bbc6ad64da844d903705ded4dc362775`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("il tempo non passa", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    findWeather(city);
  };

  return (
    <Container className="mt-4">
      <Row>
        <h2>Trova le Previsioni della tua Città</h2>
        <Form onSubmit={handleSubmit} className="d-flex w-50">
          <Form.Group className="mb-3" controlId="cityName">
            <Form.Control
              type="text"
              placeholder="(Es.Gorizia)"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="ms-4"
            style={{ height: "38px" }}
          >
            Cerca
          </Button>
        </Form>
      </Row>

      {weather && weather.list && (
        <div>
          {weather.list.slice(0, 5).map((forecast, index) => (
              <Card style={{ width: "18rem" }} key={index} className="mt-4">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{weather.city.name}</Card.Title>
                  <Card.Text className="text-black">
                    Data e ora: {forecast.dt_txt}
                  </Card.Text>
                  <Card.Text className="text-black">
                    Temperatura: {forecast.main.temp} gradi
                  </Card.Text>
                  <Card.Text className="text-black">
                    Vento:{forecast.wind.speed} m/s
                  </Card.Text>
                </Card.Body>
              </Card>
          ))}
        </div>
      )}
    </Container>
  );
}

export default WeathCards;
