import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Header from './header'
import Slidebar from './Slidebar'
import Footer from './footer'

const cx = classNames.bind(styles)

function DefaultLayout({children}) {
    return (
        <div className={cx("wrapper")}>
            <Header/>
            <div className='container'>
                <div className={cx("row")}>
                    <Slidebar />
                    <div className={cx("col-lg-7 content")}>
                        {children}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DefaultLayout;