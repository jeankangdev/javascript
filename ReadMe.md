1. 2021/02/08 issue: Routing doesn't work

const path = require('path');

app.get('/', function(req, res) {  
 res.sendFile(path.join(\_\_dirname + '/index.html'));  
});

2. Console Error  
   Unchecked runtime.lastError: The message port closed before a response was received.

chrome::extensions/ => remove extensions
