

const Footer = () => {
  const nowTime = new Date;

  return (
    <>
      <footer>
        © {nowTime.getFullYear()} PIBAF
      </footer>
    </>
  );
};


export default Footer;