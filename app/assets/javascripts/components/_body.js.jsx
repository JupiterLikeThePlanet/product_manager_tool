var Body = React.createClass({

    componentDidMount() {
        console.log('Component mounted');
        $.getJSON('/api/v1/products.json', (response) => { this.setState({ products: response, filterProducts: response }) });
        $.getJSON('/api/v1/properties.json', (response) => { this.setState({ properties: response }) });
        $.getJSON('/api/v1/productproperties.json', (response) => { this.setState({ productproperties: response }) });
    },
    
    updateErrorState(message) {
      this.setState({
          errors: message
      })  
    },

    getInitialState() {
        return {
            products: [],
            toggle: this.props.toggle,
            filterProducts: [],
            properties: [],
            productproperties: [],
            errors: []
        }
    },
    
    handleFilter(updatedList) {
        
        this.setState({
            filterProducts: updatedList
        });
    },

    handleSubmit(product) {
        console.log("New Product Saved: " + product);
        var newState = this.state.products.concat(product);
        this.setState({ products: newState })
        
    },

    handleDelete(id) {
        $.ajax({
            url: `/api/v1/products/${id}`,
            type: 'DELETE',
            success:() => {
                console.log("hitting the success, next is remove")
                this.removeProductClient(id);
            }
        });
    },
    

    removeProductClient(id) {
        var newProducts = this.state.products.filter((product) => {
            return product.id != id;
        });
        
        console.log("made it into remove Product")
        console.log("Look at newProducts: " + newProducts)

        this.setState({
            products: newProducts,
            filterProducts: newProducts
        });

        this.handleFilter(newProducts)

 
    },

    handleUpdate(product) {
        $.ajax({
            url: `/api/v1/products/${product.id}`,
            type: 'PUT',
            data: { product: product },
            success: () => {
                this.updateProducts(product)
                // this.handleFilter(product)
                console.log('you updated it!!!'); //this.updateProducts(product); // callback to swap objects
            }
        }
    )},

    updateProducts(product) {
        var products = this.state.products.filter((i) => { return i.id != product.id });
        products.push(product);

        this.setState({products: products });
    },


    render(){
        console.log(this.state.properties)
        let showNew = ""
        let showAll = ""
        if(this.props.toggle){
            showNew = {display: 'none' }
            showAll = {display: 'block' }
        }else{
            showNew = {display: 'block' }
            showAll = {display: 'none' }
        }
        
        return (
            <div>
                <div style={showNew}>
                    <NewProduct  handleSubmit={this.handleSubmit} />
                </div>

                <div style={showAll}>
                    <FilterList products={this.state.products} handleFilter={this.handleFilter} />
                    <Products  products={this.state.filterProducts} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
                </div>
            </div>
        )
    }
});
