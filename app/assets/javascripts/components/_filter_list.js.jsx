var FilterList = React.createClass({
    
    filterList(event){
        var updatedList = this.props.products;
        
        updatedList = updatedList.filter(function(product){

            return (product.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1)
            
        });
        
        this.props.handleFilter(updatedList);

    },

    render: function(){
        
        return (
            <div className="filter-list">
                <form>
                    <fieldset className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
                    </fieldset>
                </form>
            </div>
        );
    }
});


