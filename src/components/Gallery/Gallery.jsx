import { Carousel, CarouselItem, Container } from "react-bootstrap"

function Gallery() {
  return (
    <section className="my-5 p-5">
            <Container className='section-title mb-5'>
                <h1>Gallery</h1>
                <span></span>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Container>
            <Container >
                <Carousel>
                    <CarouselItem >
                       
                            <img src="assets/img/gallery/gallery-1.jpg" className="testimonial-img" alt="" style={{
                                width: "300px",
                                backgroundColor: " white",
                                border: ' 6px solid white',
                            }} />
                        
                            <img src="assets/img/gallery/gallery-2.jpg" className="testimonial-img" alt="" style={{
                                width: "300px",
                                backgroundColor: " white",
                                border: ' 6px solid white',
                            }} />
                          
                            <img src="assets/img/gallery/gallery-3.jpg" className="testimonial-img" alt="" style={{
                                width: "300px",
                                backgroundColor: " white",
                                border: ' 6px solid white',
                            }} />
                            <img src="assets/img/gallery/gallery-4.jpg" className="testimonial-img" alt="" style={{
                                width: "300px",
                                backgroundColor: " white",
                                border: ' 6px solid white',
                            }} />
                         
                    </CarouselItem>
                    <CarouselItem >
                       
                            <img src="assets/img/gallery/gallery-5.jpg" className="testimonial-img" alt="" style={{
                                width: "300px",
                                backgroundColor: " white",
                                border: ' 6px solid white',
                            }} />
                         
                            <img src="assets/img/gallery/gallery-6.jpg" className="testimonial-img" alt="" style={{
                                width: "300px",
                                backgroundColor: " white",
                                border: ' 6px solid white',
                            }} />
                            <img src="assets/img/gallery/gallery-7.jpg" className="testimonial-img" alt="" style={{
                                width: "300px",
                                backgroundColor: " white",
                                border: ' 6px solid white',
                            }} />
                            <img src="assets/img/gallery/gallery-8.jpg" className="testimonial-img" alt="" style={{
                                width: "300px",
                                backgroundColor: " white",
                                border: ' 6px solid white',
                            }} />
                    </CarouselItem>
                </Carousel>
            </Container>
        </section>
  )
}

export default Gallery