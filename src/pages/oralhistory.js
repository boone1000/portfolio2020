import React from 'react'

function oralhistory(){
    return <div className="page">
        <div>
            <img className='caseStudyTitleImage' src={require('../images/oralhistoryCover.png')} alt='backpacking pic'></img>
            <p className="caseStudyMetadata">Professional Work | Student UX Designer | UW-IT</p>
        </div>
        <div className='projectWrapper'>
            <div className='projectBody'>
                <h1>Oral Histories</h1>
                
                <p>Sharing stories of UW students to increase awareness and encourage reflection.</p>

                <img className='caseStudyImage' src={require('../images/oralhistorymockup.png')} alt='backpacking pic'></img>

                <div className='fold'>
                    <h2>My Role</h2>
                    <p>This project was originally conceived as a research effort aimed at building a deeply authentic dialogue with current students. I was placed on the project to add to the growing collection of interviews and to help design a interface that would allow us to share stories with others at UW.</p>
                    <p>I conducted and analyzed interviews, built workflows that helped define the purpose of the interface, brainstormed and iterated on design ideas, assisted and lead separate rounds of usability testing, worked with one other student to analyze results and prioritize changes, reshaped the interface to better fit student mental models, and wrote specifications to drive development of the platform.</p>
                    <p>Special thanks to Jason Civjan, Oorja Chowdhury, Noah, Yujin, Mason, Stephanie, Kathy Bui, Ashley Wang, and Grace Zhu. </p>

                    <h2>Project Impact</h2>
                    <p>This project is currently in backlog to be developed by my department at UW-IT. I wrote specifications to direct future development.</p>
                </div>

                <div className='fold'>
                    <h2>The Student Experience Interviews</h2>
                    <p>This project began as a research method aimed at understanding the breadth and depth of UW student experiences. The research goals are:</p>
                    <li>Cultivate a holistic understanding of students</li>
                    <li>Obtain a more genuine student perspective</li>
                    <li>Focus on the "human" by avoiding generalizations</li>
                </div>

                <div className='fold'>
                    <h2>I approached students to talk about their experiences at UW.</h2>
                    <p>These semi-structured interviews were inspired by historian Studs Turkel and Brandon Stanton, creator of Humans of New York. The interview process is described below.</p>
                    <img className='caseStudyImage' src={require('../images/oralhistoryProcess.png')} alt='Meet a stranger, have a chat, transcribe'></img>
                </div>

                <div className='fold'>
                    <h2>It became clear that these stories could present several benefits to students and university decision makers.</h2>
                    <div className='twocolumns'>
                        <div className='column'>
                            {/* <p>Celebrate Diversity</p>
                            <p>By asking diverse groups of students similar questions, we developed a collection of unique perspectives on common UW experiences. Sharing these perspectives can emphasize the diversity of opportunity available at the UW.</p> */}
                            <p>Offer Advice</p>
                            <p>Seeking help was a common theme in interviews, but many students are unsure of who to talk to. We hope that by sharing these stories readers will be able to find a perspective that can help solve challenges they may be facing.</p>
                            <p>Relieve Isolation</p>
                            <p>After discussing a specific challenge they faced, students would frequently comment on feeling alone to face that struggle. By sharing stories we can help students realize they are not alone.</p>
                        </div>
                        <div className='column'>
                            <p>Prompt Reflection</p>
                            <p>Many students appreciated the opportunity to reflect when participating in interviews. We think we can get the same reaction from listening or reading student stories.</p>
                            {/* <p>Holistic</p>
                            <p>A qualitative research effort provides the opportunity to develop a holistic picture of other students. We want to encourage awareness of the depth of other's experiences, looking at students as whole people beyond numbers or statistics.</p> */}
                        </div>
                    </div>
                </div>

                <div className='fold'>
                    <h2>We built out workflows to detail experiences where students could benefit from self-reflection.</h2>
                    <p>I collaborated with one full-time UX Designer at UW-IT and one Student Designer to build detailed workflows of student experiences, identifying places where students could most clearly benefit from exposure to student stories.</p>
                    <img className='caseStudyImage' src={require('../images/oralhistoryWorkflow.png')} alt='Meet a stranger, have a chat, transcribe'></img>
                </div>

                <div className='fold'>
                    <h2>Building out these workflows helped us define the goal of the sharing platform.</h2>
                    <p>Project Goal: Share the depth and breadth of student experience to encourage reflection, offer advice, and limit feelings of isolation.</p>
                </div>

                <div className='fold'>
                    <h2>Sharing the breadth and depth of UW student experiences.</h2>
                    <p>I advocated that we acheive these goals by playing up two strengths of a growing dataset of 60+ interviews.</p>
                    <div className='twocolumns'>
                        <div className='column'>
                            <p>Diverse Perspectives</p>
                            <p>By asking diverse groups of students similar questions, we developed a collection of unique perspectives on common UW experiences. Sharing these perspectives can emphasize the diversity of opportunity available at the UW.</p>
                            <p>Users should be able to review many students responses within one topic of interest (e.g. choosing a major, finding community).</p>
                            <p>This became the "Stories" page.</p>
                        </div>
                        <div className='column'>
                            <p>Holistic Experiences</p>
                            <p>A qualitative research effort provides the opportunity to develop a holistic picture of other students. We want to encourage awareness of the depth of other's experiences, looking at students as whole people beyond numbers or statistics.</p>
                            <p>Users should be able to read one student's full, uninterrupted story. They should also be able to find students with specific traits. </p>
                            <p>This became the "Students" page.</p>
                        </div>
                    </div>
                </div>

                <div className='fold'>
                    <h2>Iteration I</h2>
                    <p>I assisted two other student UX Designers to build the first prototype for this project on Sketch.</p>
                    <img className='caseStudyImage' src={require('../images/oralhistoryPrototypeOne.png')} alt='Meet a stranger, have a chat, transcribe'></img>
                </div>

                <div className='fold'>
                    <h2>We used the prototype to conduct usability tests.</h2>
                    <p>In these sessions, we encouarged participants to explore the website as they normally would, then asked them to complete a series of tasks. We utilized think-aloud protocol and asked participants questions throughout the session to reveal their thought processes, expectations, and first impressions.</p>
                </div>

                <div className='fold' id='numberedFindings'>
                    <h2>Usability tests revealed serious disconnect between website structure and users' mental models.</h2>
                    <p>01. Users did not realize the stories were collected from interviews, undermining trust and creating confusion around language and formality</p>
                    <p>02. The difference between sorting by students and sorting by stories was not clear to participants</p>
                    <p>03. Language of the coding scheme that is used to sort stories by common experiences was not understood by participants</p>
                </div>

                <div className='fold'>
                    <h2>I inherited project leadership and began to make changes to address usability test findngs.</h2>
                    <p>01. </p>
                    <p>Users did not realize the stories were collected from interviews, undermining trust and creating confusion around language and formality</p>
                    <p>> Introduced a question answer format for the long interview pages and</p>
                    <p>> Strategically use quotation marks to reduce ambiguity in other locations</p>
                    <p>> Use the home page to provide context on the interview process</p>
                    <p>02.</p> 
                    <p>The difference between sorting by students and sorting by stories was not clear to participants</p>
                    <p>> Renamed the "Stories" feautre "Collections" to differentiate</p>
                    <p>> Redeveloped the visual design to separate "Students" and the new "Collections" page</p>
                    <p>> Removed the filter to mark unique functions of the two pages.</p>
                    <p>03.</p> 
                    <p>Language of the coding scheme that is used to sort stories by common experiences was not understood by participants</p>
                    <p>> Re-sort the coding scheme into codes that relate to student experience, using familiar language.</p>
                    <p>> For example, the codes learning/gaining perspective and identity/finding meaning were grouped with several others into one Collection titled "self reflection."</p>
                </div>


                <div className='fold'>
                    <h2>Iteration II</h2>
                    <p>I worked with one other Student UX Designer to make the changes described above. To create a second prototype.</p>
                    <img className='caseStudyImage' src={require('../images/oralhistoryPrototypeTwo.png')} alt='Meet a stranger, have a chat, transcribe'></img>
                    <img className='caseStudyImage' src={require('../images/oralhistoryPrototypeTwoFull.png')} alt='Meet a stranger, have a chat, transcribe'></img>
                </div>

                <div className='fold'>
                    <h2>We used the prototype to conduct a second round of usability tests.</h2>
                    <p>The scope of the changes made between the first and second iterations of the design required an additional round of usability testing to test whether the second iteration addressed the issues in the first.</p>
                </div>

                <div className='fold'>
                    <h2>We received overwhelmingly positive feedback from participants.</h2>
                    <p>The results of our usability testing indicated that the changes made had successfully resolved the issues surfaced in the original usability tests.</p>
                    <p>We made several changes to syntax and worked to clarify our process further by writing an about page explaining the teams role in the interviews and sharing platform.</p>
                    <p>We also idenitfied several opportunities for future work to continue improving the sharing platform.</p>
                    <div className='twocolumns'>
                        <div className='column'>
                            <p>01.</p>
                            <p>Highlight related resources for students</p>
                            <p>02.</p>
                            <p>Recruit interviewers and interviewees through website</p>
                        </div>
                        <div className='column'>
                            <p>03.</p>
                            <p>Provide interview summaries at the beginning of articles</p>
                            <p>04.</p>
                            <p>Integrate platform within other online UW tools</p>
                        </div>
                    </div>
                </div>

                <div className='fold'>
                    <h2>I wrote specifications to direct future development.</h2>
                    <p>The project is currently in the pipeline for future development by UW-IT. </p>
                </div>

            </div>  

            {/* <div className="finalProduct">
                <p>Husky Voices</p>
                <img className='caseStudyImage' src={require('../images/oralhistorymockup.png')} alt='backpacking pic'></img>
            </div> */}

        </div>

    </div>

}

export default oralhistory