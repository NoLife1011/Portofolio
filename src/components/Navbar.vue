
<template>
  <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
    <div class="container">

      <a class="navbar-brand text-white fw-bold" href="#">
        Farrel
      </a>

      <button
        class="navbar-toggler text-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        ☰
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">

          <li class="nav-item">
            <a class="nav-link text-white" href="#hero">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-white" href="#about">About</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-white" href="#projects">Projects</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-white" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.nav-link {
  position: relative;
  color: #ccc;
  transition: 0.3s;
}

/* underline animasi tengah */
.nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -5px;
  width: 0%;
  height: 2px;
  background: #3b82f6;
  transition: 0.3s;
  transform: translateX(-50%);
}

.nav-link:hover {
  color: white;
}

.nav-link:hover::after {
  width: 100%;
}
</style>