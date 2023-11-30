class Book < ApplicationRecord
    has_many :orders
    has_many :reviews
    has_many :users, through: :orders

    validates_presence_of :title, :author, :genre, :isbn
end
