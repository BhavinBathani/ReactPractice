const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ 
    user : {
      username : "bhavin bathani",
      userlocation : "pune",
      usercontact : "9898419568",
      useredu : "MCA",
      userexp : "6 years",
      mymessage: 'Hello From bhavin from server side'
    }
  }
);
});

app.listen(port, () => console.log(`Listening on port ${port}`));