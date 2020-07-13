import React from 'react'

function About(){
    return <div className="page">

        <div className='aboutContainer'>

            <div className='wrapperPics'>
                <img className='aboutImage' src={require('../images/Ashley.jpg')} alt='backpacking pic'></img>
            </div>
            <div className='biotext'>
                <h1>Ashley Boone</h1>
                <p id='line'>----------------------------------</p>
                <p className='main'>Hello! I'm a UX Designer recently graduated from the University of Washington College of Engineering with a Bachelor's of Science in Human Centered Design and Engineering at the University of Washington in Seattle. </p>  
                <p className='main'>I study interactions between people and technology and investigate innovative ways to create more meaningful experiences.  My goal is to prioritize user experiences and give a voice to the users of a product, system, or service.</p>   
                <p className='main'> I am currently seeking a full-time opportunity to use my thoughtful, evidence-based approach to design to contribute to meaningful projects with a positive impact. I am passionate about using the human centered design process to create inclusive and engaging solutions to complex problems. </p>
                {/* <p>I am also a.....</p> */}
            </div>

            {/* <div className='bottomhalfwrapper'>
                <p>Dancer</p>
                <p>I have been dancing for the past three years and absolutely love the community, the music, and the dance.  I teach beginner lessons and choreograph team performances with UW Salsa Club.</p>
                <p>Traveler</p>
                <p>I spent four months practicing my Spanish, exploring Europe, and making friends with students from all over the world.  Other recent destinations include Thailand, Morrocco, and Portugal!</p>
                <p>Artist</p>
                <p> In my free time, I get creative with photography and mixed media collage. I won an award for the art portfolio I created for my IB Art class and exhibited at the Oregon Scholastics Art Show.  I recently created a mural in Barcelona that comes to life as a GIF on the web.</p>
            </div> */}

        </div>

    </div>
}

export default About