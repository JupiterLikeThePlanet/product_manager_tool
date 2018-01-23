var Products = React.createClass({

    handleDelete(id) {
        this.props.handleDelete(id);
    },

    onUpdate(product) {
        this.props.onUpdate(product);
    },

    render: function(){
        var deleteProductsSelf = this
        var updateProductsSelf = this

        products = this.props.products.map( function(product){


            return (
                <div>
                    <div key={product.id}>
                        <Product product={product}
                              handleDelete={deleteProductsSelf.handleDelete.bind(deleteProductsSelf, product.id)}
                              handleUpdate={updateProductsSelf.onUpdate} />
                    </div>
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

