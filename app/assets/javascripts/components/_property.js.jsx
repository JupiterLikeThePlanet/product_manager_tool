var Property = React.createClass({


    handleProperptyName(){
        var property_name = this.refs.property_name.value;
        console.log("property_name")
        console.log(property_name)
        
        this.props.uptakePropertyName(propertyName)
        
    },


    render: function() {
        return (
            <div>
                <h4>Property Name</h4>
                <form>

                    <input type="text" ref="property_name" placeholder="name" onChange={this.handleProperptyName} />

                </form>

            </div>
        )
    }
});