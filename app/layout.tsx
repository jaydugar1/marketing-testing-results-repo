import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Testing Analytics Repository',
  description: 'Lantern Marketing Testing Results and Analysis',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--fg-primary)', fontFamily: 'var(--font-body)' }}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {/* Sticky Header */}
          <header style={{ backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--border-light)', position: 'sticky', top: 0, zIndex: 40 }}>
            <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '16px', paddingBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px' }}>
                {/* Logo and Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                  <div
                    style={{
                      backgroundColor: 'var(--color-green)',
                      color: 'var(--color-cream)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-headline)',
                      fontWeight: '700',
                      fontSize: '18px',
                    }}
                  >
                    T
                  </div>
                  <div>
                    <h1
                      style={{
                        fontFamily: 'var(--font-headline)',
                        fontWeight: '700',
                        color: 'var(--color-green)',
                        fontSize: '15px',
                        margin: '0 0 2px 0',
                        lineHeight: 1.2,
                      }}
                    >
                      Testing Analytics
                    </h1>
                    <p
                      style={{
                        color: 'var(--fg-secondary)',
                        fontSize: '11px',
                        margin: '0',
                        fontFamily: 'var(--font-body)',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Repository & What-If Calculator
                    </p>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <nav style={{ display: 'flex', gap: '8px', marginLeft: 'auto', overflowX: 'auto' }}>
                  <NavLink href="/" label="Dashboard" />
                  <NavLink href="/direct-mail" label="Direct Mail" />
                  <NavLink href="/email" label="Email" />
                  <NavLink href="/tmo" label="TMO" />
                  <NavLink href="/paid-digital" label="Paid Digital" />
                  <NavLink href="/presentations" label="Presentations" />
                </nav>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main style={{ flex: 1 }}>
            <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '32px', paddingRight: '32px' }}>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const isActive = href === '/';
  return (
    <Link
      href={href}
      style={{
        backgroundColor: isActive ? 'var(--color-green)' : 'transparent',
        color: isActive ? 'var(--color-cream)' : 'var(--fg-secondary)',
        fontFamily: 'var(--font-body)',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: '500',
        textDecoration: 'none',
        transition: 'var(--transition-normal)',
        display: 'inline-block',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </Link>
  );
}
