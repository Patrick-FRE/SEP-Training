import React, { FunctionComponent, useEffect } from 'react'; 
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Popover from '@material-ui/core/Popover';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import { getAlbums } from "../../helpers/apis";
import { connect } from "react-redux";
import { setAlbums } from "../../redux/actions";
import { useLocation, useHistory } from "react-router-dom";
import './header.css';


const useStyles = makeStyles((theme: Theme) =>
createStyles({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '60%'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        width: '100%' ,
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    }
  }),
);    

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Header:FunctionComponent = (props:any) => {

    const classes = useStyles();
    const history = useHistory();

    const handleSearchAlbums = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            const name = (e.target as HTMLInputElement).value;
            if(!name || name.length<1){
                setAnchorEl(e.target as any);
                return;
            }
            getAlbums(name).then(res=>{
                props.setAlbums(res.results.map((result:any)=>
                    {
                        return{
                            name:result['collectionCensoredName'],
                            img:result['artworkUrl100'],
                            artist:result['artistName']
                        }
                    }
                ),name);
                history.push(`/albumlist?query=${name}`);
                (e.target as HTMLInputElement).value = "";
            });
        }
    }


    const query = useQuery();

    useEffect(()=>{
        const param = query.get('query');
        if(param && param.length>0){
            const name = param;
            getAlbums(name).then(res=>{
                props.setAlbums(res.results.map((result:any)=>
                    {
                        return{
                            name:result['collectionCensoredName'],
                            img:result['artworkUrl100'],
                            artist:result['artistName']
                        }
                    }
                ),name);
            });            
        }
    },[]);

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <AppBar position="fixed" className="header">
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search Album"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onKeyDown={handleSearchAlbums}
                    />
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <p className="popover">Please type a valid artist name</p>
                    </Popover>
                </div>
            </AppBar>
        </>
    );
}

export default connect(null,{setAlbums})(Header);