

routes:
1. home should not be a route, memories is already executing the same task (rendering memories onto the page). memories route should turn into the "home" route where memories will be displayed via attatching memorieslist component to home. 
2. the new memory form can be a route, but its component could also be ontop of the memories list with a click event as a way to expland/pop that form out? for visual presentation
3. hypothetical new route : a dynamic route that utilizes tags that are uploaded in the memory object, so the route would be something like "/home/${selectedTag}" which will filter the memories shown in home route based on which tag is clicked

functionality: 
1. logout functionality ? which resets the user back to the landing page and resets user state to the initial state value via redux. 
2. figure out how to implement music player via mui ???????