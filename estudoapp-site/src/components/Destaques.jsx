import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (

        <Row className='mt-2'>

<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Plano familiar</h5>
        <p class="card-text">   Todos os recursos do plano básico <br/>
                                Permite compartilhar com até 4 membros da família <br/>
                                Acesso a perfis individuais <br/>
                                Possibilidade de bloquear conteúdo inapropriado para crianças <br/>
                                Download ilimitado de episódios </p>
        <a href="#" class="btn btn-primary">Assine aqui</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Plano premium</h5>
        <p class="card-text">   Todos os recursos do plano básico <br/>
                                Acesso antecipado a novos lançamentos de anime <br/>
                                Exclusividade de animes selecionados <br/>
                                Acesso a eventos de anime exclusivos <br/>
                                Download ilimitado de episódios</p>
        <a href="#" class="btn btn-primary">Assine aqui</a>
      </div>
    </div>
  </div>
</div>

            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://www.animesxis.com.br/wp-content/uploads/2022/08/Blue-Lock-anime-image-450x254.jpg" />
                    <Card.Body>
                        <Card.Title>..</Card.Title>
                        <Card.Text>
                        Curta o seu anime 
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Baixe o app aqui</Button>
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