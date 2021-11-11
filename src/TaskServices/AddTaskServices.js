import axios from "axios";

class TaskServices{
    savetask(task){
        return axios.post("http://localhost:8080/save", task);
    }
    viewalltasks(){
        return axios.get("http://localhost:8080/getall");
    }

    updatetask(task,tstatus){
        return axios.post("http://localhost:8080/update/"+task+"/"+tstatus);
    }

    deleteatask(task){
        return axios.get("http://localhost:8080/delete/" + task);
    }
}

export default new TaskServices();