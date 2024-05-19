# fullstackopenAko
Diagramme illustrant ce qu'il se passe quand l'utilisateur crée une nouvelle note sur la page https://studies.cs.helsinki.fi/exampleapp/notes en écrivant quelque chose dans le champ de texte et en cliquant sur le bouton envoyer.

sequenceDiagram
browser ->> server: https://studies.cs.helsinki.fi/exampleapp/new_note
Note over browser: le browser fait a nouvelle requette HTTP GET<br/>à l'address definì dans le header
server ->> browser: status code: 302 not found

browser ->> server: https://studies.cs.helsinki.fi/exampleapp/notes
server ->> browser: document HTML
Note over server: aprés avoir fait la requette le server<br/> repond à le browser avec le HTML contenant<br/> la nouvelle note inseré par l'user

browser ->> server: https://studies.cs.helsinki.fi/exampleapp/main.css
server ->> browser: css file

browser ->> server: https://studies.cs.helsinki.fi/exampleapp/main.js
Note over server: L'user as cliqué sur le bu
server ->> browser: js file

browser ->> server: https://studies.cs.helsinki.fi/exampleapp/data.json
server ->> browser: json file
Note over server: Après avoir envoié un requette dans le code javascript<br/> le server repond avec la liste des notes sur un file json

browser ->> server: https://studies.cs.helsinki.fi/exampleapp/main.js
server ->> browser: json file


