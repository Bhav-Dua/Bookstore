class OrdersController < ApplicationController

    def create
        order = @current_user.orders.create!(order_params)
        render json: order
    end

    private

    def order_params
        params.permit(:book_id)
    end
end
