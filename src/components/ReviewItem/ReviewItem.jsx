import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ReviewItem = ({product,handleDeleteButton}) => {
    const {id,name,img,price,quantity}=product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price:<span className='yellow-text'>${price}</span></p>
                <p>Quantity: <span className='yellow-text'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleDeleteButton(id)} className='btn-delete'><FontAwesomeIcon className='delete-style' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;