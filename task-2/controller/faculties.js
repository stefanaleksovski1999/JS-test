
// const mongoose = require('mongoose');
const Faculty = require('../models/faculty');
const University = require('../models/university');


const getAll = async (req, res) => {

 

   
    const faculty = await Faculty.find().populate('university', 'name');

    res.render('faculties/index', { faculty });
   
  };

  const getCreate = async (req, res) => {
    const faculty = await Faculty.find();
    
    res.render('faculties/create', {faculty});
  };

  const getEdit = async (req, res) => {
    const faculty = await Faculty.findById(req.params.id).populate('university');
    const university = await University.find();

    res.render('universities/edit', { faculty, university });
  };

  
 

  const create = async (req, res) => {

    const faculty = await Faculty.create(req.body);

    if(req.body.club) {
      await Faculty.findByIdAndUpdate(req.body.faculty, {
        $push: {faculties: faculty}
      });
    };



    res.redirect('/faculties');
  };

  const update = async (req, res) => {
    
    const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body);
   

    if(req.body.university) {
      let foundFaculty = await University.find({ faculties : faculty })

      if (foundFaculty.length == 0) {
        await University.findByIdAndUpdate(req.body.university, {
        $push: {faculties: faculty}
      });
      }

      
    }

    res.redirect('/faculties');
  };



  const getDeleted = async (req, res) => {
      await Faculty.findByIdAndDelete(req.params.id);
      
      res.send({});
    
  };



module.exports = {
  getAll,
  getCreate,
  getEdit,
  create,
  update,
  getDeleted 
}
