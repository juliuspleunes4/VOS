import { Link } from 'react-router-dom';
import { Award, BookOpen, Stethoscope, Users, ArrowRight } from 'lucide-react';
import './OverVOS.css';

export default function OverVOS() {
  return (
    <main id="main-content">
      <section className="page-header">
        <div className="container">
          <span className="label">Over ons</span>
          <h1>Over VOS.</h1>
          <p className="page-header__sub">
            Vos Voorlichting Ondersteuning Scholing, opgericht in 2020 door Jeanette Caljouw-Vos
            vanuit de wens om de eerstelijns gezondheidszorg te versterken.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="over__intro">
            <div className="over__text">
              <span className="label">Wie is Jeanette</span>
              <h2>Kaderarts, docent en praktijkkenner.</h2>
              <p>
                Jeanette Caljouw-Vos is kaderarts hart- en vaatziekten, ingeschreven bij de CHBB
                (Commissie Huisartsgeneeskunde Bijscholing en Beoordeling). Ze heeft de NHG-kaderopleiding
                hart- en vaatziekten gevolgd en verbindt daarmee specialistische diepgang aan de
                dagelijkse werkelijkheid van de huisartsengeneeskunde.
              </p>
              <p>
                Als huisarts, actief sinds 1999, weet ze wat er in de spreekkamer werkelijk speelt.
                Die praktijkervaring vormt de basis van alles wat VOS doet: scholing die herkenbaar is,
                adviezen die uitvoerbaar zijn, en beoordelingen die aansluiten bij de context van uw praktijk.
              </p>
              <p>
                Jarenlang was ze docent en projectleider bij Leerpunt Koel, waar ze haar didactische
                vaardigheden verder ontwikkelde. In 2020 richtte ze VOS op als zelfstandige, om
                maatgericht te kunnen werken met individuele praktijken, zorggroepen en
                welzijnsorganisaties.
              </p>
            </div>
            <aside className="over__aside">
              <div className="over__portrait">
                <img src="/images/jeanette.jpg" alt="Jeanette Caljouw-Vos" />
              </div>
            </aside>
          </div>
          <div className="over__creds-card">
            <h4>Registraties &amp; achtergrond</h4>
            <ul className="over__creds-list">
              <li>
                <div className="over__creds-icon"><Award size={15} strokeWidth={1.5} /></div>
                <div>
                  <strong>Kaderarts hart- en vaatziekten</strong>
                  <span>Ingeschreven bij de CHBB</span>
                </div>
              </li>
              <li>
                <div className="over__creds-icon"><BookOpen size={15} strokeWidth={1.5} /></div>
                <div>
                  <strong>NHG-kaderopleiding</strong>
                  <span>Hart- en vaatziekten</span>
                </div>
              </li>
              <li>
                <div className="over__creds-icon"><Stethoscope size={15} strokeWidth={1.5} /></div>
                <div>
                  <strong>Huisarts</strong>
                  <span>Actief sinds 1999</span>
                </div>
              </li>
              <li>
                <div className="over__creds-icon"><Users size={15} strokeWidth={1.5} /></div>
                <div>
                  <strong>Docent &amp; projectleider</strong>
                  <span>Voormalig bij Leerpunt Koel</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Missie */}
      <section className="section section--dark">
        <div className="container">
          <span className="label">Missie</span>
          <h2 style={{ marginBottom: '0.85rem' }}>Waarom VOS bestaat.</h2>
          <p className="intro">
            VOS is opgericht vanuit één overtuiging: de kwaliteit van de eerstelijns gezondheidszorg
            staat of valt met goed opgeleide, goed ondersteunde zorgprofessionals.
          </p>
          <div className="over__waarden">
            {[
              { nr: '01', title: 'De mens centraal.',            text: 'Achter elke indicatorscore zit een patiënt. Scholing en begeleiding staan altijd in dienst van betere zorg voor de mensen die dat nodig hebben.' },
              { nr: '02', title: 'Kwaliteit van eerstelijnszorg.', text: 'De huisartsenpraktijk is de toegangspoort tot de zorg. Investeren in de kwaliteit van de eerstelijn is investeren in het hele zorgstelsel.' },
              { nr: '03', title: 'Praktische toepasbaarheid.',   text: 'Kennis heeft waarde als je er de volgende dag mee aan de slag kunt. Toepasbaarheid staat voorop.' },
            ].map(w => (
              <div key={w.nr} className="waarde">
                <span className="waarde__nr">{w.nr}</span>
                <h3 className="waarde__title">{w.title}</h3>
                <p className="waarde__text">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Betrokkenheid */}
      <section className="section section--cream">
        <div className="container over__betrokken">
          <div>
            <span className="label">Maatschappelijke betrokkenheid</span>
            <h2>Betrokken bij de positie van de huisarts.</h2>
            <p>
              Jeanette volgt de ontwikkelingen in het zorgstelsel op de voet en deelt haar betrokkenheid
              via initiatieven zoals <strong>#HelpDeHuisartsVooruit</strong>. Die brede blik maakt haar
              scholing en advies extra waardevol: ze begrijpt de context waarbinnen u als huisarts of
              POH werkt.
            </p>
          </div>
          <div className="over__portrait over__betrokken-img">
            <img src="/images/bag.jpg" alt="Dokterstas van Jeanette Caljouw-Vos" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <h2>Kennismaken?</h2>
          <p className="intro" style={{ margin: '0 auto 2rem' }}>
            Stel uw vraag of vraag een vrijblijvend gesprek aan over de mogelijkheden
            voor uw praktijk of zorggroep.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn--brass">Contact opnemen <ArrowRight size={14} /></Link>
            <Link to="/diensten" className="btn btn--outline-white">Bekijk het aanbod</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
