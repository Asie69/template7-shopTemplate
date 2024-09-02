import { NavLink } from 'react-router-dom';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





function ContactUs() {





    return (
        <>
            <div className="container">
                {/*breadCrumb-start */}
                <section className="row">
                    <div className="col-12 bg-white my-4 p-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><NavLink to="/">خانه</NavLink></li>
                                <li className="breadcrumb-item active" aria-current="page">تماس</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/*breadCrumb-end */}
                <section>
                    <div className='row' id='contact-title'>
                        <div className='col-12'>
                            <h2 className='position-relative z-2'>
                                <span className='bg-secondary-subtle ps-2'>تماس با ما</span>
                            </h2>
                        </div>
                    </div>
                    <div className='row my-4'>
                        <div className='col-lg-7'>
                            <div className='bg-white p-4'>
                                <form>
                                    <input type='text' className='form-control' placeholder='نام' />
                                    <input type='email' className='form-control my-3' placeholder='ایمیل' />
                                    <input type='text' className='form-control' placeholder='موضوع' />
                                    <textarea className='form-control my-3' rows="6" placeholder='توضیحات' />
                                    <button type='button' className='btn btn-warning rounded-0 px-4'>ارسال</button>
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <div className='col-12 google-map-code bg-white p-4'>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d615265.8768495044!2d58.95030942354784!3d36.47856243953651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c911abe4131d7%3A0xc9c57e3a9318753b!2sMashhad%2C%20Razavi%20Khorasan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1719999371494!5m2!1sen!2s"
                                    width="100%"
                                    height="250"
                                    frameborder="0"
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    aria-hidden="false"
                                    tabindex="0"
                                />
                            </div>
                            <div className='col-12 bg-white p-4 mt-4'>
                                <div className='col d-flex justify-content-start align-items-center'>
                                    <FontAwesomeIcon icon="fa fa-map-marker-alt" className='main-color-1 ms-3' />
                                    <p className='mb-0'>ایران، مشهد، خیابان لورم</p>
                                </div>
                                <div className='col d-flex justify-content-start align-items-center my-2'>
                                    <FontAwesomeIcon icon="fa fa-envelope" className='main-color-1 ms-3' />
                                    <p className='mb-0'>info@example.com</p>
                                </div>
                                <div className='col d-flex justify-content-start align-items-center'>
                                    <FontAwesomeIcon icon="fa fa-phone" className='main-color-1 ms-3' />
                                    <p className='mb-0'>05130000000</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
}
export default ContactUs;