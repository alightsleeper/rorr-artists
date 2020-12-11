module Api
    module V1
        class VenuesController < ApplicationController
            def index
                venues = Venue.all
                render jsonapi: venues
            end

            def show
                venue = Venue.find(params[:id])
                if venue
                    render jsonapi: venue
                else
                    error = {detail: 'Venue with id ' + params[:id] + ' not found'}
                    render jsonapi_errors: error, status: 404
                end
            end

            def create
                venue = Venue.new(venue_params)
                if venue.save
                    render jsonapi: venue
                else
                    render jsonapi_errors: { detail: venue.errors.messages }, status: 422
                end
            end

            def update
                venue = Venue.find(params[:id])
                if venue
                    if venue.update(venue_params)
                        render jsonapi: venue
                    else
                        error = {detail: 'Venue with id ' + params[:id] + ' cannot be updated'}
                        render jsonapi_errors: error, status: 422    
                    end
                else
                    error = {detail: 'Venue with id ' + params[:id] + ' does not exist'}
                    render jsonapi_errors: error, status: 404
                end
            end

            def destroy
                venue = Venue.find(params[:id])
                if venue
                    if venue.destroy
                        head :no_content
                    else
                        error = {detail: 'Venue with id ' + params[:id] + ' cannot be deleted'}
                        render jsonapi_errors: error, status: 422    
                    end
                else
                    error = {detail: 'Venue with id ' + params[:id] + ' does not exist'}
                    render jsonapi_errors: error, status: 404
                end
            end

            private

            def venue_params
                params.require(:venue).permit(:name, :image_url)
            end
        
        end
    end
end
