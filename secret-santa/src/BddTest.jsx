import { useState } from "react";

function BddTest() {
  const [personnes, setPersonnes] = useState([
    { id: 1, prenom: "Alice", nom: "Dupont" },
    { id: 2, prenom: "Bob", nom: "Martin" },
    { id: 3, prenom: "Charlie", nom: "Smith" },
    { id: 4, prenom: "David", nom: "Johnson" },
    { id: 5, prenom: "Eva", nom: "Garcia" },
    { id: 6, prenom: "Frank", nom: "Brown" },
    { id: 7, prenom: "Grace", nom: "Davis" },
    { id: 8, prenom: "Hector", nom: "Rodriguez" },
    { id: 9, prenom: "Ivy", nom: "Wang" },
    { id: 10, prenom: "Jack", nom: "Taylor" },
  ]);

  const [idAleatoire, setIdAleatoire] = useState(null);

  const genererIdAleatoire = () => {
    const id = Math.floor(Math.random() * personnes.length) + 1;
    setIdAleatoire(id);
  };

  return (
    <div>
      <h1>Trouvez à qui offrir votre cadeau</h1>
      <h1>Liste des personnes</h1>
      <ul>
        {personnes.map((personne) => (
          <li key={personne.id}>
            {`ID: ${personne.id}, Prénom: ${personne.prenom}, Nom: ${personne.nom}`}
          </li>
        ))}
      </ul>
      <button onClick={genererIdAleatoire}>Générer un ID aléatoire</button>

      {idAleatoire !== null && (
        <p>
          {`${personnes[idAleatoire - 1].prenom} ${
            personnes[idAleatoire - 1].nom
          }`}
        </p>
      )}
    </div>
  );
}

export default BddTest;
