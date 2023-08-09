import logo from '../assets/logo.png'
const NavBar = () => {
    return (
        <div className="row d-flex justify-content-center align-items-center ">
            <div className='col-sm-12 col-md-4 d-flex justify-content-center'>
                <img className='logo' src={logo}/>
            </div>
            <div className='col-xs-12 col-md-6 d-none d-md-block d-flex justify-content-center'>
                <h1>Recipe-FY</h1>
            </div>
            
        </div>
    )
}

export default NavBar