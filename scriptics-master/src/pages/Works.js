import React, { Component } from 'react';

import axios from 'axios';

export class Works extends Component {
    state = {
        works: [],
        isLoaded: false
    }
   
    componentDidMount() {
        axios.get('http://35.171.157.164//wp-json/wp/v2/works/?_embed')
           .then(res => this.setState({
               works: res.data,
               isLoaded: true
           }))
           .catch(err => console.log(err));     
    }

    render() {
        console.log(this.state);
            const { works, isLoaded } = this.state;
            if(isLoaded){
            }
        return (<div>
             <div className="spacer"></div>
                <section className="page-section Knowledge" id={3}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-lg-6 work-frist-img px-0">
                                    <img src="/assets/img/pexels-adrien-olichon-3137055.png" alt=""/>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="home-text" id="kl-text-work">
                                        <h2>Knowledge is of no value unless you put it into practice</h2>
                                    </div>
                                    
                                </div>
                                <div className="kl-para-work">
                                        <h2>some text about value and work ethics Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                            </div>
                        </div>
                    </section>
                    <section className="page-section work-vlaue" id={2} style={{background: "url('/assets/img/pexels-mikhail-grigorev-4482862.png') no-repeat" }}>
                        <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6" style={{paddingRight:70}}>
                                <div className="work-inner-div">
                                    <div className="heading">
                                        <h2>Leadership thought ipsum dolor sit amet,</h2>
                                    </div>
                                    <div className="para-text">
                                        <p>text defining leadership, strategy, enterprise function, business intelligence et eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section> 
                    
                    <section className="work-post-section" id={3}>
                        <div className="work-post-div">
                        <div className="work-post">
                            <h2>title for team and talent, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="container-post-work">
                            {works.map( (work,i) => 
                                <div className="row">
                                        <div class="col-xs-3 col-centered">
                                            <div class="item">
                                            <div className="col-12 col-lg-6 work-img ">
                                                    <img className="post-work-img" src={ work._embedded['wp:featuredmedia']['0'].source_url } alt=''/>
                                                </div>
                                                <div class="content-work">
                                                    <h4 className="title-txt-work">{work.title.rendered}</h4>
                                                    <div className="excerpt-txt-work" dangerouslySetInnerHTML={{ __html: work.excerpt.rendered }}></div>
                                                </div>
                                                 
                                            </div>
                                        </div>
        
                                    </div>
                                )}
                            </div> 
                        </div>
                    </section>

                    <section className="page-section founder" id={4}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-12 text-center">
                                    <div className="founder-sec">
                                        <h2 className="founder-head">“The secret of change is to focus all of your energy, not on fighting the old, but building on the new.”</h2>   
                                        <h2 style={{fontSize:21}}>HARSH MACWAN</h2>
                                        <p>Designation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>  
                    <section className="page-section partner" id={5}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-12 text-center">
                                    <h2 className="partner-head">OUR PARTNER ECOSYSTEM</h2>
                                    <img src="/assets/img/partner.png" alt=""/>
                                    <h2 className="inner-head">Our aim is to harness the potential of these platforms at the greatest speed in the market, accelerating the path to value in all directions for our clients.</h2>
                                    <div className="inner-btn">
                                        <a className="btn-group" href="http://localhost:3000/">EXPLORE Our Network<i><img className= "i-img" src="/assets/img/Icon feather-arrow-down.png" alt=""/></i></a>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </section>  
      </div>
    );
  }
}

export default Works

