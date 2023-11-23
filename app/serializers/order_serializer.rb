class OrderSerializer < ActiveModel::Serializer
  attributes :username, :book_title, :book_id, :created_at
end
