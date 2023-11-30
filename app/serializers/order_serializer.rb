class OrderSerializer < ActiveModel::Serializer
  attributes :username, :book_title, :created_at
end
