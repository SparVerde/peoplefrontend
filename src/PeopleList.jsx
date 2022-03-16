// új komponens létrehozásával kezdjük jsx file formátumban (előnye emet bővítmény működni fog és alt+shit+f -el tudok formázni)
//ehhez importálnom kell a react-et, imr vagy imrc parancs kiadásával
import React, { Component } from 'react';
import PeopleCard from './PeopleCard';
//cc - vel egy class componentet tudok létrehozni vagy ccc konstruktorral PeopleL
class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }  
    }
    //cmd fgv-re van szükség componentDidMount, megadjuk mi történjen, ha betöltjük a komponenst, amikor a PeopleList componenst meghívjuk
    //api-ból töltöm fel GetPeople fgv-t hozok létre hozzá, ezt hívjuk meg this.getPeople
    //Fetch api használata: fetch hívást másolunk ide, ezt tudjuk törlésre is használni
    //alt gr+7 ` beszúrás

    //setState- fgv-el beállítjuk a lekérdezett értékre
        
    componentDidMount() {
        this.getPeople();
    }
    getPeople(){
        fetch("http://localhost:8000/api/people")
        .then(response => response.json())
        .then(data => this.setState({
            people: data
        }));  
    }

    handleTorlesClick = (id) => {
        fetch(`http://localhost:8000/api/film/${id}`, {method: "DELETE"})
        .then(response => console.log(response))
    }

    render()
    { 
        // CardList listába veszem fel
        const {people} = this.state;
        const cardList = [];
        //minden kártyához egyedi key property kell
        //const felvétele tesztelésre:
       /* const people = {
           name: "Adam",
           email: "adam@gmail.com",
            age: 1,
        }*/

        people.forEach(people => {
            cardList.push(<PeopleCard torlesClick={this.handleTorlesClick} key={people.id} people={people} />);
        });
        ;

        //card megkójelenítése npm start-al leellenőrzöm, --> localhost:3000; App.js-ben <People />
        //megjelenítése szükséges <PeopleCard people={people}/> (teszt) vagy CardList
    
        return ( <div className="row gy-3">
            {cardList}
            <PeopleCard people={people}/>


        </div> );
    }
}
 
export default PeopleList ;