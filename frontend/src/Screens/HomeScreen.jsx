import { Row, Col, Card } from 'react-bootstrap';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Product from "../components/Product";
import Loader from "../components/Loader"
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel'
import { useGetCategoriesQuery, useGetProductsQuery, useGetBrandsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
    const { keyword, pageNumber } = useParams()

    const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber });

    const { data: categories, error: errorCategories } = useGetCategoriesQuery()

    const { data: brands, error: errorBrands } = useGetBrandsQuery()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pageNumber, keyword]);

    if (errorCategories || errorBrands) {
        return <div>Error fetching Data</div>
    }

    return (
        <>
            {!keyword ? <ProductCarousel /> : (
                <Link to='/' className='btn btn-light mb-4'>
                    Go Back
                </Link>
            )}
            {isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>
                    {error?.data?.message || error.error}
                </Message>
            ) : data && data.products && data.products.length > 0 ? (
                <>
                    {!keyword && !pageNumber && (
                        <div>
                            <h1>Category</h1>
                            <Row>
                                {categories && categories.map((category) => (
                                    <Col key={category} sm={12} md={6} lg={4} xl={3}>
                                        <Card className='my-3 p-3 rounded category-card' style={{ height: '300px' }}>
                                            <Link to={`/category/${category}`}>
                                                <Card.Img src={`https://source.unsplash.com/random/400×400/?${category}`} variant='top' height={'210px'} width={'270px'} style={{ objectFit: "cover" }} />
                                            </Link>
                                            <Card.Body>
                                                <Link to={`/category/${category}`} className='product-link'>
                                                    <Card.Title as="h3" className="text-center">{category}</Card.Title>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    )}

                    <h1>Latest Products</h1>
                    <Row>
                        {data.products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                    <Paginate pages={data.pages} page={data.page} keyword={keyword ? keyword : ''} />
                </>
            ) : (
                <Message variant='info'>
                    No products found.
                </Message>
            )}
        </>
    );
}

export default HomeScreen;
