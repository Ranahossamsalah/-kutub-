import './favouritepage.scss'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { DeleteOneFavourite } from '../../redux/favouriteslice';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import NavBar from '../../components/navbar/navbar';

const FavouritesListPage = () => {
    const [value, setValue] =useState(4);

    const Favourites = useSelector(state => state.FReducer.Favourites)
    const dispatch = useDispatch();
    const DeleteFav = (index) => {
        dispatch(DeleteOneFavourite(index))
    }
    
    const FavouritesList =
    Favourites.map((fav, i) => {
            return (
                <div key={fav?.id} className='oneFavCont' >
                    <div className='front'>
                    {/* <div className='favButtonDiv'>
                    <ClearIcon onClick={() => { DeleteFav(i) }} />
                    </div> */}
                    <div className='favImageDiv '>
                    <img src={fav?.volumeInfo.imageLinks?.thumbnail} alt="" />
                    </div>
                    <div>
                        <p style={{fontSize:15}}>{fav?.volumeInfo.title.substring(0,20)} ...</p>
                    </div>
                    </div>
                    <div className='back'>
                    <div className='favButtonDiv'>
                    <ClearIcon onClick={() => { DeleteFav(i) }} />
                    </div>
                         <p style={{marginBottom:10}}>{fav?.volumeInfo.subtitle.substring(0,50)}...</p>
                        <p style={{marginBottom:10}}>{fav?.volumeInfo.authors}</p>
                        <Typography component="legend">Rating:</Typography>
                        <Rating name="read-only" value={value} readOnly />
                    </div>
                    
                    {/* <div>
                        <Typography component="legend">Rate:</Typography>
                        <Rating name="simple-controlled" value={value}
                           onChange={(event) => {setValue(event.target.value)}} /> 
                    </div> */}
                    
                </div>
            )
        })
    return (
        <>
        <NavBar />
        {
        (Favourites && Favourites.length) > 0 ?
            <div className='favouriteContainer'> 
                <h2 style={{marginBottom:20}}>Your Favourites List</h2>
                <div className='allFavCardsCont'>
                    {FavouritesList}
                </div>
            </div> 
                :
            <div className='favEmptyDiv'>
                <p>You havent Any Favourites yet</p>
                <Link to='/home'><Button variant='contained' size='large'>Back to Home</Button></Link>
            </div>}
            </>
    );
}
export default FavouritesListPage;