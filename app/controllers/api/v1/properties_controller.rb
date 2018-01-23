class Api::V1::PropertiesController < Api::V1::BaseController
  def index
    respond_with Property.all
  end

  def create
    respond_with :api, :v1, Property.create(product_params)
  end

  def destroy
    respond_with Property.destroy(params[:id])
  end

  def update
    property = Property.find(params["id"])
    property.update_attributes(property_params)
    respond_with Property, json: property
  end

  private

  def property_params
    params.require(:property).permit(:name)
  end

end
