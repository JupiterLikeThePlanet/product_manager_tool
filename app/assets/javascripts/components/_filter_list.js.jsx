var FilterList = React.createClass({
    
    filterList(event){
        var updatedList = this.props.products;
        
        updatedList = updatedList.filter(function(product){

            return (product.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1)
            
        });
        
        this.props.handleFilter(updatedList);

    },

    render: function(){

        // var align = {text-align: 'center';
        
        return (
            <div id="" className="filter-list">

                <input type="text" id="search_filter" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>

            </div>
        );
    }
});


