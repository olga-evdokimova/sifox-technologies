"use client";
import Link from "next/link";
import AcccentTitle from "../AcccentTitle/AccentTitle";
import "./Contacts.scss";
import Form from "../Form/Form";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
export default function Contacts() {
   const lang = PullState.useState((state) => state.lang);
  return (
    <section className="contacts container" id="contacts">
      <div className="contacts__wrap">
        <div className="contacts__content">
          <AcccentTitle>{Dictionary[lang]["сontacts"]}</AcccentTitle>
          <span>{Dictionary[lang]["head_office"]}</span>
          <div className="contacts__address">
            {Dictionary[lang]["5th_floor"]}
          </div>
          <span>{Dictionary[lang]["tel"]}</span>
          <Link href="tel:+2305773116">+230 5773 116</Link>
          <span>{Dictionary[lang]["operational_hq_in_enya"]}</span>
          <div className="contacts__address">
            {Dictionary[lang]["7th_floor"]}
          </div>
          <span>{Dictionary[lang]["tel"]}</span>
          <Link href="tel:+254786898658">+254 786 898 658</Link>
          <span>{Dictionary[lang]["office_in_nigeria"]}</span>
          <div className="contacts__address">
            {Dictionary[lang]["primrose_drive"]}
          </div>
          <span>{Dictionary[lang]["tel"]}</span>
          <Link href="tel:+2439123800000">+243 912 380 0000</Link>
          <span>{Dictionary[lang]["office_in_dcr"]}</span>
          <div className="contacts__address">
            {Dictionary[lang]["silikin_village"]}
          </div>

          <span>{Dictionary[lang]["partner_in_ivory_coast"]}</span>
          <div className="contacts__address">
            {Dictionary[lang]["lithium_africa"]}
          </div>
          <span>{Dictionary[lang]["tel"]}</span>
          <Link href="tel:+225272255718">+225 27 22 55 71 8</Link>

          <div className="contacts__social">
            <div className="contacts__social-item">
              <span>{Dictionary[lang]["mail"]}</span>
              <Link href="mailto:info@sifoxtech.com">info@sifoxtech.com</Link>
            </div>
            <div className="contacts__social-item">
              <span>{Dictionary[lang]["social_media"]}</span>
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
