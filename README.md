## Overview

**laundromutt** An app that efficiently provides a way to catalog dogs that frequent the establishment.  A reward system for the pet owners are recorded based off the amount of washes met to get a free wash. Utilization of landromutt's dog washing facility will eventually led to a 1 free wash after 8 uses.

<br>

## MVP

_The **laundromutte**  Creating the ability to search, create, retrieve, update and delete customer's information in order to keep a tidy work environment and workflow.  This ability will free up the employees to attend to other essential tasks by freeing up the need to manually look up client's information through an archaic card file system.  

<br>

### Goals

- Build Crud Functionality
- Authentication for administrative uses
- Integrate databases and call data successfully on a consistent bases.
- An easy of use for both the admin and client side to see the information regarding dogs involved.  

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _useState, useEffect_                      |
|   React Router   | _Route, Link, _                            |
|    Gemfile       | _gem_jwt_                                  |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

Whimsical-https://whimsical.com/LDG8sZUQXZnPBfK9ENL6gt

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy


``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Layout
            |__Header.jsx
            |__Footer.jsx
|__ services/

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo_                |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The Gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
| Search       | functional |   n   |   y   | _Search results will bring up Gallery Card_                      |
| Admin/Login  | functional |   n   |   y   | _Authentication and verification of admin user_                  |
| Form         | functional |   n   |   y   | _Form responsible for create, update and delete_                 |
|    Footer    | functional |   n   |   n   | _The footer will show info contact information and an about page_|

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Client Form     |    L     |     4 hrs      |     ? hrs     |     TBD     |
| Create CRUD Actions |    H     |     5 hrs      |     ? hrs     |     TBD     |
| CSS                 |    H     |     8 hrs      |     ? hrs     |     TBD     |
| Components          |    H     |     12hrs      |     ? hrs     |     TBD     |
| Authentication      |    H     |     3 hrs      |     ? hrs     |     TBD     |
| Carousel            |    H     |     3 hrs      |     ? hrs     |     TBD     |
| Reward Display Sys  |    H     |     8 hrs      |     ? hrs     |     TBD     |
| Api                 |    H     |     5 hrs      |     ? hrs     |     TBD     |
| Deployment          |    H     |     2 hrs      |     ? hrs     |     TBD     |

| TOTAL               |          |     50 hrs     |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

> lucidcharts - https://lucid.app/invitations/accept/0ce30e7d-5eca-4c07-b821-39b2210ea56f

<br>

***

## Post-MVP

Include user login access so clothing can be arranged for pick up or delivery.
Users could also change profile pics for pet.
Leave any grievances in comment form of an event positive or negative they experienced so business may address accordingly.

## Code Showcase

Carousel/CSS/Hover

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
