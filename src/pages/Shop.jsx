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
                <div className="row">
                    <div className="col-12 bg-white my-4 p-2">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Shop</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Shop List</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/*breadCrumb-end */}
                <div className="row">
                    <div className="col-lg-3 position-relative">
                        <div className='row' id='priceFilter'>
                            <div className='col-12 my-2 pe-0'>
                                <h4 className='position-relative z-2'>
                                    <span className='bg-secondary-subtle ps-2'>فیلتر قیمت</span>
                                </h4>
                            </div>
                            <div className="col-12 bg-white p-3">
                                <div class="form-check ps-0">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            تمام قیمت‌ها
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">1000</span>
                                </div>
                                <div class="form-check ps-0 my-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        0-1 میلیون تومان
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">150</span>
                                </div>
                                <div class="form-check ps-0 my-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        1-2 میلیون تومان
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">295</span>
                                </div>
                                <div class="form-check ps-0 my-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        2-3 میلیون تومان
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">246</span>
                                </div>
                                <div class="form-check ps-0 my-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        3-4 میلیون تومان
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">145</span>
                                </div>
                                <div class="form-check ps-0 mt-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        4-5 میلیون تومان
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">168</span>
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
                                <div class="form-check ps-0">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        تمام رنگ‌ها
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">1000</span>
                                </div>
                                <div class="form-check ps-0 my-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        مشکی
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">150</span>
                                </div>
                                <div class="form-check ps-0 my-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        سفید
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">295</span>
                                </div>
                                <div class="form-check ps-0 my-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        قرمز
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">246</span>
                                </div>
                                <div class="form-check ps-0 my-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        آبی
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">145</span>
                                </div>
                                <div class="form-check ps-0 mt-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        سبز
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">168</span>
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
                                <div class="form-check ps-0">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        تمام سایزها
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">1000</span>
                                </div>
                                <div class="form-check ps-0 my-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        XS
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">150</span>
                                </div>
                                <div class="form-check ps-0 my-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        S
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">295</span>
                                </div>
                                <div class="form-check ps-0 my-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        M
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">246</span>
                                </div>
                                <div class="form-check ps-0 my-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        L
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">145</span>
                                </div>
                                <div class="form-check ps-0 mt-3">
                                    <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        XL
                                    </label>
                                    <span class="badge text-bg-light border rounded-0 float-start">168</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 ps-0">
                        <div className="row">
                            <div className="col-3">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>مرتب کردن بر اساس</option>
                                    <option value="1">آخرین</option>
                                    <option value="2">پرفروش‌ترین</option>
                                    <option value="3">با امتیاز بیشتر</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>تعداد نمایش</option>
                                    <option value="1">10</option>
                                    <option value="2">20</option>
                                    <option value="3">30</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className='my-2'>
                                
                                <div className='row' id='filterPro'>
                                    <div className='col-lg-4 mt-4'>
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
                                    <div className='col-lg-4 mt-4'>
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
                                    <div className='col-lg-4 mt-4'>
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
                                    <div className='col-lg-4 mt-4'>
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
                                    <div className='col-lg-4 mt-4'>
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
                                    <div className='col-lg-4 mt-4'>
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
                                
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 d-flex justify-content-center mt-3'>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    );
}
export default Shop;