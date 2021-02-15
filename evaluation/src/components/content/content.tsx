import React, { FunctionComponent } from 'react'; 
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import "./content.css";
import { State } from "../../redux/reducers/album";
import { Album } from "../../redux/actions"
import { connect } from "react-redux";


interface contentProps{
    counter:number,
    albums:Album[],
    keyword:string
}

const mapStateToProps = (state:State) => {
    return {...state};
}

const Content:FunctionComponent<contentProps> = (props:contentProps) =>{
    return (
        <>
            <div className="title">
                <h2>{props.keyword?props.counter+" results for '"+props.keyword+"'":"Search Albums by ArtistName:"}</h2>
                <Divider />
            </div>
            <main className="main">
                    {
                        props.albums.map(album=>{
                            return(      
                                <Card className="album" key={album.img}>
                                    <CardContent className="albumcontent">
                                        <img src={album.img}></img>
                                        <Typography variant="subtitle2" component="h2">
                                        {album.name}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                        {album.artist}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }
            </main>
        </>
    )
}

export default connect(mapStateToProps)(Content);