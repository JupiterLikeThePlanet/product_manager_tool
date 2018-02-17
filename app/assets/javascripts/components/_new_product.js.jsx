var NewProduct = React.createClass({

    uptakePropertyName(propertyName){
        return propertyName
    },

    handleClick() {

        var name = this.refs.name.value;
        var upc = this.refs.upc.value;
        var available_on = this.refs.available_on.value;

        // var propertyName = uptakePropertyName()

        $.ajax({
            url: '/api/v1/products',
            type: 'POST',
            data: { product: { name: name, upc: upc, available_on: available_on } },

            success: (product) => {
                this.props.handleSubmit(product);
            },
            error: (response) => {
                if (response.responseJSON.errors.name) {
                    alert("Name " + response.responseJSON.errors.name)
                }

                if (response.responseJSON.errors.upc) {
                    alert("UPC " + response.responseJSON.errors.upc)
                }

                if (response.responseJSON.errors.available_on) {
                    alert("Available_on " + response.responseJSON.errors.available_on)
                }
                // console.log(response.responseJSON.errors)

            }
        });

        console.log('The name value is ' + name + ', the upc value is ' + upc + ', the available_on date is ' + available_on);
    },



    render(){
        return (
            <div className="form-group container">
                
                <h1>New Product</h1>
                <hr/>
                <h5>NAME</h5>
                <form>
                    <fieldset className="form-group">
                        <input ref='name' placeholder='product name' />
                    </fieldset>
                </form>

                <br/>
                <br/>

                <h5>UPC</h5>
                <form>
                    <fieldset className="form-group">
                        <input ref='upc' placeholder='upc #' />
                    </fieldset>
                </form>

                <br/>
                <br/>

                <h5>AVAILABLE ON</h5>
                <form>
                    <fieldset className="form-group">
                        <input ref='available_on' placeholder='yyyy/mm/dd' />
                    </fieldset>
                </form>

                <br/>
                <br/>

                <div id="indent_left">
                    <button onClick={this.handleClick} >Submit</button>
                </div>
            </div>
        )
    }
})


//                <span style={{color: 'red'}}>{this.state.errors.name}</span>
