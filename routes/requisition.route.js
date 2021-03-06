const express = require('express');
const router = express.Router();

const RequisitionController = require('../controllers/requisition.controller')

router.get('/requisition/search', (req, res) => RequisitionController.searchRequisition(req, res));

router.get('/requisition', (req, res) => RequisitionController.getRequisitions(req, res));

router.get('/requisition/:id', (req, res) => RequisitionController.getRequisitionById(req, res));

router.post('/requisition', (req, res) => RequisitionController.createRequisition(req, res));

router.patch('/requisition/:id', (req, res) => RequisitionController.editRequisition(req, res));

router.delete('/requisition/:id', (req, res) => RequisitionController.deleteRequisition(req, res));

module.exports = router;