import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import image2 from '../assets/img/carousel-1.jpg';
import image3 from '../assets/img/carousel-2.jpg';
import image4 from '../assets/img/carousel-3.jpg';
import image5 from '../assets/img/offer-1.jpg';
import image6 from '../assets/img/offer-2.jpg';
import image7 from '../assets/img/cat-1.jpg';
import image8 from '../assets/img/cat-2.jpg';
import image9 from '../assets/img/cat-3.jpg';
import image10 from '../assets/img/cat-4.jpg';
import image11 from '../assets/img/product-1.jpg';
import image12 from '../assets/img/product-2.jpg';
import image13 from '../assets/img/product-3.jpg';
import image14 from '../assets/img/product-4.jpg';
import image15 from '../assets/img/product-5.jpg';
import image16 from '../assets/img/product-6.jpg';
import image17 from '../assets/img/product-7.jpg';
import image18 from '../assets/img/product-8.jpg';
import image19 from '../assets/img/vendor-1.jpg';
import image20 from '../assets/img/vendor-2.jpg';
import image21 from '../assets/img/vendor-3.jpg';
import image22 from '../assets/img/vendor-4.jpg';
import image23 from '../assets/img/vendor-5.jpg';
import image24 from '../assets/img/vendor-6.jpg';
import image25 from '../assets/img/vendor-7.jpg';





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Home() {
    return (
        <>
            <div className='container'>
                <div className="row justify-content-evenly">
                    <div className="col-lg-4 my-0 my-lg-4 d-flex flex-column justify-content-between order-2 order-lg-1 px-0">
                        <div className='col-12 position-relative product-offer overflow-hidden mb-4 mb-lg-0'>
                            <img src={image5} className='w-100 image-offer object-fit-cover' />
                            <div className='pattern-offer position-absolute top-0 right-0'></div>

                            <div id='offer-content' className='position-absolute top-0 end-0 d-flex flex-column justify-content-center align-items-center w-100 h-100'>
                                <h5 className='text-white'>20% تخفیف</h5>
                                <h3 className='text-white fw-bold'>پیشنهاد ویژه</h3>
                                <NavLink className="btn btn-warning rounded-0 mt-4 main-color-2">خرید کنید</NavLink>
                            </div>
                        </div>
                        <div className='col-12 position-relative product-offer overflow-hidden'>
                            <img src={image6} className='w-100 image-offer object-fit-cover' />
                            <div className='pattern-offer position-absolute top-0 right-0'></div>

                            <div id='offer-content' className='position-absolute top-0 end-0 d-flex flex-column justify-content-center align-items-center w-100 h-100'>
                                <h5 className='text-white'>20% تخفیف</h5>
                                <h3 className='text-white fw-bold'>پیشنهاد ویژه</h3>
                                <NavLink className="btn btn-warning rounded-0 mt-4 main-color-2">خرید کنید</NavLink>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-8 order-1 order-lg-2 px-0 pe-lg-3 my-4">
                        <div id="carouselExampleCaptions" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={image2} className="d-block w-100 position-relative object-contain" alt="..." />
                                    <div className='pattern-carousel position-absolute top-0 right-0'></div>
                                    <div className="carousel-caption">
                                        <h2 className="animate__animated animate__fadeInDown">لورم ایپسوم</h2>
                                        <p className='mt-3 animate__animated animate__bounceIn'>لورم ایپسوم متن ساختگی با تولید س را برای طراحان رایانه</p>
                                        <NavLink className='btn text-white border border-2 border-white rounded-0 fw-bold my-4 animate__animated animate__fadeInUp'>الان خرید کن</NavLink>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={image3} className="d-block w-100 position-relative" alt="..." />
                                    <div className='pattern-carousel position-absolute top-0 right-0'></div>
                                    <div className="carousel-caption">
                                        <h2 className="animate__animated animate__fadeInDown">لورم ایپسوم</h2>
                                        <p className='mt-3 animate__animated animate__bounceIn'>لورم ایپسوم متن ساختگی با تولید س را برای طراحان رایانه</p>
                                        <NavLink className='btn text-white border border-2 border-white rounded-0 fw-bold my-4 animate__animated animate__fadeInUp'>الان خرید کن</NavLink>


                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={image4} className="d-block w-100 position-relative" alt="..." />
                                    <div className='pattern-carousel position-absolute top-0 right-0'></div>
                                    <div className="carousel-caption">
                                        <h2 className="animate__animated animate__fadeInDown">لورم ایپسوم</h2>
                                        <p className='mt-3 animate__animated animate__bounceIn'>لورم ایپسوم متن ساختگی با تولید س را برای طراحان رایانه</p>
                                        <NavLink className='btn text-white border border-2 border-white rounded-0 fw-bold my-4 animate__animated animate__fadeInUp'>الان خرید کن</NavLink>


                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-sm-6 col-lg-3 mb-4'>
                        <div className='d-flex align-items-center justify-content-evenly bg-white p-4'>
                            <h5>پشتیبانی 24/7</h5>
                            <FontAwesomeIcon icon="fas fa-phone-volume" className='main-color-1 fa-2x' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-lg-3 mb-4'>
                        <div className='d-flex align-items-center justify-content-evenly bg-white p-4'>
                            <h5>مهلت برگشت 14 روزه</h5>
                            <FontAwesomeIcon icon="fas fa-exchange-alt" className='main-color-1 fa-2x' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-lg-3 mb-4'>
                        <div className='d-flex align-items-center justify-content-evenly bg-white p-4'>
                            <h5>ارسال رایگان</h5>
                            <FontAwesomeIcon icon="fas fa-shipping-fast" className='main-color-1 fa-2x' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-lg-3 ps-lg-0 mb-4'>
                        <div className='d-flex align-items-center justify-content-evenly bg-white p-4'>
                            <h5>محصولات باکیفیت</h5>
                            <FontAwesomeIcon icon="fas fa-check" className='main-color-1 fa-2x' />
                        </div>
                    </div>
                </div>
                {/*category-start */}
                <section className='my-5'>
                    <div className='row' id='categories-title'>
                        <div className='col-12 mt-0'>
                            <h2 className='position-relative z-2'>
                                <span className='bg-secondary-subtle ps-2'>دسته‌بندی‌ها</span>
                            </h2>
                        </div>
                    </div>
                    <div className='row mt-lg-3' id='categories-sample'>
                        <div className='col-md-6 col-lg-3 d-flex mt-4'>
                            <div className='col-5 overflow-hidden'>
                                <img src={image7} className='w-100 img-fluid h-100' alt='' />
                            </div>
                            <div className='col-7 d-flex flex-column justify-content-center align-items-center'>
                                <h5>نام دسته‌بندی</h5>
                                <p>100 محصول</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 d-flex mt-4'>
                            <div className='col-5 overflow-hidden'>
                                <img src={image8} className='w-100 img-fluid h-100' alt='' />
                            </div>
                            <div className='col-7 d-flex flex-column justify-content-center align-items-center'>
                                <h5>نام دسته‌بندی</h5>
                                <p>100 محصول</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 d-flex mt-4'>
                            <div className='col-5 overflow-hidden'>
                                <img src={image9} className='w-100 img-fluid h-100' alt='' />
                            </div>
                            <div className='col-7 d-flex flex-column justify-content-center align-items-center'>
                                <h5>نام دسته‌بندی</h5>
                                <p>100 محصول</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 d-flex ps-lg-0 mt-4'>
                            <div className='col-5 overflow-hidden'>
                                <img src={image10} className='w-100 img-fluid h-100' alt='' />
                            </div>
                            <div className='col-7 d-flex flex-column justify-content-center align-items-center'>
                                <h5>نام دسته‌بندی</h5>
                                <p>100 محصول</p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-lg-4' id='categories-sample'>
                        <div className='col-md-6 col-lg-3 d-flex mt-4'>
                            <div className='col-5 overflow-hidden'>
                                <img src={image10} className='w-100 img-fluid h-100' alt='' />
                            </div>
                            <div className='col-7 d-flex flex-column justify-content-center align-items-center'>
                                <h5>نام دسته‌بندی</h5>
                                <p>100 محصول</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 d-flex mt-4'>
                            <div className='col-5 overflow-hidden'>
                                <img src={image9} className='w-100 img-fluid h-100' alt='' />
                            </div>
                            <div className='col-7 d-flex flex-column justify-content-center align-items-center'>
                                <h5>نام دسته‌بندی</h5>
                                <p>100 محصول</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 d-flex mt-4'>
                            <div className='col-5 overflow-hidden'>
                                <img src={image8} className='w-100 img-fluid h-100' alt='' />
                            </div>
                            <div className='col-7 d-flex flex-column justify-content-center align-items-center'>
                                <h5>نام دسته‌بندی</h5>
                                <p>100 محصول</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 d-flex ps-lg-0 mt-4'>
                            <div className='col-5 overflow-hidden'>
                                <img src={image7} className='w-100 img-fluid h-100' alt='' />
                            </div>
                            <div className='col-7 d-flex flex-column justify-content-center align-items-center'>
                                <h5>نام دسته‌بندی</h5>
                                <p>100 محصول</p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-lg-4' id='categories-sample'>
                        <div className='col-md-6 col-lg-3 d-flex mt-4'>
                            <div className='col-5 overflow-hidden'>
                                <img src={image7} className='w-100 img-fluid h-100' alt='' />
                            </div>
                            <div className='col-7 d-flex flex-column justify-content-center align-items-center'>
                                <h5>نام دسته‌بندی</h5>
                                <p>100 محصول</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 d-flex mt-4'>
                            <div className='col-5 overflow-hidden'>
                                <img src={image8} className='w-100 img-fluid h-100' alt='' />
                            </div>
                            <div className='col-7 d-flex flex-column justify-content-center align-items-center'>
                                <h5>نام دسته‌بندی</h5>
                                <p>100 محصول</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 d-flex mt-4'>
                            <div className='col-5 overflow-hidden'>
                                <img src={image9} className='w-100 img-fluid h-100' alt='' />
                            </div>
                            <div className='col-7 d-flex flex-column justify-content-center align-items-center'>
                                <h5>نام دسته‌بندی</h5>
                                <p>100 محصول</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 d-flex ps-lg-0 mt-4'>
                            <div className='col-5 overflow-hidden'>
                                <img src={image10} className='w-100 img-fluid h-100' alt='' />
                            </div>
                            <div className='col-7 d-flex flex-column justify-content-center align-items-center'>
                                <h5>نام دسته‌بندی</h5>
                                <p>100 محصول</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*category-end */}
                {/*featured product-start */}
                <section className='my-5'>
                    <div className='row' id='featuredPro-title'>
                        <div className='col-12 mt-5'>
                            <h2 className='position-relative z-2'>
                                <span className='bg-secondary-subtle ps-2'>محصولات ویژه</span>
                            </h2>
                        </div>
                    </div>
                    <div className='row' id='featuredPro-sample'>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image11} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image12} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image13} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image14} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image14} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image13} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image12} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image11} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row my-5'>
                        <div className='col-md-6 mt-5'>
                            <div className='col-12 position-relative product-offer overflow-hidden'>
                                <img src={image5} className='w-100 image-featured-offer object-fit-cover' />
                                <div className='pattern-offer position-absolute top-0 right-0'></div>

                                <div id='offer-content' className='position-absolute top-0 end-0 d-flex flex-column justify-content-center align-items-center w-100 h-100'>
                                    <h5 className='text-white'>20% تخفیف</h5>
                                    <h3 className='text-white fw-bold'>پیشنهاد ویژه</h3>
                                    <NavLink className="btn btn-warning rounded-0 mt-4 main-color-2">خرید کنید</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <div className='col-12 position-relative product-offer overflow-hidden'>
                                <img src={image6} className='w-100 image-featured-offer object-fit-cover' />
                                <div className='pattern-offer position-absolute top-0 right-0'></div>

                                <div id='offer-content' className='position-absolute top-0 end-0 d-flex flex-column justify-content-center align-items-center w-100 h-100'>
                                    <h5 className='text-white'>20% تخفیف</h5>
                                    <h3 className='text-white fw-bold'>پیشنهاد ویژه</h3>
                                    <NavLink className="btn btn-warning rounded-0 mt-4 main-color-2">خرید کنید</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*featured product-end */}
                {/*recent product-start */}
                <section className='my-5'>
                    <div className='row' id='recentPro-title'>
                        <div className='col-12 mt-5'>
                            <h2 className='position-relative z-2'>
                                <span className='bg-secondary-subtle ps-2'> جدیدترین محصولات</span>
                            </h2>
                        </div>
                    </div>
                    <div className='row' id='featuredPro-sample'>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image11} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image12} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image13} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image14} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image15} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image16} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image17} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 mt-4'>
                            <div className='bg-white'>
                                <div className='position-relative overflow-hidden p-3'>
                                    <img src={image18} className='img-fluid' alt='' />
                                    <div id='featuredDivAction'>
                                        <div className='img-pattern w-100 h-100 position-absolute top-0 end-0'></div>
                                        <div className='position-absolute top-50 end-0 w-100 d-flex justify-content-evenly'>
                                            <FontAwesomeIcon icon="fas fa-search" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-1' />
                                            <FontAwesomeIcon icon="fas fa fa-sync-alt" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-2' />
                                            <FontAwesomeIcon icon="fas fa-heart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-3' />
                                            <FontAwesomeIcon icon="fas fa fa-shopping-cart" className='main-color-2 p-3 border border-secondary animate__animated animate__fadeInUp delay-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center'>
                                    <h6 className='my-4'>
                                        نام محصول
                                    </h6>
                                    <h5>1000000 تومان</h5>
                                    <p className='mt-2'>
                                        <span className='ms-2'>(99)</span>
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                        <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />

                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/*recent product-end */}
                {/*brandsLogo-start */}

                <div className='row'>
                    <div className='co1-12 my-5'>
                        <OwlCarousel
                            className="owl-theme"
                            // items="6"
                            autoplay
                            mergeFit
                            loop
                            margin={10}
                            // center="true"
                            responsive={{
                                '0': { items: 2, nav: false },
                                '768': { items: 4, nav: false },
                                '990': { items: 6, nav: true, center:true },
                            }}

                        >
                            <div className='item'>
                                <img src={image20} />
                            </div>
                            <div className='item'>
                                <img src={image21} />
                            </div>
                            <div className='item'>
                                <img src={image22} />
                            </div>
                            <div className='item'>
                                <img src={image23} />
                            </div>
                            <div className='item'>
                                <img src={image24} />
                            </div>
                            <div className='item'>
                                <img src={image25} />
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
                {/*brandsLogo-end */}




            </div>
        </>
    );
}
export default Home;