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
        {weather.list.map((forecast, index) => (
          <Card style={{ width: "18rem" }} key={index} className='mt-4'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{weather.city.name}</Card.Title>
              <Card.Text>
                Data e ora: {forecast.dt_txt}
              </Card.Text>
              <Card.Text>
                Temperatura: {forecast.main.temp} gradi
              </Card.Text>
              <Card.Text>
                Vento:{forecast.wind.speed} m/s
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default WeathCards;
