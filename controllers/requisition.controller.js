const requisitionService = require('../services/requisition.service');

class RequisitionController {
  constructor(requisitionService) {
    this.service = requisitionService;
  }
  async getRequisitionById(req, res) {
    const { id } = req.params;
    try {
      const data = await this.service.getRequisitionByID(id);
      res.status(200).json({
        status: 'ok',
        requisition: data,
      });
    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }
    
    
    
  }

  async getRequisitions(req, res) {
    try {
      const data = await this.service.getRequisitions();
      res.status(200).json({
        status: 'ok',
        requisition: data,
      });
    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  async createRequisition(req, res) {
    console.log(req.body);
    const {requisitionNumber, dateReceivingRequisition, companyName, nameOfCarrier, phoneCarrier, comments, atiCode} = req.body;
    const requisition = await this.service.createRequisition({
      requisitionNumber,
      dateReceivingRequisition,
      companyName,
      nameOfCarrier,
      phoneCarrier,
      comments,
      atiCode,
    });
    res.status(200).json({
      status: 'ok',
      requisition,
    });
  }

  async editRequisition(req, res) {
    const {id} = req.params;
    const findRequisition = await this.service.getRequisitionByID(id);
    if (findRequisition) {
      const updateData = {...req.body}
      const requisition = await this.service.findByIdAndUpdate(id, updateData);
      res.status(200).json({
        status: 'ok',
        requisition
      });
    } else {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  async deleteRequisition(req, res) {
    const {id} = req.params;
    await this.service.deleteRequisition(id)
    res.status(200).json({
      status: 'ok',
      message: 'The ticket has been successfully deleted',
    });
  }

  async searchRequisition(req, res) {
    try {
      const findResult = await this.service.searchRequisition(req.query);
      res.status(200).json({
        success: true,
        quantityResult: findResult.length,
        data: findResult
      })
    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }    
  }
}

module.exports = new RequisitionController(requisitionService);