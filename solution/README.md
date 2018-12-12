# My solution 

# base-frontend-test

> A Vue.js project


## Requeriments

node version 11.3.0


## how to run

go into solution/base-frontend-test and run the following commands:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## how to ensure that future modifications of the code will not break the existing functionality

Run tests to ensure that any changes will not break the existing functionality.
The tests are written with mochajs.
``` bash
# run unit tests
npm run unit

# run all tests
npm test
```


## a description of your solution

I've developed my solution using Vuejs because the app is a SPA and it's very simple so I thought that it could be nice for this project.
I've used a main component (App.vue) to manage all the data of the app and put it in the children components (Graph.vue and Table.vue).
I've done a fetch of the readings data on the app init and when an option of the selector is chosen. I've limited the data to 100 elements for avoid to overcharge the chart.
When an option of the selector is chosen the data are fetched with a start date of 1 or 6 hours, a day or a month. 


## a justification for any framework/library choice

- I've used the library of chartjs for rendering the chart because is simple to use and has version for vue.
- I've used vue-resource for fetching the data of back.
- I've used vue-select to render the top selector.
- I've used vue-moment to format the dates because I had experience with it before.
- For styles I've used bootstrap 4 because I have experience with it and it's simple to use.


## any challenges you faced.

My main challenge was the time and the own framework (Vuejs). I have less experience with it so things like fetching data, using props and events for communication between components required some time.
On the other side the vue-chartjs library was a little confuse because it don't have a nice docs in it's repository.