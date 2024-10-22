import {rrss} from "./Const"
// import  {foto} from "../images/person.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade'
export function Footer(){
    const myBlue = '#006699'
    return(<>
        <section className="p-5" style={{ "background-color":myBlue}} > 
            <div className="row">
                <div className="col-6">
                    <div className="d-flex">
                        <div >
                        <Fade left>
                            <img src={"./images/foto02.png"} width={200} className="rounded-circle"></img>
                        </Fade>
                        </div>
                        <div>
                            <h1>Edu Garcia</h1>
                            <h1>Software Developer</h1>
                            <Fade bottom>
                            <div>
                              { rrss.map(item=>(
                                  <a href={item.link} title={item.title}>
                                    <FontAwesomeIcon icon={item.icon}  style={{ 'color': "white", fontSize: 32 }} className='mx-2'/>
                                  </a>
                                ))
                              }
                            </div>
                            </Fade>
                        </div>
                    </div>
                    
                </div>
                <div className="col-6">
                    {/* <h1>Contact me</h1> */}
                    <div className='text-warning'>
                      <div>
                        <h4>My mail:</h4>
                        <h2 className='text-light'>edwin_garcia5@hotmail.com</h2>
                      </div>
                      <div>
                        <h4>My X:</h4>
                        <h2 className='text-light'>@gingasoluciones</h2>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}