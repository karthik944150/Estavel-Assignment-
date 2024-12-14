import { Component } from "react"; 
import ProductItem from "../ProductItem"
import "./index.css"
const productsList = [
    {
        id : 1,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/Agaria-White-Marble-01-.png", 
        stoneName : "Agaria White", 
        price : 1.00
    },
    {
        id : 2,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/ambaji-white-01-.png", 
        stoneName : "Ambaji White", 
        price : 1.00
    },
    {
        id : 3,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/Banswara-White-Marble-01-.png",
        stoneName : "Banswara White", 
        price : 1.00
    },
    {
        id : 4,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/Moon-White-Granite-01-1-1.png", 
        stoneName : "Moon White", 
        price : 1.00
    },
    {
        id : 5,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/Forest-Green-Marble-01-.png", 
        stoneName : "Forest Green", 
        price : 1.00
    },
    {
        id : 6,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/Katni-Marble-01-.png", 
        stoneName : "katni", 
        price : 1.00
    },
    {
        id : 7,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/Makrana-White-Marble-01-.png", 
        stoneName : "Makrana White", 
        price : 1.00
    },
    {
        id : 8,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/morwad-fantastic-grey-01-.png", 
        stoneName : "Morwad Fantastric", 
        price : 1.00
    },
    {
        id : 9,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/nizarna-white-01-.png", 
        stoneName : "Nizarna White", 
        price : 1.00
    },
    {
        id : 10,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/Rainforest-Green-Marble-01-.png", 
        stoneName : "Rainforest Green", 
        price : 1.00
    },
    {
        id : 11,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/Rosso-Alicante-Marble-01-.png", 
        stoneName : "Rosso Alicante", 
        price : 1.00
    },
    {
        id : 12,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/raj-nagar-white-01-.png", 
        stoneName : "Raj Nagar White", 
        price : 1.00
    },
    {
        id : 13,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/Rosso-Levanto-Marble-01-.png", 
        stoneName : "Rosso Levanto", 
        price : 1.00
    },
    {
        id : 14,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/Spider-Green-Marble-01-.png", 
        stoneName : "Spider Green", 
        price : 1.00
    },
    {
        id : 15,
        imageUrl : "https://stonepedia.in/wp-content/uploads/2024/10/Udaipur-Green-Marble-01-.png", 
        stoneName : "Udaipur Green", 
        price : 1.00
    }
]

class ProductSection extends Component{
    state = {
        seachProduct : ""
    }
    onChangeProduct = (event) => {
        this.setState({
            seachProduct : event.target.value
        })
    }
    render(){
        const {seachProduct} = this.state 
        const filteredList = productsList.filter(product => 
            product.stoneName.toLowerCase().includes(seachProduct.toLowerCase())
        )
        return(
            <div className="product-section-container">
                <div className="search-container">
                <h1 className="product-name">Products</h1>
                <input 
                    type = "search" 
                    placeholder = "Search Here" 
                    onChange = {this.onChangeProduct}
                    className="input-element"
                />

                </div>
                
                <ul className="products-list">
                    {filteredList.map(eachProduct => (
                        <ProductItem 
                            key = {eachProduct.id} 
                            productDetails = {eachProduct}
                        />
                    ))}
                </ul>
            </div>
        )
    }

}

export default ProductSection