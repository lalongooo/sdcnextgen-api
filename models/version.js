let mongoose = require('mongoose');
let versionSchema = mongoose.Schema(
  {
    latest: { type: String, required : true },
  }
);
versionSchema.set('timestamps', true);

let Version = module.exports = mongoose.model('Version', versionSchema);
