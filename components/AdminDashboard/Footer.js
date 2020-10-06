const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div class="row">
      <footer class="sticky-footer">
        <div class="container">
          <div class="text-center">
            <p>Loctech &copy; {currentYear} Loctech. All Rights Reserved By <a href="https://www.loctechng.com/" target="blank">Loctechng</a></p>
          </div>
        </div>
      </footer>
      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fa fa-angle-up"></i>
      </a>
    </div>
  )
}

export default Footer;