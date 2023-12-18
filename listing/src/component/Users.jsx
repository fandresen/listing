import {Component} from 'react';
import './Users.css'

class Users extends Component{
 render() {
  const desc = this.props.desc
  const UserData = this.props.data

   return(
    <>
    
    <section id={this.props.id}>
          <div className="titre d-flex justify-content-center mt-3">{desc.title}</div>
          <div className="description d-flex justify-content-center mb-4">{desc.decription}</div>
          <div className="row mx-5 gx-5 d-flex justify-content-center">
            {
              UserData.map((user)=>(
                <div class="col-3 
                d-flex flex-column 
                align-items-center 
                justify-content-center
                 boxComp mt-4" key={user.id}
                >
            <img src={`src/assets/img/users/${user.image}`} alt={user.image} className="img-fluid"/>
            <div className="name text-center">{user.name}</div>
            <div className="row">
                    <div className="age col-6">{user.age}</div>
                    <div className="sexe col-6">{user.sexe}</div>
                </div>
                
          </div>
              ))
            }
          </div>
    </section>
   
   </>

)
}
}
export {Users}