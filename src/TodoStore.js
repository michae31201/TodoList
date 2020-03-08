import React from 'react';
import App from './component/App';
import TodoContext from './TodoContext';

class TodoStore extends React.Component{
    state = {
        mode:"all",
        tasks:[],
    }
    componentDidMount(){
        let storageTasks = localStorage.getItem("_TodoList");
        if(storageTasks){
            const tasks = JSON.parse(storageTasks);
            this.setState({tasks});
        }
    }
    changeMode = (e) => {
        const mode = e.target.id;
        this.setState({mode});
    }
    addTask = (newTask) => {
        const tasks = [...this.state.tasks,newTask]
        this.setState({tasks},this.saveToLocalStorage)
    }
    editTask = (editTask) =>{
        const tasks = [...this.state.tasks];
        const index = tasks.findIndex(task => task.id === editTask.id);
        tasks.splice(index,1,editTask);
        this.setState({tasks:[...tasks]},this.saveToLocalStorage);
    }
    changeTaskState = (e,id) => {
        const tasks = [...this.state.tasks];
        const index = tasks.findIndex((task) => task.id === id);
        tasks[index].complete = e.target.checked;
        this.setState({tasks:[...tasks]},this.saveToLocalStorage)
    }
    saveToLocalStorage = () => {
        const tasks = JSON.stringify(this.state.tasks);
        window.localStorage.setItem("_TodoList",tasks);
    }
    render(){
        const {mode, tasks} = this.state;
        const changeMode = this.changeMode;
        const addTask = this.addTask;
        const editTask = this.editTask;
        const changeTaskState = this.changeTaskState;
        return(
            <TodoContext.Provider value={{mode, tasks, changeMode, addTask, editTask, changeTaskState}}>
                <App/>
            </TodoContext.Provider>
        )
    }
}

export default TodoStore;