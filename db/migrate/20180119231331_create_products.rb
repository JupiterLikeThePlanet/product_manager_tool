class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :upc
      t.datetime :available_on
      # t.references :productproperty
      t.references :property

      t.timestamps
    end
  end
end


def one_hour_later
  self.starts_at + 1.hours
end