import React from 'react';
import { connect } from 'react-redux';
import {Badge, Icon} from 'react-mdl';

const CartButton = ( props ) => {
    return (
        <div>
            <Badge text={ !props.cart.length ? undefined: props.cart.length } overlap>
            <Icon name="add_shopping_cart" style={{color: 'black'}} />
            </Badge>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer
    }
}

export default connect(mapStateToProps)(CartButton)