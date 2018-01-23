class Api::V1::ProductPropertiesController < Api::V1::BaseController
  def index
    respond_with ProductProperty.all
  end

  def create
    respond_with :api, :v1, ProductProperty.create(productproperty_params)
  end

  def destroy
    respond_with ProductProperty.destroy(params[:id])
  end

  def update
    productproperty = ProductProperty.find(params["id"])
    productproperty.update_attributes(productproperty_params)
    respond_with ProductProperty, json: productproperty
  end

  private

  def productproperty_params
    params.require(:productproperty).permit(:value)
  end

end
