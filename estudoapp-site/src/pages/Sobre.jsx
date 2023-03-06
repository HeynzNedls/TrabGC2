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

            <p>Olá, jovem otaku! Seja bem-vindo(a) ao nosso site de compartilhamento de mangás! Eu sempre fui uma grande 
                fã desse mundo fantástico dos quadrinhos japoneses, e por isso, tive a ideia de criar essa plataforma para 
                que todos possam ter acesso gratuito aos seus mangás favoritos.</p>

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