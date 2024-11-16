## Example 
```code
const nayan = require('imran-ck-project');

nayan.alldown('url')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error downloading:', error);
  });
```
