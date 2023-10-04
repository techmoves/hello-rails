require "test_helper"

class Api::GreetingsControllerTest < ActionDispatch::IntegrationTest
  test "should get random_greeting" do
    get api_greetings_random_greeting_url
    assert_response :success
  end
end
