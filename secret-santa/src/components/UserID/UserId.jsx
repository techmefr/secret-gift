import { useState } from "react";
import "./UserId.css";

const UserId = () => {
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("loggedInUser") || null
  );
  const [eventDetails, setEventDetails] = useState({});
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  // Fonction pour l'inscription
  const handleSignUp = () => {
    // Vérifier si le nom d'utilisateur et le mot de passe ne sont pas vides
    if (newUsername.trim() !== "" && newPassword.trim() !== "") {
      // Simulons la création d'un nouvel utilisateur avec un mot de passe haché (à des fins de démonstration)
      const hashedPassword = newPassword; // Remplacer par une méthode de hachage sécurisée
      localStorage.setItem(newUsername, hashedPassword);
      setLoggedInUser(newUsername);
      localStorage.setItem("loggedInUser", newUsername);
      setNewUsername("");
      setNewPassword("");
    } else {
      // Gérer les champs vides
    }
  };

  // Fonction pour la connexion
  const handleSignIn = () => {
    const hashedPassword = localStorage.getItem(signInUsername);
    // Vérifiez si le nom d'utilisateur existe et si le mot de passe correspond à celui stocké localement
    if (hashedPassword && signInPassword === hashedPassword) {
      setLoggedInUser(signInUsername);
      localStorage.setItem("loggedInUser", signInUsername);
      setSignInUsername("");
      setSignInPassword("");
    } else {
      // Gérer l'erreur d'authentification invalide
    }
  };

  // Fonction pour déconnexion
  const handleSignOut = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  // Fonction pour ajouter un événement
  const handleAddEvent = (description) => {
    const formattedSelectedDate = new Date().toISOString().split("T")[0];
    setEventDetails({
      ...eventDetails,
      [formattedSelectedDate]: { description, owner: loggedInUser },
    });
  };

  // Filtrer les événements pour afficher uniquement ceux de l'utilisateur connecté
  const userEvents = Object.entries(eventDetails)
    .filter(([date, event]) => event.owner === loggedInUser)
    .map(([date, event]) => (
      <li key={date}>
        <strong>{date}:</strong> {event.description}
      </li>
    ));

  return (
    <div className="login-container">
      {!loggedInUser ? (
        <>
          <h1>Sign Up</h1>
          <input
            className="input-login"
            type="text"
            placeholder=" First Name "
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
         
          <input
            className="input-login"
            type="password"
            placeholder="Mot de passe"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button className="connecter" onClick={handleSignUp}>Sign up</button>

          <h1>log in</h1>
          <input
            className="input-login"
            type="text"
            placeholder="Nom d'utilisateur"
            value={signInUsername}
            onChange={(e) => setSignInUsername(e.target.value)}
          />
          <input
            className="input-login"
            type="password"
            placeholder="Mot de passe"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
          <button className="connecter" onClick={handleSignIn}>
          log in
          </button>
        </>
      ) : (
        <>
          <h1>Wellcome, {loggedInUser}!</h1>
          <button className="deconnecter" onClick={handleSignOut}>
            Log Out
          </button>
        </>
      )}
    </div>
  );
};

export default UserId;
