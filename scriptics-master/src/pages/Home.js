import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Home extends Component {
    state= {
        blogs: [],
        isLoaded: false
    }

    componentDidMount(){
        axios.get('http://54.89.230.30/wp-json/wp/v2/blogs/?_embed&per_page=4&order=asc')
            .then(res =>this.setState({
                blogs: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }
    render() {
        const { blogs, isLoaded } = this.state;
        if(isLoaded){
        }
        return (
            <div>
                <section className="page-section home" id={1}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6" id="lp">
                                <div className="home-btn">
                                    <a className="main-btn" href="http://localhost:3000/">How we work with Clients<i><img className= "i-img" src="/assets/img/Icon feather-arrow-down.png" alt=""/></i></a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6" id="lp-text">
                                <div className="home-text">
                                    <h2>When you see value in all directions, you create value in all directions.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <section className="page-section">
                    <div className="container-fuild">
                            {blogs.map( (blog,i) => 
                                !( i % 2)
                                ?
                                <div className="row">
                                    <div className="col-12 col-lg-6 case-cnt"> 
                                        <div className="case-inner">
                                                <p className="case-cat">Case Studies - {blog.acf.service}</p>
                                                <h2 className="title-txt">{blog.title.rendered}</h2> 
                                                <div className="case-txt" dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}></div>
                                                <div className="inner-btn">
                                                <Link className="btn-group" to={`/blog/${blog.id}`}>Explore more<i><img className= "i-img" src="/assets/img/Icon feather-arrow-down.png" alt=""/></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6 px-0 case-img">
                                        <img src={ blog._embedded['wp:featuredmedia']['0'].source_url } alt={blog.title.rendered}/>
                                    </div>   
                                </div>
                            
                                : 
                                <div className="row">
                                <div className="col-12 col-lg-6 px-0 case-img">
                                    <img src={ blog._embedded['wp:featuredmedia']['0'].source_url } alt={blog.title.rendered}/>
                                </div>   
                                    <div className="col-12 col-lg-6 case-cnt"> 
                                        <div className="case-inner">
                                                <p className="case-cat">Case Studies - {blog.acf.service}</p>
                                                <h2 className="title-txt">{blog.title.rendered}</h2> 
                                                <div className="case-txt" dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}></div>
                                                <div className="inner-btn">
                                                <Link className="btn-group" to={`/blog/${blog.id}`}>Explore more<i><img className= "i-img" src="/assets/img/Icon feather-arrow-down.png" alt=""/></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}   
                    </div>
                </section>
                <section className="page-section work-vlaue" id={2} style={{background: "url('/assets/img/pexels-mikhail-grigorev-4482862.png') no-repeat" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6" style={{paddingRight:70}}>
                                <div className="inner-div">
                                    <div className="heading">
                                        <h2>How we are changing the world by our work values, showing commitment to change what matters</h2>
                                    </div>
                                    <div className="para-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <section className="page-section Knowledge" id={3}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-lg-6 px-0">
                                <img src="/assets/img/pexels-adrien-olichon-3137055.png" alt=""/>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="home-text" id="kl-text">
                                    <h2>Knowledge is of no value unless you put it into practice</h2>
                                </div>
                                <div className="kl-para">
                                    <h2>Working with us, change becomes the most dynamic, powerful source of progress you have.</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
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
        )
    }
}

export default Home
