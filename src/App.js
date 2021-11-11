import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Adding from './TaskComponent/Adding';
import AddTask from './TaskComponent/AddTask';
import tasksavepopup from './TaskComponent/tasksavepopup';

function App() {
  
  return (
    <div className="App container" >
      <table>
        <thead>
            <tr>
              <td>
               
              </td>
              <td></td>
             </tr>
        </thead>
        <tbody>
          <tr>
            <td><AddTask/></td>
            <td> </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
