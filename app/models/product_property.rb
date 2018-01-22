class ProductProperty < ApplicationRecord

  validates :value, length: {minimum: 0, maximum: 255, too_long: "%{count} characters is the maximum allowed"}


  belongs_to :property, dependent: :destroy
  belongs_to :product


end
