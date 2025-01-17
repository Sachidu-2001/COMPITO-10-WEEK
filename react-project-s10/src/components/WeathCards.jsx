import { useEffect, useState } from "react";

function WeathCards() {
  const [City, setCity] = useState([]);

  useEffect(() => {
    const findWeather = async () => {
      try {
        const response = await fetch(
          `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`
        );
        const data = await response.json();
        setCity(data.list ? data.list : []);
      } catch (error) {
        console.log("il tempo non passa", error);
      }
    };

    findWeather();
    
  });
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
