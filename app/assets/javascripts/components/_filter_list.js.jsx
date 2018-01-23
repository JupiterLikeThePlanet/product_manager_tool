// <%= react_component “SongsContainer”, { productsPath: products_path(:json), searchPath: search_path } %>


var FilterList = React.createClass({
    
    // componentDidMount(){
    //     var productNames = []
    //
    //     for (var name in this.state.products) {
    //         if (this.state.products.hasOwnProperty(name))
    //             var productNames = this.state.products.name
    //             console.log(productNames)
    //     }
    // }
    
    // getInitialState(){
    //     var list = []
    //     // for (var i = 0; i <= this.props.products.length; i++) {
    //     //
    //     //         list.push(this.props.products[i].name)
    //     // }
    //     this.props.products.map( function(product){
    //         list.push(product.name)
    //     })
    //     console.log("list")
    //     console.log(list)
    //
    //     return({
    //         list: list
    //     });
    // },

    // filterList: function(event){
    //     var updatedList = this.state.initialProducts;
    //     updatedList = updatedList.filter(function(product){
    //         return product.toLowerCase().search(
    //                 event.target.value.toLowerCase()) !== -1;
    //     });
    //
    //     this.setState({products: updatedList});
    // },

    //////sorta working///////////
    filterList(event){
        var updatedList = this.props.products;
        // console.log(updatedList)

        updatedList = updatedList.filter(function(product){
            // console.log(product.name)
            // return product.name.search(event.target.value.toLowerCase()) !== -1;
            return (product.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1)


        });

        // updatedList = updatedList.filter(function(product){
        //     return product.search(
        //             event.target.value.toLowerCase()) !== -1;
        // });
        console.log("updatedList in Filter in sorta working: ")
        console.log(updatedList)
        this.props.handleFilter(updatedList);

    },

    //////CLONE Work///////////
    // filterList(event){
    //     var updatedList = []
    //     var prods = this.props.products;
    //
    //     prods.map( function(product){
    //         updatedList.push(product.name)
    //     })
    //
    //     updatedList = updatedList.filter(function(product){
    //         // console.log('product in updatedList filter')
    //         // console.log(product)
    //         // return product.name.search(event.target.value.toLowerCase()) !== -1;
    //         return product.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    //
    //         // if (product.toLowerCase().search(event.target.value.toLowerCase()) !== -1) {
    //         //     updatedList.push(product)
    //         // }
    //
    //
    //
    //
    //     });
    //
    //     // updatedList = updatedList.filter(function(product){
    //     //     return product.search(
    //     //             event.target.value.toLowerCase()) !== -1;
    //     // });
    //     // console.log("updatedList in Filter: ")
    //     // console.log(updatedList)
    //     this.props.handleFilter(updatedList);
    //
    // },


    // getInitialState: function(){
    //     return {
    //         initialProducts: [
    //             "Apples",
    //             "Broccoli",
    //             "Chicken",
    //             "Duck",
    //             "Eggs",
    //             "Fish",
    //             "Granola",
    //             "Hash Browns"
    //         ],
    //         products: []
    //     }
    // },

    // componentWillMount: function(){
    //     this.setState({products: this.state.initialProducts})
    // },

    render: function(){
        // console.log("IN FILTER")
        // console.log(this.state.list)
        // var updatedList = this.props.products;
        // console.log(updateList)
        // console.log("updatedList")
        // console.log(updatedList)


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




// var List = React.createClass({
//     render: function(){
//         return (
//             <ul className="list-group">
//                 {
//                     this.props.products.map(function(product) {
//                         return <li className="list-group-item" data-category={product} key={product.id}>{product}</li>
//                     })
//                 }
//             </ul>
//         )
//     }
// });

