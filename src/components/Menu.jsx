import { Link} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css';
export function Menu(){
    const myBlue = '#006699'
    return <nav className="navbar navbar-dark pt-3" style={{backgroundColor: myBlue }}>
            <div className="container-fluid pl-5">
                <div className="navbar-header d-flex ">
                    <div className="btn btn-outline-warning">
                        eduggdev
                    </div>
                    <Link to='/'>
                    <div className="navbar-brand mx-5">Inicio</div>
                    </Link>
                    
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right"></ul>
                </div>
                <div className="nav-item dropdown my-2 my-sm-0 d-flex">
                    <Link to="/portfolio">
                    <div className="navbar-brand mx-5">Portfolio</div>
                    </Link>
                    <a href ="https://www.ginga.com.co" target="_blank">
                     <div className="navbar-brand mx-5">My project</div>
                    </a>
                    
                    {/* <a className="btn btn-outline-danger">Registro</a> */}
                </div>
            </div>
        </nav>
}