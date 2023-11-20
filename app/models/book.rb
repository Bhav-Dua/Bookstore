class Book < ApplicationRecord
    has_many :orders
    has_many :reviews
    has_many :users, through: :orders
    has_many :reviewed_users, through: :reviews, source: :user

    validates_presence_of :title, :author, :genre, :isbn
end
