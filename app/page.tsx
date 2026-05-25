import ThemeToggle from '@/components/ThemeToggle'
import Countdown from '@/components/Countdown'
import WaitlistForm from '@/components/WaitlistForm'

const CONTACT_EMAIL = 'hello@voltafinance.tech'

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
    title: 'One Card, Every Currency',
    description: 'A single card that works at any POS, ATM, or online store. Tap and Volta handles the conversion instantly.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Three Wallets, Zero Friction',
    description: 'Hold Naira, Dollars, and USDC side by side. Send or spend from any balance without manual conversion.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'No More P2P',
    description: 'Send 50,000 to anyone in Nigeria directly from your USDC balance. No P2P. No waiting. No risk.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Real USD Account',
    description: 'Get a real US account and routing number. Receive from Upwork, Deel, or any client abroad directly.',
  },
]

export default function Home() {
  return (
    <div className="relative min-h-screen" style={{ position: 'relative', zIndex: 1 }}>

      {/* Nav */}
      <nav
        className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-5"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
            <img src="/logo.png" alt="Volta" width={32} height={32} className="w-full h-full object-cover" />
          </div>
          <span
            className="text-base font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Volta Finance
          </span>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#waitlist"
            className="volta-btn text-sm px-4 py-2 rounded-lg"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section relative z-10 pt-20 pb-16">
        <div className="hero-dot-grid" />
        <div className="hero-dot-glow glow-zone-1" />
        <div className="hero-dot-glow glow-zone-2" />
        <div className="hero-dot-glow glow-zone-3" />
        <div className="hero-dot-glow glow-zone-4" />
        <div className="hero-dot-glow glow-zone-5" />
        <div className="hero-dot-glow glow-zone-6" />
        <div className="hero-dot-glow glow-zone-7" />

        {/* Mesh background */}
        <div className="mesh-bg">
          <div className="mesh-orb mesh-orb-1" />
          <div className="mesh-orb mesh-orb-2" />
          <div className="mesh-orb mesh-orb-3" />
        </div>

        <div className="hero-glow" />
        <div className="relative z-10 px-6 sm:px-10 max-w-5xl mx-auto">

          {/* Headline */}
          <h1
            className="animate-fade-up delay-100 text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Spend whatever<br />
            you hold,{' '}
            <span style={{ color: 'var(--indigo)' }}>as whatever</span>
            <br />you need.
          </h1>

          {/* Subtext */}
          <p
            className="animate-fade-up delay-200 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Volta is the all-in-one account where your Naira, Dollars, and USDC live together.
            Send, receive, and spend across currencies seamlessly - no P2P, no conversions, no apps to juggle.
          </p>

          {/* Countdown */}
          <div className="animate-fade-up delay-300 mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
              MVP Launch Countdown
            </p>
            <div className="countdown-mobile-safe">
              <Countdown />
            </div>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Features */}
      <section className="relative z-10 px-6 sm:px-10 py-16 max-w-5xl mx-auto">
        <p
          className="animate-fade-up text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ color: 'var(--text-muted)' }}
        >
          What we&apos;re building
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`feature-card rounded-2xl p-6 animate-fade-up delay-${(i + 1) * 100}`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: 'var(--indigo-muted)',
                  color: 'var(--indigo)',
                }}
              >
                {feature.icon}
              </div>
              <h3
                className="font-bold text-base mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Waitlist */}
      <section
        id="waitlist"
        className="relative z-10 px-6 sm:px-10 py-16 max-w-5xl mx-auto"
      >
        <div className="max-w-xl">
          <p
            className="animate-fade-up text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--text-muted)' }}
          >
            Early Access
          </p>
          <h2
            className="animate-fade-up delay-100 text-3xl sm:text-4xl font-black leading-tight mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Be first in line.
          </h2>
          <p
            className="animate-fade-up delay-200 text-base mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Join the waitlist for early access, launch updates, and a chance to shape what we build.
          </p>
          <div className="animate-fade-up delay-300">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Footer */}
      <footer
        className="relative z-10 px-6 sm:px-10 py-8 max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md overflow-hidden flex-shrink-0">
            <img src="/logo.png" alt="Volta" width={24} height={24} className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-bold" style={{ color: 'var(--text-secondary)' }}>
            Volta Finance
          </span>
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © 2026
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: 'var(--text-secondary)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Contact Us
          </a>
          <a
            href="https://x.com/voltafinanceltd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: 'var(--text-secondary)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Twitter
          </a>
        </div>
      </footer>

    </div>
  )
}