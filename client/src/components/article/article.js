import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CardActionArea from '@material-ui/core/CardActionArea';
import moment from 'moment';
import './article.css';

const styles = theme => ({
    card: {
        maxWidth: 750,
        marginBottom: '25px;'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    }
});

class Article extends Component {
    render() {
        const { classes } = this.props;
        let article = this.props.article

        return (    
            <Card className={classes.card}>
            <a href={article.url} target="_blank">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={article.urlToImage}
                        title={article.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {article.title}
                        </Typography>
                        <Typography component="p" className="card-text">
                            {article.description}
                        </Typography>
                        <Typography component="p" className="publish-date">
                            {`${article.source.name} · ${moment(article.publishedAt).fromNow()}`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </a>
            <CardActions className={`article-actions ${classes.actions}`} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                    <BookmarkIcon />
                </IconButton>
                <IconButton aria-label="Share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>       
        )
    };
};

export default withStyles(styles)(Article);
