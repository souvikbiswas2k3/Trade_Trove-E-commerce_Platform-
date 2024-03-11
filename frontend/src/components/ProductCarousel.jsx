import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import logo from '../assests/logo1.png';
import GeForce from '../assests/asus logo.png'
import Chrombook from '../assests/chromebook.png'
import Sony from "../assests/ps5.png"

const ProductCarousel = () => {
    const { data: products, isLoading, error } = useGetTopProductsQuery();

    if (isLoading) return null;

    return (
        error ? (
            <Message variant='danger'>{error}</Message>
        ) : (
            <Carousel pause='hover' className='bg-dark mb-4 carousel-full'>
                {products?.map(product => (
                    <Carousel.Item key={product._id}>
                        <Link to={`/product/${product._id}`}>
                        
                            <Image src={product.image} alt={product.name} fluid />
                            <Carousel.Caption className='carousel-caption'>
                                <h2>{product.name} (₹{product.price})</h2>
                            </Carousel.Caption>
                        </Link>
                        <div className='carousel-right'>
                            <div className='carousel-head' >
                            {(product.name) === "ASUS Dual GeForce RTX 4070 SUPER" ? (
                                <img src={GeForce} width={"45%"}/>
                            ): product.name === "ASUS Cloud Gaming Chromebook Vibe CX55" ? (
                                <img  src={Chrombook} width={"60%"}/>
                            ): product.name === "Sony PlayStation 4 Pro White Version" ?(
                                <img src={Sony} width={"90%"}/>
                            ): (<>
                                <img src={logo} height={"50px"} /><h6 className='carousel-name'> TradeTrove</h6>
                                </>
                            )}
                            </div>
                            <p className='carousel-desc'>
                                {product.description}
                            </p>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        )
    );
}

export default ProductCarousel;
