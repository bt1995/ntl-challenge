import './AddToCartBtnStyles.css'

const AddToCartBtn = ({isBtnActive, useAddToCartHandler}) => {
  return (
    <button className={`add-to-cart-btn ${isBtnActive ? 'add-active': 'add-disabled'}`} onClick={useAddToCartHandler}>Add to cart</button>
  )
}

export default AddToCartBtn