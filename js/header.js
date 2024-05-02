const header = `
<div class="container">
      <div class="head__content">
        <h1 class="logo">
          <a href="/" class="logo__link">
            <i class="fa fa-leaf" aria-hidden="true"></i>
            <span>Farmstead</span>
          </a>
        </h1>
       <div class="head__menu">
        <div class="head__search">
          <form action="#">
            <input type="text">
          </form>
        </div>
        <div class="theme">
          <i class="gg-sun"></i>
          <i class="gg-moon"></i>
        </div>
        <div class="menu__icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav>
          <ul>
            <li class="page__home">
              <a href="index.html">Home</a>
            </li>
            <li class="page__about">
              <a href="./about/">About</a>
            </li>
            <li class="page__services">
              <a href="./services/">Services</a>
            </li>
            <li class="page__blog">
              <a href="./blog/">Blog Post</a>
            </li>
            <li class="page__404">
              <a href="./404-page/">404 Page</a>
            </li>
            <li class="page__contact">
              <a href="./contact/">Contact</a>
            </li>
          </ul>
        </nav>
       </div>
      </div>
    </div>
`;

document.addEventListener("DOMContentLoaded", (event) => {
  const homepage = document.querySelector(".header");
  homepage.insertAdjacentHTML("afterbegin", header);
});
