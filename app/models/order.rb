class Order < ApplicationRecord
  belongs_to :user
  belongs_to :book

  def username
    self.user.username
  end

  def book_title
    self.book.title
  end
end
