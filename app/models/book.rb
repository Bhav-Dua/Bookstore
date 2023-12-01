class Book < ApplicationRecord
    has_many :orders, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :users, through: :orders

    validates_presence_of :title, :author, :genre, :isbn, :img, :published_year
end
