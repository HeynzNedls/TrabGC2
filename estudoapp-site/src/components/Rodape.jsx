import Container from 'react-bootstrap/Container';
import '../assets/css/main.css';

function Rodape() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container className='text-center py-3'>
    <div class="b-example-divider"></div>

<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
      </a>
      <span class="mb-3 mb-md-0 text-muted">&copy; 2023 Company, Inc</span>
    </div>
  </footer>
</div>
<button className="back-to-top" onClick={handleBackToTop}>
            <i className="fas fa-arrow-up"></i>
            
          </button>
    </Container>
  );
}

export default Rodape;

