var Product = React.createClass({

    getInitialState() {
        return {editable: false}
    },

    handleDelete(id){
        this.props.handleDelete(id)
    },

    handleEdit() {
        if(this.state.editable) {
            var id = this.props.product.id;

            var name = this.refs.name.value;
            var upc = this.refs.upc.value;
            var available_on = this.refs.available_on.value;

            var product = {id: id , name: name , upc: upc , available_on: available_on };

            this.props.handleUpdate(product);

            console.log('in handleEdit', this.state.editable, name, upc, available_on);
        }

        this.setState({
            editable: !this.state.editable
        });
    },



    render() {
        var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.product.name} /> : <p>*{this.props.product.name}</p>;
        var upc = this.state.editable ? <input type='text' ref='upc' defaultValue={this.props.product.upc} />: <p>{this.props.product.upc}</p>;
        var available_on = this.state.editable ? <input type='text' ref='available_on' defaultValue={this.props.product.available_on} />: <p>{this.props.product.available_on}</p>;

        var productSelf = this

        return ( 
            <div>
                {name}
                {upc}
                {available_on}
                <span>
                    <button onClick={this.handleDelete.bind(this, this.props.product.id)} >Delete</button>
                    |
                    <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
                </span>
            </div> 
        ) 
    } 
});
