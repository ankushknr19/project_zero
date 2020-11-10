import React from 'react'
import "./Product.css"
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModalBuyNow from './ModalBuyNow';

function Product() {
    return (
        <div className="product">    
               <div className="product__left">
                <h1>Left</h1>   
               </div>

               <div className="product__right">
                   <h1>Right</h1>
                   <span className="productDescription"> jeans pant shower slim fit</span>
                   <span className="vendorName"> Martin's Wears</span>
                    size
                    color
                    
                    <div className="actions">
                         <Button variant="contained" className="button">
                              Add to Cart
                          </Button>          
                         <ModalBuyNow />

                        <IconButton>
                          <FavoriteIcon />
                        </IconButton>
                    
                    </div>
                  
                    

                    <div className="descriptionBox">
                        <h1>Description Box</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt velit temporibus amet suscipit! Aliquid illum incidunt nostrum libero reprehenderit sed corporis neque perferendis debitis temporibus quaerat, fuga cupiditate sint! Expedita!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum? Cum, quas quisquam. Excepturi ad exercitationem eos quas perferendis eaque dolor aperiam omnis nobis ullam. Atque at placeat reiciendis voluptates!
                        </p>
                    </div>

               </div>
        </div>
    )
}

export default Product
