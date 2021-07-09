const Requisition = require('../models/requisition.model');

class RequisitionService {
  async getRequisitionByID(id) {
    const requisition = await Requisition.findOne({ _id: id });
    if (requisition) {
      return requisition;
    } else {
      throw new Error('Not found!');
    }
  }

  async getRequisitions() {
    const requisition = await Requisition.find();
    if (requisition) {
      return requisition;
    } else {
      throw new Error('Not found!');
    }
  }

  async createRequisition(data) {
    const requisition = new Requisition(data);
    await requisition.save();
    return requisition;
  }

  async editRequisition(id) {
    return await Requisition.findByIdAndUpdate(id, data);
  }

  async deleteRequisition(id) {
    await Requisition.deleteOne({ _id: id });
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
