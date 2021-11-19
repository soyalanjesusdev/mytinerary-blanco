const Footer = () => {
  return (
    <footer class="page-footer font-small blue">
      <div className="fotter">     <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Cities
          </a>
        </li>
      </ul>
      <div class="col-lg-3 col-md-5 mb-6">
        <div class="view overlay z-depth-1-half">
          <img
            src="./styles/congreso-eeuu-1920-2.jpg"
            class="img-fluid"
            alt=""
          />
          <a href="">
            <div class="mask rgba-white-light"></div>
          </a>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="#"> MyTinerary</a>
      </div>
      </div>
 
    </footer>
  );
};

export default Footer;
