module Api
    module V1
        class ArtistsController < ApplicationController
            def index
                artists = Artist.all
                render jsonapi: artists
            end

            def show
                artist = Artist.find(params[:id])
                if artist
                    render jsonapi: artist
                else
                    error = {detail: 'Artist with id ' + params[:id] + ' not found'}
                    render jsonapi_errors: error, status: 404
                end
            end

            def create
                artist = Artist.new(artist_params)
                if artist.save
                    render jsonapi: artist
                else
                    render jsonapi_errors: { detail: artist.errors.messages }, status: 422
                end
            end

            def update
                artist = Artist.find(params[:id])
                if artist
                    if artist.update(artist_params)
                        render jsonapi: artist
                    else
                        error = {detail: 'Artist with id ' + params[:id] + ' cannot be updated'}
                        render jsonapi_errors: error, status: 422    
                    end
                else
                    error = {detail: 'Artist with id ' + params[:id] + ' does not exist'}
                    render jsonapi_errors: error, status: 404
                end
            end

            def destroy
                artist = Artist.find(params[:id])
                if artist
                    if artist.destroy
                        head :no_content
                    else
                        error = {detail: 'Artist with id ' + params[:id] + ' cannot be deleted'}
                        render jsonapi_errors: error, status: 422    
                    end
                else
                    error = {detail: 'Artist with id ' + params[:id] + ' does not exist'}
                    render jsonapi_errors: error, status: 404
                end
            end

            private

            def artist_params
                params.require(:artist).permit(:name, :image_url)
            end
        
        end
    end
end
