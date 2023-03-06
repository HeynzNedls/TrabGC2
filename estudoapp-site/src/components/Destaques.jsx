import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://www.animesxis.com.br/wp-content/uploads/2022/08/Blue-Lock-anime-image-450x254.jpg" />
                    <Card.Body>
                        <Card.Title>..</Card.Title>
                        <Card.Text>
                        ...
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Baiuxe o app aqui</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://1.bp.blogspot.com/-rT2oIGJKJes/X3JaB6FxH2I/AAAAAAAAom0/000O_JlX3R0UBmiO26M72kvPDyBd-KuywCNcBGAsYHQ/w640-h360/jujutsu-kaisen-anime-divulga-primeiras-imagens-episodio-estreia-armadura-nerd.webp" />
                    <Card.Body>
                        <Card.Title>..</Card.Title>
                        <Card.Text>
                        ...
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">..</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://hitsite.com.br/wp-content/uploads/2020/04/yugioh.jpeg" />
                    <Card.Body>
                        <Card.Title>...</Card.Title>
                        <Card.Text>
                            ...
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">...</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                      
        </Row>
    );
}

export default Destaques;