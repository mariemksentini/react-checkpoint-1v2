import { Button } from "react-bootstrap"
import { product } from "../Product"

export const Price =()=>{
    return (
        <Button variant="primary">Buy for {product.price}</Button>
    )
}