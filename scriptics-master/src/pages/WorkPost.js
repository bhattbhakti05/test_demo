import React, { Component } from 'react';

import axios from 'axios';

export class WorkPost extends Component {
    state ={
        works: [],
        isLoaded: false
    }
    componentDidMount(){
        axios.get('http://35.171.157.164//wp-json/wp/v2/works/?_embed&order=asc')

        .then(res => this.setState({
            works: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }


    render() {
        {
            console.log(this.state);
            const { works, isLoaded } = this.state;
            if(isLoaded){
            }
        return ( 
            <div>
                <div className="container-fuild">
                {works.map( (work,i) => 
                <div className="work-post">
                            <img src={ work._embedded['wp:featuredmedia']['0'].source_url } alt=''/>
                            <h2>title for team and talent, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <img className= "i-img" src="/assets/img/images/pexels-emeric-laperriere-4707869.png" alt=""/>
                        </div>

                )}
            </div>
            </div>
        )

    } 
}
}

export default WorkPost
