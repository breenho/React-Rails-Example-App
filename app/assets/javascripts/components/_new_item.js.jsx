var NewItem = React.createClass({	
	handleClick() {
		var name = this.refs.name.value;
		var description = this.refs.description.value;
		$.ajax({
			url: 'api/v1/items',
			type: 'post',
			data: {item:{name: name,description: description}},
			success: (item)=>{
				this.props.handleSubmit(item)
			}
		});
	},
	render() {
		return(
			<div>
				<input ref='name' placeholder="Enter a Name" />
				<input ref='description' placeholder="Enter a Description" />
				<button onClick={this.handleClick}> Submit </button>
			</div>
		)
	}
});