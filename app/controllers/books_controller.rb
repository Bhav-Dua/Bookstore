class BooksController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: Book.all, status: :ok
    end

    def create
        book = Book.create!(book_params)
        render json: book, status: :created
    end

    private

    def book_params
        params.permit(:title, :author, :description, :genre, :isbn, :img, :published_year)
    end
end
