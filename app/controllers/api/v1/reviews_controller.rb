module Api
    module V1
        class ReviewsController < ApplicationController
            before_action :authenticate_user!, only: [:create, :update, :destroy]

            def index
                reviews = Review.all
                render jsonapi: reviews
            end

            def show
                review = Review.find(params[:id])
                if review
                    render jsonapi: review
                else
                    error = {detail: 'Review with id ' + params[:id] + ' not found'}
                    render jsonapi_errors: error, status: 404
                end
            end

            def create
                review = Review.new(review_params)
                if review.save
                    render jsonapi: review
                else
                    render jsonapi_errors: { detail: review.errors.messages }, status: 422
                end
            end

            def update
                review = Review.find(params[:id])
                if review
                    if review.update(review_params)
                        render jsonapi: review
                    else
                        error = {detail: 'Review with id ' + params[:id] + ' cannot be updated'}
                        render jsonapi_errors: error, status: 422    
                    end
                else
                    error = {detail: 'Review with id ' + params[:id] + ' does not exist'}
                    render jsonapi_errors: error, status: 404
                end
            end

            def destroy
                review = Review.find(params[:id])
                if review.destroy
                    head :no_content
                else
                    render jsonapi_errors: {detail: 'Review cannot be deleted'}, status: 422
                end
            end

            private

            def review_params
                params.require(:review).permit(:title, :description, :score, :artist_id, :venue_id, :performance_id, :user_id)
            end
        end 
    end
end