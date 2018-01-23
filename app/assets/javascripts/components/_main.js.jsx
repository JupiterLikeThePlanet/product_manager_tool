var Main = React.createClass({
    
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

