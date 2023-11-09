export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <p className="footer__copyright">
      Copyright &copy; SIFOX Technologies. All rights reserved | {currentYear}
    </p>
  );
}
