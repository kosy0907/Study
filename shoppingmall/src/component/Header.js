import { Navbar } from 'react-bootstrap';
import { BsCart4 } from 'react-icons/bs';

export default function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <div className="container-fluid">
                    <Navbar.Brand href="#home">
                        <BsCart4 />
                        Little Cart
                    </Navbar.Brand>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </Navbar>

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal" style={{ color: "white" }}>Shopping mall</h1>
                    <p className="lead fw-normal" style={{ color: "white" }}>This is simple shopping mall website.</p>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </header >
    );
};