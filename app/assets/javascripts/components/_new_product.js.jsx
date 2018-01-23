var NewProduct = React.createClass({
    handleClick() {

        var name = this.refs.name.value;
        var upc = this.refs.upc.value;
        var available_on = this.refs.available_on.value;

        $.ajax({
            url: '/api/v1/products',
            type: 'POST',
            data: { product: { name: name, upc: upc, available_on: available_on } },
            // success: (response) => {
            //         console.log('it worked!', response);
            //     }
            success: (product) => {
                this.props.handleSubmit(product);
            }
        });

        console.log('The name value is ' + name + ', the upc value is ' + upc + ', the available_on date is ' + available_on);
    },

    render(){
        return (
            <div>
                <input ref='name' placeholder='Enter the name of the product' />
                <input ref='upc' placeholder='Enter a upc between 11 and 13 characters' />
                <input ref='available_on' placeholder='Enter date available on in format of yyyy/mm/dd' />
                <button onClick={this.handleClick} >Submit</button>
            </div>
        )
    }
})


//                <span style={{color: 'red'}}>{this.state.errors.name}</span>
