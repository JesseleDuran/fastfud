models = require('./models/index');
Comida = models.Comida;

module.exports = {
  //Obtiene una lista de todas las Comidas usando model.findAll()
  index(req, res) 
  {
    Comida.findAll({
    })
      .then(function (comidas) {
        res.status(200).json(comidas);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Obtiene una comida por su código exclusivo usando model.findById()
  show(req, res) {
    Comida.findById(req.params.id, {
    })
    .then(function (comida) {
      res.status(200).json(comida);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  //Crea un nuevo autor usando model.create()
  create(req, res) {
    Comida.create(req.body)
      .then(function (newComida) {
        res.status(200).json(newComida);
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  },

  //Editar una comida existente usando model.update()
  update(req, res) {
    Comida.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedRecords) {
      res.status(200).json(updatedRecords);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  //Elimina una comida existente por su id único usando model.destroy()
  delete(req, res) {
    Author.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedRecords) {
      res.status(200).json(deletedRecords);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }
};