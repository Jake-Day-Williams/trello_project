class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lists: this.props.lists };
    this.addList = this.addList.bind(this);
    this.baseUrl = `/boards/${this.props.id}/lists`;
 }

 addList(list) {
   this.setState({ lists: [list, ...this.state.lists]});
 }

 render() {
   let lists = this.state.lists.map( list => {
     return(<List key={`key-${list.id}`} {...list} />);
   });
   
   return(
     <div className="row">
       <NewList id={this.props.id} addList={this.addList} />
       <h2 className="col s12 center">Lists</h2>
        {lists}
     </div>
   );
  }
}