import react, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import plus from '../pls2.png';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Adding from "./Adding";
import AddTaskServuces from "../TaskServices/AddTaskServices";
import AddTaskServices from "../TaskServices/AddTaskServices";

export class AddTask extends Component{
    
    constructor(props){
        super(props);
        this.state={
         seen: false,
         alltsks:[],
         taskid:0,
         task:""
        
        };
        this.addtask=this.addtask.bind(this);
    }

    componentDidMount(){
        AddTaskServices.viewalltasks().then((res)=>{
            console.log(res);
            this.setState({alltsks:res.data});
            console.log(this.state.alltsks);
            
        })
        
    }

    addtask=()=>{
        this.setState({
            seen: !this.state.seen
        });
    }
    checkedtask=(taskid, taskstatus)=>{
        const tstatus = 0;
        console.log("completed");
        console.log("taskstatus is " + taskstatus);
        console.log(JSON.stringify(taskid));
        AddTaskServuces.updatetask(taskid, tstatus).then((res)=>{
            console.log(res);
            const r = res.status;
            AddTaskServuces.viewalltasks().then((res)=>{
                if(res.status==200){
                    
                    document.getElementById(taskid).style.setProperty('text-decoration', 'line-through');
                }
                console.log("updated and showed");
            })
            
        })
        window.location.reload(true);
    }
    
       
    handledelete=(taskid)=>{
        console.log("ID is " + taskid);
        if(window.confirm('Are you sure, want to delete the selected Task?')){
            AddTaskServuces.deleteatask(taskid).this((res)=>{
                console.log(res);
            })
        }
        window.location.reload(true);
    }
    
    render(){   
        return(
            <div className="container">
                <h6  className="text text-start">&nbsp;&nbsp;&nbsp;My ToDo</h6>
                <form>
                    <div className="text text-start">
                       <select className=" selcls form-select-sm " id="sel" >
                           <option>TASK</option>
                           <option>BREAK</option>
                           <option>MEETING</option>
                           <option>QUERIES</option>
                           <option>IDLE TIME</option>
                           <option>Other Activities</option>
                       </select>
                    </div>
                 <div className="text text-start">
                    <img src={plus} type="button" onClick={this.addtask}/><button className="btn btn.light" type="button" onClick={this.addtask}>Add a Task</button>
                    {this.state.seen? <Adding toggle={this.addtask}/>:null}
                    </div>
                    <div>
                        <table className="table table-stripped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Task Name</th>
                
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.alltsks.map(
                                        t =>
                                            <tr>
                                                <td>{t.tstatus === "completed"?(<span>&#x2705;</span>):
                                                (<input type="radio" className="form-check-input" value={t} 
                                                    checked={this.state.task===t}
                                                    onClick={()=>{this.checkedtask(t.id, t.tstatus)}}  
                                                    />)}
                                                    </td>
                                                         <span style={{textDecoration:t.tstatus==="completed"?"line-through":""}} id={t.id}>{t.tname}</span>     
                                                        <td><button className="btn btn-success" 
                                                        onClick={()=>{this.handledelete(t.id)}} 
                                                   >delete</button></td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default AddTask;