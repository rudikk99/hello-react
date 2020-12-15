import React from 'react';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Contact Us</h2>
                    {//<hr />
}
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                        36 Belvista Rd #16 <br />
                        Boston, MA 02134<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+18578914000"><i className="fa fa-phone" /> 1.857.891.4000</a><br />
                    <a role="button" className="btn btn-link" href="mailto:boris@immetrica.com"><i className="fa fa-envelope-o" /> boris(at)immetrica.com</a>
                </div>
                
            </div>
        </div>
    );
}

export default Contact;
