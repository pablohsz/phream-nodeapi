const pg = require('../pg');


async function selectUsers(){
    await pg.connect();
    let result = await pg.query('SELECT * FROM users;');
    return result.rows;
}


async function insertUser(username, password, nickname){
    await pg.connect();
    const query = 'INSERT INTO users (username, user_pass, user_nick) VALUES ($1, $2, $3)';
    let result = await pg.query(query, [username, password, nickname]);
    return result.rows;
}






module.exports = {
    selectUsers,
    insertUser
};