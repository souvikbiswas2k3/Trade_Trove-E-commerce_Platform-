import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './custom.css'
const product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded product-card'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`} className='product-link'>
                    <Card.Title as="div" className='product-title'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews}`}
                    />
                </Card.Text>
                <Card.Text as="h3">
                    ₹ {product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default product