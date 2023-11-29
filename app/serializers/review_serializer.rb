class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :username, :user_id, :book_id
end
