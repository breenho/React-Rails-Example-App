var Item = React.createClass({
	getInitialState() {
		return ({isClicked : false})
	},
	isClickedMethod() {
		if (this.state.isClicked){
			var id = this.props.item.id;
			var name = this.refs.name.value;
			var description = this.refs.description.value;
			var item = {id:id, name:name, description:description}
			this.props.handleUpdate(item);
		}
		this.setState({isClicked : !this.state.isClicked})
	},
	render() {
		var handleUpdate = this.props.handleUpdate;
		var name = this.state.isClicked ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>
		var description = this.state.isClicked ? <input type='text' ref='description' defaultValue = {this.props.item.description} /> : <p>{this.props.item.description}</p>
		var editButton = this.state.isClicked ? <button onClick={this.isClickedMethod}>Save</button> : <button onClick={this.isClickedMethod}>Edit</button>
		var deleteButton = this.state.isClicked ? <div><button onClick={this.isClickedMethod}>Cancel</button><hr/></div> : <div><button onClick={this.props.handleDelete}>Delete</button><hr/></div>
		return(
			<div>
				{name}
				{description}
				{editButton}
				{deleteButton}				
			</div>
		)
	}
});