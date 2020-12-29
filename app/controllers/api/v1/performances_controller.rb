module Api
    module V1
        class PerformancesController < ApplicationController

            def index
                performances = Performance.all
                render jsonapi: performances
            end

            def show
                performance = Performance.find(params[:id])
                if performance
                    render jsonapi: performance
                else
                    render jsonapi_errors: { detail: performance.errors.messages }, status: 404
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
                performance = Performance.find(params[:id])
                if performance
                    if performance.update(performance_params)
                        render jsonapi: performance
                    else
                        render jsonapi_errors: { detail: performance.errors.messages }, status: 422
                    end
                else
                    render jsonapi_errors: { detail: performance.errors.messages }, status: 404
                end
            end


            def destroy
                performance = Performance.find(params[:id])
                if performance.destroy
                    head :no_content
                else
                    render jsonapi_errors: { detail: performance.errors.messages }, status: 422
                end
            end        

            private

            def performance_params
                params.require(:performance).permit(:description, :date, :artist_id, :venue_id)
            end

        end
    end
end