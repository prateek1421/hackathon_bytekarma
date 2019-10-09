import React from "react";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__logo-box">
        <img src="img/logo.png" alt="Full logo" class="footer__logo" />
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <div class="footer__navigation">
            <ul class="footer__list">
              <li class="footer__item">
                <a href="#" class="footer__link">
                  Company
                </a>
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link">
                  Contact us
                </a>
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link">
                  Carrers
                </a>
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link">
                  Privacy policy
                </a>
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-1-of-2">
          <p class="footer__copyright">
            Built by{" "}
            <a href="#" class="footer__link">
              CO2 Wallet group
            </a>{" "}
            for hackethon. Copyright &copy; by Car-Ma.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
