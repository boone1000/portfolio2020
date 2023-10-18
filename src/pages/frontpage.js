import React from 'react'

function frontPage(){
    return <div className="page">

        <div className='aboutContainer'>
            <div className='aboveFold'>
                <div className='wrapperPics'>
                    <img className='aboutImage' src={require('../images/Ashley.jpg')} alt='Image of Ashley'></img>
                </div>
                <div className='biotext'>
                    <h1>Ashley Boone</h1>
                    <p className='main'> I am a third-year PhD student specializing in Human-Centered Computing, exploring the intersection of digital civics and citizen science. Employing ethnographic methods, design activities, and action research, my current research uses data as an entry point to understand the social practices and technologies that enhance civic engagement through data.</p>   
                    <p className='main'>I am a currently pursuing my PhD at Georgia Tech advised by Dr. Christopher A. Le Dantec and Dr. Carl DiSalvo. I received my undergraduate degree in Human Centered Design and Engineering from the University of Washington in 2020.</p>

                </div>
            </div>

            <div className='section'>
                <h1>Projects</h1>
                <div className='researchProject'>
                    <img className='projectIcon' src={require('../images/icon_head.png')} alt='head icon'></img>
                    <div>
                    <h2>Caring Data Systems</h2>
                    <p>We investigate the data practices of an Atlanta based mission-driven organization to explore how social practices and technological tools characterize a data system with a political orientation to care.</p>
                    </div>
                </div>
                <div className='researchProject'>
                    <img className='projectIcon' src={require('../images/icon_eye.png')} alt='eye icon'></img>
                    <div>
                    <h2>Science Learning on Twitter</h2>
                    <p>How do people publically respond to educational content on Twitter? We analyze replies and user accounts of people who interact with educational tweets from scientists with large followings on Twitter.</p>
                    </div>
                </div>
                <div className='researchProject'>
                    <img className='projectIcon' src={require('../images/icon_atom.png')} alt='atom icon'></img>
                    <div>
                    <h2>Creativity, Play, and Movement in STEM Education</h2>
                    <p>How might we leverage creativity, play, and movement to engage underrepresented students in STEM topics? We developed an innovative curriculum designed to incorporate dance, art, collaboration, and free choice and evaluate student responses.</p>
                    </div>
                </div>


            </div>

            <div className='section' id='finalSection'>
                {/*<h1>Publications</h1>*/}
                {/*<p>immigrant affairs</p>*/}
                {/*<p>haunted data</p>*/}
                {/*<p>audubon</p>*/}
                {/*<p>scistarter</p>*/}
                {/*<p>twitter paper</p>*/}
                {/*<p>social justice paper, CHI</p>*/}
                <p><b>Data Practice for a Politics of Care: Food Assistance as a Site of Careful Data Work.</b> Ashley Boone, Carl DiSalvo, Christopher A. Le Dantec. Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems, April 2023 </p>
                <p><b>Careful Data Tinkering.</b> Anh-Ton Tran, Ashley Boone, Christopher A. Le Dantec, Carl DiSalvo. Proc. ACM Hum.-Comput. Interact, 6, CSCW2, November 2022.</p>
                <p><b>Chameleon Clippers: A Tool for Developing Fine Motor Skills in Remote Education Settings.</b> Gennie Mansi, Ashley Boone, Sue Reon Kim, Jessica Roberts; International Journal of Computer-Supported Collaborative Learning, 2023 (Forthcoming)</p>
                <p><b>STEM Outreach in Underserved Communities through the Lens of Play, Creativity, and Movement.</b> Ashley Boone, Jamie Vanderwall, Maya Klitsner, Irini Spyridakis; IEEE Global Humanitarian Technology Conference (GHTC). IEEE, 2020.</p>
                <p><b>Parenting with Alexa: Exploring the Introduction of Smart Speakers on Family Dynamics.</b> Erin Beneteau, Ashley Boone,  Yuxing Wu, Julie A. Kientz, Jason Yip, Alexis Hiniker; CHI 2020: The 2020 ACM Conference on Human Factors in Computing Systems.</p>
                <p><b>Finding Place in a Design Space: Challenges for Supporting Community Design Efforts at Scale</b> Steven MacNeil,  Jason Ding, Ashley Boone, Anthony Grubbs, Steven Dow; Proceedings of the ACM on Human-Computer Interaction, 5(CSCW1), 1-30.</p>
                <p><b>Is Someone Listening? Audio Related Privacy Perceptions and Design Recommendations from Guardians</b> Pragmatists, and Cynics; Julia Dunbar, Emily Bascom, Ashley Boone, Alexis Hiniker; Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 5(3), 1-23.</p>

            </div>


        </div>

    </div>
}

export default frontPage