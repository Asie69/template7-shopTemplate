import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from '../assets/img/product-1.jpg';
import image2 from '../assets/img/product-2.jpg';
import image3 from '../assets/img/product-3.jpg';
import image4 from '../assets/img/product-4.jpg';
import image5 from '../assets/img/product-5.jpg';

function Cart() {
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
                                <li className="breadcrumb-item active" aria-current="page">سبد خرید</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/*breadCrumb-end */}
                <section className='row'>
                    <div className='col-lg-9'>
                        <table class="table table-hover text-center mt-0">
                            <thead>
                                <tr className='table-dark'>
                                    <th scope="col">محصول</th>
                                    <th scope="col">قیمت</th>
                                    <th scope="col">تعداد</th>
                                    <th scope="col">قیمت کل</th>
                                    <th scope="col">حذف</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='d-flex align-items-center justify-content-start'>
                                        <img src={image1} alt='' className='img-fluid' />
                                        <p className='mb-0 me-2'>نام محصول</p>
                                    </td>
                                    <td className='align-middle'>15000000 تومان</td>
                                    <td className='align-middle col-2'>
                                        <div className="input-group">
                                            <span className="input-group-text rounded-0">
                                                <FontAwesomeIcon icon="fas fa-plus" />
                                            </span>
                                            <input type="text" className="form-control text-center" readOnly value="1" />
                                            <span className="input-group-text rounded-0">
                                                <FontAwesomeIcon icon="fas fa-minus" />
                                            </span>
                                        </div>
                                    </td>
                                    <td className='align-middle'>15000000 تومان</td>
                                    <td className='align-middle'>
                                        <FontAwesomeIcon icon="fas fa-times" className='text-white p-2 bg-danger'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='d-flex align-items-center justify-content-start'>
                                        <img src={image2} alt='' className='img-fluid' />
                                        <p className='mb-0 me-2'>نام محصول</p>
                                    </td>
                                    <td className='align-middle'>15000000 تومان</td>
                                    <td className='align-middle col-2'>
                                        <div className="input-group">
                                            <span className="input-group-text rounded-0">
                                                <FontAwesomeIcon icon="fas fa-plus" />
                                            </span>
                                            <input type="text" className="form-control text-center" readOnly value="1" />
                                            <span className="input-group-text rounded-0">
                                                <FontAwesomeIcon icon="fas fa-minus" />
                                            </span>
                                        </div>
                                    </td>
                                    <td className='align-middle'>15000000 تومان</td>
                                    <td className='align-middle'>
                                        <FontAwesomeIcon icon="fas fa-times" className='text-white p-2 bg-danger' />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='d-flex align-items-center justify-content-start'>
                                        <img src={image3} alt='' className='img-fluid' />
                                        <p className='mb-0 me-2'>نام محصول</p>
                                    </td>
                                    <td className='align-middle'>15000000 تومان</td>
                                    <td className='align-middle col-2'>
                                        <div className="input-group">
                                            <span className="input-group-text rounded-0">
                                                <FontAwesomeIcon icon="fas fa-plus" />
                                            </span>
                                            <input type="text" className="form-control text-center" readOnly value="1" />
                                            <span className="input-group-text rounded-0">
                                                <FontAwesomeIcon icon="fas fa-minus" />
                                            </span>
                                        </div>
                                    </td>
                                    <td className='align-middle'>15000000 تومان</td>
                                    <td className='align-middle'>
                                        <FontAwesomeIcon icon="fas fa-times" className='text-white p-2 bg-danger' />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='d-flex align-items-center justify-content-start'>
                                        <img src={image4} alt='' className='img-fluid' />
                                        <p className='mb-0 me-2'>نام محصول</p>
                                    </td>
                                    <td className='align-middle'>15000000 تومان</td>
                                    <td className='align-middle col-2'>
                                        <div className="input-group">
                                            <span className="input-group-text rounded-0">
                                                <FontAwesomeIcon icon="fas fa-plus" />
                                            </span>
                                            <input type="text" className="form-control text-center" readOnly value="1" />
                                            <span className="input-group-text rounded-0">
                                                <FontAwesomeIcon icon="fas fa-minus" />
                                            </span>
                                        </div>
                                    </td>
                                    <td className='align-middle'>15000000 تومان</td>
                                    <td className='align-middle'>
                                        <FontAwesomeIcon icon="fas fa-times" className='text-white p-2 bg-danger' />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='d-flex align-items-center justify-content-start'>
                                        <img src={image5} alt='' className='img-fluid' />
                                        <p className='mb-0 me-2'>نام محصول</p>
                                    </td>
                                    <td className='align-middle'>15000000 تومان</td>
                                    <td className='align-middle col-2'>
                                        <div className="input-group">
                                            <span className="input-group-text rounded-0">
                                                <FontAwesomeIcon icon="fas fa-plus" />
                                            </span>
                                            <input type="text" className="form-control text-center" readOnly value="1" />
                                            <span className="input-group-text rounded-0">
                                                <FontAwesomeIcon icon="fas fa-minus" />
                                            </span>
                                        </div>
                                    </td>
                                    <td className='align-middle'>15000000 تومان</td>
                                    <td className='align-middle'>
                                        <FontAwesomeIcon icon="fas fa-times" className='text-white p-2 bg-danger' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-3 mt-2'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className="input-group">
                                    <input type='text' placeholder='کد تخفیف' className='form-control rounded-start-0' />
                                    <span className="input-group-text rounded-0">
                                        <button className='btn'>ثبت</button>
                                    </span>
                                </div>
                                
                            </div>
                            <div className='row' id='cartPro-title'>
                                <div className='col-12 mt-4 ps-0'>
                                    <h5 className='position-relative z-2'>
                                        <span className='bg-secondary-subtle ps-2'>خلاصه سبد خرید</span>
                                    </h5>
                                </div>
                            </div>
                            <div className='row ps-0'>
                                <div className='col-12 ps-0 mt-3'>
                                    <div className='bg-white p-4'>
                                        <div className='col-12 d-flex justify-content-between'>
                                            <p>قیمت کل</p>
                                            <p>15000000 تومان</p>

                                        </div>
                                        <div className='col-12 d-flex justify-content-between'>
                                            <p>هزینه ارسال</p>
                                            <p>50000 تومان</p>

                                        </div>
                                        <hr />
                                        <div className='col-12 d-flex justify-content-between'>
                                            <h6>قیمت نهایی</h6>
                                            <p>15050000 تومان</p>
                                        </div>
                                        <div className='col-12'>
                                            <button type='button' className='btn btn-warning rounded-0 w-100 mt-3'>تسویه حساب</button>
                                    </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}
export default Cart;