const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequisitionSchema = new Schema({
  requisitionNumber: {
  type: String,
  required: true
  },
  dateReceivingRequisition: {
    type: Number,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  nameOfCarrier: {
    type: String,
    required: true
  },
  phoneCarrier: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    default: null
  },
  atiCode: {
    type: String,
    default: null
  }
});

RequisitionSchema.index({'$**': 'text'});

module.exports = mongoose.model('Requisition', RequisitionSchema);