import React from 'react'
import "./CartItem.css"
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';

function CartItem() {
    return (
        <div className="cartItem">
            <div className="cartItem__imageBox">
                <img src="https://www.celine.com/on/demandware.static/-/Sites-masterCatalog/default/dw772b85fa/images/large/2E453721G.03AA_1_Win19_361331v2.jpg" 
                alt="cartItemImage" className="cartItem__image" />
            </div>

            {/* <div className="cartItem__text">
                <span className="vendorName">Vendor Name</span>
                <span className="description">hello hello hello hello</span>
            </div> */}

            {/* <button>Remove from Cart</button>  */}
            <Button
                 variant="contained"
                 color="secondary"
                 className="button"
                 startIcon={<DeleteIcon />}
             >
             Remove Item
             </Button>          
            <Button
                 variant="contained"
                 color="primary"
                 className="button"
                 startIcon={<FavoriteIcon />}
             >
             Move to Wishlist
             </Button>          
            {/* <button>Move to Wishlist</button>            */}
        </div>
    )
}

export default CartItem
