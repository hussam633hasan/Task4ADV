import { Col, Container, Row } from "react-bootstrap"
import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { FaInstagram, FaXTwitter } from "react-icons/fa6"


function Footer() {
  return (
    <footer className="mt-5 pt-5">
      <Container>
        <Row className=" border-bottom">
          <Col style={{
            margin: '-60px 50px 0px 0px',
          }}>
            <ul>
              <li className="footer-logo"><a>Medicio</a></li>
              <li><a>A108 Adam Street</a></li>
              <li><a>New York, NY 535022</a></li>
              <li><a>Phone: +1 5589 55488 55</a></li>
              <li><a>Email: info@example.com</a></li>
              <div class="social-links-footer d-flex mt-4">
                <a href=""><FaXTwitter /></a>
                <a href=""><FaFacebook /></a>
                <a href=""><FaInstagram /></a>
                <a href=""><FaLinkedin /></a>
              </div>
            </ul>
          </Col>
          <Col>
            <ul>
              <h6>Useful Links</h6>
              <li><a>Home</a></li>
              <li><a>About us</a></li>
              <li><a>Services</a></li>
              <li><a>Terms of service</a></li>
              <li><a>Privacy policy</a></li>
            </ul>
          </Col>
          <Col>
            <ul>
              <h6>Our Services</h6>
              <li><a>Web Design</a></li>
              <li><a>Web Development</a></li>
              <li><a>Product Management</a></li>
              <li><a>Marketing</a></li>
              <li><a>Graphic Design</a></li>
            </ul>
          </Col>
          <Col>
            <ul>
              <h6>Hic solutasetp</h6>
              <li><a>Molestiae accusamus iure</a></li>
              <li><a>Excepturi dignissimos</a></li>
              <li><a>Suscipit distinctio</a></li>
              <li><a>Dilecta</a></li>
              <li><a>Sit quas consectetur</a></li>
            </ul>
          </Col>
          <Col>
            <ul>
              <h6>Nobis illum</h6>
              <li><a>Ipsam</a></li>
              <li><a>Laudantium dolorum</a></li>
              <li><a>Dinera</a></li>
              <li><a>Trodelas</a></li>
              <li><a>Flexo</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col>
          <p>© Copyright Medicio All Rights Reserved </p>
          <p>Designed by BootstrapMade</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer