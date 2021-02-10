1. 2021/02/08 issue: Routing doesn't work

const path = require('path');

app.get('/', function(req, res) {  
 res.sendFile(path.join(\_\_dirname + '/index.html'));  
});

2. Console Error  
   Unchecked runtime.lastError: The message port closed before a response was received.

chrome::extensions/ => remove extensions

3. stylesheet not loaded because of MIME-type

- add the code below in server.js  
  app.use(express.static(\_\_dirname + '/public'));
- make public > css > style.css  
   public > img > img.png
- include stylesheet in index.html
  <link rel="stylesheet" href="./css/style.css"> => no need to write public again since we did it in server.js

4.  css custom cursor not working

- body {cursor: url();} => body, html {cursor: url(), auto;}

5. position: absolute; => when I want the object to be moved freely

6. document.addEventListener('mousemove', () => {});

7. <div> => block  
   <span>=> inline

8. we can set elements globally, to const outside the function and we can change the properties of the const variables

9. how to put an element in the center?  
   top: 50%;  
   left: 50%;  
   transform: translate(-50%, -50%);

10. must add `px` to css  
    element.style.top = `${}px`;

11. Alt + arrow down or up: switch position of the row

12. Alt + click: set cursor to multiple rows

13. Ctrl + F2: change all occurrences

14. element.scrollIntoView({ behavior: 'smooth', block: center });

15. const x = element.getBoundingClientRect().x;
    const y = element.getBoundingClientRect().y;
    const top = element.getBoundingClientRect().top;
    const left = element.getBoundingClientRect().left;

    window.scrollTo(x, y);  
    window.scrollTo( {top: top, left: left, behavior: "smooth"} );
    window.scrollTo( {top: y, left:x, behavior: "smooth"} );

16. tab key doesn't indent on vscode
    disable the Tab Moves Focus -mode by pressing Ctrl + M

17. if the element is set to "display: none",  
    element.getBoundingClientRect(); doesn't work.  
    you should set it to "display: flex" before calling it.

18. Alt + Shift + arrow down or up: copy the line

19. Alt + Shift + drag: set cursor to multiple rows

20. F12 > Select an element > Console > $0 > $0.nodeChild  
    Every HTML elements are Node objects, and every Node objects are EventTargets. Thus every HTML elements can use the EventTarget's APIs.

21. display, top, left => bad for animation  
    display => will-change: opacity;  
    top, left (moving) => transform: translate( , );

22. element.getBoundingClientRect() doesn't work outside of the '.addEventListener'..???

23. element.style.transform = `translate(${x + 50}px, ${x + 50}px)`;
