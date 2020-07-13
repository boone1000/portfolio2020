import React from 'react'

function lighthouse(){
    return <div className="page">
        <div>
            <img className='caseStudyTitleImage' src={require('../images/lighthouseCover.png')} alt='backpacking pic'></img>
            <p className="caseStudyMetadata">Class Project | Winter  2018</p>
        </div>

        <div className='projectWrapper'>
            <div className='projectBody'>

                <h1>Lighthouse</h1>
                
                <p>Walking home in the dark can be a negative experience that many people face daily. Young adults, in particular, must face this discomfort because they have limited transportation options late at night and may not have the funds to avoid the walk.  We conduct user research and design a solution that crowdsources safety through data and empowers users to make decisions about their own safety.</p>
                <img className='caseStudyImage' src={require('../images/lighthouseCover.png')} alt='backpacking pic'></img>

                <div className='fold'>
                    <h2>My Role</h2>
                    <p>I worked very closely with three other students to research, prototype, evaluate, and design this mobile app. I was a leader in group discussions and emphasized consideration of design goals throughout.</p>
                    <p>Special thanks to Kathy Bui, Kendra Specht, Irene Liu</p>

                    <h2>Project Impact</h2>
                    <p>My team presented this class project in March 2018. We received excellent feedback for our thoughtful consideration of users throughout the design process. This was the first project I completed carrying an idea throughout the entire human centered design process and it sparked my excitement and long term interest in UX Design.</p>
                </div>

                <div className='fold'>
                    <h2>Walking home in the dark can be a negative experience that many face daily.</h2>
                    <p> The safety of those who walk home alone at night is frequently put at risk. Young adults, in particular, must face this discomfort because they have limited transportation options late at night and may not have the funds to avoid the walk.</p>
                </div>

                <div className='fold'>
                    <h2>We hope to help young adults feel more at ease during their walk home.</h2>
                    <p> Our mobile application and smartwatch extension will give users the tools to feel safe in a variety of situations by contacting their friends and family during the walk or reaching authorities if need be. Our solution can create safer communities and empower users to make informed decisions about their own safety.</p>
                </div>

                <div className='fold' id='numberedFindings'>
                    <h3>Interviews and observations revealed that students...</h3>
                    <p>01.</p>
                    <p>Feel they have no option other than walking home in the dark due to a lack of resources.</p>
                    <p>02.</p>
                    <p>Feel more comfortable when walking with friends or calling friends on the phone</p>
                    <p>03.</p>
                    <p>Want to reassure friends and family after reaching their destination safely</p>
                </div>

                <div className='fold'>
                    <h2>Competitive Analysis</h2>
                    <p>We examine existing products to identify how they meet user needs and how they follow short.  We looked at SafeTrek, Watch Over Me, and the Nimb Ring.  From this analysis we find that: </p>
                    <li>Prices are prohibitive</li>
                    <li>Products are only useful in an emergency situation</li>
                    <li>User must rely on others to watch over them as they walk instead of being empowered to take care of themselves.</li>
                    <p>The Nimb ring alerts police in case of emergency, but it costs $250:</p>
                    <img className='caseStudyImage' src={require('../images/nimbRing.jpeg')} alt='backpacking pic'></img>
                </div>

                <div className='fold'>
                    <h2>Personas</h2>
                    <p>Based on user interviews, we developed two personas to represent common goals, desires, and pain points of our user group.  </p>
                    <img className='caseStudyImage' src={require('../images/lighthousePersonas.png')} alt='backpacking pic'></img>
                </div>

                <div className='fold'>
                    <h3>Design Requirements</h3>
                    <p>After developing a working understanding of our user group, the team determined design requirements to direct our solution.  We wanted to create a solution that helped users:​</p>

                    <div className='twocolumns'>
                        <div className='column'>
                            <p>01.</p>
                            <p>reassure friends and family of their safety</p>
                            <p>02.</p>
                            <p>find the safest way home using publicly available data as well as data collected through the platform</p>
                            <p>03.</p>
                            <p>empower users to manage their own safety by making informed decisions</p>
                        </div>
                        <div className='column'>
                            <p>04.</p>
                            <p>create a sense of community commitment to safety</p>
                            <p>05.</p>
                            <p>handle a wide variety of situations, including a typical walk and an emergency situation</p>
                        </div>
                    </div>
                </div>

                <div className='fold'>
                    <h2>Information Architecture</h2>
                    <p>After finalizing the decision to create a mobile app paired with an optional smart watch extension, the group was ready to organize app functionality into an information architecture.</p>
                    <img className='caseStudyImage' src={require('../images/lighthouseArchitecture.png')} alt='backpacking pic'></img>
                </div>

                <div className='fold'>
                    <h2>Paper Prototype</h2>
                    <p>The Information Architecture helped us create a paper prototype of our application.  The paper prototype focused on three key paths: the initial set up, a normal walk, and an emergency situation.</p>
                    <img className='caseStudyImage' src={require('../images/lighthousePaper.jpg')} alt='backpacking pic'></img>
                </div>

                <div className='fold'>
                    <h2>The paper prototype was used to conduct a usability test.</h2>
                    <p>We used our paper prototype to conduct usability testing with four target users. This study sought to evaluate the usability of our application LightHouse, using a low-fidelity paper prototype to test three basic features with potential users: the initial set up, a normal walk home, and an emergency encounter.  Observations from this study informed a series of improvements to our original design.</p>
                    <h3>Participants</h3>
                    <p>We tested our prototype with four young women between the ages of 19 and 21.  All four participants regularly use their cell phones and frequently walk alone at night, both on and off campus.</p>
                    <h3>Methods</h3>
                    <p>For each participant, we conducted the usability test through pre-observation interviews, task completion and observation, and post-observation interviews. We also used  Rapid Iterative Testing and Evaluation (RITE) to address issues encountered by multiple test participants that hindered their ability to complete the task.</p>
                </div>

                <div className='fold'>
                    <h2>The usability test revealed several important considerations.</h2>
                    <p>By observing users completing our three key task scenarios, we came to several conclusions about user behavior. The most important things we found in our usability testing were that users:</p>
                    <div className='twocolumns'>
                        <div className='column'>
                            <p>01.</p>
                            <p>Reflexively enter a security pin when given the option, even if they are not safe</p>
                            <p>02.</p>
                            <p>Value the ability to contact their friends and family and wish they were able to do so throughout the walk</p>
                            <p>03.</p>
                            <p>Do not read even small amounts of text</p>
                        </div>
                        <div className='column'>
                            <p>05.</p>
                            <p>Are more likely to use the smartwatch extension than the button on the phone screen</p>
                            <p>06.</p>
                            <p>Value the ability to choose their route based on available data</p>
                        </div>
                    </div>
                    <p>These observations led us to make several changes to our mobile application, including re-prioritizing the desire to stay connected with friends and family, redesigning the panic button response, eliminating redundant setup screens, and leaning on visual cues instead of text throughout the design.</p>
                </div>

                <div className='fold'>
                        <h2>Wireframes</h2>
                        <p>The annotated wireframes give an overview of the purpose and functionality of our solution on a typical walk home.</p>
                        <img className='caseStudyImage' src={require('../images/lighthouseWireframes.png')} alt='backpacking pic'></img>
                </div>

                <h2>High Fidelity Mockup</h2>
                <p>The high-fidelity mockup is the last step of the process that brings together our work throughout the quarter in a complete, professional, and visually pleasing manner.</p>

            </div>
            <img className='caseStudyImage' id='featureImage' src={require('../images/lighthouseFinal.png')} alt='backpacking pic'></img>


        </div>
    </div>
}

export default lighthouse