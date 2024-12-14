import "./index.css"
const ProductItem = props => {
    const {productDetails} = props 
    const {imageUrl, stoneName, price} = productDetails
    return (
        <li className="product-item">
            <img src = {imageUrl} alt = "stone-image" className="stone-image"/>
            <h1 className="stone-name">{stoneName}</h1>
            <p className="stone-price">{`$ ${price}.00 per sq/ft`}</p>
        </li>
    )
}

export default ProductItem