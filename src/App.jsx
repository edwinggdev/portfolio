import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import person from './images/person.png'
// import 'bootstrap/dist/css/bootstrap.css';
import { Menu } from './components/Menu'
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faPhp, faJs, faContao, faFoursquare, faReact, faNode } from '@fortawesome/free-brands-svg-icons'
import { Footer } from './components/Footer'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
function App() {
  const myBlue = '#006699'

  const skills=[
    { 'name': "java", 'icon': faJava },
    { 'name': "php + laravel", 'icon': faPhp },
    { 'name': "Javascript", 'icon': faJs },
    { 'name': "ReactJS", 'icon': faReact },
    { 'name': "C#", 'icon': faContao },
    { 'name': "Flutter", 'icon': faFoursquare },
    { 'name': "NodeJs", 'icon': faNode },
  ]

  const rrss = [
    {'title': "Facebook", "link": "facebook.com", "icon" : faFacebook },
    {'title': "Twitter", "link": "facebook.com", "icon" : faTwitter },
    {'title': "Github", "link": "facebook.com", "icon" : faGithub },
    {'title': "Instagram", "link": "facebook.com", "icon" : faInstagram },
    {'title': "Youtube", "link": "facebook.com", "icon" : faYoutube }
  ]
  return (
    <>
    <Menu></Menu>
    
    <section className='fluid-container' style={{backgroundColor: myBlue,paddingTop:20  }} >
 
      <div className='row'>
        <div className='' >
          <div className='col-lg-12' style={{ backgroundImage: `url("images/person.png")`, backgroundRepeat: 'no-repeat', backgroundSize:'cover', backgroundPosition:'center' , height:550}} >
          
              <div className='container'>
                <div class="row">
                  <div className="col-4">
                    <div className='text-center pt-5' >
                      <div className='pt-5' style={{placeItems:'center'}}>
                        <div class="heading-top-line large"></div>
                        <h1 className='text-light'>i'm </h1>
                        <Zoom>
                        <h1 className='text-warning display-2'>Edu Garcia</h1>
                        <h1 className='text-light'>Software Developer</h1>
                        </Zoom>
                        
                      </div>
                    
                    </div>
                    
                  </div>
                  <div className='col-4'>&nbsp;</div>
                  <div className='col-4 pt-5'>
                    <div className='px-5 pt-5'>
                      <Fade bottom>
                      <h4 className='text-warning'>About me</h4>
                      </Fade>
                      <Fade bottom>
                      <h5 className='text-light'>Software Developer with 7 years of experience</h5>
                      </Fade>
                      <div className='py-3' ></div>
                      <Fade bottom>
                      <h4 className='text-warning'>My work</h4>
                      </Fade>
                      <Fade bottom>
                      <h5 className='text-light'>Software Developer with 7 years of epxrience</h5>
                      </Fade>
                      <div className='py-3' ></div>
                      <Fade bottom>
                      <h4 className='text-warning'>Follow me</h4>
                      </Fade>
                      <Fade bottom>
                      { rrss.map(item=>(
                        <a href={item.link} title={item.title}>
                          <FontAwesomeIcon icon={item.icon}  style={{ 'color': "white", fontSize: 32 }} className='mx-2'/>
                        </a>
                  
                      ))
                      }
                      </Fade>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
          </div>
          
        </div>
      </div>
    </section>
    <section className='container-fluid p-5' >
      {/* <div class="px-5 pt-5" >
        <h1 class="display-3">About me</h1>
      </div> */}
      <div className='row px-5 p-5'>
        <Fade left>
        <div className='col-6 px-5'>
          <h1 class="text-warning">I been developing</h1>
          <h1 class="text-warning"> web applications since 2010</h1>
          <h5 className='pt-4'>
            It´s been al long road of growing and learning a lot of technologies, i been participied in projects like websites,landing pages, ecommerce, legacy projects, mobiles apps, desktop applications.    
          </h5>  
        </div>
        </Fade>
        <Fade right>
        <div className='col-6'>
          <h3 className='text-info'>More about of my </h3>
          <div className='d-flex pl-5 pt-3'>
            
            <div className='d-flex' >
              <h1 className='display-1'>13 </h1>
              <div className='pt-4'>
                <h5 className='mx-3 my-0'>years of </h5>
                <h5 className='mx-3 my-0'> experience</h5>
              </div>
            </div>

            <div className='d-flex mx-5' >
                <h1 className='display-1'>35 + </h1>
                <div className='pt-4'>
                  <h5 className='mx-3 my-0'> fulfilled </h5>
                  <h5 className='mx-3 my-0'> Projects</h5>
                </div>
            </div>
          </div>
        </div>
        </Fade>
      </div>
      
        
          
              
      {/* <img src={person}></img>
      <button className='btn btn-info'>btn</button> */}
    </section>
    <section className='container-fluid p-5' style={{ backgroundColor: myBlue }}>
      <div className='container-fluid pb-5' >
        <h4 className='text-gray'>Previuosly worked on</h4>
      </div>
      <div className='d-flex px-5 pb-4 justify-content-center'>
        {/* <div className='mx-3 text-light'><h3>ginga.com.co</h3></div> */}
        <div className='mx-3 text-light'><h3>bibliocucuta.org.co</h3> </div>
        <div className='mx-3 text-light'><h3>mintic.org.co</h3> </div>
        <div className='mx-3 text-light'><h3>unab.edu.co</h3> </div>
        <div className='mx-3 text-light'><h3>epsilontech.com</h3> </div>
        <div className='mx-3 text-light'><h3>cccucuta.org.co</h3> </div>

      </div>
    </section>
    <section className='p-5'>
      <div className='display-6'>My List of Skills</div>
      <div className='row pt-3'>
        { skills.map(item=>(
          <Fade bottom>
          <div className='col-2'>
          <div className='card pt-3'>
            <div className='d-flex'>
              <FontAwesomeIcon icon={item.icon} style={{ 'color': myBlue, fontSize: 92 }} className='mx-2'/>
            </div>
            <div className='pt-2'>
              <h1>{item.name}</h1>
            </div>
            
          </div>
        </div>
        </Fade>
        )) }
        
        
      </div>
    </section>
    <section className="p-5" style={{ "background-color":myBlue}} > 
            <div className="row">
                <div className="col-6">
                    <div className="d-flex">
                        <div >
                        <Fade left>
                            <img src={"./images/person.png"} width={200} className="rounded-circle"></img>
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
                        <h4>My phone:</h4>
                        <h2 className='text-light'>+57 320 320 320</h2>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default App
