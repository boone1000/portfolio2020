import React from 'react'

function Research(){
    return <div className="page">

        <div className='splash'>
            <h1>Research</h1>
            <p id='introText'>I'm interested in communities engaging in problem solving processes through open source innovation, citizen science, participatory design, and civic engagement. </p>
            <p id='introText'>I am currently applying to PhD programs for fall 2021.</p>
            <p></p>
        </div>

        <div className='projectClassWrapper'>

            <div className='projectList'>

                <div class="projectcard">
                    <img className='projectCardImage' src={require('../images/STEMcover.jpg')} alt='child with paintbrush'></img>
                    <div class="projectCardContainer">
                        <p className='metadata'>STEM Outreach | Winter 2020</p>
                        <a className='projectCardTitle' href='/outreach'>STEM education through creativity, movement, and play</a>
                        <p></p>
                        <button className='projectCardButton' onClick={() => window.open('/outreach',"_self")}>Read More</button>
                    </div>
                </div>

                <div class="projectcard">
                    <img className='projectCardImage' src={require('../images/covidCover.png')} alt='collection of hackathons'></img>
                    <div class="projectCardContainer">
                        <p className='metadata'>Research Intern | Spring-Winter 2020</p>
                        <a className='projectCardTitle' href='/covid'>Open design responses to a global pandemic</a>
                        <p></p>
                        <button className='projectCardButton' onClick={() => window.open('/covid',"_self")}>Read More</button>
                    </div>
                </div>

            </div>
        </div>

        <div className='splash'>
            <h1>Publications</h1>
            <p className='main'>STEM Outreach in Underserved Communities through the Lens of Play, Creativity, and Movement; <b>Ashley Boone</b>, Jamie Vanderwall, Maya Klitsner, Irini Spyridakis; IEEE Global Humanitarian Technology Conference (GHTC). IEEE, 2020.</p>  
            <p className='main'>Parenting with Alexa: Exploring the Introduction of Smart Speakers on Family Dynamics; Erin  Beneteau, <b>Ashley Boone</b>,  Yuxing  Wu, Julie A. Kientz, Jason Yip, Alexis Hiniker; CHI 2020: The 2020 ACM Conference on Human Factors in Computing Systems.</p> 
            <p className='main'>Finding Place in a Design Space: Challenges for Supporting Community Design Efforts at Scale; Steven  MacNeil,  Jason Ding, <b>Ashley  Boone</b>, Anthony Grubbs, Steven Dow; (In Submission at CSCW 2021)</p>
            <p className='main'>Is Someone Listening? Audio Related Privacy Perceptions and Design Recommenda-tions from Guardians, Pragmatists, and Cynics; Julia Dunbar, Emily Bascom, <b>Ashley Boone</b>, Alexis Hiniker; (In Submission at CHI 2021)</p>
            <p className='main'>Seamful Design: A Review of Open, Online Design Initiatives During COVID-19; Stephen MacNeil, Sarah Nicita, <b>Ashley Boone</b>, Kenneth Chen, Enrique Arcilla, Eric Richards, Steven Dow; (Prepared for Submission at CSCW 2021)</p>

            {/* <p>I am also a.....</p> */}
        </div>
    </div>
}

export default Research