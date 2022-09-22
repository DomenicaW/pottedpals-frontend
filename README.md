# POTTED PALS 

### Project Description

Potted Pals is an app that lists popular plants and details for taking care of them. The goal is to help the user to plan what plants they want to grow themselves. The site will organize plants based on their type, as well as allow the user to sadd/ remove plants of their choice in a list titled "my garden".

<br />


## Application Information
#### Technologies Used: 
- Mongoose
- Express
- React
- Node
- ejs
- dotenv
- mongoose 
- method-override 
- express-session


#### Routes: 
|ACTION | URL    | HTTP VERB | DESCRIPTION
| ----------- | ----------- | ----------- |-----------
| Index | /plants | GET | Landing page, shows types of plants 
| New | /plants/register | GET       | Render form for user to register
| Create | /plants      | POST       | Create new user and log-in
| Show | /plants/housePlants    | GET        | Show list of house Plants 
| Show | /plants/succulents      | GET       | Show list of succulents
| Show | /plants/flowers      | GET       | Show list of flowers
| Show | /plants/housePlants/:id      | GET       | Show info about specific house plant
| Show | /plants/succulents/:id      | GET      | Show info about specific succulent 
| Show | /plants/flowers/:id      | GET      | Show info about specific flower
| Edit | /plants/(plantType)/:id/edit      | GET       | Render form to update specific plant info
| Update | /plants/(plantType)/:id/edit      | PUT       | Update specific plant info, than redirect
| Destroy | /plants/(plantType)/:id/edit      | DELETE       | Delete specific plant then redirect 



## Wireframes ([Series of mock pages](https://xd.adobe.com/view/6b3f18d2-faa2-4956-91e2-faf48f023d76-3e6c/))
![signup- v 3 - small](https://user-images.githubusercontent.com/20043034/191627328-05418dda-43e7-4e29-96b6-52ff4ab670aa.png)
![View Page - v 2](https://user-images.githubusercontent.com/20043034/191627400-546c782f-f600-445e-b8ec-8dfdf74161c5.png)



## User Stories
- As a user, I'd like a place to view some of the most popular plants and their categories.
- As a user, I want to sign up and create my own garden.
- As a user, I want to log in and out.
- As a user, I want an image of the plants and a small description.
- As a user, I’d like to add a favorite plant to each category.
- As a user, I’d like to delete and/or edit a plant from a category
- As a user, I’d like to refer to my garden for info such as: Watering schedule, Safe for Pets & Sun Exposure
- As a user, I’d like to be able to contact the creators of the site.

### Model 
plants = {
  name : string
  type: string
  careInstructions: string
  img: string
}

## MVP Goals 
- Users will be able to add plants to their garden.
- Users can view plant descriptions and instructions on how to care.
- Users can delete plants from their garden
- Use an API
- Contact us page connected to our individual 

## Stretch Goals
- Admin feature that can view, edit, delete all plants
- Create a ‘planter’ Div that can adjust its image based off the plant that is clicked on. (edited) 
