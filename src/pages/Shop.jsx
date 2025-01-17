import { NavLink, Link } from 'react-router-dom';
import image1 from '../assets/img/product-1.jpg';
import image2 from '../assets/img/product-2.jpg';
import image3 from '../assets/img/product-3.jpg';
import image4 from '../assets/img/product-4.jpg';
import image5 from '../assets/img/product-5.jpg';
import image6 from '../assets/img/product-6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Shop() {
    return (
        <>
            <div className="container">
                {/*breadCrumb-start */}
                <section className="row">
                    <div className="col-12 bg-white my-4 p-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><NavLink to="/">خانه</NavLink></li>
                                <li className="breadcrumb-item"><NavLink to="/shop">فروشگاه</NavLink></li>
                                <li className="breadcrumb-item active" aria-current="page">لیست محصولات</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/*breadCrumb-end */}
                <section className="row">
                    {/*filter-start */}
                    <div className="col-md-4 col-lg-3 position-relative">
                        <div className='row' id='priceFilter'>
                            <div className='col-12 my-2 pe-0'>
                                <h4 className='position-relative z-2'>
                                    <span className='bg-secondary-subtle ps-2'>فیلتر قیمت</span>
                                </h4>
                            </div>
                            <div className="col-12 bg-white p-3">
                                <div className="form-check ps-0">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        تمام قیمت‌ها
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">1000</span>
                                </div>
                                <div className="form-check ps-0 my-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        0-1 میلیون تومان
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">150</span>
                                </div>
                                <div className="form-check ps-0 my-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        1-2 میلیون تومان
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">295</span>
                                </div>
                                <div className="form-check ps-0 my-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        2-3 میلیون تومان
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">246</span>
                                </div>
                                <div className="form-check ps-0 my-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        3-4 میلیون تومان
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">145</span>
                                </div>
                                <div className="form-check ps-0 mt-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        4-5 میلیون تومان
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">168</span>
                                </div>
                            </div>
                        </div>
                        <div className='row my-4' id='colorFilter'>
                            <div className='col-12 my-2 pe-0'>
                                <h4 className='position-relative z-2'>
                                    <span className='bg-secondary-subtle ps-2'>فیلتر رنگ</span>
                                </h4>
                            </div>
                            <div className="col-12 bg-white p-3">
                                <div className="form-check ps-0">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        تمام رنگ‌ها
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">1000</span>
                                </div>
                                <div className="form-check ps-0 my-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        مشکی
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">150</span>
                                </div>
                                <div className="form-check ps-0 my-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        سفید
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">295</span>
                                </div>
                                <div className="form-check ps-0 my-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        قرمز
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">246</span>
                                </div>
                                <div className="form-check ps-0 my-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        آبی
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">145</span>
                                </div>
                                <div className="form-check ps-0 mt-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        سبز
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">168</span>
                                </div>
                            </div>
                        </div>
                        <div className='row my-4' id='colorFilter'>
                            <div className='col-12 my-2 pe-0'>
                                <h4 className='position-relative z-2'>
                                    <span className='bg-secondary-subtle ps-2'>فیلتر سایز</span>
                                </h4>
                            </div>
                            <div className="col-12 bg-white p-3">
                                <div className="form-check ps-0">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        تمام سایزها
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">1000</span>
                                </div>
                                <div className="form-check ps-0 my-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        XS
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">150</span>
                                </div>
                                <div className="form-check ps-0 my-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        S
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">295</span>
                                </div>
                                <div className="form-check ps-0 my-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        M
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">246</span>
                                </div>
                                <div className="form-check ps-0 my-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        L
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">145</span>
                                </div>
                                <div className="form-check ps-0 mt-3">
                                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        XL
                                    </label>
                                    <span className="badge text-bg-light border rounded-0 float-start">168</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*filter-end */}
                    <div className="col-md-8 col-lg-9 ps-0">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>مرتب کردن بر اساس</option>
                                    <option value="1">آخرین</option>
                                    <option value="2">پرفروش‌ترین</option>
                                    <option value="3">با امتیاز بیشتر</option>
                                </select>
                            </div>
                            <div className="col-6 col-lg-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>تعداد نمایش</option>
                                    <option value="1">10</option>
                                    <option value="2">20</option>
                                    <option value="3">30</option>
                                </select>
                            </div>
                        </div>
                        <div className='row' id='filterPro'>
                            <div className='col-md-6 col-lg-4 mt-4'>
                                <div className='bg-white'>
                                    <div className='position-relative overflow-hidden p-3'>
                                        <img src={image1} className='img-fluid' alt='' />
                                        <div id='filterDivAction'>
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
                            <div className='col-md-6 col-lg-4 mt-4'>
                                <div className='bg-white'>
                                    <div className='position-relative overflow-hidden p-3'>
                                        <img src={image2} className='img-fluid' alt='' />
                                        <div id='filterDivAction'>
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
                            <div className='col-md-6 col-lg-4 mt-4'>
                                <div className='bg-white'>
                                    <div className='position-relative overflow-hidden p-3'>
                                        <img src={image3} className='img-fluid' alt='' />
                                        <div id='filterDivAction'>
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
                            <div className='col-md-6 col-lg-4 mt-4'>
                                <div className='bg-white'>
                                    <div className='position-relative overflow-hidden p-3'>
                                        <img src={image4} className='img-fluid' alt='' />
                                        <div id='filterDivAction'>
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
                            <div className='col-md-6 col-lg-4 mt-4'>
                                <div className='bg-white'>
                                    <div className='position-relative overflow-hidden p-3'>
                                        <img src={image5} className='img-fluid' alt='' />
                                        <div id='filterDivAction'>
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
                            <div className='col-md-6 col-lg-4 mt-4'>
                                <div className='bg-white'>
                                    <div className='position-relative overflow-hidden p-3'>
                                        <img src={image6} className='img-fluid' alt='' />
                                        <div id='filterDivAction'>
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
                        {/*pagination-start */}
                        <div className='row'>
                            <div className='col-12 d-flex justify-content-center mt-3'>                               
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item"><Link className="page-link" to="">Previous</Link></li>
                                        <li className="page-item"><Link className="page-link" to="">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="">3</Link></li>
                                        <li className="page-item"><Link className="page-link" to="">Next</Link></li>                                      
                                    </ul>
                                </nav>                               
                            </div>
                        </div>
                        {/*pagination-end */}
                    </div>
                </section>
            </div>
        </>
    );
}
export default Shop;