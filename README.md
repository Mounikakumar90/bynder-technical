# bynder-technical
Bynder-SDET technical challenge

This repo contains automation code for Bynder login & logout Scenarios & API testing for movieDB

The tool used is cypress tool, Java script language and Cypress test Runner, Mocha framework is used.
for reporting Mochawesome is integrated which is integrated with dependencies.

All tests are located under `cypress` folder - Under integration the tests(Specs) are written. 1. Bynder-portal test 2. Movie- DB API test

In case login-negative tests:
Bynder portal gets locked out due to exceeding number attempts when run repeatedyly. After sometime the acconut gets unlocked and the test can be run. 
For API testing:
rate-the movie: The POST operation is not being allowed for my API authentication Key so able to write tests for Unauthorised code only


The reports generated are found under Reports folder.

To run this project locally use command - npx cypress run 

This project runs on docker container run this command - docker run -it -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:8.4.1 run
if you are running this on windows machines then instead of $PWD use absolute path of project location in above command

This repo is also has the CI setup using the github actions.

I have also added the (Gherkin feature file)[https://github.com/Mounikakumar90/bynder-technical/blob/main/Bynder%20Portal%20Feature%20file.docx] to this repo.


![image](https://user-images.githubusercontent.com/17241493/135956997-57ee3e02-4e3d-418f-97ff-941e816db4b3.png)
![image](https://user-images.githubusercontent.com/17241493/135957291-e2f8026c-0712-4324-b3f0-83654f83e41f.png)

