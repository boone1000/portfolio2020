import React from 'react'

function Projects(){
    return <div className="page">
        <div className='splash'>
            <h1>ashley boone</h1>
            <p>Hello! I am a UX Designer with a strong background in user research. I'm passionate about using a thoughtful, evidence-based approach to design to contribute to meaningful projects with a positive impact.</p>
            <p>\/</p>
        </div>

        <div className='projectList'>

            <div class="projectcard">
            <img className='projectCardImage' src={require('../images/myplanCover.png')} alt='backpacking pic'></img>
            <div class="prjectCardContainer">
                <h4><b>Academic Planning</b></h4>
                <p>Supporting long term academic planning at the University of Washington</p>
                <p>University of Washington IT | Spring 2019</p>
            </div>
        </div>

            <div class="projectcard">
                <img className='projectCardImage' src={require('../images/lighthouseCover.png')} alt='backpacking pic'></img>
                <div class="prjectCardContainer">
                    <h4><b>Lighthouse</b></h4>
                    <p>Helping young adults feel safe walking home in the dark</p>
                    <p>Class Project | Winter 2018</p>
                </div>
            </div>

            <div class="projectcard">
                <img className='projectCardImage' src={require('../images/backpacking.jpg')} alt='backpacking pic'></img>
                <div class="prjectCardContainer">
                    <h4><b>Oral Histories</b></h4>
                    <p>Sharing stories of UW students to increase awareness and encourage reflection</p>
                    <p>University of Washington IT | Spring 2020</p>
                </div>
            </div>

            <div class="projectcard">
                <img className='projectCardImage' src={require('../images/backpacking.jpg')} alt='backpacking pic'></img>
                <div class="prjectCardContainer">
                    <h4><b>Streamlining Patient Discharge</b></h4>
                    <p>??????????????????</p>
                    <p>Seattle Children's Hospital | Spring 2020</p>
                </div>
            </div>

        </div> 
    </div>
}

export default Projects