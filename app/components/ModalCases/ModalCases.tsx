
import Image from "next/image";
import Link from "next/link";
import "./ModalCases.scss";

interface ModalProps {
  onCloseModal: () => void;
}
export default function Modal({ onCloseModal }: ModalProps) {
  return (
    <div className="modal">
      <button className="modal__close" onClick={onCloseModal}>
        <svg
          className="modal__close-svg"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41 1L21 21M1 41L21 21M21 21L1 1L41 41"
            stroke="white"
            strokeWidth="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <Image
        className="modal__img"
        src={"/nigeria-modal.png"}
        alt=""
        width={955}
        height={769}
      ></Image>
      <div className="modal__content">
        <h6>
          <Image src={"/nigeria.png"} alt="" width={41} height={22}></Image>
          Nigeria
        </h6>
        <Link href={""}>
          Sponsored data
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 17L17 2M17 2H2M17 2V17"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </Link>

        <Link href={""}>
          Data distribution
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 17L17 2M17 2H2M17 2V17"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
