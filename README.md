# Documentation

## Description
This project build on top of the requirement of burning bros requirement, which can be found [here](https://dabivn.notion.site/Coding-Project-Infinite-Scrolling-and-Searchable-Product-List-e269e607507d4e43ac0c50603f74897b) .

#### To sum up, it contains 2 main feature:
* Display product
  * Each time the user scrolls to the end of the list, fetch the next 20 products.
  * Display the list of products with relevant information (e.g., name, price, image).
* Search product
  * Implement an input for searching product name.
    Whenever user typing, fetch data and update the product list.
  * Products data should be deserialized after fetched from api.

API: [open link](https://dummyjson.com/docs/products)
***
## How to start the project
### Pre-requirement:
* NodeJS: 18.6.0 (or higher)
### Steps:
1. Install the package using `npm install`

2. Start the app locally using `npm start`

3. Open [localhost](http://localhost:3006) to view it in the browser. 
***
## Technical Note:
### 1. Library included
| Library                         | version | Description                                        |
|---------------------------------|---------|----------------------------------------------------|
| material-ui                     | 5.15.6 | UI component library                               |
| redux                           | 5.0.1 | State management                                   |
| react-infinite-scroll-component | 6.1.0 | Should allow multiple lines input. Default "false" |
| bootstrap                       | 5.3.2 | bootstrap                                          |
| react-image-gallery             | 1.2.4 | Image gallary handle                               |
| react-app-rewired               | 2.2.1 | Start react app with override config opionÏ        |
| cypress                             |13.6.3  | Supporting E2E, integration testing                |

### 2. Test Run
* #### How to execute unit test:
1. Install the package using `npm install`

2. Start testing using `npm test`

* #### unit test adding:
Please following the folder structure below

```
root
  └───src
  │    └───test
  │      └───...
   ...
```

* #### cypress:
Currently, cypress is not fully config.
  * open cypress UI using `npm cypress:open`
  
### 3. Components
* #### ProductList
  This component responsible to render list of products.
  
* #### ProductItem

    This component responsible to render products information (etc: name, price .).

*Table of definitions*

| props                    | tpye       | description         |
|--------------------------|------------|---------------------|
| product                  | Product    | product information |
| testId                   | TestIdEnum | Testing purpose     |

### 4. Environment

| Variable                        | DEV                       | OTHER |
|---------------------------------|---------------------------|-------|
| REACT_APP_USING_MOCK                     | false                     | TBD   |
| REACT_APP_BASE_URL                           | https://localhost:3006    | TBD   |
| REACT_APP_PORT | 3006                          | TBD   |
| REACT_APP_PRODUCT_SERVICE | https://dummyjson.com/products | TBD   |
