import { openDb } from '../config/configDb.js';

export async function createTable() {
    openDb().then(db => {
        db.exec(`CREATE TABLE IF NOT EXISTS Lista (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            tarefa VARCHAR(500) NOT NULL
        )`);
    });
};

export async function list(req, res) {
    openDb().then(db => {
        db.all(`SELECT * FROM Lista`)
        .then(tasks => res.json(tasks))
    });
};

export async function addTask(req, res) {
    let task = req.body.task;
    openDb().then(db => {
        db.run(`INSERT INTO Lista (tarefa) VALUES (?)`, [task])
    });
    res.json({
        "statusCode": 200,
        "message": "Tarefa adcionada com sucesso"
    });
};

export async function updateTask(req, res) {
    let id = req.body.id;
    let task = req.body.task;
    openDb().then(db => {
        db.run(`UPDATE Lista SET tarefa = ? WHERE id = ?`, [task, id])
    });
    res.json({
        "statusCode": 200,
        "message": "Atualização feita com sucesso"
    });
};

export async function deleteTask(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get(`DELETE FROM Lista WHERE id = ?`, [id])
        .then(res => res)
    });
    res.json({
        "statusCode": 200,
        "message": "Tarefa deletada com sucesso"
    });
};