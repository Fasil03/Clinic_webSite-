import "@/styles/layout/Footer.css";
import footerData from "@/data/footer";

function Footer() {
  const { clinic, socialLinks } = footerData;

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Clinic Info */}
        <div className="clinic-info">
          <h3>{clinic.name}</h3>
          <p>{clinic.address}</p>

          {clinic.phones.map((phone, index) => (
            <p key={index}>Phone: {phone}</p>
          ))}

          <p>Email: {clinic.email}</p>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {social.name}
            </a>
          ))}
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {clinic.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
