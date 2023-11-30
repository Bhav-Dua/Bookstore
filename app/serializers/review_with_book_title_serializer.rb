class ReviewWithBookTitleSerializer < ActiveModel::Serializer
  attributes :content, :rating, :book_title
end
