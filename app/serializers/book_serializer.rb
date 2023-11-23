class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :description, :genre, :isbn, :img, :published_year

  has_many :reviews
end
