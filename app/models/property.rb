class Property < ApplicationRecord

  validates :name, length: {minimum: 0, maximum: 255, too_long: "%{count} characters is the maximum allowed"}, :allow_blank => true , uniqueness: true

  belongs_to :product
  has_one :productproperty , class_name: 'ProductProperty' #, class_name: 'Property::ProductProperty'

end
