import React from 'react'

function Resume(){
    return <div className="page">
        <div className='resumebody'>

            <div id='resumebutton' onClick={ () => window.open(require('../images/AshleyBooneResume9.28.pdf'), '_none')}>
                <p>Click here to download my resume</p>
            </div>


            <iframe src={require('../images/AshleyBooneResume9.28.pdf')} width="100%" height="1200px"></iframe>

        </div>

    </div>
}

export default Resume