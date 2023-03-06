import Container from 'react-bootstrap/Container'
import Destaques from '../components/Destaques'
import Calend from '../components/Calendario'
import Banners from '../components/Banners'


function Home() {
    return (
        <>
            <Banners />
            <Container>
                <Destaques />
                <Calend />
            </Container>
        </>
    );
}

export default Home;