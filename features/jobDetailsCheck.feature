
Feature: Verify Job details screen matches Jobs dashboard for a given job ID

    Scenario: Verify Apply job layover is displayed on clicking Apply now button on searched job id
        Given User Naviage to geniehealthcare home page
        When User Click on "Caregivers" tab in the menu
        Then User verify "Genie Healthcare Jobs" dashboard is opened in new tab
        When User Click on first job Id
        Then User able to see Job Details screen for first job id is displayed
        Then User verify JobId, State, City, Shift and Specialty Job details screen matches Jobs dashboard for given job id