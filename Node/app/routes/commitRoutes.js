import express from 'express';
import CommitController from '../controllers/commitController';

const initCommitRoutes = () => {
 const commitRoutes = express.Router();

 commitRoutes.get('/repos/:gitId/:repo/commits', CommitController.commitList);

 return commitRoutes;
};

export default initCommitRoutes;

