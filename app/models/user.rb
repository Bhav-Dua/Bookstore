class User < ApplicationRecord
    has_secure_password
    has_many :orders
    has_many :reviews
    has_many :books, through: :orders
    has_many :reviewed_books, through: :reviews, source: :book

    validates :username, presence: true, uniqueness: true
end
