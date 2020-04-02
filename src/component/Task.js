import React from 'react';
import TaskForm from './TaskForm';
import TodoContext from '../TodoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTasks,} from '@fortawesome/free-solid-svg-icons'
import { faCommentDots, faCalendarAlt, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import '../css/Task.css';

class Task extends React.Component{
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
        const {id, task, day, time, note, complete} = this.props;
       
        return(
           this.state.isEdit ? 
            <TaskForm editData={{id, task, day, time, note, complete}} closeEdit={this.closeEdit}/>
            :
            <div className={`task ${complete?"task-fin":""}`}>
                <input type="checkbox" className="task-check" checked={complete} onChange={(e)=>{this.context.changeTaskState(e,id)}}/>
                <div className="task-features">
                    <button onClick={this.openEdit}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button onClick={()=>{this.context.deleteTask(id);}}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>

                </div>
                <div className="task-text">
                    <div  className="task-name">
                        <FontAwesomeIcon icon={faTasks} />
                        <p>{task}</p>
                    </div>
                    <div className="task-note">
                        <FontAwesomeIcon icon={faCommentDots} />
                        <p>{note}</p>
                    </div>
                    <div className="task-time">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <p> 到期日:{day} {time}</p>
                    </div>
                </div>
            </div>
            
        )
    }
}
Task.contextType = TodoContext;
export default Task;