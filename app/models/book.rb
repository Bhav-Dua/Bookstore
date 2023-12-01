class Book < ApplicationRecord
    has_many :orders, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :users, through: :orders

    validates_presence_of :title, :author, :genre, :isbn, :img, :published_year
    validates :published_year, numericality: { greater_than_or_equal_to: 1600, less_than_or_equal_to: Date.today.year, message: "Must be between 1600 and the current year" }
end
