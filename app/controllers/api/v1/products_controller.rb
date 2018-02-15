class Api::V1::ProductsController < Api::V1::BaseController
  def index
    respond_with Product.all
  end

  def create

    @product = Product.new(product_params)
    # @property = Product.properties.new( :name => "")
    if @product.save
      flash[:notice] = "Product was created successfully."
      respond_with :api, :v1, @product #Product.create(product_params)
    else
      respond_with(@product.errors, :status => :unprocessable_entity)
    end

  end

  def destroy
    respond_with Product.destroy(params[:id])
  end

  def update
    product = Product.find(params["id"])
    product.update_attributes(product_params)
    respond_with product, json: product
  end

  private

  def product_params
    params.require(:product).permit(:id, :name, :upc, :available_on)

    #, property_attributes([:name]))
    # , productproperty_attributes(:value))

  end

end
