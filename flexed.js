const breakPoint = 768; //mobile breakpoint
const classPrefix = '_'; //prefix for classed used to define columns

const mediaQuery = window.matchMedia("screen and (min-width: "+breakPoint+"px)"); //define you media query
mediaQuery.addListener(flexUpdate); //add an event listener so the layout updates as the width changes

function flexUpdate(){

    //get a list of all nodes which have our custom class and apply a foreach on the list
    document.querySelectorAll('[class*=' + classPrefix + ']').forEach(element => {

        // for each element, split the classes list into an array
        element.classList.value.split(" ").forEach(cl => {

            //get classes that start with the specified classPrefix
            if (cl.startsWith(classPrefix)) {

                //get the number specified in the class name
                var parts = cl.replace(classPrefix, "");
                if(mediaQuery.matches){

                    // if the width is greater than (because the media query specifies min width) the specified breakpoint then set the flex property
                    element.style.flex = parseInt(parts) / 10
                    element.style.display = "flex"; //this is needed for nested elements
                }
                else{
                    element.style.flex = "100%";
                    element.style.display = "block";
                }
            }
        });
    });
}

flexUpdate();
