# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

product_id = 0
productproperty_id = 0
property_id = 0
ppUpdate = 0


# 10.times do
#   Product.create([{
#
#     name: Faker::Commerce.product_name,
#     upc: Faker::Code.ean,
#     available_on: Faker::Date.forward(23)
#
#   }])
#
# end
#
# 10.times do
#   Property.create([{
#     name: Faker::Lorem.words(1),
#     product_id: (product_id += 1),
#     productproperty_id: (productproperty_id += 1)
#   }])
# end
#
10.times do
  ProductProperty.create([{
       value: Faker::Hipster.sentences(1),
       property_id: (property_id += 1),
       product_id: (product_id += 1)
   }])

end
#
#
#   Property.all.each do |property|
#     property.update(:productproperty_id => (ppUdate += 1))
#   end
#



