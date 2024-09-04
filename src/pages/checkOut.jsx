import { NavLink } from 'react-router-dom';

function CheckOut() {
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
                                <li className="breadcrumb-item active" aria-current="page">تسویه حساب</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/*breadCrumb-end */}
                <section className='row'>
                    <div className='col-md-7 col-lg-9' id='checkOut-title'>
                        <h5 className='position-relative z-2'>
                            <span className='bg-secondary-subtle ps-2'>آدرس صورت حساب</span>
                        </h5>
                        <div className='col-12 bg-white'>
                            <form className='row p-4 mt-4'>
                                <div className="col-lg-6">
                                    <label for="name" className="form-label main-color-2">نام</label>
                                    <input type="text" className="form-control" id="name" placeholder="محمد" />
                                </div>
                                <div className="col-lg-6">
                                    <label for="family" className="form-label main-color-2">نام خانوادگی</label>
                                    <input type="text" className="form-control" id="family" placeholder="محمدی" />
                                </div>
                                <div className="col-lg-6 my-3">
                                    <label for="email" className="form-label main-color-2">ایمیل</label>
                                    <input type="email" className="form-control" id="email" placeholder="example@email.com" />
                                </div>
                                <div className="col-lg-6 my-3">
                                    <label for="cellPhone" className="form-label main-color-2">شماره موبایل</label>
                                    <input type="text" className="form-control" id="cellPhone" placeholder="**********" />
                                </div>
                                <div className="col-lg-6">
                                    <label className="form-label main-color-2">کشور</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>انتخاب</option>
                                        <option value="1">ایران</option>
                                    </select>
                                </div>
                                <div className="col-lg-6">
                                    <label className="form-label main-color-2">شهر</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>انتخاب</option>
                                        <option value="1">مشهد</option>
                                        <option value="2">شیراز</option>
                                        <option value="3">اصفهان</option>

                                    </select>
                                </div>
                                <div className="col-lg-6 my-3">
                                    <label for="address" className="form-label main-color-2">آدرس</label>
                                    <input type="text" className="form-control" id="address" placeholder="میدان،چهارراه،خیابان،کوچه،پلاک" />
                                </div>
                                <div className="col-lg-6 my-3">
                                    <label for="zipCode" className="form-label main-color-2">کد پستی</label>
                                    <input type="text" className="form-control" id="zipCode" placeholder="کد پستی " />
                                </div>
                                <div className='col-lg-6'>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="createAccount" checked />
                                        <label class="form-check-label" for="createAccount">
                                            ایجاد حساب کاربری
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="shippingAddress" />
                                        <label class="form-check-label" for="shippingAddress">
                                            ارسال به آدرس دیگر
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-5 col-lg-3' id='checkOut-title-2'>
                        <h5 className='position-relative z-2'>
                            <span className='bg-secondary-subtle ps-2'>اطلاعات سفارش</span>
                        </h5>
                        <div className='col-12 bg-white p-4 mt-4'>
                            <h6>محصولات</h6>
                            <div className='d-flex justify-content-between'>
                                <p>محصول 1</p>
                                <p>150000 تومان</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>محصول 2</p>
                                <p>150000 تومان</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>محصول 3</p>
                                <p>150000 تومان</p>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <h6>قیمت کلی</h6>
                                <p>150000 تومان</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <h6>هزینه ارسال</h6>
                                <p>150000 تومان</p>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <h6>جمع</h6>
                                <p>150000 تومان</p>
                            </div>
                            
                            
                        </div>
                        <h5 className='position-relative z-2 mt-4'>
                            <span className='bg-secondary-subtle ps-2'>پرداخت</span>
                        </h5>
                        <div className='col-12 bg-white p-4 mt-4'>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="paymentRadio" id="paymentRadio1" checked />
                                <label class="form-check-label" for="paymentRadio1">
                                        ملت
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="paymentRadio" id="paymentRadio2"/>
                                <label class="form-check-label" for="paymentRadio2">
                                        زرین پال
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="paymentRadio" id="paymentRadio3" />
                                <label class="form-check-label" for="paymentRadio3">
                                    صادرات
                                </label>
                            </div>
                            <button type='button' className='btn btn-warning w-100 rounded-0 mt-3 p-2'>سفارش</button>
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}
export default CheckOut;