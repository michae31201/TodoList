import React from 'react';
import AddTask from './AddTask';
import Menu from './Menu';
import TodoContext from '../TodoContext';
import TaskList from './TaskList';
import '../css/App.css';

class App extends React.Component {
  state = {
    isEdit:false
  }
  openEdit  = () => {
    this.setState({isEdit:true});
  }
  closeEdit = () => {
    this.setState({isEdit:false});
  }
  render(){
    const {isEdit} = this.state;
    return(
      <div className="App">
        <Menu/>
        {
          isEdit ? 
          <AddTask closeEdit={this.closeEdit}/>
          :
          <div>
            <button className="add-btn" onClick={this.openEdit}> + </button>
            <TaskList/>
          </div>
        }
      </div>
    )
  }
}
App.contextType = TodoContext;
export default App;