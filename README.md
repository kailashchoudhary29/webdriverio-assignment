# Pre-Requisites:
NodeJS Latest

# SetUp:
1. Clone the repository in your local or have the project setup after extraction from zip
2. Run 'npm install' to install dependencies
3. Run 'npx wdio run ./wdio.conf.js' to complile and run test

# cloudray-ui-assessment

    Scenario: Verify Apply job layover is displayed on clicking Apply now button on searched job id
        Given Naviage to "https://www.geniehealthcare.com/#/home" screen
        When Click on Caregivers tab in the menu
        Then Genie Healthcare Jobs dashboard is opened in new tab
        When Note the first job details like JobId, State, City, Shift and Specialty
        When Click on first job Id
        Then Job Details screen for first job id is displayed
        Then verify JobId, State, City, Shift and Specialty ub Job details screen matches Jobs dashboard for given job id

Example for #14: Attached Screenshot1

Example for #17: Attached Screenshot2

# **Additional instructions**
1. Folder structure and sample files have been provided for reference, candidate are free to make modification and delete as required
2. The step definations has to be created as part of assessment
3. Report should contain screen shot for all Verification steps
