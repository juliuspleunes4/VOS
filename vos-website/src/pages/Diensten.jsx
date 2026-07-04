import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen, Mic, ClipboardList, Users, Network, Megaphone, ArrowRight, CheckCircle2,
} from 'lucide-react';
import './Diensten.css';

const diensten = [
  {
    id: 'scholing',
    Icon: BookOpen,
    label: 'Nascholing',
    title: 'Scholing & nascholing.',
    intro: 'Geaccrediteerde nascholing voor zorgprofessionals. Inhoudelijk sterk, direct toepasbaar.',
    body: [
      'VOS verzorgt nascholing voor huisartsen, POH\'s en praktijkassistentes, zowel individueel als in groepsverband. De scholingen sluiten aan op de dagelijkse praktijk en zijn gericht op directe toepasbaarheid.',
      'U kunt kiezen voor klassikale scholing voor grotere groepen, of voor kleinschalige in-company nascholing bij u op de praktijk.',
    ],
    punten: [
      'Klassikale nascholing voor groepen',
      'In-company scholing op de eigen praktijk',
      'Focus op hart- en vaatziekten / CVRM',
      'Inhoudelijk gedragen door een kaderarts',
      'Informeer naar accreditatiemogelijkheden',
    ],
    doelgroep: "Huisartsen, POH's, praktijkassistentes, zorggroepen",
  },
  {
    id: 'lezingen',
    Icon: Mic,
    label: 'Lezingen',
    title: 'Lezingen & workshops.',
    intro: 'Interactieve lezingen en workshops over gezondheidszorgonderwerpen, voor professionals en publiek.',
    body: [
      'VOS verzorgt lezingen en workshops op maat, afgestemd op de vraag van de opdrachtgever. De aanpak is interactief en gericht op betrokkenheid van de deelnemers.',
      'Een voorbeeld is de publiekslezing over stress en ouder worden. Thematische workshops voor zorgprofessionals behoren ook tot het aanbod.',
    ],
    punten: [
      'Interactieve opzet',
      'Afgestemd op uw doelgroep',
      'Beschikbaar voor zorgprofessionals én publiek',
      'Thema\'s onder meer: hart- en vaatziekten, preventie, chronische aandoeningen',
    ],
    doelgroep: 'Zorgprofessionals, welzijnsorganisaties, publiek',
  },
  {
    id: 'praktijkbeoordeling',
    Icon: ClipboardList,
    label: 'Praktijkbeoordeling',
    title: 'Praktijkbeoordeling chronische zorg.',
    intro: 'Een integraal traject: beoordeling, verbeterplan en scholing in één samenhangende aanpak.',
    body: [
      'Huisartspraktijken worden beoordeeld op indicatoren voor chronische zorg, met bijzondere aandacht voor hart- en vaatziekten en CVRM. Na de beoordeling volgt een verbeterplan en een verbetergesprek.',
      'Waar gewenst wordt het traject aangevuld met gerichte scholing. Van meten naar weten naar beter, alles in één hand.',
    ],
    punten: [
      'Beoordeling op indicatoren chronische zorg',
      'Verbeterplan op maat',
      'Verbetergesprek met de praktijk',
      'Aanvullende scholing waar nodig',
      'Specialisatie in CVRM en hart- en vaatziekten',
      'Volledig traject bij één aanspreekpunt',
    ],
    doelgroep: 'Huisartspraktijken, zorggroepen',
    highlight: true,
  },
  {
    id: 'intervisie',
    Icon: Users,
    label: "Intervisie POH's",
    title: "Intervisie voor POH's.",
    intro: "Begeleide intervisie voor praktijkondersteuners: reflectie, casuïstiek en professionele ontwikkeling.",
    body: [
      "VOS begeleidt intervisiegroepen voor praktijkondersteuners (POH's somatiek). Intervisie helpt om casuïstiek te bespreken, van elkaar te leren en professioneel te groeien.",
      'De begeleiding is inhoudelijk betrokken. Jeanette brengt haar expertise als kaderarts in waar dat meerwaarde heeft, met de eigen leervraag van de POH als vertrekpunt.',
    ],
    punten: [
      'Begeleiding van intervisiegroepen',
      'Focus op casuïstiek uit de dagelijkse praktijk',
      'Inhoudelijke ondersteuning door kaderarts waar gewenst',
      'Geschikt voor bestaande en nieuwe intervisiegroepen',
    ],
    doelgroep: "POH's somatiek",
  },
  {
    id: 'zorggroepen',
    Icon: Network,
    label: 'Zorggroepen',
    title: 'Ondersteuning zorggroepen.',
    intro: 'Procesondersteuning en advies voor zorggroepen op het gebied van CVRM en ketenzorg.',
    body: [
      'VOS ondersteunt zorggroepen bij de organisatie en verbetering van de ketenzorg, met name op het gebied van hart- en vaatziekten en cardiovasculair risicomanagement.',
      'Dit omvat procesondersteuning, advies over zorgstandaarden, begeleiding bij kwaliteitsverbetering en scholing voor het netwerk van aangesloten praktijken.',
    ],
    punten: [
      'Procesondersteuning CVRM en ketenzorg',
      'Advies over kwaliteitsverbetering',
      'Scholing voor aangesloten praktijken',
      'Maatwerk per zorggroep',
    ],
    doelgroep: 'Zorggroepen',
  },
  {
    id: 'publieksvoorlichting',
    Icon: Megaphone,
    label: 'Publieksvoorlichting',
    title: 'Publieksvoorlichting.',
    intro: 'Toegankelijke voorlichting voor burgers en patiënten, in opdracht van welzijnsorganisaties of gemeenten.',
    body: [
      'VOS verzorgt publieksvoorlichting voor welzijnsorganisaties, patiëntengroepen en andere maatschappelijke organisaties. De voorlichting is laagdrempelig, interactief en gericht op bewustwording.',
      'Een voorbeeld is een interactieve avond over stress en ouder worden. Andere thema\'s zijn mogelijk, zoals hart- en vaatziekten, preventie en bewegen.',
    ],
    punten: [
      'Toegankelijk voor niet-medisch publiek',
      'Interactief en persoonlijk',
      'Op locatie bij uw organisatie',
      "Thema's in overleg te bepalen",
    ],
    doelgroep: 'Welzijnsorganisaties, patiëntengroepen, burgers',
  },
];

export default function Diensten() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [hash]);

  return (
    <main id="main-content">
      <section className="page-header">
        <div className="container">
          <span className="label">Aanbod</span>
          <h1>Diensten.</h1>
          <p className="page-header__sub">
            Een volledig palet aan scholing, advies en voorlichting voor de eerstelijns gezondheidszorg.
            Altijd praktijkgericht, altijd inhoudelijk sterk.
          </p>
        </div>
      </section>

      <nav className="diensten-nav" aria-label="Ga naar dienst">
        <div className="container diensten-nav__row">
          {diensten.map(d => (
            <a key={d.id} href={`#${d.id}`} className="diensten-nav__item">
              <d.Icon size={13} strokeWidth={1.5} />
              {d.label}
            </a>
          ))}
        </div>
      </nav>

      {diensten.map((d, i) => (
        <section
          key={d.id}
          id={d.id}
          className={`section dienst-sec${i % 2 === 1 ? ' section--cream' : ''}`}
        >
          <div className="container">
            <div className="dienst-sec__body">
              <div className="dienst-sec__main">
                <div className="dienst-sec__head">
                  <div className="dienst-sec__icon-wrap">
                    <d.Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="dienst-sec__label-row">
                      <span className="label">{d.label}</span>
                      {d.highlight && <span className="dienst-sec__badge">Kernservice</span>}
                    </div>
                    <h2 className="dienst-sec__title">{d.title}</h2>
                    <p className="dienst-sec__intro">{d.intro}</p>
                  </div>
                </div>
                <div className="dienst-sec__tekst">
                  {d.body.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              </div>
              <aside className="dienst-sec__meta">
                <div className="dienst-sec__punten">
                  <h4>Wat dit inhoudt</h4>
                  <ul>
                    {d.punten.map(p => (
                      <li key={p}>
                        <CheckCircle2 size={13} strokeWidth={2} className="dienst-sec__check" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="dienst-sec__dg">
                  <span className="dienst-sec__dg-label">Doelgroep</span>
                  <span className="dienst-sec__dg-val">{d.doelgroep}</span>
                </div>
                <Link to="/contact" className="btn btn--brass" style={{ width: '100%', justifyContent: 'center' }}>
                  Informatie aanvragen <ArrowRight size={14} />
                </Link>
              </aside>
            </div>
          </div>
        </section>
      ))}

      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <h2>Klaar voor de volgende stap?</h2>
          <p className="intro" style={{ margin: '0 auto 2rem' }}>
            Neem contact op voor een offerte of een vrijblijvend gesprek over de mogelijkheden.
          </p>
          <Link to="/contact" className="btn btn--brass">
            Scholing aanvragen <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
