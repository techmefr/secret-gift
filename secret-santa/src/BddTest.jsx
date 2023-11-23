import { useState } from "react";

function BddTest() {
  const donneursInitiaux = [
    { id: 1, prenom: "Alice", nom: "Dupont" },
    { id: 2, prenom: "Bob", nom: "Martin" },
    { id: 3, prenom: "Charlie", nom: "Smith" },
    { id: 4, prenom: "David", nom: "Johnson" },
    { id: 5, prenom: "Eva", nom: "Garcia" },
    { id: 6, prenom: "Frank", nom: "Brown" },
    { id: 7, prenom: "Grace", nom: "Davis" },
  ];

  const receveursInitiaux = [
    { id: 1, prenom: "Alice", nom: "Dupont" },
    { id: 2, prenom: "Bob", nom: "Martin" },
    { id: 3, prenom: "Charlie", nom: "Smith" },
    { id: 4, prenom: "David", nom: "Johnson" },
    { id: 5, prenom: "Eva", nom: "Garcia" },
    { id: 6, prenom: "Frank", nom: "Brown" },
    { id: 7, prenom: "Grace", nom: "Davis" },
  ];

  const [donneursRestants, setDonneursRestants] = useState(donneursInitiaux);
  const [donneursFinis, setDonneursFinis] = useState([]);
  const [receveursRestants, setReceveursRestants] = useState(receveursInitiaux);
  const [receveursFinis, setReceveursFinis] = useState([]);
  const [idAleatoire, setIdAleatoire] = useState(null);
  const [personneTiree, setPersonneTiree] = useState(null);
  const [donneurSelectionne, setDonneurSelectionne] = useState(null);

  const genererIdAleatoire = () => {
    if (receveursRestants.length > 0) {
      let id;
      do {
        id = Math.floor(Math.random() * receveursRestants.length);
      } while (
        donneurSelectionne &&
        donneurSelectionne.id === receveursRestants[id].id
      );
      setDonneurSelectionne(receveursRestants[id]);
      setIdAleatoire(id);
    }
  };

  const deplacerDonneurVersFinis = (donneur) => {
    setDonneursRestants(donneursRestants.filter((d) => d.id !== donneur.id));
    setDonneursFinis([donneur, ...donneursFinis]);
    genererIdAleatoire();
  };

  const tirerReceveur = () => {
    if (receveursRestants.length > 0 && idAleatoire !== null) {
      const receveurTire = receveursRestants[idAleatoire];
      setReceveursRestants(
        receveursRestants.filter((r) => r.id !== receveurTire.id)
      );
      setReceveursFinis([...receveursFinis, receveurTire]);
      genererIdAleatoire();

      setPersonneTiree(`${receveurTire.prenom} ${receveurTire.nom}`);
    }
  };

  const reinitialiserEtats = () => {
    setDonneursRestants(donneursInitiaux);
    setDonneursFinis([]);
    setReceveursRestants(receveursInitiaux);
    setReceveursFinis([]);
    setIdAleatoire(null);
  };

  return (
    <div>
      <h1>Donneurs Restants</h1>
      <ul>
        {donneursRestants.map((donneur) => (
          <li
            key={donneur.id}
            onClick={() => deplacerDonneurVersFinis(donneur)}
          >
            {`${donneur.prenom} ${donneur.nom}`}
          </li>
        ))}
      </ul>

      <h1>Donneurs Finis</h1>
      <ul>
        {donneursFinis.map((donneur) => (
          <li key={donneur.id}>{`${donneur.prenom} ${donneur.nom}`}</li>
        ))}
      </ul>

      <h1>Receveurs Restants</h1>
      <ul>
        {receveursRestants.map((receveur) => (
          <li key={receveur.id}>{`${receveur.prenom} ${receveur.nom}`}</li>
        ))}
      </ul>

      <h1>Receveurs Finis</h1>
      <ul>
        {receveursFinis.map((receveur) => (
          <li key={receveur.id}>{`${receveur.prenom} ${receveur.nom}`}</li>
        ))}
      </ul>

      <button onClick={tirerReceveur}>Tirer un Receveur</button>
      {personneTiree && <p>Personne tirée : {personneTiree}</p>}

      <button onClick={reinitialiserEtats}>Réinitialiser</button>
    </div>
  );
}

export default BddTest;
