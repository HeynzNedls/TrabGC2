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

        <h1>Sobre</h1> 
            <hr />

            <p>Olá, jovem otaku! Seja bem-vindo(a) ao nosso site de streaming de anime.</p>

            <p>Nós sabemos que nem sempre é fácil encontrar aquele anime que tanto deseja assistir. E é por isso que criamos 
                este site e o app, onde você pode encontrar diversos tipos de anime, todos em um só lugar e de 
                fácil acesso e tendo so 1h de atraso.</p>

            <p>Aqui no nosso site, valorizamos não apenas os animes, mas também a interação entre os fãs. Por isso, para fazer 
                parte da nossa comunidade, é preciso se cadastrar e compartilhar suas experiências com outros usuários. Você pode contar 
                seu anime da temporada preferio, trocar dicas e curiosidades sobre o universo dos animes, e até mesmo encontrar novos amigos que 
                compartilham da sua paixão.</p>

            <p>Estamos sempre em busca de novas formas de aprimorar nossa plataforma e torná-la cada vez mais útil e acessível para todos. 
                Então, espero que você possa desfrutar de todas as funcionalidades do site e do app e encontrar os animes que procura para se 
                divertir nesse universo dos animes.</p>
                
                <hr />

            <p>{sobre.text}</p>
            <Depoimentos />
        </Container>
    );
}

export default Sobre