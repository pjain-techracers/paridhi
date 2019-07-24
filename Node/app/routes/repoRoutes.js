import express from 'express';
import RepoController from '../controllers/repoController';

const initRepoRoutes = () => {

const repoRoutes = express.Router();

 repoRoutes.get('/repos', RepoController.listRepositories);
 repoRoutes.get('/repos/:gitId', RepoController.otherUserRepos);
 repoRoutes.post('/repos', RepoController.createRepository);
 repoRoutes.delete('/repos/:owner/:repo', RepoController.deleteRepos);

 return repoRoutes;
};

export default initRepoRoutes;

