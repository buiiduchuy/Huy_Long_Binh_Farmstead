const footer = `
  <div class="footer_content">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 order-lg-0">
        <div class="foot__contact">
          <h3 class="mb-5">FIND US</h3>
          <p>Address: 10001 Alleghany st, 5th Avenue, 235 Terry, London.</p>
          <p>Phone: <a href="tel:+12 23456790">+12 23456790</a></p>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p>Fax: <a href="fax:+ 11 367 21890">+ 11 367 21890</a></p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 order-lg-2">
        <div class="foot__news">
        <h3 class="mb-5">NEWSLETTER</h3>
          <p>Subscribe to our mailing list and get updates to your email inbox.</p>
        <form action="#" class="form__foot mt-4">
          <input type="email" placeholder="Email Adress">
          <button><i class="fa fa-paper-plane"></i></button>
        </form>
        <div class="foot__social">
          <ul>
            <li>
              <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div class="col-lg-4 order-lg-1">
        <div class="foot__center">
          <h2 class="logo mb-4">
            <a href="/" class="logo__link">
              <i class="fa fa-leaf" aria-hidden="true"></i>
              <span>Farmstead</span>
            </a>
          </h2>
          <p>Duis imperdiet sapien tortor, vitae congue diam auctor vitae. Aliquam eget turpis ornare, euismod ligul aeget, enenatis dui.</p>
          <p class="mt-6">© 2024 Farmstead. All Rights Reserved | WordPress Theme by <a href="#" class="w3L">W3Layouts.</a></p>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="btn__top">
  <a href="#"><i class="fa fa-level-up" aria-hidden="true"></i></a>
  </div>
`;

document.addEventListener("DOMContentLoaded", (event) => {
  const homepage = document.querySelector(".footer");
  homepage.insertAdjacentHTML("afterbegin", footer);
});
