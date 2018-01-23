var ToggleButtons = React.createClass({

    doToggle(){
        this.props.handleToggle()
    },

    render() {
        //var togButton = this.props.toggle ? <button onClick={this.doToggle} /> New Products </button> : <button onClick={this.doToggle} /> Show Products </button>;
        if(this.props.toggle){
            var togButton = <button onClick={this.doToggle} > New Products </button>
        }else{
            var togButton = <button onClick={this.doToggle} > Show Products </button>
        }

        return (
            <div>

                {togButton}

            </div>
        )
    }

});



// if(this.props.toggle){
//     <button onClick={this.doToggle} /> New Products </button>
// }else{
//     <button onClick={this.doToggle} /> Show Products </button>
// }

//{togButton}