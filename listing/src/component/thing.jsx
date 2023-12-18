import {Component} from 'react';

class Thing extends Component{

 render() {
  const desc = this.props.desc
  const Objet = this.props.content
  const Chose = Objet.map( objet => Object.values(objet)[1])
  console.log(this.props.id);

   return(
       <> 
          <section id={this.props.id}>
          <div className="titre d-flex justify-content-center mt-3">{desc.title}</div>
          <div className="description d-flex justify-content-center mb-4">{desc.decription}</div>
          <div className="row mx-5 gx-5 d-flex justify-content-center">

          {
        Objet.map((e,index)=>(
            <div className="col-3 
             d-flex flex-column 
             align-items-center 
             justify-content-center
             boxComp shadow-xl"
              key={e.id}>
            <img src={`src/assets/img/${desc.title}/${e.image}`} alt={e.image} className="img-fluid"/>
            <div className="name text-center">{Chose[index]}</div>
            <div className="desc">{e.description}</div>
        </div>
        ))
       }
              </div>
  
      </section>
      
       </>

)
}
}
export {Thing}