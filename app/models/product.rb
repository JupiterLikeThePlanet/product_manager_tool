class Product < ApplicationRecord
  validates :name, uniqueness: {:message => "already taken"}
  validates :name, length: {minimum: 1, maximum: 1024, too_long: "%{count} characters is the maximum allowed", too_short: "%{count} characters is fewer than allowed"}

  validates_numericality_of :upc, on: :create #, message: "UPC must be a number"
  validates :upc, length: {:minimum => 11, :maximum => 13, too_long: "%{count} characters is the maximum allowed", too_short: "%{count} characters is fewer than allowed"}

  validates_datetime :available_on, :after => :one_day_later #:one_hour_later #, message: "Date must be at least one hour later"
    #:now, #:on_or_after => :one_hour_later,


  has_many :properties
  has_one :productproperty, through: :properties , class_name: 'Property::ProductProperty'

  accepts_nested_attributes_for :properties, allow_destroy: true
  # accepts_nested_attributes_for :productproperties, allow_destroy: true

  # searchkick text_start: [‘name’]


  def one_day_later
    # Date.tomorrow()
    Date.current.in_time_zone
  end

  def one_minute_later
    # Time.now.in_time_zone
    Time.now.in_time_zone + 1
  end


end
