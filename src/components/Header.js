import { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <div className="h-100 d-flex justify-content-center align-items-center text-light opacity-75">
                <h1 className="header-title display-4 border-bottom border-warning">Dan Kennedy</h1>
                </div>
            </div>
        )
    }
}