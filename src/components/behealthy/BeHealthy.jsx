import React from 'react'

const BeHealthy = () => {
  return (
    <div>
        {/* <img src="/images/home-bg.png" className="img-fluid" alt="" /> */}
        
        <div id="carouselExampleCaptions" className="carousel  slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="slide1.jpg" className="d-block w-100" style={{height:'550px'}} alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Best Fast Food</h5>
                    <p>Order Now and check your favourite deals</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="slide2.jpg" className="d-block w-100" style={{height:'550px'}} alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="slide3.jpg" className="d-block w-100" style={{height:'550px'}} alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    </div>
  )
}

export default BeHealthy