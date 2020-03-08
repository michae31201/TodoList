import React from 'react';
import TodoContext from '../TodoContext';
import Task from './Task';
import '../css/TaskList.css';

class TaskList extends React.Component{
    render(){
        let tasklist;
        switch(this.context.mode){
            case "progress":
                tasklist = this.context.tasks.filter((task) => {
                    return !task.complete;
                });
                break;
            case "complete":
                tasklist = this.context.tasks.filter((task) => {
                    return task.complete;
                });
                break;
            default:
                tasklist = this.context.tasks;
                break;
        }
        return(
            <div className="tasklist">
                {tasklist.map((task) => {
                    return <Task key={task.id} {...task}/>
                })}
            </div>
        )
    }
}
TaskList.contextType = TodoContext;
export default TaskList;