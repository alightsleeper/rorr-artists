module Api
    module V1
        class PerformancesController < ApplicationController

            def index
                performances = Performance.all
                render jsonapi: performances
            end

            def show
                performance = Performance.find_by(params[:id])
                if performance
                    render jsonapi: performance
                else
                    error = {detail: 'Performance with id ' + params[:id] + ' not found'}
                    render jsonapi_errors: error, status: 404
                end
            end

            def create
                performance = Performance.new(performance_params)
                if performance.save
                    render jsonapi: performance
                else
                    render jsonapi_errors: { detail: performance.errors.messages }, status: 422
                end
            end

            def update
                performance = Performance.find_by(params[:id])
                if performance
                    if performance.update(performance_params)
                        render jsonapi: performance
                    else
                        error = {detail: 'Performance with id ' + params[:id] + ' cannot be updated'}
                        render jsonapi_errors: error, status: 422    
                    end
                else
                    error = {detail: 'Performance with id ' + params[:id] + ' does not exist'}
                    render jsonapi_errors: error, status: 404
                end
            end


            def destroy
                performance = Performance.find_by(params[:id])
                if performance.destroy
                    head :no_content
                else
                    render jsonapi_errors: {detail: 'Performance cannot be deleted'}, status: 422
                end
            end
            
            private

            def artist
                @artist = Artist.find(params[:artist_id])
            end

            def venue
                @venue = Venue.find(params[:venue_id])
            end

            def performance_params
                params.require(:performance).permit(:title, :description, :date, :artist_id, :venue_id)
            end

        end
    end
end