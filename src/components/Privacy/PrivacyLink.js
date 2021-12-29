import Privacy from "./Privacy";
import React, {Component} from "react";
import {Link} from "react-router-dom";

class PrivacyLink extends Component {
    render() {
        return (
                <div class="bottom-content">
                    <Link to="/privacy">Privacy Policy</Link>
                </div>
        )
    }
}
export default PrivacyLink;
