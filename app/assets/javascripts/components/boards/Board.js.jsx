class Board extends React.Component {
  constructor(props) {
    super(props)
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.showBoard = this.showBoard.bind(this);
    this.state = { edit: false };
  }
  
  
  showBoard() {
    window.location.href = `/boards/${this.props.id}/lists`;
  }
  


  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }
  
  
  updateBoard() {
    let board = { name: this.refs.name.value, description: this.refs.description.value }
   this.toggleEdit();
    this.props.updateBoard(this.props.id, board);
  }

  
  
  show() {
    return(
      <div className="col s12 m4">
        <div className="card yellow">
          <div className="card-content black-text">
            <span className="card-title">{this.props.name}</span>
            <p>{this.props.description}</p>
          </div>
          
          <div className="card-action">
            <button 
              onClick={ () => this.props.delete(this.props.id)}
              className="btn red">Delete
            </button>
            
            <button onClick={this.toggleEdit} className="btn blue">Edit</button>
            
            <button onClick={this.showBoard} className="btn">Show</button>
          </div>
        </div>
      </div>
    );
  }
  
  
  edit() {
    return(
      <div className="col s12 m4">
        <div className="card yellow darken-2">
          <input
            placeholder={this.props.name}
            defaultValue={this.props.name}
            ref="name"
            required={true}
          />
          <input
            placeholder={this.props.description}
            defaultValue={this.props.description}
            ref="description"
          />
          <div className="card-action">
            <button
              onClick={this.toggleEdit}
              className="btn blue">
              Cancel
            </button>
            <button
              onClick={this.updateBoard}
              className="btn">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  render() { 
    if (this.state.edit)
      return this.edit();
    else
      return this.show();
  }
}