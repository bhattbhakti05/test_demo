import React from 'react';


function Footer() {
    return (
        <div>
            <footer>
                <section className="ftr-1">
                    <div className="container">
                        <div className="row ff1">
                            <div className="footer-1 col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="footet-heading">
                                    <h2>Stay in the know with our newsletter</h2>
                                </div>
                            </div>
                            <div className="footer-2 col-12 col-sm-12 col-md-6 col-lg-8 align-self-end">
                                <div className="footet-heading">
                                    <form id="footer-form">
                                        <input type="text" className="footer-email" placeholder="Your Email here" name="email" />
                                        <button className="footer-btn">Subscribe Now <i className="fa fa-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>   
                    </div>
                </section>
                <section className="ftr-2"> 
                    <div className="container">
                        <div className="row ff2">
                            <div className="footer-3 col-12 col-sm-12 col-md-6 col-lg-2">
                                <a href="http://localhost:3000/"><h2 className="f-logo">&#123; Scriptics &#125;</h2></a>
                            </div>
                            <div className="footer-4 col-12 col-sm-12 col-md-6 col-lg-10 text-right">
                                <ul className="footer-ul">
                                    <li><a href="http://localhost:3000/">Insights</a></li>
                                    <li><a href="http://localhost:3000/">Services</a></li>
                                    <li><a href="http://localhost:3000/">Industries</a></li>
                                    <li><a href="http://localhost:3000/">Support</a></li>
                                    <li><a href="http://localhost:3000/">About Scriptics</a></li>
                                    <li><a href="http://localhost:3000/">Career</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="footer-5 col-12 col-sm-12 col-md-6 col-lg-6">
                                <p>© 2010-2021 Scriptics Technologies Inc. All Rights Reserved.</p>
                            </div>
                            <div className="footer-6 col-12 col-sm-12 col-md-6 col-lg-6 text-right">
                                <ul className="social-icon">
                                    <li className="social-twitter">
                                        <a href="https://twitter.com/Scripticstech"><i className="fa fa-twitter-square fa-2x"></i></a>
                                    </li>
                                    <li className="social-facebook">
                                        <a href="https://www.facebook.com/iscriptics/"><i className="fa fa-facebook-square fa-2x"></i></a>
                                    </li>
                                    <li className="social-linkedin">
                                        <a href="https://twitter.com/Scripticstech"><i className="fa fa-linkedin-square fa-2x"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer
