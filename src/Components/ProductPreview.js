import React from 'react'
import "./ProductPreview.css"
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";

function ProductPreview() {
    return (
        <div className="productPreview">
            <div className="productPreview__content">
                 <Link to = "/product">
                    <img src="https://www.celine.com/on/demandware.static/-/Sites-masterCatalog/default/dw772b85fa/images/large/2E453721G.03AA_1_Win19_361331v2.jpg" 
                     alt="preview"  className="productPreview__image"/>
                 </Link>
                 <div className="productPreview__low">
                        <span className="productPreview__vendorName"> Hello Wears </span> 
                        
                        {/* <IconButton color="primary" aria-label="Add to Wishlist"> */}
                                <FavoriteIcon className="productPreview__favIcon" />
                        {/* </IconButton> */}
                        <span className="productPreview__description"> hello hello hello hello hello hello </span>
                        
             </div>
            </div>

            
        </div>
    )
}

export default ProductPreview
