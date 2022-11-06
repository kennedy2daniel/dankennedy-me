import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
export default class Blog extends Component {
    render() {
        async function GetPosts() {
            let response = await fetch('../posts.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })

            let json = await response.json();
            console.log(json);
            document.getElementById('date').innerHTML = json[0].date;
            document.getElementById('title').innerHTML = json[0].title;
            document.getElementById('content').innerHTML = json[0].content;
        }
        GetPosts();
        return (
            <div className="row">
            <Helmet>
                <title>Blog: Personal Website of Dan Kennedy</title>
            </Helmet>
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="p-3 content-column">
                    <p>
                        <h1 className="display-6 cursive">blog</h1>
                        Here are the 5 latest posts from my blog. 
                    </p>
                    <div class="card">
                        <div class="card-body">
                            <p className='d-flex justify-content-start' id="date">
                            </p>
                            <p className='d-flex justify-content-start fw-bold' id="title"></p>
                            <p className='d-flex justify-content-start flex-column' id="content"></p>
                        </div>
                    </div>

                </div>
                </div>
                <div className="col-md-3"></div>
        </div>
            // <div>
            //     <h1>Blog</h1>
            //     <div id="date"></div>
            // </div>
        )
    }
}
