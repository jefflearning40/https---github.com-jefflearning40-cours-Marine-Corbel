# 🚀 Serveur Express Minimaliste

Petit projet **Node.js / Express** pour apprendre les bases :  
routes, contrôleurs et tests avec Postman / Thunder Client.

---

## ▶️ Démarrage

```bash
node index.js

Le serveur démarre sur http://localhost:3000

👉 Dans le terminal tu verras : server demarré

🌐 Routes disponibles
🔹 Hello (/hello)

GET /hello/ → renvoie "route 2 !"

GET /hello/coucou → renvoie "route 1 !"

POST /hello/ → renvoie le body JSON envoyé

🔹 Users (/users)

POST /users/ → ajoute un utilisateur dans la liste

GET /users/ → renvoie la liste complète

GET /users/user2 → renvoie l’utilisateur n°4 (index 3)

⚠️ Limitations

Les utilisateurs sont stockés dans un tableau en mémoire → réinitialisé à chaque redémarrage.

Pas encore de base de données.

readUser2 renvoie undefined si le tableau est trop petit.

📂 Arborescence
revisionserver/
├── controllers/
│   ├── routes.controller.js
│   └── user.controller.js
├── routes/
│   ├── routes.js
│   └── user.routes.js
├── index.js
├── .gitignore
├── package.json
└── package-lock.json
