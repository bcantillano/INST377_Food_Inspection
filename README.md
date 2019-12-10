# INST377 Food Inspection

## Description
Restaurant food inspection heat mapping and tracking software built on JS/Leaflet. Map-based web app of Prince George's County. Users will be able to move around the map and determine “hot-spot” areas where there are a high concentration of food establishments that have failed food inspections. The goal of our project is to show users the sanitary conditions of restaurants in Prince George's County in a simple way. Users will be able to select specific areas and individual restaurants to determine whether it is compliant or not.

## Heroku Instance
> https://pgcounty-health.herokuapp.com/

## Target Browsers
Our target browsers are desktop-based web browsers; users with access to a KB/M. Users on iOS/Android may struggle with pinch-to-zoom feature with heatmapping and ability to select individual restaurants on click. Fully functional using Chrome, Firefox, Safari, and Edge. Opera/IE may encounter some issues.

## [User Manual](docs/user.md)

# Developer Manual
- How to install application and all dependencies?

The application requires node packet manager to install and use. Once installed, navigate to the build folder in the command line, run npm install, then npm start. The application will open on local host, port 3000.

- How to run our application on a server?

A server that uses node packet manager can run the application off the build folder with the npm start command.

- API end-points
  1. GET on '/api' provides the data that the application uses
  2. POST on '/' with 'url' data in the body passes the data to the server to use as a new resource of data.
  3. PUT on '/' resets the resource URL to the prince george's county food inspection API
  
- Known bugs/road-map for future development?

If a user changes the resource URL with a POST request, any user who uses the application will have to reset the resource URL
  
