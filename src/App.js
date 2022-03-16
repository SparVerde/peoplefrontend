
import './App.css';
import PeopleList from './PeopleList'; //importálni kell!!!
//import bootstrap annak npm install bootstrap után
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="container">
      <PeopleList />
    </div>
  );
}

export default App;
// új komponens létrehozásával kezdjük: PeopleList.jsx
