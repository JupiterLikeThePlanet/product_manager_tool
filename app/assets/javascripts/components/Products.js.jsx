var Products = React.createClass({
    render: function(){

        products = this.props.products.map( function(product){

            return (
                <div key={product.id}>
                    <p> <strong>* Name: </strong> {product.name}</p>
                    <p> <strong>UPC: </strong> {product.upc}</p>
                    <p> <strong>Available On: </strong> {product.available_on}</p>
                    <p> <strong>Properties: </strong> ({product.properties.first.name}: {product.properties.first.productproperty.value}) </p>
                </div>
            );

        });

        return (
            <div>
                <h1>Products</h1>
                <div id="products">
                    {products}
                </div>
            </div>
        );


    }

});