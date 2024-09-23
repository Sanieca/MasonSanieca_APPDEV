const m ={
    main:(req, res) =>{
       res.render('index');
      
    },
    eyebrows:(req, res) =>{
        res.render('eyebrows');
    
    },
    eyelash:(req, res) =>{
        res.render('eyelash');
     
    },
    hairtreatment:(req, res) =>{
        res.render('hairtreatment');

     
    },
    nails:(req, res) =>{
        res.render('nails');
    }
};
module.exports = m;