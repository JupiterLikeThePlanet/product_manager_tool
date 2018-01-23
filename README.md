# Product Manager Tool

* Ruby version 2.4.1

## Installation

* In your terminal, type `bundle install`

## Database

* In your terminal, type `rake db:create`

* Then `rake db:migrate`

* And finally `rake db:seed` to fill in some dummy data.

## Launch

* In your terminal, type `rails s`

* In your browser, go to `http://localhost:3000/`

# Progress

### Completed

* model creation and validations [Check the rails console for property and product property models]
    - Note: ProductProperty must be created as `ProductProperty.create(:value => value, :product_id => id, :property_id:_)`, in order to access as such `Product.first.properties.first.productproperty` and not be `nil`
* New Products can be added on localhost (without Property or Product Property), edited, and deleted.
* New Products, Updated Product, and Delete Products are seen in real time.
* New Product validation errors are alerted when arise
* Search Functionality Works and is Dynamic

### Incomplete
* Property and Product Property attributes are not viewable with Product
* Property and Product Property attributes can not be created on localhost, but can in console.
* Cannot add new Property and Product Property Components










