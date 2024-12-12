import Card from 'react-bootstrap/Card';
import Description from './Components/Description';
import { Price } from './Components/Price';
import { Cardname } from './Components/Name';
import { Image } from './Components/Image';
function App() {
  return (
    <>
      <Card style={{ width: '30rem' }}>
        <Image/>
        <Card.Body>
          <Cardname/>
          <Description/>
          
          <Price/>
        </Card.Body>
      </Card>
    </>
    
  );
}

export default App;
