"use client";
import Link from "next/link";
import AcccentTitle from "../AcccentTitle/AccentTitle";
import "./Contacts.scss";
import Form from "../Form/Form";
export default function Contacts() {
  return (
    <section className="contacts container" id="contacts">
      <div className="contacts__wrap">
        <div className="contacts__content">
          <AcccentTitle>Contacts</AcccentTitle>
          <span>Head office:</span>
          <div className="contacts__address">
            5th Floor, The CORE Building No. 62, ICT Avenue, Cybercity, Ebene,
            Mauritius
          </div>
          <span>phone:</span>
          <Link href="tel:+2305773116">+230 5773 116</Link>
          <span>Operational HQ in Kenya:</span>
          <div className="contacts__address">
            7th Floor, CMS Africa, Chania Avenue, Kilimani, Nairobi, Kenya
          </div>
          <span>phone:</span>
          <Link href="tel:+254786898658">+254 786 898 658</Link>
          <span>Office in Nigeria:</span>
          <div className="contacts__address">
            Primrose Drive, Block H, Plot 5, Pinnock Estate Lekki, Lagos State,
            Nigeria
          </div>
          <span>phone:</span>
          <Link href="tel:+2439123800000">+243 912 380 0000</Link>
          <span>Office in DRC (Democratic Republic of the Congo):</span>
          <div className="contacts__address">
            Silikin Village, 372, av. Colonel Mondjiba, Quartier/ Basoko,
            Commune/ Ngaliema, Kinshasa
          </div>
          <div className="contacts__social">
            <div className="contacts__social-item">
              <span>mail:</span>
              <Link href="mailto:info@sifoxtech.com">info@sifoxtech.com</Link>
            </div>
            <div className="contacts__social-item">
              <span>social media:</span>
              <Link
                href="https://www.linkedin.com/company/sifox-technologies"
                target="_blank"
              >
                Linkedin
              </Link>
              {/* <Link href="#">Facebook</Link>
              <Link href="#">YouTube</Link>
              <Link href="#">WhatsApp</Link> */}
            </div>
          </div>
        </div>

        <Form />
      </div>
    </section>
  );
}
