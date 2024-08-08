import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import image1 from '../assets/img/product-1.jpg';
import image2 from '../assets/img/product-2.jpg';
import image3 from '../assets/img/product-3.jpg';
import image4 from '../assets/img/product-4.jpg';
import image5 from '../assets/img/product-5.jpg';
import image6 from '../assets/img/user.jpg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function SingleProduct() {
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
                                <li className="breadcrumb-item active" aria-current="page">جزئیات محصول</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/*breadCrumb-end */}
                <section className="row justify-content-between">
                    <div className="col-lg-5 pe-0">
                        <div className='col-12 bg-white py-4'>
                            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={image1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={image2} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={image3} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <FontAwesomeIcon icon="fas fa-angle-left" className='main-color-2 fa-2x' />
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <FontAwesomeIcon icon="fas fa-angle-right" className='main-color-2 fa-2x' />

                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 bg-white px-5 py-4">
                        <h1>نام محصول</h1>
                        <div className='col-12 d-flex align-items-center my-3'>
                            <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                            <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                            <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                            <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                            <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                            <p className='mb-0 pe-3'>(99 بازدید)</p>
                        </div>
                        <h3>1500000 تومان</h3>
                        <p className='my-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        <span className='d-flex'>سایز:
                            <div className="form-check">

                                <input className="form-check-input me-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    XS
                                </label>
                            </div>
                            <div className="form-check">

                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    S
                                </label>
                            </div>
                            <div className="form-check">

                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    M
                                </label>
                            </div>
                            <div className="form-check">

                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    L
                                </label>
                            </div>
                            <div className="form-check">

                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    XL
                                </label>
                            </div>
                        </span>
                        <span className='d-flex my-3'>رنگ:
                            <div className="form-check">

                                <input className="form-check-input me-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    مشکی
                                </label>
                            </div>
                            <div className="form-check">

                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    سفید
                                </label>
                            </div>
                            <div className="form-check">

                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    قرمز
                                </label>
                            </div>
                            <div className="form-check">

                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    آبی
                                </label>
                            </div>
                            <div className="form-check">

                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    سبز
                                </label>
                            </div>
                        </span>
                        <div className='col-12 dir-left d-flex justify-content-end my-4'>
                            <div className='col-4'>
                                <button className='btn bg-warning'> اضافه به سبد خرید</button>
                            </div>
                            <div className='col-3'>
                                <div className="input-group mb-3">
                                    <span className="input-group-text rounded-0">
                                        <FontAwesomeIcon icon="fas fa-plus" />
                                    </span>
                                    <input type="text" className="form-control text-center" readOnly value="1" />
                                    <span className="input-group-text rounded-0">
                                        <FontAwesomeIcon icon="fas fa-minus" />
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className='col-5 d-flex justify-content-between'>
                            <p>اشتراک گذاری:</p>
                            <FontAwesomeIcon icon="fab fa-facebook-f" />
                            <FontAwesomeIcon icon="fab fa-twitter" />
                            <FontAwesomeIcon icon="fab fa-linkedin-in" />
                            <FontAwesomeIcon icon="fab fa-pinterest" />
                        </div>
                    </div>
                </section>
                {/*description-start */}
                <div className="row" id='description'>
                    <div className='col-12 bg-white my-4 p-4'>
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">توضیحات</button>
                                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">اطلاعات</button>
                                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">نظرات</button>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active p-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                            </div>
                            <div class="tab-pane fade p-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                                <div className='row'>
                                    <div className='col-lg-6 mt-3'>
                                        <div className='col-12 border-bottom'>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                        </div>
                                        <div className='col-12 border-bottom my-2'>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                        </div>
                                        <div className='col-12 border-bottom'>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                        </div>
                                        <div className='col-12 border-bottom my-2'>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 mt-3'>
                                        <div className='col-12 border-bottom'>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                        </div>
                                        <div className='col-12 border-bottom my-2'>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                        </div>
                                        <div className='col-12 border-bottom'>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                        </div>
                                        <div className='col-12 border-bottom my-2'>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade p-3" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <h5>1 نظر برای "نام محصول"</h5>
                                        <div className='row my-4'>
                                            <div className='col-2'>
                                                <img src={image6} alt='' className='img-fluid'/>
                                            </div>
                                            <div className='col-9'>
                                                <p>
                                                    <span>نام نام خانوادگی</span>-2 اسفند 1403
                                                </p>
                                                <span>
                                                    <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                                    <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                                    <FontAwesomeIcon icon="fas fa-star" className='main-color-1' />
                                                    <FontAwesomeIcon icon="fas fa-star-half-alt" className='main-color-1' />
                                                    <FontAwesomeIcon icon="far fa-star" className='main-color-1' />
                                                </span>
                                            </div>
                                        </div>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h5>
                                            ثبت نظرات
                                        </h5>
                                        <p className='my-4'>
                                            ایمیل شما منتشر نمی‌شود. فیلدهای ضروری با * مشخص شده‌اند.
                                        </p>
                                        <div className='col-12 d-flex'>
                                            <p className='ms-3'>امتیاز*:</p>
                                            <span>
                                                <FontAwesomeIcon icon="far fa-star" className='main-color-1' />
                                                <FontAwesomeIcon icon="far fa-star" className='main-color-1' />
                                                <FontAwesomeIcon icon="far fa-star" className='main-color-1' />
                                                <FontAwesomeIcon icon="far fa-star" className='main-color-1' />
                                                <FontAwesomeIcon icon="far fa-star" className='main-color-1' />
                                            </span>
                                        </div>
                                        <form>
                                            <label className='form-label'>نظر شما*</label>
                                            <textarea className='form-control'></textarea>
                                            <label className='form-label mt-3'>نام*</label>
                                            <input type='text' className='form-control' />
                                            <label className='form-label mt-3'>ایمیل*</label>
                                            <input type='email' className='form-control' />
                                            <input type='submit' value="ارسال" className='btn btn-warning rounded-0 px-3 mt-3'/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*description-end */}
                {/*carousel-start */}
                <section>
                    <div className='row' id='recentPro-title'>
                        <div className='col-12 mt-5 mb-3 px-0'>
                            <h2 className='position-relative z-2'>
                                <span className='bg-secondary-subtle ps-2'> محصولات مرتبط</span>
                            </h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='co1-12 p-0'>
                            
                            <OwlCarousel

                                items="4"
                                autoplay
                                loop
                                margin={20}


                            >
                                <div className='item' id='singlePro-sample'>
                                    <div className='bg-white col mx-0'>
                                        <div className='position-relative overflow-hidden p-3'>
                                            <img src={image1} className='img-fluid mx-auto' alt='' />
                                            <div id='singleDivAction'>
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
                                <div className='item' id='singlePro-sample'>
                                    <div className='bg-white col'>
                                        <div className='position-relative overflow-hidden p-3'>
                                            <img src={image2} className='img-fluid mx-auto' alt='' />
                                            <div id='singleDivAction'>
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
                                <div className='item' id='singlePro-sample'>
                                    <div className='bg-white col'>
                                        <div className='position-relative overflow-hidden p-3'>
                                            <img src={image3} className='img-fluid mx-auto' alt='' />
                                            <div id='singleDivAction'>
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
                                <div className='item' id='singlePro-sample'>
                                    <div className='bg-white col'>
                                        <div className='position-relative overflow-hidden p-3'>
                                            <img src={image4} className='img-fluid mx-auto' alt='' />
                                            <div id='singleDivAction'>
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
                                <div className='item' id='singlePro-sample'>
                                    <div className='bg-white col'>
                                        <div className='position-relative overflow-hidden p-3'>
                                            <img src={image5} className='img-fluid mx-auto' alt='' />
                                            <div id='singleDivAction'>
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
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
                
                {/*carousel-end */}




            </div>
        </>
    );
}
export default SingleProduct;