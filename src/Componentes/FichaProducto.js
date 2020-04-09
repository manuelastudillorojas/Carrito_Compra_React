import React from 'react';
import {Modal, Container, Button} from 'reactstrap';

class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state={
            modal:false
        };

        this.toggle= this.toggle.bind(this);
    }
    toggle(){
          this.setState(prevState=>({
              modal:!prevState.modal
          }));
    }
    render(){
        return(
            <Container>
            <Button onClick={this.toggle}>Ver Ficha</Button>
            <Modal isOpen={this.state.modal}>
                paso
            </Modal>
            </Container>
        );
    }
}
export default FichaProducto;