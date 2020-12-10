module Api
    module V1
        class ReviewsController < ApplicationController
            
            def create
                review = Review.new(review_params)
                if review.save
                    render jsonapi: review
                else
                    render jsonapi_errors: { detail: review.errors.messages }, status: 422
                end
            end

            def destroy
                review = Review.find_by(params[:id])
                if review.destroy
                    head :no_content
                else
                    render jsonapi_errors: {detail: 'Review cannot be deleted'}, status: 422
                end
            end

            private

            def artist
                @artist = Artist.find(params[:artist_id])
            end

            def venue
                @venue = Venue.find(params[:venue_id])
            end

            def review_params
                params.require(:review).permit(:title, :description, :score, :artist_id, :venue_id)
            end
        end 
    end
end