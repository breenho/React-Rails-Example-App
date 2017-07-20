var AllItems = React.createClass({
	getInitialState() {
		return {isClicked: false}
	},
	handleDelete(id){
		$.ajax({
			url: 'api/v1/items/'+id,
			type: 'DELETE',
			success: () =>{
				this.props.handleDeleteItem(id);
				alert("Item deleted successfully!!")
			}
		});
	},	
	isClickedMethod(item) {
		this.setState({isClicked :!this.state.isClicked});
	},
	render() {
		var handleUpdate = this.props.handleUpdate;
		var items = this.props.items.map((item)=>{
			return(
				<div key={item.id} className="item_class">
					<Item item = {item} handleUpdate = {handleUpdate} handleDelete={this.handleDelete.bind(this,item.id)}/>
				</div>
			)
		});
		return(
			<div>
				{items}
			</div>
		)
	}
});