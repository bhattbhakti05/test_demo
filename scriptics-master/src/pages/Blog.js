import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Blog extends Component {
    state= {
        blogs: [],
        isLoaded: false
    }

    componentDidMount(){
        axios.get('http://54.89.230.30/wp-json/wp/v2/blogs/?_embed&order=asc')
            .then(res =>this.setState({
                blogs: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

 render() {
            console.log(this.state);
            const { blogs, isLoaded } = this.state;
            if(isLoaded){
            }
            return (<div>
                <div className="spacer"></div>
                <section>
                    <div className="container-fuild">
                            {blogs.map( (blog,i) => 
                                !( i % 2) ?
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
                                        <img src={ blog._embedded['wp:featuredmedia']['0'].source_url } alt=''/>
                                    </div>   
                                </div>
                                : 
                                <div className="row">
                                <div className="col-12 col-lg-6 px-0 case-img">
                                    <img src={ blog._embedded['wp:featuredmedia']['0'].source_url } alt=''/>
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
            </div>);
        }
}

export default Blog
