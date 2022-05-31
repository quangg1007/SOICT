import classNames from 'classnames/bind';
import style from './Slidebar.module.scss'
import images from '~/assets/images';

const cx = classNames.bind(style);

function Sidebar() {
    return <div className={cx("col-lg-3")}>
        <h1>SlideBar</h1>
    </div>
}

export default Sidebar;