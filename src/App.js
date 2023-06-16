import './App.css';
//import InputField from './components/Input Field/input';
import TaskView from './components/TaskView/taskview';


function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Tododo App</h2>
        <TaskView />
      </div>
    </div>
  );
}

export default App;
