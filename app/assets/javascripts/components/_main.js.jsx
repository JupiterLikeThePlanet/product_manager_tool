var Main = React.createClass({

    // componentDidMount() {
    //     console.log('Component mounted');
    //     $.getJSON('/api/v1/products.json', (response) => { this.setState({ products: response }) });
    // },
    //
    
    getInitialState() {
        return { 
            toggle: false 
        }
    },
    
    handleToggle() {
        this.setState({
            toggle: !this.state.toggle
        })
    },


    render() {
        return (
            <div>
                <ToggleButtons handleToggle={this.handleToggle} toggle={this.state.toggle}/>
                <Body toggle={this.state.toggle}/>
            </div>
        )
    }
});


// <Products products=""/>