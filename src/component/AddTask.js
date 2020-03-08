import React from 'react';
import getFormateDate from '../utils/getFormateDate';
import getFormateTime from '../utils/getFormateTime';
import TodoContext from '../TodoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faDownload, faTimes,faTasks,} from '@fortawesome/free-solid-svg-icons'
import { faCommentDots, faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import '../css/AddTask.css';

class AddTask extends React.Component{
    state = {
        id:Date.now(),
        task:"",
        day:"",
        time:"",
        note:"",
        complete:false,
    }
    componentDidMount(){
        if(this.props.editData){
            const {id, task, day, time, note, complete} = this.props.editData;
            this.setState({id, task, day, time, note, complete});
        }else{
            let date = new Date();
            let day = getFormateDate(date);
            let time = getFormateTime(date);
            this.setState({day,time})
        }
    }
    handleChange = (e) =>{
        this.setState({[e.target.id]:e.target.value})
    }
    saveTask = () => {
        const task = {...this.state}
        if(this.props.editData){
            this.context.editTask(task)
        }else{
            this.context.addTask(task);
        }
        this.props.closeEdit();
    }

    render(){
        const {task, day, time, note} = this.state;
        return(
            <div className="AddTask">
                {
                    this.props.editData?
                        <h2><FontAwesomeIcon icon={faEdit}/>編輯事項</h2>:<h2><FontAwesomeIcon icon={faTasks} />新增事項</h2>
                }
                <hr/>
                <div className="form-input">
                    <div className="input-name">
                        <FontAwesomeIcon icon={faTasks} />
                        事項
                    </div>
                    <input type="text" className="input-style" id="task" value = {task} onChange={this.handleChange}/>
                </div>
                <div className="form-input">
                    <div  className="input-name">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>到期日</span>
                    </div>
                    <input type="date" className="input-style input-time" id="day" value = {day} onChange={this.handleChange}/>
                    <input type="time" className="input-style input-time" id="time" value={time} onChange={this.handleChange} />
                </div>
                <div className="form-input">
                    <div  className="input-name">
                        <FontAwesomeIcon icon={faCommentDots} />
                         備註
                    </div>
                    <textarea className="input-style" id="note" value={note} onChange={this.handleChange}/>
                </div>
                <button className="input-btn save-btn" onClick={this.saveTask}>
                    <FontAwesomeIcon icon={faDownload}/>
                    儲存
                </button>
                <button className="input-btn cancel-btn" onClick={this.props.closeEdit}>
                    <FontAwesomeIcon icon={faTimes}/>
                    取消
                </button>
            </div>
        )
    }
}
AddTask.contextType = TodoContext;
export default AddTask;