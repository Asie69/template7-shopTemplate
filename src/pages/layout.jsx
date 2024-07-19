import { Link, NavLink, Outlet } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from '../assets/img/payments.png';

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
                                <div className="navbar navbar-expand-lg">
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
                                </div>
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
                {/*navbar-start */}
                <div className="container-fluid bg-main-2">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-3">
                                <div className="dropdown">
                                    <button className="btn btn-warning dropdown-toggle rounded-0 py-3 px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FontAwesomeIcon icon="fa-solid fa-bars" /><span className="pe-2 ps-5 ms-5">دسته‌بندی‌ها</span>
                                    </button>
                                    <ul className="dropdown-menu border-0">
                                        <li>
                                            <div className="btn-group dropstart">
                                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                    پیراهن
                                                </button>
                                                <ul className="dropdown-menu position-absolute top-0 mt-0">
                                                    <li><a className="dropdown-item" href="#">پیراهن مردانه</a></li>
                                                    <li><a className="dropdown-item" href="#">پیراهن زنانه</a></li>
                                                    <li><a className="dropdown-item" href="#">پیراهن بچه‌گانه</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">جین</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">لباس شنا</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">لباس خواب</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">لباس ورزشی</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">کت</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">کفش</a></li>



                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <nav className="navbar navbar-expand-lg">
                                    <div className="container-fluid">

                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <NavLink className={({ isActive, isPending }) => isActive ? "active nav-link text-light" : "nav-link text-light"} to="/">خانه</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className={({ isActive, isPending }) => isActive ? "active nav-link text-light" : "nav-link text-light"} to="/shop">فروشگاه</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className={({ isActive, isPending }) => isActive ? "active nav-link text-light" : "nav-link text-light"} to="/singleProduct">جزئیات محصول</NavLink>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <NavLink className={({ isActive, isPending }) => isActive ? "active nav-link text-light dropdown-toggle" : "nav-link text-light dropdown-toggle"} data-bs-toggle="dropdown" aria-expanded="false">صفحات</NavLink>
                                                    <ul className="dropdown-menu rounded-0 border-0">
                                                        <li>
                                                            <NavLink className={({ isActive, isPending }) => isActive ? "active dropdown-item" : "dropdown-item"} to="/cart">سبد خرید</NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink className={({ isActive, isPending }) => isActive ? "active dropdown-item" : "dropdown-item"} to="/checkOut">تسویه حساب</NavLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className={({ isActive, isPending }) => isActive ? "active nav-link text-light" : "nav-link text-light"} to="/contact">تماس با ما</NavLink>

                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-lg-2 d-flex justify-content-end align-items-center ps-0">
                                <div className="d-flex align-items-center">
                                    <span class="badge border rounded-circle">0</span>
                                    <FontAwesomeIcon className="main-color-1 p-1" icon="fa-solid fa-shopping-cart" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <span class="badge border rounded-circle">0</span>
                                    <FontAwesomeIcon className="main-color-1 p-1" icon="fa-solid fa-heart" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                {/*navbar-end */}




            </header>
            <div className="container-fluid">
                <Outlet />
            </div>

            {/*footer-start */}
            <footer className="container-fluid bg-main-2">
                <div className="container">
                    <div className="row justify-content-evenly">
                        <div className="col-lg-4 my-5">
                            <h3 className="text-white">با ما در تماس باشید</h3>
                            <p className="text-white my-4">لورم ایپسوم متن ساختگی با تولید س را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنتایپ به پایان رسد و زمان مورد وس
                            </p>
                            <ul className="p-0">
                                <li className="list-unstyled d-flex justify-content-start align-items-center">
                                    <FontAwesomeIcon icon="fa-solid fa-map-marker-alt" className="main-color-1 ms-3" />
                                    <p className="text-white mb-0">ایران، مشهد، خیابان لورم</p>
                                </li>
                                <li className="list-unstyled d-flex justify-content-start align-items-center my-2">
                                    <FontAwesomeIcon icon="fa-solid fa-envelope" className="main-color-1 ms-3" />
                                    <p className="text-white mb-0">info@example.com</p>
                                </li>
                                <li className="list-unstyled d-flex justify-content-start align-items-center">
                                    <FontAwesomeIcon icon="fa-solid fa-phone" className="main-color-1 ms-3" />
                                    <p className="text-white mb-0">0513000000</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 my-5">
                            <h3 className="text-white mb-4">دسترسی سریع</h3>
                            <ul className="p-0">
                                <li className="list-unstyled d-flex justify-content-start align-items-center">
                                    <FontAwesomeIcon icon="fa-solid fa-angle-left" className="text-white ms-3" />
                                    <NavLink to="/" className="text-decoration-none text-white">خانه</NavLink>
                                </li>
                                <li className="list-unstyled d-flex justify-content-start align-items-center my-2">
                                    <FontAwesomeIcon icon="fa-solid fa-angle-left" className="text-white ms-3" />
                                    <NavLink to="/shop" className="text-decoration-none text-white">فروشگاه</NavLink>
                                </li>
                                <li className="list-unstyled d-flex justify-content-start align-items-center">
                                    <FontAwesomeIcon icon="fa-solid fa-angle-left" className="text-white ms-3" />
                                    <NavLink to="/singleProduct" className="text-decoration-none text-white">جزئیات محصول</NavLink>
                                </li>
                                <li className="list-unstyled d-flex justify-content-start align-items-center my-2">
                                    <FontAwesomeIcon icon="fa-solid fa-angle-left" className="text-white ms-3" />
                                    <NavLink to="/cart" className="text-decoration-none text-white">سبد خرید</NavLink>
                                </li>
                                <li className="list-unstyled d-flex justify-content-start align-items-center my-2">
                                    <FontAwesomeIcon icon="fa-solid fa-angle-left" className="text-white ms-3" />
                                    <NavLink to="/checkOut" className="text-decoration-none text-white">تسویه حساب</NavLink>
                                </li>
                                <li className="list-unstyled d-flex justify-content-start align-items-center">
                                    <FontAwesomeIcon icon="fa-solid fa-angle-left" className="text-white ms-3" />
                                    <NavLink to="/contact" className="text-decoration-none text-white">تماس با ما</NavLink>
                                </li>
                            </ul>


                        </div>
                        <div className="col-lg-2 my-5">
                            <h3 className="text-white mb-4">حساب کاربری</h3>
                            <ul className="p-0">
                                <li className="list-unstyled d-flex justify-content-start align-items-center">
                                    <FontAwesomeIcon icon="fa-solid fa-angle-left" className="text-white ms-3" />
                                    <NavLink to="/" className="text-decoration-none text-white">خانه</NavLink>
                                </li>
                                <li className="list-unstyled d-flex justify-content-start align-items-center my-2">
                                    <FontAwesomeIcon icon="fa-solid fa-angle-left" className="text-white ms-3" />
                                    <NavLink to="/shop" className="text-decoration-none text-white">فروشگاه</NavLink>
                                </li>
                                <li className="list-unstyled d-flex justify-content-start align-items-center">
                                    <FontAwesomeIcon icon="fa-solid fa-angle-left" className="text-white ms-3" />
                                    <NavLink to="/singleProduct" className="text-decoration-none text-white">جزئیات محصول</NavLink>
                                </li>
                                <li className="list-unstyled d-flex justify-content-start align-items-center my-2">
                                    <FontAwesomeIcon icon="fa-solid fa-angle-left" className="text-white ms-3" />
                                    <NavLink to="/cart" className="text-decoration-none text-white">سبد خرید</NavLink>
                                </li>
                                <li className="list-unstyled d-flex justify-content-start align-items-center my-2">
                                    <FontAwesomeIcon icon="fa-solid fa-angle-left" className="text-white ms-3" />
                                    <NavLink to="/checkOut" className="text-decoration-none text-white">تسویه حساب</NavLink>
                                </li>
                                <li className="list-unstyled d-flex justify-content-start align-items-center">
                                    <FontAwesomeIcon icon="fa-solid fa-angle-left" className="text-white ms-3" />
                                    <NavLink to="/contact" className="text-decoration-none text-white">تماس با ما</NavLink>
                                </li>
                            </ul>


                        </div>
                        <div className="col-lg-3 my-5">
                            <h3 className="text-white">خبرنامه</h3>
                            <p className="text-white my-4">لورم ایپسوم متن ساختگی با تولید س را برای طراحان رایانه ای  وس
                            </p>
                            <div className="input-group">
                                <input type="text" placeholder="آدرس ایمیل شما" className="form-control rounded-0" />
                                <button className="btn btn-warning rounded-start rounded-end-0">Sign Up</button>
                            </div>
                            <h4 className="text-white my-4">ما را دنبال کنید</h4>
                            <div className="d-flex">
                                <div className="bg-main-1 footerIcon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon="fab fa-twitter" className="main-color-2" />
                                </div>
                                <div className="bg-main-1 footerIcon d-flex justify-content-center align-items-center mx-2">
                                    <FontAwesomeIcon icon="fab fa-facebook-f" className="main-color-2" />
                                </div>
                                <div className="bg-main-1 footerIcon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon="fab fa-linkedin-in" className="main-color-2" />
                                </div>
                                <div className="bg-main-1 footerIcon d-flex justify-content-center align-items-center mx-2">
                                    <FontAwesomeIcon icon="fab fa-instagram" className="main-color-2" />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="container border-top py-4">
                    <div className="row justify-content-evenly">
                        <div className="col-lg-6">
                            <img src={image1} alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-white mb-0 float-start"> Domain. All Rights Reserved. Designed by HTML Codex©</p>
                        </div>

                    </div>
                </div>
                <div className="animateIcon d-flex justify-content-center align-items-center border border-3">
                    <FontAwesomeIcon icon="fa-solid fa-angle-double-up"/>
                </div>

            </footer>
            {/*footer-end */}


        </>
    );
}
export default Layout;
library.add(fab, fas, far);