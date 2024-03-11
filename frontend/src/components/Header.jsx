import { useNavigate } from 'react-router-dom';
import { Badge, Navbar, Nav, Container, NavbarToggle, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import logo from '../assests/logo1.png';
import { useLogoutMutation } from '../slices/usersApiSlice'
import { useGetCategoriesQuery } from '../slices/productsApiSlice'
import { logout } from '../slices/authSlice'
import { resetCart } from '../slices/cartSlice'
import SearchBox from './SearchBox';
import Message from './Message';

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart)
    const { userInfo } = useSelector((state) => state.auth)
    const { data: categories, error: errorCategories } = useGetCategoriesQuery()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [logoutApiCall] = useLogoutMutation()

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap()
            dispatch(logout())
            dispatch(resetCart())
            navigate('/login')
        }
        catch (err) {
            console.log(err)
        }
    }

    console.log('cartItems:', cartItems);
    return (
        <header>
            <Navbar fixed='top' bg='dark' variant='dark' expand='md' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand className='title'>
                            <img src={logo} alt='ProShop' style={{ height: '50px' }} />
                            Trade Trove</Navbar.Brand>
                    </LinkContainer>
                    <NavbarToggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className="ms-auto">
                            {errorCategories && <Message variant='danger'>{errorCategories}</Message>}
                            <NavDropdown title='Category' id='category'>
                                {categories && categories.map((category) => (
                                    <LinkContainer to={`/category/${category}`}>
                                        <NavDropdown.Item>{category}</NavDropdown.Item>
                                    </LinkContainer>
                                ))}
                            </NavDropdown>
                            <SearchBox />
                            <LinkContainer to='/Cart' className='Cart'>
                                <Nav.Link>
                                    <FaShoppingCart />Cart
                                    {cartItems.length > 0 && (
                                        <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                                            {cartItems.reduce((a, c) => a + c.qty, 0)}
                                        </Badge>
                                    )}
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>

                                </NavDropdown>
                            ) : (<LinkContainer to='/login' style={{width:'81px'}}>
                                <Nav.Link href="/login">
                                    <FaUser />Sign In
                                </Nav.Link>
                            </LinkContainer>)}
                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ paddingTop: '60px' }}>
            </div>
        </header>
    )
}
export default Header
