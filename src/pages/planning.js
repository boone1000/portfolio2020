import React from 'react'

function planning(){
    return <div className="page">
        <div>
            <img className='caseStudyTitleImage' src={require('../images/myplanCover.png')} alt='backpacking pic'></img>
            <p className="caseStudyMetadata">Professional Work | Assistant UX Designer | UW-IT</p>
        </div>
        <div className='projectWrapper'>
            <div className='projectBody'>
                <h1>Academic Planning</h1>
                
                <p>Long term academic planning can help students fulfill requirements, graduate on time, and reduce stress during course registration.  However, long term academic planning is currently not well supported by the University. We identify challenges facing students and address these problems by replacing an existing planning feature on MyPlan.</p>
                <img className='caseStudyImage' src={require('../images/myplanprogress.png')} alt='backpacking pic'></img>

                <div className='fold'>
                    <h2>My Role</h2>
                    <p>I was put on this project to provide fresh perspective for a long term problem faced by the Unviersity of Washington: how to incorporate sample plans in the digital planning syste. I lead the research phase of the project and advocated to shift the goal of the project away from sample plans and towards supporting long term academic planning. Along with one other student worker, l worked to design, prototype, evaluate, and present final designs to deveopers.</p>
                    <p>Special thanks to Kathy Bui along with Timothy Sun, Char Palacay, and Jason Civjan.</p>

                    <h2>Project Impact</h2>
                    <p>The presentation of this process and design work influenced long-term product roadmaps for MyPlan, a tool used by over 45,000 students at the UW.</p>
                </div>

                <div className='fold'>
                    <h2>Research</h2>
                    <div className='twocolumns'>
                        <div className='column'>
                            <h3>Interviews</h3>
                            <p>We conducted informal, on-campus interviews aimed at hearing student stories about how they found their academic path.</p>
                        </div>
                        <div className='column'>
                            <h3>Surveys</h3>
                            <p>45 participants responded to our 12 question survey, which we used to further validate the results from our interviews and discussions with campus advisors.</p>
                        </div>
                    </div>

                    <div className='twocolumns'>
                        <div className='column'>
                            <img className='caseStudyImage' src={require('../images/myplanAffinity.png')} alt='backpacking pic'></img>
                        </div>
                        <div className='column'>
                            <img className='caseStudyImage' src={require('../images/myplanSurvey.png')} alt='backpacking pic'></img>
                        </div>
                    </div>

                </div>

                <div className='fold' id='numberedFindings'>
                    <h3>Research revealed several barriers students face when planning.</h3>
                    <p>1. Students do not know what courses will be offered in advance</p>
                    <p>2. Decentralized information is difficult to find</p>
                    <p>3. Sample plans are difficult to read, inconsistent, and uncustomizable</p>
                    <p>4. Planning is significantly harder for students before being accepted to a department</p>
                </div>

                {/* <div className='fold'>
                    <h3>Research revealed several barriers students face when planning.</h3>
                    <div className='numberedFindings2'>
                        <p className='listbox'>1. Students do not know what courses will be offered in advance</p>
                        <p className='listbox'>2. Decentralized information is difficult to find</p>
                        <p className='listbox'>3. Sample plans are difficult to read, inconsistent, and uncustomizable</p>
                        <p className='listbox'>4. Planning is significantly harder for students before being accepted to a department</p>
                    </div>
                </div> */}

                <div className='fold'>
                    <h2>Existing resources for planning are inadequate.</h2>
                    <div className='twocolumns'>
                        <div className='column'>
                            <h3>My Plan Interface</h3>
                            <p>Findings indicate that this digital tool does not offer enough guidance to help students with academic planning.</p>
                        </div>
                        <div className='column'>
                            <h3>Departmental Sample Plans</h3>
                            <p>Students find the sample plans inconsistent, overly prescriptive, and uncustomizable, making  them difficult to use for most students</p>
                        </div>
                    </div>

                    <div className='twocolumns'>
                        <div className='column'>
                            <img className='caseStudyImage' src={require('../images/myplanBefore.png')} alt='backpacking pic'></img>
                        </div>
                        <div className='column'>
                            <img className='caseStudyImage' src={require('../images/myplanSample.png')} alt='backpacking pic'></img>
                        </div>
                    </div>
                </div>

                {/* <div className='fold'>
                     <p className='pullQuote'>How can the University better support long term academic planning? </p>
                </div> */}

                <div className='fold'>
                    <p className='pullQuote'>How can the University better support long term academic planning? </p>
                    <p>Provide accessible and reliable information to help students decide which classes to take and when </p>
                    <p>Organize data to make academic requirements more clear, improve consistency across departments, and allow students to customize their plans</p>
                    <p>Support students with no major to explore, compare options, and move toward graduation</p>
                </div>

                

                <div className='fold'>
                    <h2>Design</h2>
                    <h3>Low Fidelity Sketches</h3>
                    <p>Used to quickly convey design ideas and explore possible directions for design work.</p>

                    <img className='caseStudyImage' src={require('../images/myplanSketches.png')} alt='backpacking pic'></img>
                </div>

                <div className='fold'>
                    <h3>Wireframes</h3>
                    <p>We chose to move forward with the two vertical panel design.  The left panel shows the student's plan and the right shows the requirements for the chosen program.  Wireframes were used to explore the details of the design and to establish workflows.</p>

                    <img className='caseStudyImage' src={require('../images/myplanWireframes.png')} alt='backpacking pic'></img>
                </div>

                <div className='fold'>
                    <h3>Interactive Prototype </h3>
                    <p>An interactive prototype was used to evaluate the design in a usability test.</p>
                
                    <img className='caseStudyImage' src={require('../images/myplanPrototype.png')} alt='backpacking pic'></img>
                </div>


                <div className='fold'>
                    <h2>The design prototype was evaluated with a usability study.</h2>
                    <h3>Usability Testing</h3>
                    <p>Using the high fidelity interactive prototype, we ran usability tests with 8 UW Students to evaluate the efficacy of the design.  We use the findings from these usability tests to improve the design and to further validate many of the choices we had made throughout the design process.</p>
                </div>

                <div className='fold'>
                    <h2>The usability study surfaced several design changes.</h2>
                        <h4>Surface salient course information</h4>
                        <p>We discovered that participants in the usability test considered the course title as highly important course information that was not prominent in the prototype.  We changed the position of this information to make it more salient to students</p>

                        <h4>Improve Readability</h4>
                        <p>The acronyms used in the prototype were unclear to participants in our usability studies.  We clarified the acronyms by writing out the full text or by adding the color codes of the larger system to reference quarters. These changes improve the readability of the system</p>

                        <h4>Clarify Iconography</h4>
                        <p>Many of the icons we used were not correctly interpreted by participants, so we redesigned them to make the purpose more clear.</p>
                </div>

                <div className='fold'>
                    <h2>We received overwhelmingly positive feedback from users.</h2>
                    <p className='quote'>"This is better than anything that I've currently used to plan.  This combined the best part of MyPlan with the best part of DARS" (p1)</p>
                    <p className='quote'>"I didn't have to go hunting for it in different areas and it was nice that it was all on the same page and didn't navigate me to a new window" (p4)</p>
                    <p className='quote'>"Having the list that removes things from itself is a lot better than DARS because it still has a long list of things even if you have them done" (p7)</p>
                    </div>

                <div className='fold'>
                  <h2>Final Product</h2>
                  <img className='caseStudyImage' src={require('../images/myplanCover.png')} alt='backpacking pic'></img>
                  {/* <div className='twocolumns'>
                    <div className='column'>
                        <img className='caseStudyImage' src={require('../images/myplanFinalDetails.png')} alt='backpacking pic'></img>
                    </div>
                    <div className='column'>
                        <p>Two Panel design allows students to see graduation requirements and course options as they create their academic plan.</p>
                        <p>The collapsible compartment provides important course details and allows students to add the course to their plan. This information is commonly used by students to make decisions about course selection. </p>
                        <p>Students specify the desired quarter, year, and number of credits for variable credit courses. These inputs determine where the course will be added to their schedule.</p>
                        <p>Click "load more" to view other courses that fulfill the English Composition Requirement.</p>
                        <p>Collapsible compartment displays courses that have been taken in the past by students in the major in order to fill this requirement. </p>
                    </div>
                  </div> */}

                </div>

                <div className='fold'>
                    <h3>Reflection</h3>
                    <p>The biggest challenge of this project was checking every assumption I brought in from my own experiences with academic planning. Like the participants in our studies, I am also a UW student who registers quarterly for classes and must plan in advance in order to graduate with my desired degree. Throughout this project, I challenged myself to question all assumptions and back up all decisions with data from others, rather than basing the design on my own experiences.This "Question all Assumptions" mindset has made me a better designer by forcing me to justify decisions through data and to remain curious and open to diverse perspectives, goals, and needs. </p>
                </div>
            </div>    
        </div>

    </div>

}

export default planning