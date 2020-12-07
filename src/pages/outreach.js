import React from 'react'

function outreach(){
    return <div className="page">
        <div>
            <img className='caseStudyTitleImage' src={require('../images/STEMcover.jpg')} alt='girl with paintbrush'></img>
            <p className="caseStudyMetadata">STEM Outreach | Project Coordinator | University of Washington</p>
        </div>
        <div className='projectWrapper'>
            <div className='projectBody'>
                <h1>STEM Outreach through the lens of creativity, play and movement</h1>
                
                <p>We designed, implemented and assessed a STEAM (Stem + Arts) outreach program leveraging creativity, play, and movement to engage students who are traditionally underrepresented in STEM fields. Our goal was to expose children to STEAM topics, increase awareness of opportunities within STEAM fields, and build confidence and interest in STEAM within a fourth and fifth grade after school program. The curriculum we developed involved kinesthetic movement, collaboration, and project based learning, building on findings from interviews and focus groups with college students about their early STEAM experiences. </p>
                <img className='caseStudyImage' src={require('../images/outreachActivities.png')} alt='a table describing some of the curriculum'></img>

                <div className='fold'>
                    <h2>My Role</h2>
                    <p>Led development of 8 hours of outreach curriculum leveraging the arts to engage underrepresented students with STEM. Coordinated 10 student volunteers and established partnerships with local after school programs. Published outcomes as first author and presented findings at the IEEE Global Humanitarian 2020 conference.</p>
                    <p>Special thanks to my amazing mentor Irini Spyridakis, to Jamie Vanderwall and Maya Klitsner, and to the 8 other UW students who participated in the directed research group.</p>

                    <h2>Project Impact</h2>
                    <p>We were able to bring a unique curriculum to 20 4th and 5th grade students at a local Boys and Girls Clubs. Female students and those without previous extracurricular STEM experience showed the most substantial gains in confidence and interest over the course of the program, suggesting that the interdisciplinary approach succeeded in reaching underrepresented students.</p>
                    <p>The team received the HCDE department “Undergraduate Innovation Team Award” for developing novel practices exemplifying principles of human centered design.</p>

                </div>


            </div>    
        </div>

    </div>

}

export default outreach