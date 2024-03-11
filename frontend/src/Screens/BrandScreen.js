import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGetProductsBrandQuery } from '../slices/productsApiSlice';
import Product from "../components/Product";
import Loader from '../components/Loader';
import Message from '../components/Message';
// import Paginate from '../components/Paginate';


const BrandScreen = ({ match }) => {
    const { brand } = useParams()
    const { data: products, isLoading, isError, error } = useGetProductsBrandQuery({
        brand,
    });

    return (
        <div>
            <Link to='/' className='btn btn-light mb-4'>
                Go Back
            </Link>
            <h2>{brand} Products</h2>
            {isLoading && <Loader />}
            {isError && <Message variant='danger'>
                {error?.data?.message || error.error}
            </Message>}
            {products && products.length === 0 && (
                <Message variant='info'>No products found for {brand}.</Message>
            )}
            {products && products.length > 0 && (
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}

        </div>
    );
};

export default BrandScreen;
