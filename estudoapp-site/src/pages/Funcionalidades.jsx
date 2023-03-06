import ListaFuncionalidades from "../components/ListaFuncionalidades"
import Container from 'react-bootstrap/Container'
import Banners from "../components/Banners"
import { useEffect, useState } from "react"
import CmsApi from '../api/CmsApi'

function Funcionalidades() {
    const [funcionalidades, setFuncionalidades] = useState([])

    useEffect(() => {
        async function fetchFuncionalidades() {
            const response = await CmsApi().getFuncionalidades()
            if (!response.ok) {
                alert('Erro ao carregar funcionalidades')
                return
            }
            const funcionalidades = await response.json()
            setFuncionalidades(funcionalidades.data)
        }

        fetchFuncionalidades()
    }, [])

    return (
        <>
            <Banners />
            <Container className="conteudo-margin">
                <h1 className='functit'>Funcionalidades</h1><hr />

                <p>A funcionalidade do nosso site e app</p>

                <ul>
                    <li>
                        <p>Nossa plataforma de streaming de anime é uma das melhores que você já viu! Nós temos tudo o 
                            que os fãs de anime desejam: desde os clássicos mais antigos até os títulos mais recentes que 
                            acabaram de ser lançados. Além disso, oferecemos várias opções de idioma para que você possa assistir 
                            seus animes favoritos dublados ou legendados, conforme sua preferência.</p>
                        
                    </li>
                    <li>
                        <p>Nós levamos a qualidade a sério e oferecemos uma experiência de visualização incrível em Full HD 1080p 
                            e HD 720p. Nossa plataforma é otimizada para oferecer a melhor qualidade de imagem possível, para que você 
                            possa desfrutar de seus animes favoritos em toda a sua glória.</p>
                      
                    </li>
                    <li>
                        <p>Mas não é só isso! Nós também temos uma variedade de recursos adicionais para tornar sua experiência de 
                            streaming ainda melhor. Você pode criar listas de favoritos para manter o controle de seus animes favoritos, 
                            ver o histórico de visualização para continuar assistindo de onde parou e receber recomendações personalizadas 
                            com base em seu histórico de visualização.</p>
                    </li>
                    <li>
                        <p>E se você estiver preocupado com a largura de banda ou a limitação de espaço de armazenamento, temos opções para streaming 
                            e download de anime. Você pode assistir a seus animes favoritos por streaming diretamente de nossa plataforma e app
                            ou baixá-los para assisti-los offline quando não estiver conectado à internet.</p>
                    </li>
                </ul>

                <p>Em resumo, nossa plataforma de streaming de anime é o lugar perfeito para os fãs de anime assistirem a todos os seus títulos 
                    favoritos. Não importa se você é um fã de longa data ou está apenas começando a se interessar pelo mundo dos 
                    animes, temos tudo o que você precisa para desfrutar de uma experiência incrível de streaming de anime. Então, 
                    venha se juntar a nossa comunidade e mergulhe no maravilhoso mundo dos animes!</p>

                <ListaFuncionalidades funcionalidades={funcionalidades} />
            </Container>
        </>
    );
}

export default Funcionalidades