import {Container, Table, Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import CmsApi from '../../api/CmsApi'
import Funcionalidades from './../Funcionalidades';

function AdminFuncionalidades() {
    const [funcionalidades, setFuncionalidades] = useState([])

    useEffect (() => {
        async function getFuncionalidades() {
            const response = await CmsApi().getFuncionalidades()
            const funcionalidades = await response.json()
            setFuncionalidades(funcionalidades.data)
        }

        getFuncionalidades()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const nome = form.nome.value
        const idioma = form.idioma.value
        const temporada = form.temporada.value
        const ano = form.ano.value
        
        const response = await CmsApi().postFuncionalidade({nome, idioma, temporada, ano})
        if(!response.ok) {
            alert('Erro ao cadastrar anime nos favoritos')
            return
        }
        const funcionalidade = await response.json()
        alert('Anime cadastrado nos favoritos com sucesso')
        setFuncionalidades([...funcionalidades, funcionalidade.data])
        form.reset()
    }

    async function excluirFuncionalidade(id) {
        console.log(id)
        const response = await CmsApi().deleteFuncionalidade(id)
        if(!response.ok) {
            alert('Erro ao excluir Anime')
            return
        }

        alert('Anime excluído com sucesso')
        const funcionalidadesAtualizadas = funcionalidades.filter((funcionalidade) => funcionalidade.id !== id)
        setFuncionalidades(funcionalidadesAtualizadas)
    }

    function habilitarEdicao(botao, id) {
        botao.innerText = 'Salvar'
        botao.classList.remove('btn-primary')
        botao.classList.add('btn-success')
        botao.onclick = (event) => {salvarEdicao(event.target, id)}
      
        const linha = botao.parentNode.parentNode
        const colunaNome = linha.children[1]
        // Cria um input para o nome
        const inputNome = document.createElement('input')
        inputNome.type = 'text'
        inputNome.value = colunaNome.innerText
        colunaNome.innerText = ''
        colunaNome.appendChild(inputNome)
        // Cria um input para o idioma
        const colunaIdioma = linha.children[4]
        const inputIdioma = document.createElement('input')
        inputIdioma.type = 'text'
        inputIdioma.value = colunaIdioma.innerText
        colunaIdioma.innerText = ''
        colunaIdioma.appendChild(inputIdioma)
        // Cria um input para temporada
        const colunatemporada = linha.children[5]
        const inputtemporada = document.createElement('input')
        inputtemporada.type = 'text'
        inputtemporada.value = colunatemporada.innerText
        colunatemporada.innerText = ''
        colunatemporada.appendChild(inputtemporada)
        // Cria um input para o Ano
        const colunaAno = linha.children[6]
        const inputAno = document.createElement('input')
        inputAno.type = 'text'
        inputAno.value = colunaAno.innerText
        colunaAno.innerText = ''
        colunaAno.appendChild(inputAno)
      }
      

    async function salvarEdicao(botao, id) {
         
        const linha = botao.parentNode.parentNode
        const colunaNome = linha.children[1]
        const inputNome = colunaNome.children[0]
        const colunaIdioma = linha.children[4]
        const inputIdioma = colunaIdioma.children[0]
        const colunatemporada = linha.children[5]
        const inputtemporada = colunatemporada.children[0]
        const colunaAno = linha.children[6]
        const inputAno = colunaAno.children[0]


        const response = await CmsApi().patchFuncionalidade({id: id, nome: inputNome.value,idioma: inputIdioma.value, temporada: inputtemporada.value, ano: inputAno.value})
        if(!response.ok) {
            alert('Erro ao editar anime')
            return
        }
        alert('anime editado com sucesso')
        
        colunaNome.innerText = inputNome.value
        colunaIdioma.innerText = inputIdioma.value
        colunatemporada.innerText = inputtemporada.value
        colunaAno.innerText = inputAno.value


        botao.innerText = 'Editar'
        botao.classList.remove('btn-success')
        botao.classList.add('btn-primary')
    }


    return (
        <Container className="conteudo-margin">
            <h1 className='titladmfun'>Admin Funcionalidades</h1>
            <hr />
            <h2 className='titladmfun'>Adicionar Anime</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome do anime" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="idioma">
                    <Form.Label>Idioma</Form.Label>
                    <Form.Control type="text" placeholder="Digite o idioma" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="temporada">
                    <Form.Label>Temporada</Form.Label>
                    <Form.Control type="text" placeholder="Digite a temporada do anime" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ano">
                    <Form.Label>Ano</Form.Label>
                    <Form.Control type="text" placeholder="Digite o ano do anime" />
                </Form.Group>
                <Button variant="info" type="submit">
                    Cadastrar
                </Button>
            </Form>
            <hr />
            <p>Favoritos</p>
            <Table striped hover>
                <thead>
                    <tr>
                        <th className='admfuad'>Id</th>
                        <th className='admfuad'>Nome</th>
                        <th className='admfuad'>Idioma</th>
                        <th className='admfuad'>Temporada</th>
                        <th className='admfuad'>Ano</th>
                        <th className='admfuad'>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {funcionalidades.map((funcionalidade) => (
                        <tr key={funcionalidade.id}>
                            <td>{funcionalidade.id}</td>
                            <td>{funcionalidade.nome}</td>
                            <td>{funcionalidade.idioma}</td>
                            <td>{funcionalidade.temporada}</td>
                            <td>{funcionalidade.ano}</td>
                            <td>
                                <Button variant="info" onClick={(event) => {habilitarEdicao(event.target, funcionalidade.id)}}>Editar</Button>
                                 | 
                                 <Button variant="danger" onClick={() => {excluirFuncionalidade(funcionalidade.id)}}>Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default AdminFuncionalidades