const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black py-5 text-center text-gray-200">
      <p>
        Develop By &copy;{" "}
        <span className="text-red-500">Yasin KHan Rabbi </span>
        {year}
      </p>
    </footer>
  );
};

export default Footer;
