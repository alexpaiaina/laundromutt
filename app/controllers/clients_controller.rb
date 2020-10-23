class ClientsController < ApplicationController
  before_action :set_client, only: [:show, :update, :destroy]
  # before_action :authorize_request, only: [:create, :update, :destroy]
  # GET /clients
  def index
    @clients = Client.all

    render json: @clients
  end

  # GET /clients/1
  def show
    render json: @client, include: :dog_name
  end

  # POST /clients
  def create
    @client = Client.new(client_params)
    @client.user = @c

    if @client.save
      render json: @client, status: :created
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /clients/1
  def update
    if @client.update(client_params)
      render json: @client
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clients/1
  def destroy
    @client.destroy
  end

  def add_dog
    @client = Client.find(params[:id])
    @dog = Dog.find(params[:dogs/:id])
    @client.dogs << @dog

    render json: @client, include: :dogs
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_client
      @client = Client.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def client_params
      params.require(:client).permit(:user_id, :name, :email, :phone, :dog_name)
    end
end
