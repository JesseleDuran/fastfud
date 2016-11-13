var app = require('express')(),
  comidas = require('./app_server/controladores/comidas'),
  db = require('./models/index');
  //compra = require('./server/controllers/compras');
  //usuario = require('./server/controllers/usarios');


app.get('/comidas', comidas.index);
app.get('/comidas/:id', comidas.show);
app.post('/comidas', comidas.create);
app.put('/comidas', comidas.update);
app.delete('/comidas', comidas.delete);

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function () {
  console.log("Magic happens on port", app.get('port'));
});