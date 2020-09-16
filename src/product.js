import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


import {
    Link
} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,

    },
    media: {
        height: 240,
    },
});

function MediaCard() {
    const classes = useStyles();

    return (
        <div >
            <Grid container spacing={0.5} >
                <Grid item xs={12} sm={6} md={4} lg={3} spacing={3}>
                    <div className="maxmargin">
                        <Card className={classes.root} >
                            <Link to="/product/P1">

                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/images/p8.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Pro
          </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>

                            <CardActions>
                                <Button size="small" color="primary">
                                    Add to Cart
        </Button>

                            </CardActions>
                        </Card>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} spacing={3}>
                    <div className="maxmargin">
                        <Card className={classes.root} >
                            <Link to="/product/P2">

                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/images/p9.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            New Style
          </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>

                            <CardActions>
                                <Button size="small" color="primary">
                                    Add to Cart
        </Button>

                            </CardActions>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} spacing={3}>
                    <div className="maxmargin">
                        <Card className={classes.root} >
                            <Link to="/product/P3">

                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/images/p5.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            RACER BLUE
          </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>

                            <CardActions>
                                <Button size="small" color="primary">
                                    Add to Cart
        </Button>

                            </CardActions>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} spacing={3}>
                    <div className="maxmargin">
                        <Card className={classes.root} >
                            <Link to="/product/P4">

                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/images/p1.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            RACER
          </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>

                            <CardActions>

                                <Button size="small" color="primary">
                                    Add to Cart
        </Button>

                            </CardActions>
                        </Card>
                    </div>
                </Grid>
            </Grid>

        </div >
    );
}
export default MediaCard;
