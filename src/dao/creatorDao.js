const pg = require('../pg');


async function selectCreators(){
    await pg.connect();
    let result = await pg.query('SELECT * FROM creators;');
    return result.rows;
}


module.exports = {
    selectCreators
};