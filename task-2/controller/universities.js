const University = require('../models/university')


const getAll = async (req, res) => {
  const universities = await University.find();

   res.render('universities/index', { universities });
    
  };

  const create = async (req, res) => {
    res.render('universities/create');
  };

  const getEdit = async (req, res) => {
    const university = await Club.findById(req.params.id);

    res.render('universities/edit', { university });
  };
  

  const getView = async (req, res) => {
    const university = await University.findById(req.params.id).populate('faculties');
    res.render('universities/view', { university });
  };

  
  
  const destroy = async (req, res) => {
    await University.findByIdAndDelete(req.params.id);
  
    res.status(200).send({});
  };
  
module.exports = {
  getAll,
  create,
  getEdit,
  getView,
  destroy
}