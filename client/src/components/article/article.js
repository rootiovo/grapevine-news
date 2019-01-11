import React, { Component } from 'react'
import moment from 'moment'
import './article.css'

class Article extends Component {
    render () {

        let article = this.props.article

        return (            
        <div className="card">
            <div className="card-body">  
            {
                article.urlToImage ?
                <div> 
                    <div className="row">                   
                        <div className="col-md-9">                          
                            <h5 className="card-title"><a href={article.url}>{article.title.substring(0,article.title.lastIndexOf('- ')).trim()}</a></h5>
                            <p className="publish-date">{`${article.source.name} - ${moment(article.publishedAt).fromNow()}`}</p>                
                            <p className="card-text">{article.description}</p>                                              
                        </div>
                        <div className="col-md-3">                      
                            <img 
                            className="article-image"
                            src={article.urlToImage} 
                            alt="/"/>                                                 
                        </div>                                                  
                    </div>
                    <div className="row">
                            <div className="col-md-9">
                                <div className="article-actions">
                                    <i className="fas fa-share-alt"></i>
                                    <i className="far fa-bookmark"></i>
                                </div>  
                            </div>
                    </div>      
                </div>                
                :
                <div>
                    <h5 className="card-title"><a href={article.url}>{article.title.substring(0,article.title.lastIndexOf('- ')).trim()}</a></h5>
                    <p className="publish-date">{moment(article.publishedAt).fromNow()}</p>                
                    <p className="card-text">{article.description}</p>
                    <div className="article-actions">
                        <i className="fas fa-share-alt"></i>
                        <i className="far fa-bookmark"></i>
                    </div>   
                </div>                             
            }
            </div>                   
        </div>
        )
    }
}

export default Article
