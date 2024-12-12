import { Card } from "react-bootstrap"
import { product } from "../Product"

const Description =()=>{
    return (<Card.Text>
          {product.puissance}{product.vitesse}{product.acceleration}
    </Card.Text>)
}

export default Description