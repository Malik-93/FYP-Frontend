import React from 'react';
import { connect } from 'react-redux';

const CartButton = ( props ) => {
    return (
        <div>
            {console.log('CartButton**/*/', props.cart)}
            <span className="cart-num" id="topActionCartNumber" style={{ display: 'block' }} data-spm-anchor-id="a2a0e.cart.dcart.i0.25b87d68yZ2Ffq">{!props.cart.length ? undefined: props.cart.length }</span>
            <span className='mr-2'>
                <i className="fab fa-opencart"></i>
            </span>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer
    }
}

export default connect(mapStateToProps)(CartButton)