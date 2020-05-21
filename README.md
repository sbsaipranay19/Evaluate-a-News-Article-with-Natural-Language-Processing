# Evaluate a News Article with NLP

## Table of Contents
* [Project Details](#project-details)
* [How To Use it on your PC](#How-To-Use-it-on-your-PC)

## Project Details
* The project uses Aylien API to evaluate the url provided by the user and we could get polarity, subjectivity, polarity-confidence and subjectivity-confidence which is provided by the Aylien API itself. The major aim of this project is to use webpack.



## How To Use it on your PC

a)Download this repository else clone it onto your PC.

b)Get Your APi key and ID <a target="_blank" href="https://developer.aylien.com/signup">here</a>.

c)Add .env file to the repository and than add your ID and key.
API_ID=**************************
API_KEY=**************************
Replace '**' with your ID and key

d)Move to the cmd and type npm i. To install all the required dependencies for the project.

e)In the cmd type npm rum build-prod, this create a dist folder.

f)Next type npm run start, this starts the app and can open in your local host of port 8081.

g)For development works you can type npm run build-dev.

h)For testing whether the app is working right you can type npm run test. (Jest is used to test and on perfect working it shows pass).