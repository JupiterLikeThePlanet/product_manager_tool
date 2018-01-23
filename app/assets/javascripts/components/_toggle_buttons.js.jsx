var ToggleButtons = React.createClass({

    doToggle(){

        this.props.handleToggle()

    },

    render() {

        if(this.props.toggle){
            var togButton = <button onClick={this.doToggle} > New Products </button>
        }else{
            var togButton = <button onClick={this.doToggle} > Show Products </button>
        }

        return (
            <div className="btn btn-primary">

                {togButton}
                <hr/>
            </div>
        )
    }

});

