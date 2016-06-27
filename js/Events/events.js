// All event listeners
var inventoryDataUpdate = require('./inventoryDataUpdate');

// Call event listeners in event function
function events() {
  inventoryDataUpdate();
}

// Export events
module.exports = events;