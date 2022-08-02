import { connect } from "react-redux";
import { deleteFromCart } from "./actions";
import { addToCart } from "./actions";
import { decrement } from "./actions";
import { cleanTheCart } from "./actions";

const Cart = (props) => {

  return (
    <div className="container my-5 d-flex flex-column justify-content-center">
      <h3 className="total">Total: <b>{props.totalPrice.toFixed(2)}$</b></h3>

      <div className='row mt-4 d-flex justify-content-center'> 

        {props.cart.map(book=>(
          <div className="card book col-lg-3 mb-5 mx-3 p-0" key={book.id}>
            <img src={book.image} className="card-img-top" alt={book.name}/>
            <div className="card-body">
              <h5 className="card-title">{book.name}</h5>
              <p className="card-text"><b>Author:</b> {book.author}</p>
              <p className="card-text"><b>Quantity:</b> {book.qty}</p>
              <p className="card-text">
                <b>Price: </b> 
                <span className="price">
                  {(book.price * book.qty).toFixed(2)}
                </span>
              </p>
              <div className="d-flex justify-content-between">
                  <button 
                          onClick={()=> props.decrement(book)} 
                          className="btn btn-outline-danger">
                          -
                  </button>
                  <button 
                          onClick={()=>props.deleteFromCart(book)}
                          className="btn btn-outline-dark">
                          Delete from cart
                  </button>
                  <button 
                          onClick={()=>props.addToCart(book)} 
                          className="btn btn-outline-success">
                          +
                  </button>
              </div>   
            </div>
          </div>
        ))}

      </div>

      <div className="d-flex align-items-center justify-content-center">
        {props.totalPrice === 0 ? <h1 className="empty">Your cart is Empty!</h1> 
        : <button 
                  onClick={()=>props.cleanTheCart()} 
                  className="btn btn-outline-dark clean">
                    Clear the cart
          </button>
        }
      </div>
    </div>

  );
};

const mapStateToProps = state =>{
    return{
        cart: state.cart,
        totalPrice: state.totalPrice
    }
}

export default connect(mapStateToProps,{ deleteFromCart, addToCart, decrement, cleanTheCart})(Cart);