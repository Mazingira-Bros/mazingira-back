class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create, :

  def create
    user = find_user(params[:email], params[:password])
    if user
      session[:user_id] = user.id
      render json: { user: user, role: user.class.name }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def destroy
    session.delete(:user_id)
    render json: { message: 'Session destroyed' }, status: :ok
  end


  private

  def find_user(email, password)
    donor = Donor.find_by(email: email)
    return donor if donor && donor.authenticate(password)

    org = Organisation.find_by(email: email)
    return org if org && org.authenticate(password)

    admin = Admin.find_by(email: email)
    return admin if admin && admin.authenticate(password)

    nil
  end
end
