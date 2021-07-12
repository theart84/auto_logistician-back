const Requisition = require('../models/requisition.model');

class RequisitionService {
  async getRequisitionByID(id) {
    const requisition = await Requisition.findOne({ _id: id }).select('-__v');
    if (requisition) {
      return requisition;
    } else {
      throw new Error('Not found!');
    }
  }

  async getRequisitions() {
    const requisition = await Requisition.find().select('-__v');
    if (requisition) {
      return requisition;
    } else {
      throw new Error('Not found!');
    }
  }

  async createRequisition(data) {
    const requisition = new Requisition(data);
    await requisition.save();
    const allRequisitions = await Requisition.find().select('-__v');
    return allRequisitions;
  }

  async editRequisition(id, data) {
    return await Requisition.findByIdAndUpdate(id, data, {new: true});
  }

  async deleteRequisition(id) {
    await Requisition.deleteOne({ _id: id });
    const allRequisitions = await Requisition.find().select('-__v');
    return allRequisitions;
  }

  async searchRequisition(query) {
    const searchWords = Object.keys(query).join('');
    const findResult = await Requisition.find({ $text: { $search: searchWords } });
    if (findResult) {
      return findResult;
    } else {
      throw new Error('Not found!');
    }
  }
}

module.exports = new RequisitionService();
