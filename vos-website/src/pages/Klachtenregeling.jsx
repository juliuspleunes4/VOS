import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Legal.css';

export default function Klachtenregeling() {
  return (
    <main id="main-content">
      <section className="page-header">
        <div className="container">
          <span className="label">Juridisch</span>
          <h1>Klachtenregeling.</h1>
          <p className="page-header__sub">
            Klachtenregeling op grond van de Wet kwaliteit, klachten en geschillen zorg (Wkkgz).
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal__body">
            <span className="legal__meta">Vastgesteld: januari 2021 &nbsp;·&nbsp; Laatst bijgewerkt: mei 2025</span>

            <p>
              VOS hecht grote waarde aan de kwaliteit van haar dienstverlening. Als u desondanks
              ontevreden bent over een geleverde dienst, kunt u een klacht indienen. VOS behandelt
              klachten zorgvuldig, vertrouwelijk en kosteloos.
            </p>

            <h2>Stap 1 — Bespreek de klacht direct</h2>
            <p>
              De eerste stap is contact opnemen met Jeanette Caljouw-Vos. Veel klachten kunnen
              worden opgelost door een goed gesprek. U kunt uw klacht mondeling of schriftelijk
              kenbaar maken via:
            </p>
            <div className="legal__contact-block">
              <p><strong>Jeanette Caljouw-Vos</strong></p>
              <p>Vos Voorlichting Ondersteuning Scholing</p>
              <p>Prinses Margrietstraat 48, 2983 EH Ridderkerk</p>
              <p>E-mail: <a href="mailto:info@vos-scholing.nl">info@vos-scholing.nl</a></p>
            </div>
            <p>
              VOS streeft ernaar uw klacht binnen <strong>twee weken</strong> na ontvangst te
              beantwoorden. Als meer tijd nodig is, ontvangt u hierover bericht.
            </p>

            <h2>Stap 2 — Onafhankelijke klachtenfunctionaris</h2>
            <p>
              Bent u niet tevreden met de reactie, of geeft u de voorkeur aan een onafhankelijke
              behandeling van uw klacht? Dan kunt u uw klacht indienen bij een onafhankelijke
              klachtenfunctionaris. VOS is aangesloten bij:
            </p>
            <p>
              <strong>Klachtenportaal Zorg</strong><br />
              Klachtenportaal Zorg biedt een laagdrempelige, onafhankelijke klachtenbehandeling
              voor zorgaanbieders. Een klachtenfunctionaris bemiddelt kosteloos tussen u en VOS.
            </p>
            <ul>
              <li>Website: <a href="https://www.klachtenportaalzorg.nl" target="_blank" rel="noopener noreferrer">klachtenportaalzorg.nl</a></li>
              <li>De klachtenfunctionaris neemt doorgaans binnen vijf werkdagen contact met u op</li>
              <li>De bemiddeling is gratis voor klager en zorgaanbieder</li>
            </ul>

            <h2>Stap 3 — Geschillencommissie</h2>
            <p>
              Leidt de bemiddeling niet tot een bevredigende oplossing, dan kunt u het geschil
              voorleggen aan de bevoegde geschillencommissie. VOS is aangesloten bij de
              geschilleninstantie die verbonden is aan Klachtenportaal Zorg. De geschillencommissie
              doet een bindende uitspraak.
            </p>
            <ul>
              <li>Het indienen van een geschil is mogelijk na het doorlopen van de klachtenprocedure</li>
              <li>Voor de klager zijn aan de procedure geringe kosten verbonden</li>
              <li>Uitspraken zijn bindend voor beide partijen</li>
            </ul>

            <h2>Vertrouwelijkheid</h2>
            <p>
              Alle informatie die u deelt in het kader van een klacht wordt strikt vertrouwelijk
              behandeld en niet met derden gedeeld, tenzij dit noodzakelijk is voor de behandeling
              van de klacht of wettelijk verplicht is.
            </p>

            <h2>Registratie</h2>
            <p>
              VOS registreert alle ontvangen klachten en de wijze waarop deze zijn afgehandeld.
              Deze registratie wordt uitsluitend intern gebruikt ter verbetering van de
              dienstverlening.
            </p>

            <h2>Vragen?</h2>
            <p>
              Voor vragen over deze klachtenregeling kunt u contact opnemen via{' '}
              <a href="mailto:info@vos-scholing.nl">info@vos-scholing.nl</a>.
            </p>

            <div style={{ marginTop: '2.5rem' }}>
              <Link to="/contact" className="btn btn--brass">
                Neem contact op <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
