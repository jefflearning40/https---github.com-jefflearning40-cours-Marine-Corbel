//d'ou vient l'erreur? séparer les responsabilités.gerer la requete et la réponse

export let users=[];


export const createUser = (req,res)=>{
    users.push(req.body);
    console.log(users);
    res.send(users);
}
export const readUser2 = (req,res)=>{
    res.send(users[3]);


}
