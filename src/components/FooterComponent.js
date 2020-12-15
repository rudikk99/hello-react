import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-sm-12">
                        <div className="col-sm-8 text-center">
                        <h5>Find us:</h5>
                        <a role="button" className="btn btn-link" href="tel:+18578914000"><i className="fa fa-phone" /> 1.857.891.4000</a><br />
                        <a role="button" className="btn btn-link" href="mailto:boris@immetrica.com"><i className="fa fa-envelope-o" /> boris@immetrica.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;