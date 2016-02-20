'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var BrewerySchema = new Schema({
	name: {
		type: String,
		unique: true,
		required : true
	},
	description :{
		type: String
	},
	ativo :{
		type: Boolean,
		required: true,
		default: true
	},
	created: { 
		type: Date, 
		default: Date.now 
	},
	updated: { 
		type: Date, 
		default: Date.now 
	}
});

module.exports = mongoose.model('Brewery', BrewerySchema);
