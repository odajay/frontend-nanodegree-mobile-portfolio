## Website Performance Optimization portfolio project

This is my attempt at optimizing the the two pages of the pizza store.

### Part 1: Optimize PageSpeed Insights score for index.html

1. I globally inlined the CSS, font call included
2. Compressed images
3. I concatenated and minified when possible
4. Added async to JavaScript call when necessary
5. I used Grunt and Ngrok, following [this tutorial](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/) in order to automatise my actions.

### Part 2: Optimize Frames per Second in pizza.html

1. I used getElementById and getElementsByClassName as it is a best practice for speed
2. I encapsulated the existing function in requestAnimationFrame()
3. As some value don't change during the main loop, I took them off it then stored them in variables
4. I used transform style for the animations
