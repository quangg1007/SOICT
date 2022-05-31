import classNames from 'classnames/bind';
import style from './Header.module.scss'
import images from '~/assets/images';

const cx = classNames.bind(style);

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx("header-wrapper")}>
            <div className={cx('masthead')}>
                <div className={cx('container')}>
                    <div className={cx("row")}>
                        <div className={cx("col-lg-3")}>
                            <div className={cx("logo")}>
                                <a href="/" title="SOICT - Trường Công nghệ Thông tin & Truyền thông" rel="home">
                                    <img src={images.logo}/>
                                </a>
                            </div>
                        </div>

                        <div className={cx("col-lg-7")}>
                            <div className={cx("header-nav")}>
                                <div className={cx("title")}>
                                    <strong className={cx("title-top")}>ĐẠI HỌC BÁCH KHOA HÀ NỘI</strong>
                                    <strong className={cx("title-bottom")}>TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</strong>
                                    {/* <strong className={cx("title-bottom")}>TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</strong> */}
                                </div>
                            </div>
                        </div>

                        <div className={cx("col-lg-2")}>
                            <ul className={cx("header-nav")}>
                                <div className={cx("flag")}>
                                    <ul className={cx("language-top")}> 
                                        <a href="/" hrefLang='vi'>
                                            <img src={images.flagVietNam}/>
                                        </a>

                                        <a href="/" hrefLang='eng'>
                                            <img src={images.flagAmerica}/>
                                        </a>
                                    </ul>
                                </div>

                                <div className={cx("header-search-form-wrapper")}>
                                    <form className={cx("searchform")}>
                                        <input type={"search"} className={cx("search-field")} name={"s"} id={"s"} placeholder={"Search..."}/>
                                        <button type="submit" className={cx("submit-button")}>
                                            <i class="fa-sodivd fa-magnifying-glass"></i>  
                                        </button>
                                    </form>
                                </div>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className={cx("")}>

            </div>
        </div>
    </header>
}

export default Header;
