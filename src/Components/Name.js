import { Card } from "react-bootstrap"
import { product } from "../Product"

export const Cardname =()=>{
    return (<Card.Title>{product.name}</Card.Title>)
}