var AllItems = React.createClass({

	handleDelete(id){
		$.ajax({
			url: 'api/v1/items/'+id,
			type: 'DELETE',
			success: () =>{				
				this.props.handleDeleteItem(id);
				alert("Item Deleted Successfully")
			}
		});
	},
	render() {
		var items = this.props.items.map((item)=>{
			return(
				<div key={item.id}>
					<h3> {item.name} </h3>
					<p> {item.description} </p>
					<button onClick={this.handleDelete.bind(this,item.id)}>Delete</button><hr/>
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