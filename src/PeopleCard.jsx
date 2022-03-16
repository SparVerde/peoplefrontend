//imrc
import React, { Component } from 'react';
///cc
class PeopleCard extends Component {
    /*state = {  }*/
    
    render() { 
        const { people, torlesClick } = this.props;
//törléshez a torlesClick property-t hívom meg majd az people id-val
        return ( <div className="col-sm-6 cold-md-4 col-lg-3 PeopleCard">
        <div className="card h-100 PeopleCard-card">
          <div className="card-header text-truncate PeopleCard-card-header"><span className="font-weight-bold">Name: </span>
            {people.name}
          </div>
          <div className="card-body PeopleCard-card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><span className="font-weight-bold">Email: </span>{people.email}</li>
              <li className="list-group-item"><span className="font-weight-bold">Age: </span>{people.age}</li>
            </ul>
          </div>
          <div className="card-footer">
            <button onClick={() => torlesClick(people.id)} className="btn btn-danger">Törlés</button>
          </div>
        </div>
      </div> );
    }
}
 
export default PeopleCard;