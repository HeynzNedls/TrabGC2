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
        <a href="#" class="btn btn-info">Assine aqui</a>
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
        <a href="#" class="btn btn-info">Assine aqui</a>
      </div>
    </div>
  </div>
</div>

            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://www.animesxis.com.br/wp-content/uploads/2022/08/Blue-Lock-anime-image-450x254.jpg" />
                    <Card.Body>
                        <Card.Title>Sobre o App AnimeFlix</Card.Title>
                        <Card.Text>
                        O app foi criado para procurar e organizar os seus animes favoritos. Atualize quais episódios já assistiu! <br/>
                        Ele vai notificar você quando o seu anime favorito lançar um novo episódio para que possa assistir sem se esquecer de que saiu!
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="info">Baixe o app aqui</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://1.bp.blogspot.com/-rT2oIGJKJes/X3JaB6FxH2I/AAAAAAAAom0/000O_JlX3R0UBmiO26M72kvPDyBd-KuywCNcBGAsYHQ/w640-h360/jujutsu-kaisen-anime-divulga-primeiras-imagens-episodio-estreia-armadura-nerd.webp" />
                    <Card.Body>
                        <Card.Title>Funcionalides</Card.Title>
                        <Card.Text>
                        Com uma seleção mais ampla de animes, acesso completo, rapido e fácil.
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="info">Ver mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://hitsite.com.br/wp-content/uploads/2020/04/yugioh.jpeg" />
                    <Card.Body>
                        <Card.Title>Entre em contato</Card.Title>
                        <Card.Text>
                            Fazemos o maximo pra ajudar no que precisar
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="info">Entre aqui</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                      
        </Row>
    );
}

export default Destaques;