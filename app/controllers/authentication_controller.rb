class AuthenticationController < ApplicationController
  before_action :authorize_request, only: :verify

  # POST /auth/login
  def login
    if login_params[:username] #april's way 1:30 bcrypt
      @user = User.find_by(username: login_params[:username])
    else
      @user = User.find_by(email: login_params[:email])
    end
    if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except('password_digest'),
        token: token
        }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end
  
  
  # GET /auth/verify
  def verify
    render json: @current_user.attributes.except('password_digest'), status: :ok
  end


  private

  def login_params
    params.require(:authentication).permit(:username, :password)
  end
end
