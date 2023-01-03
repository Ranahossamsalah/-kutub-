import { Button } from '@mui/material';
import './cart.scss'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { addNewBook,DeleteOneBook,decreaseCart,clearCart } from '../../redux/cartslice';
import NavBar from '../../components/navbar/navbar';
import Cardlist from '../cardList';

const CartPage = () => {
    const Books = useSelector(state => state.BReducer.Books)
    const {CartTotalAmount} = useSelector(state => state.BReducer)
    const dispatch = useDispatch();

    const DeleteBook = (book) => {
        dispatch(DeleteOneBook(book))
    }
    const handleDecreaseCart =(book)=>{
        dispatch(decreaseCart(book))
    }
    const handleIncreaseCart =(book)=>{
        dispatch(addNewBook(book))
    }
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    const BookCartList =
        Books.map((book, i) => {
            return (
                <div className='oneCartBook'>
                    <img src={book?.volumeInfo.imageLinks?.thumbnail} alt="" />
                        <p style={{width:200}}>{book?.volumeInfo.title}</p>
                        <p>{(book?.saleInfo?.listPrice?.amount) || 100.00 } EGP</p>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Button variant='contained' size='small' className='increAndDecr' onClick={() => { handleDecreaseCart(book) }}>-</Button>
                            <p style={{margin:10}}>{book.cartQuantity}</p>
                            <Button variant='contained' size='small' className='increAndDecr' onClick={() => { handleIncreaseCart(book) }}>+</Button>
                            </div>
                        <p>{book.cartQuantity*(book?.saleInfo?.listPrice?.amount || 100.00)} EGP</p>
                    <Button variant='contained' className='Removing' onClick={() => { DeleteBook(book) }}>Remove</Button>
                </div>
            )
        })
    return (
        <>
        <NavBar />
        {
        (Books && Books.length) > 0 ?
            <>
                <h2 style={{marginBottom:20}}>Your Book List</h2>
                <div>
                    {BookCartList}
                </div>
                <div className='totalPriceClear'>
                <Button variant='contained' className='ClearingAll' onClick={()=>handleClearCart()}>clear all</Button>
                <p className='totalPrice'>Total Price :<span style={{fontWeight:'bold'}}> {CartTotalAmount}</span> EGP</p>
                </div>
                </>
            :
            <div className='cartEmpty'>
            <p style={{marginBottom:20,fontSize:30}}>You dont have Any Books in cart yet</p>
            <Link to='/home'><Button variant='contained' className='increAndDecr'>Back to Home</Button></Link>
            </div>}
            </>
    );
}
export default CartPage;