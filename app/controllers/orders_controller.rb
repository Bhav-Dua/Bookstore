class OrdersController < ApplicationController

    def create
        if @current_user.orders.exists?(book_id: order_params[:book_id])
            render json: { error: 'User already has an order for this book' }, status: :unprocessable_entity
        else
            order = @current_user.orders.create!(order_params)
            render json: order, status: :created
        end
    end

    private

    def order_params
        params.permit(:book_id)
    end
end
