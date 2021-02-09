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
