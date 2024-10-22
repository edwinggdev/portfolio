import { Menu } from "./components/Menu"
import { Footer } from "./components/Footer"

import './Card.css'
export function Portfolio(){

    const cardStyle = {
        
    }
    const tools =[
            {
                name : 'Selecta',
                image : 'selecta',
                items : [{name:'Node JS'},{name: 'Reacj JS'},{ name:'Mongo DB'}]
            },
            {
                name : 'Mi Norte App',
                image : 'minorteapp',
                items : [{name:'Dart'},{name: 'Flutter'},{ name:'PHP'}]
            },
            {
                name : 'Lokomproaqui',
                image : 'lokompro',
                items : [{name:'Angular'},{name: 'Sails JS'},{ name:'Mysql'}, { name:'Bootrstrap' }]
            },
            {
                name : 'Misclin ',
                image : 'misclin',
                items : [{name:'PHP'},{name: 'Bootstrap'},{ name:'Mysql'},{ name: 'Bootstrap' }]
            }
        ]
    return(<>
    <Menu></Menu>
    <div className="container-fluid">
        <div className="row">
            {
                tools.map(item=>(
                    <div className="col-6 py-4 px-4">
                        <div className="card" >
                            <div className="card-item"style={{ backgroundImage: `url('./images/${item.image}.png')`, height:500, overflow:"hidden", boxSizing: "border-box"}}>
                                <div className="container px-5 py-5">
                                    {item.items.map(it=>(
                                        <span className="badge bg-primary mx-2">{it.name}</span>
                                    ))
                                    
                                    }
                                </div>
                                <h1 className="px-3 bg-primary text-white">{item.name} </h1>
                            </div>
                            
                        </div>
                    </div>
                ))
            }
            
        </div>
    </div>
    <Footer></Footer>
    </>)
}