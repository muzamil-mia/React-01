/node_modules
/.parcel-cache
/dist


#Redux Toolkit
- install @reduxjs/toolkit and react-redux
= Build our store 
= Connect our store to app
- create Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing (developer)
- Unit Testing --> means you test your react component in isolation a specific component we are testing
- Integration Testing --> testing the integration of components   testing the
  communication of components
- End to End Testing --> how the user will flow across the app
# Setting up testing in our app
 - install react testing library '
 - install jest
 - instal babel dependencies  --> find on jest website
 - configure babel           --> .babel.config.js
 ---> parcel uses babel behind the scenes now we are configuring our own babel so there will be conflict between parcels babel and our configured babel for that we will ovveride the parcels babel using ..parcelrc file
 - configure parcel config file to disable default babel transpiler - find on parcel.com -> get started -> javascript -> babel ->  --> and create .parcelrc file and paste the code there
 - jest configuration --> npx jest --init
 - install jsdom library -- npm install --save-dev jest-environment-jsdom
 - Install @bebel/preset-react -> to make jsx work in the test cases
 - In clude @bebel/preset into my babelconfig file