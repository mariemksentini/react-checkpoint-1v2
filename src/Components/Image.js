import { Card } from "react-bootstrap"
import { product } from "../Product"

export const Image =()=>{
    return (<Card.Img variant="top" src={product.URL} />)
}