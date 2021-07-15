const express = require('express')
const router = express.Router()
const {body, validationResult} = require('express-validator')

const Place = require('../../models/Place')

// @route   GET api/places?name=MIAMI
// @desc    get places filtered by name, state, city
// @access  Public
router.get('/', 
async (req, res) => {
    try { 
        const places = await Place.find();
        const filters = req.query;
        const filteredPlaces = places.filter(place => {
          let isValid = true;
          for (key in filters)
            isValid = isValid && place[key] == filters[key];     
          return isValid;
        });
        res.json(filteredPlaces);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}
);

// @route   POST api/places
// @desc    Create a new place
// @access  Public
router.post('/', [
    body('name', 'Name is required').notEmpty(),
    body('city', 'State is required').notEmpty(),
    body('state', 'State is required').notEmpty()
],
async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const {name, state, city} = req.body;

    try {
        const place = new Place({
            name,
            state,
            city
        });

        await place.save();
        res.json(place);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}
);

// @route   PUT api/places/:place_id
// @desc    UPDATE a place
// @access  Public
router.put('/:place_id',
async (req, res) => {

    const {name, state, city} = req.body;
    
    try {
        let place = await Place.findOne({_id: req.params.place_id});
        if(!place){
            return res.status(404).json({msg: 'Place not found'});
        }

        place.name = name || place.name;
        place.state = state || place.state;
        place.city = city || place.city;
        place.updated_at = Date.now();

        await place.save();
        res.json(place);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}
);

// @route   Delete api/places/:place_id
// @desc    delete a place
// @access  Public
router.delete('/:place_id',
async (req, res) => {
    
    try {
        await Place.findOneAndDelete({_id: req.params.place_id});
        res.json({msg: "place deleted successfuly"});

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}
);

module.exports = router;