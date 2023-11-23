import { useState, useEffect } from "react";
import Gift from "./Gift";
import "./gift.css";

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
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const filteredDonneurs = donneursInitiaux
      .filter(
        (donneur) =>
          `${donneur.prenom} ${donneur.nom}`
            .toLowerCase()
            .includes(filterText.toLowerCase()) ||
          `${donneur.nom} ${donneur.prenom}`
            .toLowerCase()
            .includes(filterText.toLowerCase())
      )
      .slice(0, 3); // Limit the results to three persons
    setDonneursRestants(filteredDonneurs);
  }, [filterText, donneursInitiaux]);

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
      <input
        type="text"
        placeholder="Filter donors..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
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

      <button onClick={tirerReceveur}>Tirer un Receveur</button>
      {personneTiree && <Gift personneTiree={personneTiree} />}

      <button onClick={reinitialiserEtats}>Réinitialiser</button>
    </div>
  );
}

export default BddTest;
