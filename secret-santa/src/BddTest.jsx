import { useState, useEffect } from "react";
import Gift from "./Gift";
import "./gift.css";
import "./bddTesst.css";

function BddTest() {
  const donneursInitiaux = [
    { id: 1, prenom: "Amina", nom: "Dupont" },
    { id: 2, prenom: "Victor", nom: "Zanote" },
    { id: 3, prenom: "Matthieu", nom: "Lopez" },
    { id: 4, prenom: "Sharmake", nom: "Awil" },
    { id: 5, prenom: "Benjamin", nom: "Richard" },
    { id: 6, prenom: "Axel", nom: "Laress" },
    { id: 7, prenom: "Celine", nom: "Baille" },
    { id: 8, prenom: "Elina", nom: "Todorova" },
    { id: 9, prenom: "Messaoud", nom: "Zouggab" },
    { id: 10, prenom: "Patrick", nom: "Hoang" },
    { id: 11, prenom: "Christoper", nom: "Arnaud" },
    { id: 12, prenom: "Nasreddine", nom: "Lamamra" },
    { id: 13, prenom: "Alexis", nom: "Liénard" },
    { id: 14, prenom: "Cedric", nom: "Front" },
  ];

  const receveursInitiaux = [
    { id: 1, prenom: "Amina", nom: "Dupont" },
    { id: 2, prenom: "Victor", nom: "Zanote" },
    { id: 3, prenom: "Matthieu", nom: "Lopez" },
    { id: 4, prenom: "Sharmake", nom: "Awil" },
    { id: 5, prenom: "Benjamin", nom: "Richard" },
    { id: 6, prenom: "Axel", nom: "Laress" },
    { id: 7, prenom: "Celine", nom: "Baille" },
    { id: 8, prenom: "Elina", nom: "Todorova" },
    { id: 9, prenom: "Messaoud", nom: "Zouggab" },
    { id: 10, prenom: "Patrick", nom: "Hoang" },
    { id: 11, prenom: "Christoper", nom: "Arnaud" },
    { id: 12, prenom: "Nasreddine", nom: "Lamamra" },
    { id: 13, prenom: "Alexis", nom: "Liénard" },
    { id: 14, prenom: "Cedric", nom: "Front" },
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
    setDonneurSelectionne(donneur);
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
    <div className="textDoner">
      <h1>Qui êtes-vous?</h1>
      <p>Entrez votre prénom ou votre nom, cliquez sur votre nom</p>
      <div className="input2-group">
        <input
          type="text"
          name="text"
          className="input2"
          placeholder="Filtre prénom et nom"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <label className="user-label">Filtre</label>
      </div>
      <ul>
        {donneursRestants.map((donneur) => (
          <li
            key={donneur.id}
            onClick={() => deplacerDonneurVersFinis(donneur)}
            className={
              donneurSelectionne && donneurSelectionne.id === donneur.id
                ? "selected"
                : ""
            }
          >
            {`${donneur.prenom} ${donneur.nom}`}
          </li>
        ))}
      </ul>

      <button className="button" onClick={tirerReceveur}>
        Tirez au sort une personne
      </button>
      {personneTiree && <Gift personneTiree={personneTiree} />}

      <button
        className="reinitializer"
        onClick={() => {
          reinitialiserEtats();
          window.location.reload();
        }}
      >
        Réinitialiser
      </button>
    </div>
  );
}

export default BddTest;
