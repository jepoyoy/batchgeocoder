

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/rest/geocode/:qry', function(req,res){

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDyhaZMJ3bMic_EKrreQfyVONdfccODWsI'
});

// Geocode an address.
googleMapsClient.geocode({
  address: req.params.qry
}, function(err, response) {
  if (!err) {
    res.send(response.json.results);
  }
});	

})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})


app.use(express.static('public'))