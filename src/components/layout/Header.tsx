import { BirthdayInfo } from "../birthday/BirthdayInfo";

export default function Header() {
    return (
        <>
            <style>
                {`
        
        @keyframes hd-shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes hd-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.12); }
        }

        .hd-root {
          background: #2C1810;
          border-bottom: 1px solid #E8B86D22;
          position: relative;
          overflow: hidden;
        }
        .hd-root::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
          pointer-events: none;
        }

        .hd-top-stripe {
          height: 2px;
          background: linear-gradient(90deg, #C0614A, #E8B86D, #D4845A, #E8B86D, #C0614A);
          background-size: 300% 100%;
          animation: hd-shimmer 5s linear infinite;
        }

        .hd-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          position: relative;
          z-index: 1;
        }

        .hd-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .hd-brand-icon {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D4845A, #E8B86D);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          animation: hd-pulse 4s ease-in-out infinite;
          flex-shrink: 0;
        }
        .hd-brand-text {
          font-style: italic;
          font-weight: 300;
          font-size: 24px;
          color: #F2C99A;
          letter-spacing: 0.02em;
          line-height: 1;
        }
        .hd-brand-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9B5840;
          line-height: 1;
          margin-top: 2px;
        }

        .hd-badge {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #E8B86D;
          border: 1px solid #E8B86D44;
          border-radius: 999px;
          padding: 8px 18px;
          background: #E8B86D0e;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .hd-badge:hover {
          background: #E8B86D18;
          border-color: #E8B86D88;
        }

        .hd-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #E8B86D22, transparent);
          margin: 0 24px;
        }
      `}</style>

            <header className="hd-root">
                <div className="hd-top-stripe" />

                <div className="hd-nav container m-auto">
                    {/* Brand */}
                    <div className="hd-brand">
                        <div className="hd-brand-icon">🌸</div>
                        <div>
                            <div className="hd-brand-text">스레이마오</div>
                            <div className="hd-brand-sub">birthday celebration</div>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="hd-badge" style={{ fontFamily: 'Kantumruy Pro' }}>
                        ថ្ងៃពិសេសរបស់អ្នក
                    </div>
                </div>

                <div className="hd-divider" />

                <BirthdayInfo />
            </header>
        </>
    );
}