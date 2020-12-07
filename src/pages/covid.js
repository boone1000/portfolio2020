import React from 'react'

function covid(){
    return <div className="page">
        <div>
            <img className='caseStudyTitleImage' src={require('../images/covidCover.png')} alt='girl with paintbrush'></img>
            <p className="caseStudyMetadata">STEM Outreach | Project Coordinator | University of Washington</p>
        </div>
        <div className='projectWrapper'>
            <div className='projectBody'>
                <h1>Open design responses to a global pandemic</h1>
                
                <p>COVID has created a unique opportunity to examine open design efforts online. The many crises are we facing and the globality of the virus have impacted everyone, inspiring makers, creators, developers etc to get involved in building solutions that can help others. We conducted a systematic web search to analyze how platforms were facilitating open design collaboration in response to COVID-19. </p>
                <div className='fold'>
                    <h2>My Role</h2>
                    <p>I was involved with the project from the early stages exploring different initiatives to writing and editing a submission to CSCW. I was most involved in leading the development of the systematic web search protocol and the qualitative codebook.</p>
                    <p>Special thanks to my amazing mentor Dr. Stephen MacNeil and everyone who contributed to the project: Steven Dow, Sarah Nicita, Kenneth Chen, Enrique Arcilla, and Eric Richards.</p>
                </div>

                <div className='fold'>
                    <h2>Overview</h2>
                    <p>My team conducted a systematic web search of platforms facilitating open design processes responding to COVID. Looking at over 900 websites, we were able to identify 179 platforms that were</p> 
                    <li>Open to engagement from the general public</li>
                    <li>Facilitating a design process</li>
                    <li>Focused on problem areas related to COVID-19</li>
                    <p>In addition to these inclusion criteria, we also excluded platforms that were not available in English or had a majority of features hidden from public view.</p>
                    <p>The result was a collection of 179 platforms that were being used to facilitate open design processes to solve problems in COVID. Though platforms covered a wide variety of problem areas, common focuses were on developing vaccines, building cheaper ventilators, preventing viral spread, helping people stay connected in social distancing.</p>
                    <p>Our systematic web search allowed us to analyze the common features platforms employ to facilitate open design efforts.</p>
                </div>

                <div className='fold'>
                    <h2>More to come!</h2>
                    <p>Check back in for updates as I can share takeaways from our anlaysis.</p>
                </div>

            </div>    
        </div>

    </div>

}

export default covid