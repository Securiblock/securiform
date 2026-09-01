import Image from "next/image";
import Link from "next/link";
import PhoneIcon from "./phone-icon";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">
            <Image
              src="/image/logo-securiform-blanc.png"
              alt="SECURIFORM"
              className="logo-img"
              width={180}
              height={52}
            />
          </div>
          <p className="footer-desc">
            Organisme de formation à la sécurité au travail. Interventions
            sur toute la France. Réactivité, conseil, service client.
          </p>
          <a
            className="qualiopi"
            href="https://securiform.fr/wp-content/uploads/2026/03/Certificat-Qualiopi-renouvellement.pdf"
          >
            Certifié Qualiopi
          </a>
        </div>

        <nav aria-label="Notre offre de formations">
          <h3>Nos formations</h3>
          <ul>
            <li>
              <Link href="/caces">Conduite en sécurité et CACES®</Link>
            </li>
            <li>
              <Link href="/habilitation-electrique">
                Habilitation électrique
              </Link>
            </li>
            <li>
              <Link href="/incendie-evacuation">Incendie et évacuation</Link>
            </li>
            <li>
              <Link href="/travaux-hauteur-echafaudages">
                Travaux en hauteur et échafaudages
              </Link>
            </li>
            <li>
              <Link href="/gestes-postures">Gestes et postures</Link>
            </li>
            <li>
              <Link href="/secourisme">Secourisme</Link>
            </li>
            <li>
              <Link href="/aipr">AIPR</Link>
            </li>
            <li>
              <Link href="/formations-specifiques">
                Formations spécifiques
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Liens divers">
          <h3>Divers</h3>
          <ul>
            <li>
              <Link href="/lentreprise">Qui sommes-nous&nbsp;?</Link>
            </li>
            <li>
              <a
                href="https://www.securistore.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Boutique
              </a>
            </li>
            <li>
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
            <li>
              <Link href="/conditions-generales-de-vente">
                Conditions générales de vente
              </Link>
            </li>
            <li>
              <a href="http://securiform.fr/wp-content/uploads/2022/12/Conditions-generales-dutilisation.pdf">
                Conditions générales d&apos;utilisation
              </a>
            </li>
            <li>
              <a href="https://securiform.fr/wp-content/uploads/2023/05/Accueil-des-personnes-en-situation-de-handicap.pdf">
                Accueil des personnes en situation de handicap
              </a>
            </li>
            <li>
              <a href="https://securiform.fr/wp-content/uploads/2023/05/Accessibilite-de-letablissement.pdf">
                Accessibilité de l&apos;établissement
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="tel:+33320673490" className="lien-tel">
                <PhoneIcon className="icone-tel" />
                03 20 67 34 90
              </a>
            </li>
            <li>
              <Link href="/nous-contacter">Nous contacter</Link>
            </li>
            <li>
              <Link href="/nous-recrutons">Nous recrutons</Link>
            </li>
            <li>
              <Link href="/vgp">Vérifications Générales Périodiques</Link>
            </li>
            <li>
              <Link href="/statistiques">Rapports d&apos;activité</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © <span>{year}</span> SECURIFORM — Organisme de formation à la
          sécurité au travail. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
