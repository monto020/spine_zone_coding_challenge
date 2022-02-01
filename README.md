# Getting Started with SpineZone Challenge Slider App 

### To Setup project:
Precondition: User must have npm installed. 
1. clone from https://github.com/monto020/spine_zone_coding_challenge.git
2. checkout develop branch
3. run `npm install` command. 
4. run `npm start` command. 

### Project was tested usig Chrome developer tools 
### Considerations for this project:
Broke up screen into 3 parts. Header, Body, and Footer. This allows for reusability of components on different screens. The Header includes a title and an exit button. The footer includes a back and next button. The next button is disabled and will have different onClick behavior based on what's passed into that component. 

Reusablity was again the focus. Wherever possible, I made components general, with general props to be passed in as well. I did notice some mismatches in margins in the FIGMA file, also font of Open Sans, didn't look like the FIGMA file. In cases where I saw some differences, I went with what I thought would look better and more consistent. the next step would be to reach out to designers to see what was intended and investigate further though. 

For the buttons, and slider value I didn't see any expected behavior. So in this case, I output the clicks and slider value to console, was able to test the components this way. The desired behavior can be added.

I used a single observable to track whether or not the slider has had a value set. Once a value has been set in the slider, the next button will be active.

### Improvements to make: 
1. Check in with designers to see if mismatched margins/padding is intentional and update. 
2. Make use of theme provider, and use style objects instead of css file. 

