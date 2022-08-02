import { connect } from "react-redux/es/exports";
import { addToCart } from "./actions/index.js";

const Products = props => {

  return (
        <div className="container mt-4">
            <h1 className="products">Books</h1>
            
            <div className="row mt-5 d-flex justify-content-center">
                
                {props.bookList.map(book=>(
                    <div className="card book col-lg-3 mb-5 mx-3 p-0" key={book.id}>
                        <img src={book.image} className="card-img-top" alt={book.name}/>
                        <div className="card-body">
                            <h5 className="card-title">{book.name}</h5>
                            <p className="card-text"><b>Author:</b> {book.author}</p>
                            <p className="card-text"><b>Price:</b> <span className="price">{book.price} $</span> </p>
                            <button  
                                    onClick={()=>props.addToCart(book)} 
                                    className="btn btn-outline-primary">
                                    Add to cart
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
  );
};

const mapStateToProps = state =>{
    return{
        bookList: state.bookList,
    }
}

export default connect(mapStateToProps, {addToCart})(Products);