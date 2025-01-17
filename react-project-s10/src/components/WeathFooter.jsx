import { Container } from "react-bootstrap";

function WeathFooter() {
  return (
    <div className="bg-primary">
    <Container>
      <div>
        <div className="d-flex justify-content-center">
          <div className="d-flex">
            <div className="me-5">
              <p>Valle D'Aosta</p>
              <p>Piemonte</p>
              <p>Liguria</p>
              <p>Lombardia</p>
              <p>Veneto</p> 
              </div>
              <div className="me-5">
              <p>Trentino-Alto-Adige</p>
              <p>Friuli-Venezia-Giulia</p>
              <p>Toscana</p>
              <p>Emilia-Romagna</p>
              <p>Umbria</p>
            </div>
            <div className="me-5">
              <p>Marche</p>
              <p>Abruzzo</p>
              <p>Lazio</p>
              <p>Campania</p>
              <p>Molise</p>
              </div>
              <div>
              <p>Calabria</p>
              <p>Puglia</p>
              <p>Basilicata</p>
              <p>Sicilia</p>
              <p>Sardegna</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
}

export default WeathFooter;
