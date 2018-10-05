const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const sampleInfo = { 
  Countries : {
    India : {
      Gujarat : Array(
        "Ahmedabad", "Vadodara", "Rajkot", "Surat"
      ),
      Rajasthan : Array(
        "Jodhpur", "Udaipur", "Pushkar"
      ),
      Maharashtra : Array(
        "Mumbai", "Pune", "Nashik"
      )
    },
    USA : {
      California : Array(
        "SanFrancisco", "SantaRosa", "SanDiego"
      ),
      Nevada : Array
			(
				"Wellington", "LasVegas", "Henderson"
      ),
      Ohio : Array
			(
				"Dayton", "Lancaster", "Canton"
			),
    },
    UK : {
      London : Array
			(
				"Kingston", "Watford", "Wembley"
			),
			Birmingham : Array
			(
				"Hollywood", "Dudely", "Rubery"
			),
			Manchester : Array
			(
				"Salford", "Prestwich", "Swinton"
			)
    }
  }
};

app.get('/api/country', (req, res) => {
  res.send(Object.keys(sampleInfo.Countries));
});

app.get('/api/:cid/state/', (req, res) => {
  res.send(Object.keys(sampleInfo.Countries[req.params.cid]));
});

app.get('/api/:cid/:sid/city', (req, res) => {
  res.send(sampleInfo.Countries[req.params.cid][req.params.sid]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));