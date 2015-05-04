'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
	firstName: {
		type: String,
		default: '',
		required: 'Please fill Customer name',
		trim: true
	},

	surname: {
		type: String,
		default: '',
		required: 'Please fill Customer name',
		trim: true
	},
	suburb: {
		type: String,
		default: '',
		required: 'Please fill Customer name',
		trim: true
	},
	country: {
		type: String,
		default: '',
		required: 'Please fill Customer name',
		trim: true
	},
	industry: {
		type: String,
		default: '',
		required: 'Please fill Customer name',
		trim: true
	},
	email: {
		type: String,
		default: '',
		required: 'Please fill Customer name',
		trim: true
	},
	phone: {
		type: String,
		default: '',
		required: 'Please fill Customer name',
		trim: true
	},
	refered: {
		type: Boolean
	},
	channel: {
		type: String,
		default: '',
		required: 'Please fill Customer name',
		trim: true
	},

	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Customer', CustomerSchema);