const db = require('../db')

class RenderController{
    async createFakeData( ){
        for(let i = 0; i < 1500; i++){
            await db.query(
                `INSERT INTO render (descript, price) values ($1, $2) RETURNING *`, ["Lorem ipsum sit amei", 150]
            )
        }
    }
    async createUser( req, res ){
        const { descript, price } = req.body;
        const newPerson = await db.query('INSERT INTO render (descript, price) values ($1, $2) RETURNING *',
        [descript, price]);
        res.json(newPerson.rows[0]);
    }
    async getUsers( req, res ){
        const list = await db.query('SELECT * FROM render ORDER BY id');
        console.log(req);
        res.json(list.rows);
    }
    async getOneUser( req, res ){
        const id = req.params.id;
        if( isNaN(id) ){
            res.json('error');
        } else {
            const list = await db.query('SELECT * FROM render where id = $1', [id]);
            res.json(list.rows[0]);
        }
    }
    async updateUser( req, res ){
        const {id, descript, price } = req.body;
        const user = await db.query('UPDATE render set descript = $1, price = $2 where id = $3 RETURNING *',
            [descript, price, id]
        );
        res.json(user.rows[0]);
    }
    async deleteUser( req, res ){
        const id = req.params.id;
        if( isNaN(id) ){
            res.json('error');
        } else {
            const user = await db.query('DELETE FROM render where id = $1', [id]);
            res.json(user.rows[0]);
        }
    }
}

module.exports = new RenderController();