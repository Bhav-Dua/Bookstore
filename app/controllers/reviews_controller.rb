class ReviewsController < ApplicationController
    
    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = @current_user.reviews.find(params[:id])
        review.update!(review_params)
        render json: review, status: :ok
    end

    def destroy
        review = @current_user.reviews.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:content, :rating, :book_id)
    end
end
