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
    <Container className="mt-5 py-5 mb-5 pb-5">
      <Row>
        <h2 className="mb-4">Find the Weather Forecast of your City</h2>
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
            Search
          </Button>
        </Form>
      </Row>
      <Row>
        {weather && weather.list && (
          <Row>
            {weather.list.slice(0, 6).map((forecast, index) => (
              <Col lg={4}>
                <Card style={{ width: "18rem" }} key={index} className="mt-4 border-3 border-primary">
                  <Card.Body>
                    <Card.Title>{weather.city.name}</Card.Title>
                    <Card.Text className="text-black">
                      Date & Time: {forecast.dt_txt}
                    </Card.Text>
                    <Card.Text className="text-black">
                      Temperature: {forecast.main.temp} K degrees
                    </Card.Text>
                    <Card.Text className="text-black">
                      Description: {forecast.weather[0].description}
                    </Card.Text>
                    <Card.Text className="text-black">
                      Umidity: {forecast.main.humidity} g/m3
                    </Card.Text>
                    <Card.Text className="text-black">
                      Wind: {forecast.wind.speed} m/s
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Row>
    </Container>
  );
}

export default WeathCards;
