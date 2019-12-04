# INST377 Food Inspection
Ayodeji Adeleke, Byron Cantillano, Luke Gibson, Jonathan Land, Ken Lin, Emmanual Mekonnen
> Link to web application/instance

## Information Problem
There is currently no way for people to see what restaurants, food establishments, and areas are compliant and not compliant with Prince George's County Food Inspections. Our application will highlight areas of potential risk and show non-compliant food establishments in an intuitive way to users.

## Staheolders/Target Browsers
Stakeholders
- Prince George's County residents
- UMD students
- Local restaurant managers/owners
- United States Department of Health and Human Services (HHS)
- Prince George’s County Health Department

Target Browsers
- Chrome
- Firefox
- Edge
- Safari

## Data
The data we chose to work with comes from the Prince George's County Open Data Portal. We chose to use a dataset containing information on food inspections in Prince George's County. "The types of inspections included in this posting are comprehensive, monitoring, and complaint investigations." (Prince George's County)

## Solution
Our solution is a map-based web app of Prince George’s County. Users are able to move around the map and determine “hot-spot” areas where there are a high concentration of food establishments that have failed food inspections. Users will also be able to select specific areas and individual restaurants to determine whether it is compliant or not. We will be using fetch requests to gather the information from the database and append to our map.

The goal of our project is to show users the sanitary conditions of restaurants in Prince George's County in a simple way. 

## Technical System
For our project, we decided to use Leaflet, JS/JQuery/NodeJS (?), HTML and CSS. We chose Leaftlet for it's ease of use and ability to place overlays and map markers. 

## Results
Our application is a very beneficial tool to all Prince George's County residents to determine what restaurants are "safe" to dine at. This information could also be used for residents who live outside of PG County. The map is easy to navigate and users are able to select individual restaurants to determine its compliance status.

## Challenges
Some of the challenges we faced included determining which map application to use, gathering and storing data from PG County, and appending markers onto the Leaflet application.

## Future Plans
To continue to improve our application, we would plan to add a search function and more filters for users to find restaurants. We would also include A google map JavaScript API which would improve accessibility for Mobile users. Adding more data from the PG County Database and other disctricts to our map would be helpful as it could be a tool for users outside the PG area. There is always room for improvement therefore we are open to different styles for the look of our website.