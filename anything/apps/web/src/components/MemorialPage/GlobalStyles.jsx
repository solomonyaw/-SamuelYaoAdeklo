export function GlobalStyles() {
  return (
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        --gold: #C9A961;
        --dark-gold: #B8941F;
        --cream: #FAF7F2;
        --light-gray: #F5F5F5;
        --dark-gray: #1A1A1A;
        --white: #FFFFFF;
        --soft-black: #2C2C2C;
        --accent: #8B7355;
      }

      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background-color: var(--white);
        color: var(--soft-black);
        line-height: 1.7;
        overflow-x: hidden;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes flicker {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
      }

      @keyframes glow {
        0%, 100% { 
          text-shadow: 0 0 20px rgba(201, 169, 97, 0.5),
                       0 0 40px rgba(201, 169, 97, 0.3);
        }
        50% { 
          text-shadow: 0 0 30px rgba(201, 169, 97, 0.8),
                       0 0 60px rgba(201, 169, 97, 0.5);
        }
      }

      @keyframes floatUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .scroll-reveal {
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .scroll-reveal.active {
        opacity: 1;
        transform: translateY(0);
      }
    `}</style>
  );
}
