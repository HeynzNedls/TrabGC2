import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'

function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect(() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
        <Container className='conteudo-margin'>

            <h2>.</h2>

            <p>..</p>

            <p>..</p>

            <p>..</p>

            <p>..</p><hr /><br />


            <h1>Sobre</h1> <hr />

            <p>..</p>

            <p>..</p>

            <p>..</p>

            <p>..</p>

            <p>..</p><br/><br/><br/>





            <p>{sobre.text}</p>
            <Depoimentos />
        </Container>
    );
}

export default Sobre