import React from 'react';

const Home = () => {
    
    return (
        <>
            <div className='Home container h-100 py-5'>
                <div className='ratio ratio-16x9 video my-5'>
                    <iframe width='640' height='360' src='https://www.youtube.com/embed/n8D_fLiFQ7o' title='O Início' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                </div>
                <p className='text-center text-white text-opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas molestiae dolorem a quaerat natus ut, ipsa odit nisi illum autem reprehenderit ad eaque! Autem tempora nobis aut laboriosam eum?</p>
            </div> 
        </>
    )
}

export default Home;