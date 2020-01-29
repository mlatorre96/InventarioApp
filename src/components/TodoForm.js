import React from 'react';   

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            Equipo:'',
            Modelo:'',
            ID:'',
            CPU:'',
            RAM:'',
            HDD:''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            Equipo:'',
            Modelo:'',
            ID:'',
            CPU:'',
            RAM:'',
            HDD:''
        });   
    }
    
    render () {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                          type="text"
                          name="Equipo" 
                          onChange={this.handleInput}
                          value={this.state.Equipo}
                          className="form control"
                          placeholder="Equipo"
                        />  
                    </div>
                    <div className="form-group">
                        <input
                          type="text"
                          name="Modelo" 
                          className="form control"
                          value={this.state.Modelo}
                          onChange={this.handleInput}
                          placeholder="Modelo"
                        />  
                    </div>
                    <div className="form-group">
                        <input
                          type="text"
                          name="ID" 
                          className="form control"
                          value={this.state.ID}
                          onChange={this.handleInput}
                          placeholder="ID"
                        />  
                    </div>
                    <div className="form-group">
                        <input
                          type="text"
                          name="CPU" 
                          className="form control"
                          value={this.state.CPU}
                          onChange={this.handleInput}
                          placeholder="CPU"
                        />  
                    </div>
                    <div className="form-group">
                        <input
                          type="text"
                          name="RAM" 
                          className="form control"
                          value={this.state.RAM}
                          onChange={this.handleInput}
                          placeholder="RAM"
                        />  
                    </div>
                    <div className="form-group">
                        <input
                          type="text"
                          name="HDD" 
                          className="form control"
                          value={this.state.HDD}
                          onChange={this.handleInput}
                          placeholder="HDD"
                        />  
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                </form>
            </div>
        )
    }
}


export default TodoForm;