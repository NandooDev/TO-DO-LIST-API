import { Router } from 'express';
import { createTable, list, addTask, updateTask, deleteTask } from '../controllers/tasks.js'; 

createTable();

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "message": "API rodando"
    });
});
router.get('/lista', list);
router.post('/lista/add-tarefa', addTask);
router.put('/lista/atualizar-tarefa', updateTask);
router.delete('/lista/remove-tarefa', deleteTask);

export default router;