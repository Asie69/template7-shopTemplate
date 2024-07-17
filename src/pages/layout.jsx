import { Link, NavLink, Outlet } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Layout() {
    return (
        <>
            <header>
                {/*topBar-start */}
                <div className="container-fluid bg-secondary-subtle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-light dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">
                                        حساب کاربری
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Sign in</a></li>
                                        <li><a className="dropdown-item" href="#">Sign up</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 ps-0">
                                <nav className="navbar navbar-expand-lg">
                                    <div className="container ps-0">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                    <a className="nav-link">درباره ما</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">تماس با ما</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link">راهنمایی</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link ps-0">سوالات پر تکرار</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row my-2 align-items-center">
                        <div className="col-lg-4">
                            <p className="lh-sm">خدمات مشتریان</p>
                            <p className="fw-bold lh-sm">05130000000</p>

                        </div>
                        <div className="col-lg-4">
                            <form className="btn-group" role="search">
                                <button className="btn border-secondary-subtle" type="submit">
                                    <FontAwesomeIcon className="main-color-1" icon="fa-solid fa-search" />
                                </button>
                                <input className="form-control rounded-start-0 ps-5 border-secondary-subtle" type="search" placeholder="جستجوی محصولات" aria-label="Search" />
                            </form>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-end ps-0">
                            <Link to="/" className="text-decoration-none">
                                <span className="bg-main-2 main-color-1 display-6 fw-bold px-2">MULTI</span>
                                <span className="bg-main-1 main-color-2 display-6 fw-bold px-2">SHOP</span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/*topBar-end */}


            </header>
            <div className="container-fluid">
                <Outlet />
            </div>
        </>
    );
}
export default Layout;
library.add(fab, fas, far);