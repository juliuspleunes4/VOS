import { useState } from 'react';
import { ArrowRight, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const dienstOpties = [
  'Scholing & nascholing',
  'Lezingen & workshops',
  'Praktijkbeoordeling chronische zorg',
  "Intervisie POH's",
  'Ondersteuning zorggroepen',
  'Publieksvoorlichting',
  'Anders / nog niet zeker',
];

export default function Contact() {
  const [form, setForm] = useState({ naam: '', organisatie: '', email: '', telefoon: '', dienst: '', bericht: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <span className="label">Contact</span>
          <h1>Contact &amp; offerte aanvragen</h1>
          <p className="page-header__sub">
            Stel uw vraag, vraag een offerte aan of plan een vrijblijvend kennismakingsgesprek.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact__grid">
          {/* Formulier */}
          <div>
            <h2 style={{ marginBottom: '0.5rem' }}>Stuur een bericht</h2>
            <p className="contact__sub">
              Vul het formulier in en geef aan waar uw interesse naar uitgaat.
              U ontvangt binnen twee werkdagen een reactie.
            </p>

            {submitted ? (
              <div className="contact__ok">
                <div className="contact__ok-mark">✓</div>
                <h3>Bericht ontvangen</h3>
                <p>
                  Bedankt voor uw bericht. Jeanette neemt zo snel mogelijk contact met u op,
                  uiterlijk binnen twee werkdagen.
                </p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="naam">Naam <span className="req">*</span></label>
                    <input type="text" id="naam" name="naam" value={form.naam} onChange={set} required placeholder="Uw naam" autoComplete="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="organisatie">Organisatie / praktijk</label>
                    <input type="text" id="organisatie" name="organisatie" value={form.organisatie} onChange={set} placeholder="Naam van uw praktijk of organisatie" autoComplete="organization" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-mailadres <span className="req">*</span></label>
                    <input type="email" id="email" name="email" value={form.email} onChange={set} required placeholder="uw@email.nl" autoComplete="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefoon">Telefoonnummer</label>
                    <input type="tel" id="telefoon" name="telefoon" value={form.telefoon} onChange={set} placeholder="Optioneel" autoComplete="tel" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="dienst">Interesse</label>
                  <select id="dienst" name="dienst" value={form.dienst} onChange={set}>
                    <option value="">Kies een onderwerp (optioneel)</option>
                    {dienstOpties.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="bericht">Uw vraag of bericht <span className="req">*</span></label>
                  <textarea id="bericht" name="bericht" value={form.bericht} onChange={set} required rows={6} placeholder="Omschrijf uw vraag of situatie. Hoe meer context u geeft, hoe gerichter VOS kan reageren." />
                </div>
                <p className="form-privacy">
                  Uw gegevens worden uitsluitend gebruikt om uw vraag te beantwoorden en niet gedeeld met derden.
                  Zie de <a href="/privacyverklaring">privacyverklaring</a>.
                </p>
                <button type="submit" className="btn btn--brass">
                  Verstuur bericht <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="contact__info">
            <h3 style={{ marginBottom: '1.5rem' }}>Contactgegevens</h3>

            <div className="contact__info-row">
              <div className="contact__info-icon"><Mail size={15} strokeWidth={1.5} /></div>
              <div>
                <div className="contact__info-label">E-mail</div>
                <a href="mailto:info@vos-scholing.nl">info@vos-scholing.nl</a>
              </div>
            </div>
            <div className="contact__info-row">
              <div className="contact__info-icon"><MapPin size={15} strokeWidth={1.5} /></div>
              <div>
                <div className="contact__info-label">Vestigingsadres</div>
                <div>Prinses Margrietstraat 48<br />2983 EH Ridderkerk</div>
              </div>
            </div>
            <div className="contact__info-row">
              <div className="contact__info-icon"><Clock size={15} strokeWidth={1.5} /></div>
              <div>
                <div className="contact__info-label">Reactietijd</div>
                <div>Binnen twee werkdagen</div>
              </div>
            </div>

            <hr className="divider" style={{ margin: '1.75rem 0' }} />

            <h4 style={{ marginBottom: '1rem' }}>Bedrijfsgegevens</h4>
            <table className="contact__table">
              <tbody>
                <tr><th>Naam</th><td>Jeanette Caljouw-Vos</td></tr>
                <tr><th>Handelsnaam</th><td>Vos Voorlichting Ondersteuning Scholing</td></tr>
                <tr><th>KVK</th><td>76737802</td></tr>
                <tr><th>Beroepstitel</th><td>Kaderarts hart- en vaatziekten (CHBB)</td></tr>
              </tbody>
            </table>
          </aside>
        </div>
      </section>
    </main>
  );
}
