import React, { useState } from 'react';
import { portfolio } from '../data/portfolio';
import { Tag } from './UI/Tag';

export const Contact: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [buttonText, setButtonText] = useState('Send Message');
  const [errorMsg, setErrorMsg] = useState('');

  const fullName = `${firstName} ${lastName}`.trim();
  const senderDisplay = fullName || '[Awaiting Name]';
  const emailDisplay = email.trim() || '[Awaiting Email]';
  const messageDisplay = message.trim() || '[Awaiting Message]';

  const payloadPreview = `// payload_preview.json
sender:  "${senderDisplay}"
email:   "${emailDisplay}"
message: "${messageDisplay}"`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent || !email.trim() || !message.trim()) {
      setButtonText('Fill all fields + consent');
      setErrorMsg('Please complete all fields and accept the consent checkbox.');
      setTimeout(() => {
        setButtonText('Send Message');
        setErrorMsg('');
      }, 2200);
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${firstName || 'a collaborator'}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${fullName} (${email})`);
    window.location.href = `mailto:${portfolio.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" aria-label="Contact Section">
      <Tag className="rv">// Live dispatch node</Tag>
      
      <div className="cwrap">
        <div className="panel rv">
          <h2 style={{ marginTop: 0 }}>Let's Build Something Exceptional.</h2>
          <p className="sub">
            Fill out the form or preview your live payload stream right below.
          </p>
          <pre id="pay" aria-label="Live Payload Preview">
            {payloadPreview}
          </pre>
        </div>

        <form className="panel f rv" id="form" onSubmit={handleSubmit}>
          <div className="two">
            <input
              id="fn"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              aria-label="First Name"
            />
            <input
              id="ln2"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              aria-label="Last Name"
            />
          </div>

          <input
            id="em"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email Address"
          />

          <textarea
            id="ms"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            aria-label="Your Message"
          />

          <label className="c">
            <input
              type="checkbox"
              id="ok"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
            />
            I give permission to contact me at this email address.
          </label>

          {errorMsg && (
            <div style={{ color: '#f87171', fontSize: '12px', fontFamily: '"JetBrains Mono", monospace' }}>
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            className="btn p"
            id="send"
            style={{ justifySelf: 'end' }}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};
