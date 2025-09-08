
// charger le framework express
import express from "express";

//charger les route
import router from './routes/routes.js'           //si le client demande /hello, va voir le serveur /hello
import userRouter from './routes/user.routes.js'   // si il demande /users,va voir le serveur /users 




const app = express();      //express est une bibliotheque qui simplifie la création de serveurs avec node.js
                            // on cree alors une application serveur que l'on stock dans la variable app (application)
                            //avec cet objet, app,on va configurer notre server et ajouter des routes.
                            //Ces routes peuvent etres des app.get .post. put, et.delete (nommées aussi CRUD)
                            //il permet egalement de creer des middlewares(des petits programmes qui s'executent entre
                            // la requete et la reponse du serveur), permet de rensigner le client sur le type d'erreur 
                            // qui a interoompu le site
                                        

 app.use(express.json());   //te permet d'ajouter un middleware à ton serveur.

                            //(express.json()) est un outil fourni par Express.

                            //Il sert à lire le corps JSON d’une requête et à le mettre dans req.body.
                            //si tu ne met pas cette commande, la reponse sera "undefined" 
                            // parceque express ne sais pas lire ton json

app.use("/hello", router)   //si quelqu’un tape une URL qui commence par /hello, il faut l'envoyer vers le router que
                            //  j’ai importé dans routes/routes.js. (au debut du code dans les imports)

app.use("/users",userRouter);   //si quelqu’un tape une URL qui commence par /users, il faut l'envoyer vers le router que
                                //j’ai importé dans routes/user.routes.js. (au debut du code dans les imports)






app.listen(3000,()=>{                       //ouvre le prot 3000 du client
    console.info("server demarré")      //quand le serveur est demarré, affiche "server demarré" dans la console du terminal
});