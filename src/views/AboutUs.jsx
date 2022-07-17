import React from 'react';

const AboutUs = () => {
    
    return (
        <>
            <div className='AboutUs container py-5'>

                <div className='row my-3'>
                    <h2 className='h2 text-white'>A Nossa história</h2>
                    <p className='text-white text-opacity-50'> Quae eius optio laboriosam in sapiente. Minus dolorum alias harum asperiores odio est molestias quo quos ratione? Accusantium cumque impedit amet aliquam. Molestiae ratione maxime corporis repellendus, impedit minima doloribus?</p>
                </div>

                <div className='row my-3'>
                <div id='carouselAboutUs' className='carousel slide carousel-fade' data-bs-ride='carousel'>
                    <div className='carousel-indicators'>
                        <button type='button' data-bs-target='#carouselAboutUs' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                        <button type='button' data-bs-target='#carouselAboutUs' data-bs-slide-to='1' aria-label='Slide 2'></button>
                        <button type='button' data-bs-target='#carouselAboutUs' data-bs-slide-to='2' aria-label='Slide 3'></button>
                    </div>
                    <div className='carousel-inner'>
                        <div className='carousel-item active' data-bs-interval='3000'>
                            <img src='/images/aboutUs1.jpg' className='d-block w-100' alt='aboutUs1'/>
                        </div>
                        <div className="carousel-item" data-bs-interval='3000'>
                            <img src='/images/aboutUs2.jpg' className='d-block w-100' alt='aboutUs2'/>
                        </div>
                        <div className="carousel-item" data-bs-interval='3000'>
                            <img src='/images/aboutUs3.jpg' className='d-block w-100' alt='aboutUs3'/>
                        </div>
                    </div>
                    <button className='carousel-control-prev' type='button' data-bs-target='#carouselAboutUs' data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className='carousel-control-next' type='button' data-bs-target='#carouselAboutUs' data-bs-slide='next'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
                </div>

                <div className='row my-3'>
                    <p className='text-white text-opacity-50'>Eligendi accusamus dolor unde veniam voluptates porro suscipit fugiat iusto expedita voluptas, cum in mollitia sunt delectus optio. Culpa suscipit eveniet labore cum architecto. Fugit quasi sit nihil at odio.</p>
                    <p className='text-white text-opacity-50'>Iure ratione necessitatibus consequuntur accusantium perspiciatis eos officiis ea, labore laborum esse enim amet a, fuga suscipit obcaecati molestias commodi, delectus illum aliquid quos! Tenetur sit corrupti at ut harum.</p>
                </div>

                <div className='row mt-3'>
                    <h2 className='h2 text-white'>Os Elementos do Grupo</h2>
                </div>

                <div className='row'>
                    <div className='col-md-4 '>
                        <div className='card my-3 h-100'>
                            <div className='card-header py-3'>
                                <h3 className='h3'>Nelson Gomes</h3>
                                <h6 className='h6'><small className='text-muted'>(Presidente)</small></h6>
                            </div>
                            <div className='card-body'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus officiis dolores voluptatibus quibusdam incidunt fugiat mollitia veniam iure aut consectetur, optio accusamus eaque enim nam eligendi odio! Quidem, excepturi?</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card my-3 h-100'>
                            <div className='card-header py-3'>
                                <h3 className='h3'>Tiago Pereira</h3>
                                <h6 className='h6'><small className='text-muted'>(Vice-Presidente)</small></h6>
                            </div>
                            <div className='card-body'>
                                <p>Laudantium optio quam id necessitatibus laborum, assumenda, fugiat quas vero alias ipsam atque eos natus quod ipsum at iusto deleniti modi, laboriosam omnis. Pariatur fuga eius, dolore nemo beatae non?</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card my-3 h-100'>
                            <div className='card-header py-3'>
                                <h3 className='h3'>Pedro Marques</h3>
                            </div>
                            <div className='card-body'>
                                <p>Quisquam fuga, sunt voluptates enim quas hic, ex corporis cupiditate nihil maiores nobis modi voluptate corrupti praesentium! Consequuntur, quidem? Odit impedit mollitia quisquam officiis accusamus, iure nesciunt! Cum, provident cupiditate!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default AboutUs;
