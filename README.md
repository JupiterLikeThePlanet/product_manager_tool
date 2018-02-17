# Product Manager Tool

* Ruby version 2.4.1

* This tool demonstrates a Simple React CRUD App

### Installation

* In your terminal, type `bundle install`

### Database

* In your terminal, type `rake db:create`

* Then `rake db:migrate`

* And finally `rake db:seed` to fill in some dummy data.

### Launch

* In your terminal, type `rails s`

* In your browser, go to `http://localhost:3000/`

# Progress

### Simple React CRUD app current functionality

* Model creation and validations [Check the rails console for property and product property models]
    - Note: ProductProperty must be created as `ProductProperty.create(:value => value, :product_id => id, :property_id:_)`, in order to access as such `Product.first.properties.first.productproperty` and not be `nil`
* New Products can be added on localhost (without Property or Product Property), edited, and deleted.
* New Products, Updated Product, and Delete Products are seen in real time.
* New Product validation errors are alerted when arise
* Search Functionality Works and is Dynamic

### Soon to Add
* Property and Product Property attributes will be viewable with Product
* Property and Product Property attributes while currently can be created in console, will soon be able to be created on localhost.
* Property and Product Property Components will be added
* DateTime stamps will be altered to a more conventional format










