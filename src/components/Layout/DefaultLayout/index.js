import Header from './header'
import Sidebar from './slidebar'
import Footer from './footer'

function DefaultLayout({children}) {
    return (
        <div>
            <Header/>
            <div className='container'>
                <Sidebar />
                <div className='content'>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DefaultLayout;