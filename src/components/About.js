import React, { useState } from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#4E545C' : 'white',
        border: '1px solid',
        borderColor : props.mode === 'dark' ? 'white' : 'black'
    }
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Ligth Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")

    //     }
    // }

    return (
        <div className="container" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2 className='my-3'>About</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>Analyze Your Text</strong> 
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Text Analysis for Enhanced App Functionality
                            In today's digital age, the ability to analyze text has become a crucial component of various applications, empowering users with deeper insights, enhanced
                            functionality, and improved user experiences. Whether it's a social media platform, a productivity tool, or a language learning app, text analysis plays a pivotal role in extracting valuable information,
                            understanding user sentiments, and automating processes.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <strong> Free to Use</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Empower Your App with Free Text Analysis Tools
                            In today's tech-savvy landscape, harnessing the power of text analysis doesn't have to come at a cost. Free-to-use text analysis tools are paving the way 
                            for developers to integrate sophisticated features into their applications without breaking the bank. Whether you're developing a community forum, a note-taking app, or a budget-friendly alternative to premium services, these tools can add significant value to your application
                            without draining your resources.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong> Browser Comepatable </strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Enhance Browser Compatibility for Your App: Budget-Friendly Solutions
                            Ensuring your app's compatibility across various browsers is crucial for reaching a diverse user base. Fortunately, there are cost-effective strategies and tools available 
                            streamline this process without breaking the bank.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
             <button type="button" onClick = {toggleStyle} className="btn btn-primary">{btntext}</button>
            </div> */}
        </div>
    )
}
