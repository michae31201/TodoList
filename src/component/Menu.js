import React from 'react';
import TodoContext from '../TodoContext';
import '../css/Menu.css';
class Menu extends React.Component{
    render(){
        const {mode,changeMode} = this.context;
        return(
            <div className="Menu">
                <div className="btn-group">
                    <button className={mode === "all"?"selectBtn":""} id="all" onClick={changeMode}>
                        全部
                        <span className="task-count">{this.context.tasks.length}</span>
                    </button>
                    <button className={mode === "progress"?"selectBtn":""} id="progress" onClick={changeMode}>
                        進行中
                        <span className="task-count">
                            {
                                this.context.tasks.filter((task) => (!task.complete)).length
                            }
                        </span>
                    </button>
                    <button className={mode === "complete"?"selectBtn":""} id="complete" onClick={changeMode}>
                        完成
                        <span className="task-count">
                            {
                                this.context.tasks.filter((task) => (task.complete)).length
                            }
                        </span>
                    </button>
                </div>
            </div>
        )
    }
}
Menu.contextType = TodoContext;
export default Menu;