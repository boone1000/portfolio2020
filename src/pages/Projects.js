import React from 'react'

function Projects(){
    return <div className="page">
        <div className='splash'>
            <h1>ashley boone</h1>
            <p>Hello! I am a UX Designer with a strong background in user research. I'm passionate about using a thoughtful, evidence-based approach to design to contribute to meaningful projects with a positive impact.</p>
            <p>\/</p>
        </div>

        <div className='projectClassWrapper'>

        <div className='projectList'>

            <div class="projectcard">
                <img className='projectCardImage' src={require('../images/myplanCover.png')} alt='backpacking pic'></img>
                <div class="projectCardContainer">
                    <p className='metadata'>University of Washington IT | Spring 2019</p>
                    <p className='projectCardTitle'>Academic Planning</p>
                    <p className='cardDescription'>Supporting long term academic planning at the University of Washington.</p>
                </div>
            </div>

            <div class="projectcard">
                <img className='projectCardImage' src={require('../images/lighthouseCover.png')} alt='backpacking pic'></img>
                <div class="projectCardContainer">
                    <p className='metadata'>Class Project | Winter 2018</p>
                    <p className='projectCardTitle'>Lighthouse</p>
                    <p className='cardDescription'>Helping young adults feel safe walking home in the dark.</p>
                </div>
            </div>

            <div class="projectcard">
                <img className='projectCardImage' src={require('../images/backpacking.jpg')} alt='backpacking pic'></img>
                <div class="projectCardContainer">
                    <p className='metadata'>University of Washington IT | Spring 2020</p>
                    <p className='projectCardTitle'>Oral History</p>
                    <p className='cardDescription'>Sharing stories of UW students to increase awareness and encourage reflection.</p>
                </div>
            </div>

            <div class="projectcard">
                <img className='projectCardImage' src={require('../images/backpacking.jpg')} alt='backpacking pic'></img>
                <div class="projectCardContainer">
                    <p className='metadata'>Seattle Children's Hospital | Spring 2020</p>
                    <p className='projectCardTitle'>Streamlining Patient Discharge</p>
                    <p className='cardDescription'>??????????????????</p>
                </div>
            </div>

            </div>
        </div> 
    </div>
}

export default Projects