## Website Performance Optimization portfolio project

This is my attempt at optimizing the the two pages index.html and views/pizza.html from the Udacity Pizza Store. 

### Run the website
1. Download or `git clone` the current GitHub repository in your local work folder
2. Run the files index.html and views/pizza.html in an updated modern browser.
3. You can additionaly access to a [Github hosted live version of the website here](http://odajay.com/frontend-nanodegree-mobile-portfolio/).

### Part 1: Optimize PageSpeed Insights score for index.html

1. Inlined the CSS
2. Loaded fonts via JavaScript using the [web font loader](https://css-tricks.com/loading-web-fonts-with-the-web-font-loader/).
2. Compressed images
3. Concatenated and minified when possible
4. Added async to JavaScript call when necessary
5. Used Grunt and Ngrok, following [this tutorial](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/) in order to automatize my actions.

### Part 2: Optimize Frames per Second in pizza.html

1. Used getElementById and getElementsByClassName as it is a best practice for speed
2. Encapsulated the existing function in requestAnimationFrame()
3. As some value don't change during the main loop, I took them off it then stored them in variables
4. Used transform style for the animations
