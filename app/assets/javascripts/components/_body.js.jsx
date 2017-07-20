var Body = React.createClass({
	getInitialState() {
		return { items : []}
	},
	componentDidMount() {
		$.getJSON('/api/v1/items.json', (response) => {this.setState({items: response})});
	},

	handleSubmit(item)	{
		var newState = this.state.items.concat(item)
		this.setState({items: newState})
	},
	handleDeleteItem(id) {
		var newItems = this.state.items.filter((item)=>{
			return item.id != id
		});
		this.setState({items:newItems})
	},
	afterItemUpdate(item) {
		var items = this.state.items.filter((i) => { return i.id != item.id }); 
		items.push(item); 
		this.setState({items: items });
	},

	handleUpdate(item) {
		$.ajax({
			url: '/api/v1/items/'+item.id,
			type: 'PUT',
			data: {item:{name:item.name, description:item.description}},
			success: (response) => {
				this.afterItemUpdate(item);
				alert("Item Updated Successfully");
			}
		});
	},
	render() {
		return(
		<div>
			<NewItem handleSubmit={this.handleSubmit}/>
			<AllItems items={this.state.items} handleUpdate={this.handleUpdate} handleDeleteItem={this.handleDeleteItem}/>
		</div>
		)
	}
});