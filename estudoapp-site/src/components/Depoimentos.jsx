import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import depoimento01 from '../../public/imagens/depoimento01.png';
import depoimento02 from '../../public/imagens/depoimento02.png';
import depoimento03 from '../../public/imagens/depoimento03.png';

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3'>Depoimentos</h2>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src= {depoimento01} alt="Foto do depoimento" className='dep1' />
            </Col>
            <Col sm="12" md="10">
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src={depoimento02} alt="Foto do depoimento 2" className='dep2'  />
            </Col>
            <Col sm="12" md="10">
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src={depoimento03} alt="Foto do depoimento 2" className='dep3' />
            </Col>
            <Col sm="12" md="10">
            </Col>
        </Row>            
        </>
    )
}

export default Depoimentos