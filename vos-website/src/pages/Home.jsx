import { Link } from 'react-router-dom';
import {
  BookOpen, ClipboardList, Users, Megaphone,
  Award, Stethoscope, SlidersHorizontal, Target, TrendingUp, Heart, ArrowRight,
} from 'lucide-react';
import './Home.css';

const diensten = [
  {
    icon: BookOpen,
    title: 'Scholing & nascholing.',
    text: 'Geaccrediteerde nascholing voor zorgprofessionals, klassikaal of in-company bij u op de praktijk.',
    link: '/diensten#scholing',
  },
  {
    icon: ClipboardList,
    title: 'Praktijkbeoordeling chronische zorg.',
    text: 'Beoordeling op indicatoren chronische zorg, gevolgd door een concreet verbeterplan en scholing.',
    link: '/diensten#praktijkbeoordeling',
  },
  {
    icon: Users,
    title: 'Intervisie & ondersteuning.',
    text: 'Begeleiding van intervisie voor POH\'s en procesondersteuning voor zorggroepen (CVRM/ketenzorg).',
    link: '/diensten#intervisie',
  },
  {
    icon: Megaphone,
    title: 'Lezingen & voorlichting.',
    text: 'Praktijkgerichte lezingen en workshops voor zorgprofessionals en publieksvoorlichting op locatie.',
    link: '/diensten#lezingen',
  },
];

const usps = [
  { icon: Award,             title: 'Kaderarts hart- en vaatziekten.', text: 'Ingeschreven bij de CHBB. Scholing vanuit aantoonbare, geregistreerde expertise.' },
  { icon: Stethoscope,       title: 'Vanuit de dagelijkse praktijk.',  text: 'Geen theorie van de zijlijn. De inhoud is direct gebaseerd op de werkelijkheid van de eerstelijns huisartsenzorg.' },
  { icon: SlidersHorizontal, title: 'Maatwerk op elk schaalniveau.',   text: 'Van klassikale nascholing voor grotere groepen tot een gerichte scholingssessie bij u op de praktijk.' },
  { icon: TrendingUp,        title: 'Beoordelen, verbeteren, scholen.', text: 'Het chronische-zorgtraject combineert analyse, verbeterplan en scholing in één samenhangende aanpak.' },
  { icon: Target,            title: 'Praktische toepasbaarheid.',       text: 'Elke module is gericht op wat morgen concreet beter werkt in uw praktijk.' },
  { icon: Heart,             title: 'Zwaartepunt CVRM.',                text: 'Specialistische diepgang in cardiovasculair risicomanagement, toepasbaar voor de hele eerstelijn.' },
];

export default function Home() {
  return (
    <main id="main-content" className="home">

      {/* Hero */}
      <section className="hero">
        <img src="/images/vos.jpg" alt="" aria-hidden="true" className="hero__fox" />
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="label">Eerstelijns gezondheidszorg</span>
            <h1>Scholing die aansluit<br />op uw praktijk.</h1>
            <p className="hero__lead">
              VOS verzorgt geaccrediteerde nascholing, praktijkbeoordelingen en
              intervisie voor huisartsen, POH's en zorggroepen, met focus op
              hart- en vaatziekten en chronische zorg.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--brass">
                Scholing aanvragen <ArrowRight size={15} />
              </Link>
              <Link to="/diensten" className="btn btn--outline-white">Bekijk het aanbod</Link>
            </div>
          </div>
          <aside className="hero__aside">
            <div className="hero__panel">
              <div className="hero__panel-top">
                <Heart size={18} strokeWidth={1.5} />
                <span>Specialisatie hart- en vaatziekten</span>
              </div>
              <ul className="hero__panel-list">
                <li>Nascholing &amp; training</li>
                <li>Praktijkbeoordeling chronische zorg</li>
                <li>Intervisie POH's</li>
                <li>Ondersteuning zorggroepen</li>
                <li>Lezingen &amp; publieksvoorlichting</li>
              </ul>
              <p className="hero__panel-foot">
                Jeanette Caljouw-Vos<br />
                Kaderarts hart- en vaatziekten (CHBB)
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Diensten */}
      <section className="section section--cream">
        <div className="container">
          <span className="label">Aanbod</span>
          <h2 className="home__section-title">Wat VOS voor u doet.</h2>
          <p className="intro">
            Een volledig palet aan scholing, advies en voorlichting, afgestemd op de
            werkelijkheid van de eerstelijns zorgpraktijk.
          </p>
          <div className="home__diensten">
            {diensten.map((d) => {
              const Icon = d.icon;
              return (
                <Link key={d.title} to={d.link} className="dienst-item">
                  <div className="dienst-item__icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="dienst-item__body">
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                    <span className="dienst-item__link">
                      Meer informatie <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="section section--dark">
        <div className="container">
          <span className="label">Waarom VOS</span>
          <h2 className="home__section-title">Expertise en praktijk in één.</h2>
          <p className="intro">
            VOS combineert diepgaande inhoudelijke kennis met scholing die direct
            toepasbaar is in uw dagelijkse werk.
          </p>
          <div className="home__usps">
            {usps.map((u) => {
              const Icon = u.icon;
              return (
                <div key={u.title} className="usp-item">
                  <div className="usp-item__icon">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="usp-item__title">{u.title}</h3>
                    <p className="usp-item__text">{u.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Over */}
      <section className="section">
        <div className="container home__over">
          <div className="home__over-text">
            <span className="label">Over Jeanette Caljouw-Vos</span>
            <h2>Kennis vanuit de eerstelijns werkelijkheid.</h2>
            <p>
              Jeanette Caljouw-Vos is kaderarts hart- en vaatziekten, ingeschreven bij de CHBB.
              Ze combineert jarenlange ervaring als docent en projectleider bij Leerpunt Koel
              met een stevig fundament als werkend huisarts.
            </p>
            <p>
              VOS is in 2020 gestart vanuit de wens om voorlichting, ondersteuning en scholing te bieden
              die écht aansluit op de uitdagingen van de eerstelijns gezondheidszorg. Praktisch, persoonlijk
              en altijd gericht op direct toepasbare kennis.
            </p>
            <Link to="/over-vos" className="btn btn--outline-dark">
              Lees meer over VOS <ArrowRight size={14} />
            </Link>
          </div>
          <div className="home__over-aside">
            <blockquote className="home__quote">
              <p>
                "Scholing heeft alleen waarde als het de volgende dag
                verschil maakt in de spreekkamer."
              </p>
              <footer>Jeanette Caljouw-Vos</footer>
            </blockquote>
            <div className="home__creds">
              <h4>Achtergrond</h4>
              <ul>
                <li>Kaderarts hart- en vaatziekten (CHBB)</li>
                <li>NHG-kaderopleiding hart- en vaatziekten</li>
                <li>Huisarts sinds 1999</li>
                <li>Voormalig docent en projectleider Leerpunt Koel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark home__cta-section">
        <div className="container home__cta">
          <h2>Interesse in scholing of een praktijkbeoordeling?</h2>
          <p>
            Neem contact op voor een vrijblijvend gesprek over de mogelijkheden
            voor uw praktijk of zorggroep.
          </p>
          <div className="home__cta-btns">
            <Link to="/contact" className="btn btn--brass">Neem contact op <ArrowRight size={14} /></Link>
            <Link to="/diensten" className="btn btn--outline-white">Bekijk alle diensten</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
