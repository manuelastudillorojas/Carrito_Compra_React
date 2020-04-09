import React from 'react';
import Producto from './Componentes/Producto';
import './App.css';
import {Container, Row} from 'reactstrap';
function App() {
  return (
    <Container>
      <Row>
        <Producto
          titulo="Tecnologia"
          imagen="https://cadenaser00.epimg.net/ser/imagenes/2019/12/17/ciencia/1576575386_575032_1576577716_noticia_normal.jpg"
          descripcion="Comprar Barato"
          precio="300"
        />
        <Producto
          titulo="Tecnologia"
          imagen="https://cadenaser00.epimg.net/ser/imagenes/2019/12/17/ciencia/1576575386_575032_1576577797_sumario_normal.jpg"
          descripcion="Comprar Barato"
          precio="300"
        />
        <Producto
          titulo="Tecnologia"
          imagen="https://cadenaser00.epimg.net/ser/imagenes/2019/12/17/ciencia/1576575386_575032_1576577716_noticia_normal.jpg"
          descripcion="Comprar Barato"
          precio="300"
        />
        <Producto
          titulo="Tecnologia"
          imagen="https://cadenaser00.epimg.net/ser/imagenes/2019/12/17/ciencia/1576575386_575032_1576578306_sumario_normal.jpg"
          descripcion="Comprar Barato"
          precio="300"
        />
      </Row>
    </Container>
  );
}

export default App;
