import { Container } from "react-bootstrap";

function WeathFooter() {
  return (
    <div className="bg-primary">
    <Container>
      <div>
        <div className="d-flex justify-content-center">
          <div className="d-flex">
            <div className="me-5">
              <p>Europe</p>
              <p>Asia</p>
              <p>Africa</p>
              <p>America</p>
              <p>Oceania</p> 
              </div>
              <div className="me-5">
              <p>Italy</p>
              <p>China</p>
              <p>Morocco</p>
              <p>Canada</p>
              <p>Australia</p>
            </div>
            <div className="me-5">
              <p>France</p>
              <p>India</p>
              <p>Congo</p>
              <p>Messico</p>
              <p>New Zeeland</p>
              </div>
              <div>
              <p>Milan</p>
              <p>Pechino</p>
              <p>Cape Town</p>
              <p>New York</p>
              <p>Sidney</p>
            </div>
          </div>
        </div>
        <p className="m-auto text-center">The WeatherApp LLC 2025 - All Rights Reserved </p>
      </div>
    </Container>
    </div>
  );
}

export default WeathFooter;
