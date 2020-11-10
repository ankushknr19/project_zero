import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Checkout from "./Checkout"


function ModalBuyNow() {


    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="modalBuyNow">
            <Button variant="contained" className="button" onClick={handleOpen}>
        Buy Now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        
      >
        <Checkout />
        {/* <button onClick={handleClose}>Close</button> */}
      </Modal>
        </div>
    )
}

export default ModalBuyNow
