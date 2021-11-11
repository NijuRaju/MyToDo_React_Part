import react, {Component} from "react";
import AddTaskServices from "../TaskServices/AddTaskServices";

export class Adding extends Component{
    
    constructor(props){
        super(props)
        this.state={
            tname:"",
            tdesc:"",
            tstatus:""
        }
        this.handleTNameChange = this.handleTNameChange.bind(this)
        
    }

    handleTNameChange=(event)=>{
        this.setState({
            tname:event.target.value
        })
    }
    
    handleClick=()=>{
        this.props.toggle();
    }
    handleSaveTask=(event)=>{
        console.log("success");
        let taskk={
            tname:this.state.tname,
           
        }
        console.log(JSON.stringify(taskk))
        AddTaskServices.savetask(taskk).then((res)=>{
            console.log(res);
        });
        
    }
    render(){
        return(
            <div > 
               <div className="modal_content" id="popuptask">
                    <span className="close" onClick={this.handleClick}> &times; </span>
                    <form>
                        <h3>Task Details!</h3>
                        <label>Task:<input type="text" name="taskname" defaultValue={this.state.tname} onChange={this.handleTNameChange} />
                         </label><br/>
                        
                        <input id="tsub" type="submit" value="Save Task" onClick={this.handleSaveTask} />
                    </form>
               </div>
            </div>
        );
    }
}

export default Adding;