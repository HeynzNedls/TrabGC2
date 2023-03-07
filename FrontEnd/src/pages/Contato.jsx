import {Container, Button, Form} from 'react-bootstrap'

function Contato() {

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Mensagem enviada com sucesso!')
        event.target.reset()
    }

    return (
        <Container className='conteudo-margin'>
            <h1 className='textitulo'>Contato</h1><br/>
            <h5 className='texcont'>Duvidas ou queira nos ajudar</h5>

            <h5 className='texcont'>Entre em contato, iremos te responder o mais rapido possivel.</h5><br/>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Nome">
                    <Form.Label className='formcont'>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome completo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label className='formcont'>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Mensagem">
                    <Form.Label className='formcont'>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button className='butcont' variant="info" type="submit">
                    Enviar
                </Button>
            </Form>

            
        </Container>
    );
}

export default Contato;