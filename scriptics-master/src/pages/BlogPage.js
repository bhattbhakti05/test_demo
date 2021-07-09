import React, { Component} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

export class BlogPage extends Component {
    state ={
        blog: {},
        isLoaded: false
    }

    componentDidMount(){
        axios.get( `http://54.89.230.30/wp-json/wp/v2/blogs/${this.props.match.params.id}`)
        .then(res => this.setState({
            blog: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }
    render() {
        const {blog, isLoaded} =this.state;
        console.log(this.state);
        if(isLoaded){
            return (
                <div>
                    <section className="case-study-inner" style={{background:`url(${blog.acf.banner_image}) no-repeat`}}>
                        <div className="row">
                            <div className="col-12 col-lg-3 cs-main">
                                <p className="case-cat">Case Studies - {blog.acf.service}</p>
                                <h2 className="title-txt cs">{blog.title.rendered}</h2>
                            </div>
                        </div>
                    </section>
                    <section className="case-study">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                    <h2 className="title-txt cs">Overview</h2>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                                    <p className="para-txt">{blog.acf.overview}</p>
                                </div>
                            </div>
                        </div>
                    </section> 
                    <section className="case-study-art">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                    <img src={blog.acf.left_image} alt=""/>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8 cs-right">
                                    <img src={blog.acf.right_image} alt=""/>
                                </div>
                            </div>
                        </div>
                    </section> 
                    <section className="case-study">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                    <h2 className="title-txt cs">Problem & Solution</h2>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                                    <p className="para-txt">{blog.acf.problem_solution}</p>
                                </div>
                            </div>
                        </div>
                    </section> 
                    <section className="case-study-art">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                    <img src={blog.acf.left_image} alt=""/>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8 cs-right">
                                    <img src={blog.acf.right_image} alt=""/>
                                </div>
                            </div>
                        </div>
                    </section> 
                    <section className="case-study">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                    <h2 className="title-txt cs">Technologies involved</h2>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                                    <p className="para-txt">{blog.acf.problem_solution}</p>
                                </div>
                            </div>
                        </div>
                    </section> 
                </div>
            )
        }
        return null;
    }
}

export default BlogPage
