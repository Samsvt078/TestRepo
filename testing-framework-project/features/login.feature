Feature: OrangeHRM Login

  Scenario: Valid login
    Given I open the OrangeHRM demo site
    When I enter "Admin" in the username field
    And I enter "admin123" in the password field
    And I click on the login button
    Then I should be redirected to the dashboard