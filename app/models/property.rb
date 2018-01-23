class Property < ApplicationRecord

  validates :name, length: {minimum: 0, maximum: 255, too_long: "%{count} characters is the maximum allowed"}, :allow_blank => true , uniqueness: true

  belongs_to :product , dependent: :destroy
  has_one :productproperty , class_name: 'ProductProperty' #, class_name: 'Property::ProductProperty'

  # accepts_nested_attributes_for :productproperties, allow_destroy: true

end
