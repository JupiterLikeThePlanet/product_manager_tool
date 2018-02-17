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
        // var date = this.props.product.available_on.toLocaleDateString()
        var yellow =  {color: 'yellow' }
        

        var name = this.state.editable ? <div className="margin_bottom"><br/> <span> <p className="update_p" style={yellow}> Product Name: </p> <input className="update_input" type='text' ref='name' defaultValue={this.props.product.name} /></span> <br/><br/></div> : <div><span><p style={yellow} className="inline_text">Product Name: </p> <p className="inline_text"> {this.props.product.name}</p></span></div>;
        var upc = this.state.editable ? <div className="margin_bottom"> <span> <p className="update_p" style={yellow}> UPC: </p> <input className="update_input" type='text' ref='upc' defaultValue={this.props.product.upc} /> </span> <br/><br/></div>: <div><span><p style={yellow} className="inline_text">UPC: </p> <p className="inline_text"> {this.props.product.upc}</p></span></div>;
        var available_on = this.state.editable ? <div className="margin_bottom"> <span> <p className="update_p" style={yellow}> Available On: </p> <input className="update_input" type='text' ref='available_on' defaultValue={this.props.product.available_on} /> </span> <br/><br/></div>: <div><span><p style={yellow} className="inline_text"> Available On: </p> <p className="inline_text">{this.props.product.available_on}</p></span></div>;

        var productSelf = this

        // const parts = dateTime.split(/[- :]/);
        // const wanted = `${parts[2]}/${parts[1]}/${parts[0]} ${parts[3]}:${parts[4]}`;

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
                <hr/>
            </div>

        ) 
    } 
});
