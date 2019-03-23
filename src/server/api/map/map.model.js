'use strict';

import mongoose from 'mongoose';

let MapSchema = new mongoose.Schema({
  address: { type: String },
  latLng: {
    lat: {type: Number},
    lng: {type: Number}
  }
});

MapSchema.index({'address': 'text'});

export default mongoose.model('Map', MapSchema);
