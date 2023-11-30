class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :orders
  has_many :books
  has_many :reviews, serializer: ReviewWithBookTitleSerializer
end
