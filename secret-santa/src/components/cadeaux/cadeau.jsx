import { useState } from "react";
import "./cadeau.css";
import Agende from "../cadeaux/image/Agenda.jpg";
import cassetête from "../cadeaux/image/casse-tête.jpg";
import gantstactiles from "../cadeaux/image/gants-tactiles.jpg";
import LizClimo from "../cadeaux/image/Liz-Climo.jpg";
import bibliothécaires from "../cadeaux/image/bibliothécaires.jpg";
import AirPods from "../cadeaux/image/AirPods.jpg";
import rangecâbles from "../cadeaux/image/rangecâbles.jpg";
import puzzle from "../cadeaux/image/puzzle.jpeg";
import console from "../cadeaux/image/console.jpg";
import bonsais from "../cadeaux/image/bonsais.jpeg";
import réveil from "./image/réveil.jpeg";
import boxséjour from "./image/box-séjour.jpeg";

function Cadeau() {
  const cardsData = [
    {
      title: "Agenda",
      image: Agende,
      link: "https://www.amazon.fr/Calendrier-2024-semainier-calendrier-Couverture/dp/B0CBS29WR1/ref=sr_1_3?crid=2DSBAK4OJ9P8X&keywords=agenda+etoile+noel&qid=1700744151&sprefix=%2Caps%2C75&sr=8-3",
      price: "17,68€",
    },
    {
      title: "casse tête",
      image: cassetête,
      link: "https://www.amazon.fr/iDventure-Cluebox-Captains-Nautilus-boutons/dp/B09LR6JWW9/ref=sxin_17_sbv_search_btf?__mk_fr_FR=ÅMÅŽÕÑ&content-id=amzn1.sym.5fb707fa-f46e-4956-87a4-4d9aace028c8%3Aamzn1.sym.5fb707fa-f46e-4956-87a4-4d9aace028c8&crid=3T6E7VMZONJ1X&cv_ct_cx=un+jeu+de+casse-tête+adulte&keywords=un+jeu+de+casse-tête+adulte&pd_rd_i=B09LR6JWW9&pd_rd_r=b8907ae5-3881-4ad0-aa1b-a5747588d341&pd_rd_w=vMzTU&pd_rd_wg=k3yZX&pf_rd_p=5fb707fa-f46e-4956-87a4-4d9aace028c8&pf_rd_r=PHSM9PTQQNHST1HQ5V9E&qid=1700744430&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=un+jeu+de+casse-tête+adult%2Caps%2C63&sr=1-1-9131241a-a358-4619-a7b8-0f5a65d91d81",
      price: "44,99€",
    },
    {
      title: "gants-tactiles",
      image: gantstactiles,
      link: "https://www.amazon.fr/LEMEGO-Antidérapant-Coupe-Vent-Impermeable-Réfléchissant/dp/B08FTCYKFZ/ref=sr_1_3_sspa?keywords=Une%2Bpaire%2Bde%2Bgants%2Btactiles&qid=1700745240&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1",
      price: "12,69€",
    },
    {
      title: "Liz Climo",
      image: LizClimo,
      link: "https://www.amazon.fr/365-ours-bonheur-année-petit/dp/2413013350/ref=sr_1_1?__mk_fr_FR=ÅMÅŽÕÑ&crid=1U3FLM6LZA947&keywords=Une+BD+de+Liz+Climo&qid=1700745942&sprefix=une+bd+de+liz+climo%2Caps%2C149&sr=8-1",
      price: "15,95€",
    },
    {
      title: "La Revanche des nuls en orthographe",
      image: bibliothécaires,
      link: "https://lien-du-cadeau-1.com",
      price: "7,90€",
    },
    {
      title: "Un étui Game Boy pour Air Pods",
      image: AirPods,
      link: "https://www.amazon.fr/elago-Compatible-AirPods-Conception-Mousqueton/dp/B089ZXH1FW/ref=sr_1_1?__mk_fr_FR=ÅMÅŽÕÑ&crid=2JFCF1ZO9911F&keywords=un%2Bétui%2Bgame%2Bboy%2Bpour%2Bairpods&qid=1700746581&sprefix=un%2Bétui%2Bgame%2Bboy%2Bpour%2Bair%2Bpods%2Caps%2C67&sr=8-1&th=1",
      price: "13,15€",
    },
    {
      title: "boîtes de rangement de câbles",
      image: rangecâbles,
      link: "https://www.amazon.fr/VISXUSE-boîtes-rangement-câbles-compartiments/dp/B0CKQJB9GK/ref=sr_1_1_sspa?__mk_fr_FR=ÅMÅŽÕÑ&crid=1EAARO1H8CQBR&keywords=Une+boîte+range+câbles&qid=1700746853&sprefix=une+boîte+range+câbles%2Caps%2C108&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
      price: "13,63€",
    },
    {
      title: "CULTIVEA Kit Bonsaï",
      image: bonsais,
      link: "https://www.amazon.fr/CULTIVEA-Bonsaï-Premium-Prêt-Pousser/dp/B09X62TGHT/ref=sr_1_3?__mk_fr_FR=ÅMÅŽÕÑ&crid=YBJPR37VY4RF&keywords=Des+bonsaïs+à+faire+pousser&qid=1700747028&sprefix=des+bonsaïs+à+faire+pousser%2Caps%2C164&sr=8-3",
      price: "34,90€",
    },
    {
      title: "Puzzle marché de Noël",
      image: puzzle,
      link: "https://www.amazon.fr/Ravensburger-Adultes-enfants-qualité-supérieure/dp/B0C349VB8N/ref=sr_1_2?__mk_fr_FR=ÅMÅŽÕÑ&crid=2HV8L25F16KY2&keywords=Un+puzzle+noel&qid=1700747224&sprefix=un+puzzle+noel%2Caps%2C99&sr=8-2",
      price: "18,99€",
    },
    {
      title: "Console Nintendo Switch",
      image: console,
      link: "https://www.amazon.fr/Console-Nintendo-Switch-Modèle-Mario/dp/B0CH1KF3DJ/ref=sr_1_7?__mk_fr_FR=ÅMÅŽÕÑ&crid=2200SO8MGLO05&keywords=console%2Bnintendo&qid=1700747515&sprefix=console%2Bnintendo%2Caps%2C85&sr=8-7&th=1",
      price: "304,33€",
    },
    {
      title: "Réveil Multifonctionnel",
      image: réveil,
      link: "https://www.amazon.fr/COLSUR-Chargement-Multifonctionnel-Bluetooth-Affichage/dp/B0B65QBFY7/ref=sr_1_2_sspa?__mk_fr_FR=ÅMÅŽÕÑ&crid=132XZPIX9U9KG&keywords=réveil%2Baux%2Bsons%2Bde%2Bla%2Bnature&qid=1700749611&sprefix=réveil%2Baux%2Bsons%2Bde%2Bla%2Bnature%2Caps%2C157&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
      price: "50,39€",
    },
    {
      title: "Console Nintendo Switch",
      image: boxséjour,
      link: "https://www.amazon.fr/SMARTBOX-Valentin-original-dexception-romantique/dp/B07WNHCPJV/ref=sr_1_3_sspa?__mk_fr_FR=ÅMÅŽÕÑ&crid=2PC1GWQPFYV3H&keywords=une%2Bbox%2Bséjour&qid=1700749953&sprefix=une%2Bbox%2Bséjour%2Caps%2C172&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
      price: "119,90€",
    },
    // ... Ajoutez les données pour les autres cadeaux
  ];

  const [revealedGifts, setRevealedGifts] = useState(
    new Array(cardsData.length).fill(false)
  );

  const handleCardClick = (index) => {
    const updatedRevealedGifts = [...revealedGifts];
    updatedRevealedGifts[index] = !updatedRevealedGifts[index];
    setRevealedGifts(updatedRevealedGifts);
  };

  return (
    <div className="container">
      <h1>Secret Santa Gift Ideas</h1>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={revealedGifts[index] ? "card flipped" : "card"}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <h4>Click to reveal</h4>
              </div>
              <div
                className="card-back"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <h3 className="card-title">{card.title}</h3>
                <div className="card-back"></div>
                <div className="info-card-back">
                  <p className="card-price">Price: {card.price}</p>
                  <a
                    className="card-link"
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BUY NOW 🛒
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cadeau;
