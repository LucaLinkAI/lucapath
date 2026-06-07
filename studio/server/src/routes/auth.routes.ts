import { Router } from 'express';
import { checkClaudeAuth } from '../auth.ts';

export const authRouter = Router();

authRouter.get('/status', async (req, res) => {
  const force = req.query.force === '1';
  const result = await checkClaudeAuth(force);
  res.json(result);
});
