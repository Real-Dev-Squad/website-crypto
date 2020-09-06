export const ProductDetails = ({product = {}}) => {
    return (
        <div className="product-container">
            <img className="product-image" src='../../styles/user-female-alt-icon.png' />
            <div>
                <p> name of the product</p>
                <p> description of the product</p> 
            </div>
            <style jsx>{`
            .product-container {
                display : grid;
                border : 2px solid green;
                grid-template-columns: 1fr 1fr ;
                grid-column-gap: 5rem;
                height : 200px;
                
            }
            .product-image {
                border : 2px solid red;
                background-color : cyan;
                height : 200px;
                width : 200px;
                margin-left : 200px;
                
            }
            
            `}</style>
        </div>
    )
}