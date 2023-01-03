import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    Books: [],
    cartTotalQuantity: 0,
    CartTotalAmount: 0
}

const BookSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addNewBook: (state, action) => {
            const itemIndex = state.Books.findIndex((item) => item.id === action.payload.id);
            if (itemIndex < 0) {
                const Book = {
                    ...action.payload,
                    cartQuantity: 1
                }
                state.Books.push(Book);
            } else {
                state.Books[itemIndex].cartQuantity += 1;
            }
        },
        DeleteOneBook: (state, action) => {
            const cartItems = state.Books.filter(book => book.id !== action.payload.id);
            state.Books = cartItems;
        },
        decreaseCart(state, action) {
            const itemIndex = state.Books.findIndex(
                book => book.id === action.payload.id
            )
            if (state.Books[itemIndex].cartQuantity > 1) {
                state.Books[itemIndex].cartQuantity -= 1
            } else if (state.Books[itemIndex].cartQuantity === 1) {
                const cartItems = state.Books.filter(book => book.id !== action.payload.id);
                state.Books = cartItems;
            }
        },
        clearCart(state, action) {
            state.Books = [];
        },
        getTotals(state, action) {
            let {
                total,
                quantity
            } = state.Books.reduce((cartTotal, book) => {
                
                const itemTotal = (book?.saleInfo?.listPrice?.amount || 100.00) * book.cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += book.cartQuantity;

                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            })
            state.cartTotalQuantity = quantity;
            state.CartTotalAmount = total.toFixed(2);
        }
    }
})
export const {
    addNewBook,
    DeleteOneBook,
    decreaseCart,
    clearCart,
    getTotals
} = BookSlice.actions
export default BookSlice.reducer