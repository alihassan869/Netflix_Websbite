import React, {  useContext  } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import img1 from './assests/logo.png'
import './Header.css'
import { Golobalinfo } from './pages/Home';
function Header() {
  const { Getsearch } = useContext(Golobalinfo);
  const { register, handleSubmit } = useForm();
  return (
    <>
        <p className="text-center bg-red-800 text-white">
        Free Online Movies about 1000 movies is here
      </p>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-center ">
            <figure>
            <img src={img1} alt="not found" srcset="" className='img-fluid  w-40' />
            </figure>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="text-decoration-none">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
             
              <Link to="/Login" className="text-decoration-none">
                <Nav.Link href="#home">Login</Nav.Link>
              </Link>
              <Link to="/Register" className="text-decoration-none">
                <Nav.Link href="#home">Register</Nav.Link>
              </Link>
            </Nav>
            <form
              onSubmit={handleSubmit((data) =>  Getsearch(data?.search))}
              className="search-box bg-red-800 me-md-3 flex justify-between items-center"
            >
              <input
                type="text"
                {...register('search', { required: true })}
                id="text-box"
                className="text-white ps-3"
                placeholder="Search Movie Here ....."
              />
              <button className="search-btn bg-gray-800 px-3 py-2 ">
                <i className="fa-solid fa-magnifying-glass py-2 "></i>
              </button>
            </form>
            <div>            
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
