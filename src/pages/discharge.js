import React from 'react'

function discharge(){
    return <div className="page">
        <div>
            <img className='caseStudyTitleImage' src={require('../images/dischargecover.jpg')} alt='<span>Photo by <a href="https://unsplash.com/@nci?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">National Cancer Institute</a> on <a href="https://unsplash.com/s/photos/pediatric-cancer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>'></img>
            <p className="caseStudyMetadata">Capstone Project | Seattle Children's Hospital | June 2020</p>
        </div>

        <div className='projectWrapper'>
            <div className='projectBody'>

                <h1>Pediatric Patient Discharge</h1>
                
                <p>Leaving the hospital can be a stressful experience for pediatric cancer patients and their families. After being discharged, family members are solely responsible for their child’s care, which now requires complex tasks including administering medications, tracking symptoms, changing dressings, tube feedings, attending follow up appointments, and potential rehospitalizations. We design a guided activity that prompts patient families to create a plan that adapts the many necessary care activities to their home lives.</p>
                <img className='caseStudyImage' src={require('../images/dischargebaby.jpg')} alt='<span>Photo by <a href="https://unsplash.com/@adroman?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Aditya Romansa</a> on <a href="https://unsplash.com/s/photos/healthcare?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>'></img>

                <div className='fold'>
                    <h2>My Role</h2>
                    <p>I worked very closely with three other students to research, ideate, prototype this solution and present our findings to key stakeholders. I acted as project manager for the data analysis phase of the project, leading the group as we translated our data into insightful research findings. I conducted interviews, participated as a key voice in group discussions, and worked independently to make the project video.</p>
                    <p>Special thanks to my capstone team: Kathy Bui, Laura Meng, and Melissa Pao. I would also like to thank Reina, Staci, and Casey, our mentors and project sponsors.</p>

                    <h2>Project Impact</h2>
                    <p>The final product of this project is now a resource that is available for patient families to use as they prepare to leave the hospital. Additional recommendations from our research are also being considered by Seattle Children's Leadership.</p>
                </div>

                <div className='fold'>
                    <h2>We jumped in to learn more about the discharge process.</h2>
                    <p>We took a variety of approaches to understanding the project space and the experiences of the people involved.</p> 
                    <li>Artifact Analysis</li>
                    <li>Subject Matter Expert Interviews</li>
                    <li>Interviews with Patient Families</li>
                    <li>Interviews with Nurses</li>
                    <img className='caseStudyImage' src={require('../images/dischargeAffinity.png')} alt='backpacking pic'></img>
                </div>

                <div className='fold'>
                    <h2>Journey Map</h2>
                    <p>The research we conducted allowed us to develop a user journey map showing critical touchpoints, characterizing education throughout the hospital stay, noting painpoints, and identifying opportunities to streamline the process.</p> 
                    <img className='caseStudyImage' src={require('../images/dischargeJourney.png')} alt='backpacking pic'></img>
                </div>

                <div className='fold'>
                    <h2>The journey map revealed several opportunities we considered addressing in our final deliverable.</h2>
                    <div className='twocolumns'>
                        <div className='column'>
                            <p>01.</p>
                            <p>Discharge Journey Infographic: A poster that visualizes the most common touch points experienced within the discharge journey.</p>
                            <p>02.</p>
                            <p>Discharge Kit: A discharge kit that contains important resources used by patient families after leaving the hospital.</p>
                        </div>
                        <div className='column'>
                            <p>03.</p>
                            <p>Take-Home Schedule: A personalizable take-home schedule for patient families to reference, outlining their first night or week of discharge.</p>
                            <p>04.</p>
                            <p>Patient Education Tracker: A method for tracking the education the caregiver(s) have received throughout treatment.</p>
                        </div>
                    </div>
                </div>

                <div className='fold'>
                    <h2>We evaluated these concepts by asking for feedback from nurses and patient families.</h2>
                    <p>In an online survey, we asked participants to rate each concepts ability to improve the discharge process based on five values revealed in our research.</p> 
                </div>

                <div className='fold'>
                    <h2>With this input, we were able to prioritize these concepts based on feasibility and impact.</h2>
                    <p>Examining the quantitative and qualitative data we received, the team assigned values to quantify each idea’s impact on nurses and patients, as well as the feasibility of each solution. </p>
                    <img className='caseStudyImage' src={require('../images/dischargePriorities.png')} alt='backpacking pic'></img>
                    <p>Based on this analsyis, we decided to move forward designing a take home schedule for patient families.</p>
                </div>

                <div className='fold'>
                    <h2>We explored how a take-home schedule could engage and empower patient families.</h2>
                    <p>We detailed several goals for a solution in this space. </p>
                    <div className='twocolumns'>
                        <div className='column'>
                            <p>01.</p>
                            <p>Solution must help families fit care requirements into their home lives.</p>
                            <p>02.</p>
                            <p>Solution must be highly individualized, addressing the unique needs of each patient.</p>
                            <p>03.</p>
                            <p>Solution must help support successful education for families.</p>
                        </div>
                        <div className='column'>
                            <p>04.</p>
                            <p>Solution must consolidate important information and serve as a reference.</p>
                            <p>05.</p>
                            <p>Solution must encourage proactive planning.</p>
                            
                        </div>
                    </div>
                </div>
                
                <div className='fold' id='numberedFindings'>
                    <h2>More than half of families face significant challenges in the first night after discharge.</h2>
                    <p>Although patient families leave the hospital equipped with the education given by nurses, it can be difficult to adapt the teachings into their home lives. This barrier makes the first night after a patient has been discharged difficult for families, who experience high levels of stress and face potential rehospitalizations.</p>
                </div>

                {/* <div className='fold'>
                    <h2>Digital or no?</h2>
                    <p>We detailed several goals for a solution in this space. </p>
                </div> */}

                <div className='fold'>
                    <h2>Each group member created iterations of the worksheet.</h2>
                    <p>Featured iterations are shown below. Circled elements indicate features included in the final version. </p>
                    <img className='caseStudyImage' src={require('../images/dischargeIterate.png')} alt='backpacking pic'></img>
                </div>

                <div className='fold'>
                    <h2>A guided activity to help patient families feel prepared to leave the hospital.</h2>
                    <p>We submitted the guided worksheet to Seattle Children's Hospital as a resource to share with patient families.</p>
                    <img className='caseStudyImage' src={require('../images/dischargeFinal.png')} alt='backpacking pic'></img>
                    <p>This guided activity is designed to help engage and empower patient families by:</p>
                    <div className='twocolumns'>
                        <div className='column'>
                            <p>01.</p>
                            <p>Emphasizing the first night after discharge</p>
                            <p>02.</p>
                            <p>Prompting families to consider how various care requirements will fit into their normal lives</p>
                            <p>03.</p>
                            <p>Requiring caregivers to consolidate and make sense of information</p>
                        </div>
                        <div className='column'>
                            <p>04.</p>
                            <p>Surfacing questions that helps nurses find knowledge gaps.</p>
                            <p>05.</p>
                            <p>Encouraging families to think ahead and engage in proactive planning.</p>
                            
                        </div>
                    </div>
                </div>

                <div className='fold'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vPInApaRkaw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>


                <div className='fold'>
                    <h2>Reflecting on Adapting to COVID-19</h2>
                    <p>Our team was challenged by the unprecedented COVID-19 pandemic. Our University was the first to close due to quarantine. This massive restriction on movement forced the team to adapt many of our original plans to the new circumstances. We were not able to conduct in-person observations and relied instead on interviews with Subject Matter Experts. Likewise, we had originally planned to conduct a participatory design workshop with nurses and patient families, which was no longer feasible. We used surveys to collect this feedback, though we were disappointed to not be able to work directly with the people our solution was intended to help.</p>
                    <p>Lastly, we all had to adapt to working online only. Working efficiently online was a challenge, but my team found many new tools that helped facilitate online collaboration. Our consistent meetings helped me transition to "the new normal" working from home and collaborating exclusively online. </p>
                    <img className='caseStudyImage' src={require('../images/dischargeTeam.png')} alt='backpacking pic'></img>
                </div>


            </div>
        </div>
    </div>

}
export default discharge