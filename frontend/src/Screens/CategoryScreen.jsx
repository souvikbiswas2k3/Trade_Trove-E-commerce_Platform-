import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../slices/productsApiSlice';
import Product from "../components/Product";
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';


const CategoryScreen = ({ match }) => {
    const { category } = useParams()
    const { data: products, isLoading, isError, error } = useGetProductsByCategoryQuery({
        category,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Link className="btn btn-light my-3" to='/'>
                Go Back
            </Link>
            <h1>{category} </h1>
            {isLoading && <Loader/>}
            {isError && <Message variant='danger'>
                    {error?.data?.message || error.error}
                </Message>}
            {products && products.length === 0 && (
                <Message variant='info'>No products found for {category}.</Message>
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

export default CategoryScreen;
