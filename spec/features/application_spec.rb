require 'rails_helper'

feature 'submitting application' do
  scenario 'Submit an application when signed in' do
    User.create!(
      email: "testappsubmit@test",
      password: "test",
    )

    Animal.create!(
      spca_id: "123",
      name: "test animal",
      gender: "female",
      age: "4",
      weight: "5",
      image_url: "http://placekitten.com/200/300",
      story: "story",
    )

    visit root_path
    click_on "signin"
    fill_in :email, with: "testappsubmit@test"
    fill_in :password, with: "test"
    click_on "signin-button"
    # save_and_open_page
    click_on "adopt-me-button"
    fill_in :fullname, with: "Test Application"
    fill_in :housing, with: "own"
    fill_in :electronic_signature, with: "test"
    fill_in :date, with: "today"
    click_on "submit-app"

    expect(page).to have_content("Thank you! Your application has been submitted.")
  end

  scenario 'gets error message when when not signed in'

  scenario 'trying to submit application when not signed in, signing in, then submitting application'

  scenario 'trying to submit application when not registered, registering, then submitting application'

end
