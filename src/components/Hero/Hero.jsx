
import { Button, Carousel } from 'react-bootstrap'

function Hero() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src='/assets/img/hero-carousel/hero-carousel-1.jpg' style={{
          width: "100%",
          height: "100vh"
        }} />
        <Carousel.Caption style={{
          backgroundColor: 'var(--backcolor)',
          color: "black",
          borderTop: "4px solid var(--color)",
          padding: "50px",
          fontSize: "x-large",
          bottom: "3rem",
        }}>
          <h3>Welcome to Medicio</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Button variant="primary" className="mx-2 " style={{
            backgroundColor: 'var(--color)',
            border: 'none'
          }}>Read More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/assets/img/hero-carousel/hero-carousel-2.jpg' style={{
          width: "100%",
          height: "100vh"
        }} />
        <Carousel.Caption style={{
          backgroundColor: 'var(--backcolor)',
          color: "black",
          padding: "50px",
          fontSize: "x-large",
          borderTop: "4px solid var(--color)",
          bottom: "3rem",
        }}>
          <h3>At vero eos et accusamus</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Button variant="primary" className="mx-2 " style={{
            backgroundColor: 'var(--color)',
            border: 'none'
          }}>Read More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/assets/img/hero-carousel/hero-carousel-3.jpg' style={{
          width: "100%",
          height: "100vh"
        }} />
        <Carousel.Caption style={{
          backgroundColor: 'var(--backcolor)',
          color: "black",
          padding: "50px",
          fontSize: "x-large",
          borderTop: "4px solid var(--color)",
          bottom: "3rem",
        }}>
          <h3>Temporibus autem quibusdam</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Button variant="primary" className="mx-2 " style={{
            backgroundColor: 'var(--color)',
            border: 'none'
          }}>Read More</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Hero