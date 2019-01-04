import React, { Component } from 'react'
import moment from 'moment'
import './article.css'

class Article extends Component {
    
    constructor(props) {
        super(props)    
    }

    render () {

        let article = this.props.article

        return (
        <div className="card">
            <div className="card-body">  
            {
                article.image ? 
                <div className="row">
                    <div className="col-md-8">                          
                        <h5 className="card-title"><a href={article.link}>{article.title}</a></h5>
                        <p className="publish-date">{moment(article.pubDate).format('MMMM Do YYYY')}</p>                
                        <p className="card-text">{article.contentSnippet}</p>                        
                    </div>
                    <div class="col-md-4">                      
                        <img 
                        src={article.image.$.url} 
                        width={article.image.$.width} 
                        height={article.image.$.height} />                              
                    </div>
                </div>
                :
                <div>
                    <h5 className="card-title"><a href={article.link}>{article.title}</a></h5>
                    <p className="publish-date">{moment(article.pubDate).format('MMMM Do YYYY')}</p>                
                    <p className="card-text">{article.contentSnippet}</p>   
                </div>                             
            }
            </div>                   
        </div>
        );
    }
}

export default Article
