import express from 'express';
import PullreqController from '../controllers/pullController';

const initPullRoutes = () => {
 const pullRoutes = express.Router();

 pullRoutes.get('/repos/:owner/:repo/pulls', PullreqController.listPR);

 return pullRoutes;
};

export default initPullRoutes;

