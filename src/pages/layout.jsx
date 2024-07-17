import { Link, NavLink, Outlet } from "react-router-dom";
function Layout() {
    return (
        <>
            <header>
                {/*topBar-start */}
                <div className="container-fluid bg-secondary-subtle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-light dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">
                                        حساب کاربری
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Sign in</a></li>
                                        <li><a class="dropdown-item" href="#">Sign up</a></li>
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
                {/*topBar-end */}
            </header>
            <div className="container-fluid">
                <Outlet />
            </div>
        </>
    );
}
export default Layout;