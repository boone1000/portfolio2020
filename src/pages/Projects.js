import React from 'react'

function Projects(){
    return <div className="page">
        <div className='splash'>
            <h1>Hi, I'm Ashley!</h1>
            <p id='introText'>I am a UX Designer with a strong background in qualitative research and a passion for finding simple solutions to complex problems. Interested in inclusive education, collaborative creativity, and empowering people through technology. </p>
            <p></p>
        </div>

        <div className='projectClassWrapper'>

        <div className='projectList'>

            <div class="projectcard">
                <img className='projectCardImage' src={require('../images/myplanCover.png')} alt='backpacking pic'></img>
                <div class="projectCardContainer">
                    <p className='metadata'>Professional Work | Spring 2019</p>
                    <a className='projectCardTitle' href='/planning'>Supporting long term academic planning at the UW</a>
                    {/* <p className='cardDescription'>Supporting long term academic planning at the University of Washington.</p> */}
                    <p></p>
                    <button className='projectCardButton' onClick={() => window.open('/planning',"_self")}>Read More</button>
                </div>
            </div>

            <div class="projectcard">
                <img className='projectCardImage' src={require('../images/dischargecover.jpg')} alt='backpacking pic'></img>
                <div class="projectCardContainer">
                    <p className='metadata'>Capstone Project | Seattle Children's Hospital | Spring 2020</p>
                    <p className='projectCardTitle'>Preparing pediatric cancer patients and their families to leave the hospital</p>
                    <p></p>
                    <button className='projectCardButton' onClick={() => window.open('/discharge',"_self")}>Read More</button>
                </div>
            </div>

            <div class="projectcard">
                <img className='projectCardImage' src={require('../images/lighthouseCover.png')} alt='backpacking pic'></img>
                <div class="projectCardContainer">
                    <p className='metadata'>Class Project | Winter 2018</p>
                    <p className='projectCardTitle'>Helping young adults feel safe walking home in the dark</p>
                    <p></p>
                    <button className='projectCardButton' onClick={() => window.open('/lighthouse',"_self")}>Read More</button>
                </div>
            </div>

            <div class="projectcard">
                <img className='projectCardImage' src={require('../images/oralhistoryCover.png')} alt='backpacking pic'></img>
                <div class="projectCardContainer">
                    <p className='metadata'>Professional Work | Spring 2020</p>
                    <a className='projectCardTitle'  href='/oralhistory'>Encouraging awareness and reflection by sharing UW student stories</a>
                    <p></p>
                    <button className='projectCardButton' onClick={() => window.open('/oralhistory',"_self")}>Read More</button>
                </div>
            </div>

            </div>
        </div> 
    </div>
}

export default Projects