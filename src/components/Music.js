import React, { Component } from 'react';
import ReactPlayer from "react-player"
import { Helmet } from 'react-helmet';

export default class Music extends Component {
    render() {
        return (
            <div className="row">
            <Helmet>
                <title>Music: Personal Website of Dan Kennedy</title>
            </Helmet>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="p-3 content-column">
                        <p>
                            <h1 className="display-6 cursive">music</h1>
                            I have been playing guitar for some time and I like to record whenever I get the chance. 
                            It is never as often as I would like, of course. A modest goal of mine would be to play and record more than 
                            I currently am doing. The clips below are samples of my playing. I hope you enjoy them.
                        </p>
                        <p className='d-flex justify-content-center'>
                          <ReactPlayer url="https://soundcloud.com/daniel-kennedy-ii-839183015/sets/covers?si=1251cd7eca374193b973c396e7d9337e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />  
                        </p>

                    </div>
                    </div>
                    <div className="col-md-3"></div>
            </div>
        )
    }
}