# WEB - Grid Responsive layout

## Submission Instructions [Please note]

## Maximum Marks - 8

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Should have a container with 5 child divs - 1 mark 
 ✅ Initial layout(the images in the initial layout should be as shown in the screenshot) is achieved, and other CSS as mentioned in the problem statement - 1 mark 
 ✅ Initial layout is achieved, and grid template is used to achieve the layout - 1 mark 
 ✅ Check the layout for screen sizes with max-width:900px - 1 mark 
 ✅ Check the layout for screen sizes with max-width:470px - 1 mark 
 ✅ Check the layout for screen sizes with max-width:350px - 1 mark 
 ✅ Check the background images for child divs when screen size max-width: 350px - 1 mark 

```

## Installation

- Download and unzip the boilerplate
- Code everything in the index.html file.

## Folder structure

- index.html
- index.css
- Please ignore all the files except for the above-mentioned one.

### You haven't taught Cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided to write your code (Mandatory)

### Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes. And also don't add extra classes and id's apart from the one mentioned in the problem statement and boiler plate.
- If you don't follow these rules you might not get any marks even if you do everything correctly.
- Strictly follow the template. Cross-check HTML Ids.

### Problem Statement:-

- Create this layout by using grid:-
  <div>
   <img src="https://i.imgur.com/7ljqBNb.png" width="100%">
  </div>
- A `div` with `id="container"` is provided in the boilerplate.
   - Create 5 divs inside it, and there is no need to add any text content inside them. Use an index.css file to achieve the required layout using grid-template-areas.
   - Now indicate these divs with the following notation strictly for grid areas while achieving grid layout.
      - The child `div` of the `div` with` id=container` should be indicated as `b1` `b2` `b3` `b4` `b5` respectively while defining grid areas.
      - Each child `div` should contain contain `background-image` URL as below
         - 1st div should have `background-image` URL as `https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*`
         - 2nd div should have `background-image` URL as `https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg`
         - 3rd div should have `background-image` URL as `https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445`
         - 4th div should have `background-image` URL as `https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*`
         - 5th div should have `background-image` URL as `https://image.petmd.com/files/styles/978x550/public/dog-allergies.jpg`   
      - Each div should have the image completely covered in such a way that the face dog face is clearly visible as shown in the above layout image so add the appropriate background-size also accordingly. The background images should not be interchanged but can kept as none based on the requirement.      
   
- The above layout is the default layout for any screen size if it is greater than 900px.

## Now with the help of media queries you need to achieve the following layout.(for all screen sizes<=900px)

- For screen sizes with `max-width: 900px`
   - The layout should be 
   <div>
   <img src="https://i.imgur.com/ZRLen7C.png" width="100%">
  </div>

 - For screen sizes with `max-width: 470px`
   - The layout should be
   <div>
   <img src="https://i.imgur.com/jbkgfjU.png" width="100%">
  </div>

- For screen sizes with `max-width: 350px`
   - The layout should be 
   <div>
   <img src="https://i.imgur.com/btBdZlW.png" width="100%">
  </div>




**_ Students who don't follow the rules their evaluation will not graded and this can lead to 0 scores even if the submission is correct. _**

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
