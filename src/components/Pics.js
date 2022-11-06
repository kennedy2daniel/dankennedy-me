import React, { Component } from 'react';
import Hedge from '../images/picture-1.jpg';
import Lily from '../images/picture-2.jpg';
import Dogwood from '../images/picture-3.jpg';
import Echinacea from '../images/picture-4.jpg';
import Lily2 from '../images/picture-5.jpg';
import TripleB from '../images/picture-6.jpg';

export default class Pics extends Component {
    render() {
        return (
            <div className="content d-flex flex-column justify-content-center align-items-center mt-3">
                {/* <h1>pics</h1> */}
                <div>
                    <section>
                        <h3 className="text-light"><i className="fa fa-camera"></i></h3>
                        <div>
                            <a class="example-image-link" href={Hedge} data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img class="example-image" src={Hedge} alt="" height="250px" /></a>
                            <a class="example-image-link" href={Lily} data-lightbox="example-set" data-title="Or press the right arrow on your keyboard."><img class="example-image" src={Lily} alt="" height="250px"/></a>
                            <a class="example-image-link" href={Dogwood} data-lightbox="example-set" data-title="The next image in the set is preloaded as you're viewing."><img class="example-image" src={Dogwood} alt="" height="250px"/></a>
                       </div>
                       <div>
                            <a class="example-image-link" href={Echinacea} data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img class="example-image" src={Echinacea} alt="" height="250px" /></a>
                            <a class="example-image-link" href={Lily2} data-lightbox="example-set" data-title="Or press the right arrow on your keyboard."><img class="example-image" src={Lily2} alt="" height="250px"/></a>
                            <a class="example-image-link" href={TripleB} data-lightbox="example-set" data-title="The next image in the set is preloaded as you're viewing."><img class="example-image" src={TripleB} alt="" height="250px"/></a>
                       </div>
                    </section>
                </div>
            </div>
        )
    }
}