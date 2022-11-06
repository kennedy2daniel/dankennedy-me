import React, { Component } from 'react';
import {Helmet} from "react-helmet";

export default class Music extends Component {
    render() {
        return (

            <div className="row">
            <Helmet>
                <title>Home: Personal Website of Dan Kennedy</title>
            </Helmet>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="p-3 content-column">
                        <p>
                            <h1 className="display-6 cursive">home</h1>
                            You have stumbled upon the personal website of Dan Kennedy. This
                            website has existed in many forms and on many hosts, starting on <a href="https://en.wikipedia.org/wiki/Yahoo!_GeoCities">GeoCities</a> 
                             &nbsp;and, as of 2022, residing on AWS.
                        </p>
                        <p>
                            Like most human beings, I am many things to many people. I am a
                            father, husband, son, brother, uncle, son-in-law, and brother-in-law.
                            Professionally I am a web developer (full-stack), IT consultant,
                            musician, as well as an amateur photographer. I am currently employed
                            in the government sector.
                        </p>
                        <p>
                            I hope you stay around a bit and enjoy my site's offerings. If you'd
                            like to get in touch, I can be found on social media (icons below).
                            Or, you can always <a href="mailto:kennedy2.daniel@gmail.com">email me</a>.
                        </p>
                        <p>Thanks!</p>
                        <p className="cursive"><h4>Dan</h4></p>
                        <p>
                            <ul className='list-group list-group-horizontal'>
                                <li className='social list-group-item'><a href="https://www.facebook.com/dkennedy.ii"><i className="fab fa-facebook text-primary"></i></a></li>
                                <li className='social list-group-item'><a href="https://www.flickr.com/photos/sevnth/"><i className="fab fa-flickr text-danger"></i></a></li>
                                <li className='social list-group-item'><a href="https://github.com/kennedy2daniel"><i className="fab fa-github text-dark"></i></a></li>
                                <li className='social list-group-item'><a href="https://www.linkedin.com/in/dkennedy-ii/"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </p>
                    </div>
                    </div>
                    <div className="col-md-3"></div>
            </div>
        )
    }
}