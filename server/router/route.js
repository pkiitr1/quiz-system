import { Router } from "express";

const router= Router();

/**import controller */
import *as controller from '../controllers/controller.js';

/**questions route api*/


router.route('/questions')
      .get(controller.getQuestions) /**get req*/
      .post(controller.insertQuestions) //post req
      .delete(controller.dropQuestions) //delete req

router.route('/result')
       .get(controller.getResult)
       .post(controller.storeResult)
       .delete(controller.dropResult)
  



export default router;