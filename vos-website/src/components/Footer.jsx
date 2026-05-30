import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/logo.png" alt="VOS" className="footer__logo-img" />
            <p className="footer__tagline">
              Voorlichting, ondersteuning en scholing voor de eerstelijns gezondheidszorg.
              Inhoudelijk sterk, direct toepasbaar.
            </p>
          </div>

          <div className="footer__col">
            <div className="footer__col-head">Diensten</div>
            <ul>
              <li><Link to="/diensten#scholing">Scholing &amp; nascholing</Link></li>
              <li><Link to="/diensten#lezingen">Lezingen &amp; workshops</Link></li>
              <li><Link to="/diensten#praktijkbeoordeling">Praktijkbeoordeling chronische zorg</Link></li>
              <li><Link to="/diensten#intervisie">Intervisie POH&apos;s</Link></li>
              <li><Link to="/diensten#zorggroepen">Ondersteuning zorggroepen</Link></li>
              <li><Link to="/diensten#publieksvoorlichting">Publieksvoorlichting</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__col-head">Navigatie</div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/over-vos">Over VOS</Link></li>
              <li><Link to="/diensten">Diensten</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col footer__contact">
            <div className="footer__col-head">Contact</div>
            <address>
              <p>Jeanette Caljouw-Vos</p>
              <p>Prinses Margrietstraat 48<br />2983 EH Ridderkerk</p>
              <p><a href="mailto:info@vos-scholing.nl">info@vos-scholing.nl</a></p>
            </address>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <span>© {new Date().getFullYear()} Vos Voorlichting Ondersteuning Scholing</span>
            <span>KVK-nummer: 76737802 &nbsp;·&nbsp; Prinses Margrietstraat 48, 2983 EH Ridderkerk</span>
            <span>Jeanette Caljouw-Vos &nbsp;·&nbsp; Kaderarts hart- en vaatziekten (CHBB)</span>
          </div>
          <div className="footer__links">
            <Link to="/privacyverklaring">Privacyverklaring</Link>
            <Link to="/klachtenregeling">Klachtenregeling (Wkkgz)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
