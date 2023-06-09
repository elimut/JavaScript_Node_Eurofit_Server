// relatif à la table club, composant pour club
const {connection} = require('../serveur');

const path = (app)=> {
    app.get('/club', (req, res)=>{
        connection.query('SELECT * FROM club;',[], (err, results)=>{
            if (err) throw err;
            res.json(results);
        }); 
    })
    app.get('/club/:id', (req, res)=>{
        const id_club = req.params.id;
        connection.query('SELECT * FROM club WHERE id_club = ?;', [id_club], (err, results)=>{
            if (err) throw err;
            res.json(results);
        }); 
    });
    // app.post('/club', (req, res) =>{
    //     const {type, prix, bilan_IMC, acces_club} = req.body;
    //      connection.query('INSERT INTO abonnement(type, prix, bilan_IMC, acces_club) VALUES (?,?,?,?);',[type, prix, bilan_IMC, acces_club], (err, results)=>{
    //         if (err)   throw err;
    //         res.json(results);
    //     })
    // });
    app.delete('/club/:id', (req, res)=>{
        const id_club = req.params.id;
        connection.query('DELETE FROM club WHERE id_club = ?', [id_club], (err, results)=>{
            if (err)throw err;
            if (results.affectedRows === 0){
                res.status(404).send('club non trouvé');
            }
            else{
                res.status(200).json({ message: 'club supprimé avec succès'});
            }
        })
    })
    // app.put('/abonnement/:id', (req, res) =>{
    //     const id_abonnement = req.params.id;
    //     const {type, prix, bilan_IMC, acces_club} = req.body;
    //      connection.query('UPDATE abonnement SET type = ?, prix = ?, bilan_IMC = ?, acces_club = ? WHERE id_abonnement = ?;',[type, prix, bilan_IMC, acces_club, id_abonnement], (err, results)=>{
    //         if (err)   throw err;
    //         res.json(results);
    //     });
    // })
    // app.patch('/abonnement/:id/:column', (req, res) =>{
    //     const id_abonnement = req.params.id;
    //     const column = req.params.column;
    //     let value = {};
    //     if (column === 'type') {
    //        requeteSql = 'UPDATE abonnement SET type = ? WHERE id_abonnement = ?;' 
    //        value = req.body.type
    //     } else if (column === 'prix') {
    //         requeteSql = 'UPDATE abonnement SET prix = ? WHERE id_abonnement = ?;'
    //         value = req.body.prix
    //     } else if (column === 'acces_club') {
    //         requeteSql = 'UPDATE abonnement SET acces_club = ? WHERE id_abonnement = ?;'
    //         value = req.body.acces_club
    //     } else if (column === 'bilan_IMC') {
    //         requeteSql = 'UPDATE abonnement SET bilan_IMC = ? WHERE id_abonnement = ?;'
    //         value = req.body.bilan_IMC
    //     } else{
    //        throw err;
    //     }
    //      connection.query(
    //         requeteSql,
    //         [value, id_abonnement], 
    //         (err, results)=>{
    //         if (err)  throw err;
    //         res.json(results);
    //     })
    // })
    // Les méthodes PUT et PATCH ont des significations différentes : PUT, remplace les données par celle qui sont envoyées dans la requête. PATCH, permet la modification partielle d'une ressource en fusionnant les données envoyées avec les données déjà présentes ou grâce à l'utilisation d'opération de modification.
    
    // app.innerJoin('/abonnement/:id', (req, res) =>{
    //     const id_abonnement = req.params.id;
    //      connection.query('SELECT nom, type FROM  abonnement JOIN club WHERE id_abonnement.abonnement = club.id_club;',[type, prix, bilan_IMC, acces_club, id_abonnement], (err, results)=>{
    //         if (err)   throw err;
    //         res.json(results);
    //     })
    // })
}

module.exports = path;
