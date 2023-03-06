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
                <h1>Funcionalidades</h1><hr />

                <p>..</p>

                <ul>
                    <li>
                        <p>..</p>
                        
                    </li>
                    <li>
                        <p>...  </p>
                      
                    </li>
                    <li>
                        <p>..</p>
                    </li>
                    <li>
                        <p>..</p>
                    </li>
                </ul>

                <p>..</p>

                <ListaFuncionalidades funcionalidades={funcionalidades} />
            </Container>
        </>
    );
}

export default Funcionalidades