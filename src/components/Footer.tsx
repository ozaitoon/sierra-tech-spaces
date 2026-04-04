import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <Image src="/logo.jpeg" alt="STS" width={32} height={32} />
            <div className="footer-brand-info">
              <span className="footer-brand-name">SIERRA TECH SPACES</span>
              <span className="footer-brand-location">Cairo, Egypt</span>
            </div>
          </div>

          <nav className="footer-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#why">Why Us</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </nav>

          <span className="footer-copy">&copy; 2026 Sierra Tech Spaces</span>
        </div>
      </div>
    </footer>
  );
}
