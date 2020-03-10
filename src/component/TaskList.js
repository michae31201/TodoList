import React from 'react';
import TodoContext from '../TodoContext';
import Task from './Task';
import getSortedTasks from '../utils/getSortedTasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSortAmountUpAlt, faSortAmountDownAlt} from '@fortawesome/free-solid-svg-icons';
import '../css/TaskList.css';

class TaskList extends React.Component{
    state = {
        search:"",
        sort:"min",
        sortType:"deadline"
    }

    handleSearchValue = (e) => {
        const search = e.target.value;
        this.setState({search});
    }
    handleTaskSort = (e) => {    
        const sort = this.state.sort === "min" ? "max":"min";
        this.setState({sort});
    }
    handleTaskSortType = (e) => {
        const sortType = e.target.value;
        this.setState({sortType});
    }
    render(){
        const {search, sort, sortType} = this.state;
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
        tasklist = getSortedTasks(tasklist, sort, sortType);
        
        return(
            <div>
                <div className="task-search">
                    <input type="text" placeholder="搜尋..."  value={search} onChange={this.handleSearchValue}/>
                    <button onClick={this.handleTaskSort}>
                        <FontAwesomeIcon icon={sort==="min" ? faSortAmountDownAlt:faSortAmountUpAlt}/>
                    </button>
                    <select value={sortType} onChange={this.handleTaskSortType}>
                        <option value="deadline">到期日</option>
                        <option value="addday">新增日</option>
                    </select>
                </div>
                <div className="tasklist">
                    {
                        tasklist
                            .filter((task) => {
                                return task.task.includes(search) || task.note.includes(search);
                            })
                            .map((task) => {
                                return <Task key={task.id} {...task}/>
                            })
                    }
                </div>
            </div>
        )
    }
}
TaskList.contextType = TodoContext;
export default TaskList;