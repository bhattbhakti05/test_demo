import React from 'react';


function Header() {
    return (
            <header id="masthead" className="site-header navbar-static-top navbar-light masthead-sticky">
                <div className="container">
                    <nav className="navbar fixed-top navbar-expand-lg">
                        <a className="navbar-brand" href="http://localhost:3000/">
                            <h1>&#123; Scriptics &#125;</h1>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav end">
                                <li className="nav-item drop-down">
                                    <a className="nav-link dropdown-toggle"  data-bs-toggle="dropdown"  href="http://localhost:3000/">Insights </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown"> 
                                        <div className="container">
                                            <div className="row">
                                                <div className="col col-xs-6 col-md-3">
                                                    <p>Featured Insight</p>
                                                    <img className="fi" src="/assets/img/pexels-emeric-laperriere-4707869.png" alt="" />
                                                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
                                                    <a className="nav-button" href="http://localhost:3000/">Explore more
                                                        <i><img className= "i-img" src="/assets/img/Icon feather-arrow-down.png" alt=""/></i>
                                                    </a>
                                                </div>
                                                <div className="col col-xs-6 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Insight Title one</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Insight Title Two</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Insight Title Three</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col col-sm-6 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Insight Title Four</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Insight Title Five</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Insight Title Six</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col col-xs-6 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Insight Title Seven</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Insight Title Eight</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Insight Title Nine</a>
                                                        </li>
                                                    </ul>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" href="http://localhost:3000/">Services</a>
                                    <div className="dropdown-menu dp-block" aria-labelledby="navbarDropdown"> 
                                        <div className="container">
                                            <div className="row">
                                                <div className="col col-xs-6 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Ai & Automation</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Statistical data analytics</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Business Intelligence</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">lorem ipsum service</a>
                                                        </li>
                                                    </ul> 
                                                </div>
                                                <div className="col col-xs-6 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Computer vision</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Big data analytics</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Natural Language processing</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">lorem ipsum service</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col col-sm-6 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Deep learning</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Ai for Gaming</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Signal processing</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">lorem ipsum service</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col col-xs-6 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Wearable computing</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Distributed computing</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">Mathematical modeling and optimizing</a>
                                                        </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="http://localhost:3000/">lorem ipsum service</a>
                                                        </li>
                                                    </ul>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>    
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" href="http://localhost:3000/">Indudstries</a>
                                    <div className="dropdown-menu dp-block" aria-labelledby="navbarDropdown"> 
                                    <div className="container">
                                        <div className="row">
                                            <div className="col col-xs-6 col-md-3">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">Health</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">Chemicals</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">lorem ipsum service</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">lorem ipsum service</a>
                                                    </li>
                                                </ul> 
                                            </div>
                                            <div className="col col-xs-6 col-md-3">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">Automative</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">Dental</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">lorem ipsum service</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">lorem ipsum service</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col col-sm-6 col-md-3">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">Banking</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">Energy</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">lorem ipsum service</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">lorem ipsum service</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col col-xs-6 col-md-3">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">Capital Markets</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">Insurance</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">lorem ipsum service</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" href="http://localhost:3000/">lorem ipsum service</a>
                                                    </li>
                                                </ul>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://localhost:3000/">Support</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" href="http://localhost:3000/">About Scriptics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://localhost:3000/">Career</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
    )
}

export default Header
