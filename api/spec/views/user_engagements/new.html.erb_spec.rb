require 'rails_helper'

RSpec.describe "user_engagements/new", type: :view do
  before(:each) do
    assign(:user_engagement, UserEngagement.new(
      total_users: 1,
      active_users: 1,
      inactive_users: 1,
      month: "MyString",
      visits: 1,
      signups: 1,
      donations: 1
    ))
  end

  it "renders new user_engagement form" do
    render

    assert_select "form[action=?][method=?]", user_engagements_path, "post" do

      assert_select "input[name=?]", "user_engagement[total_users]"

      assert_select "input[name=?]", "user_engagement[active_users]"

      assert_select "input[name=?]", "user_engagement[inactive_users]"

      assert_select "input[name=?]", "user_engagement[month]"

      assert_select "input[name=?]", "user_engagement[visits]"

      assert_select "input[name=?]", "user_engagement[signups]"

      assert_select "input[name=?]", "user_engagement[donations]"
    end
  end
end
