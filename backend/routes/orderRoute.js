import express from 'express';
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
} from '../controllers/orderController.js';
import authUser from '../middleware/auth.js';
import adminAuth from '../middleware/adminAuth.js';

const orderRouter = express.Router();

// User routes (require user authentication)
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/razorpay', authUser, placeOrderRazorpay);
orderRouter.post('/userorders', authUser, userOrders);

// Admin routes (require admin authentication)
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

export default orderRouter;
