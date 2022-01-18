<template>
  <div id="app">
    <header class="header header--topBar bg-primary text-white d-flex align-items-center">
      <b-container>
        Simpli.Foos <b-badge class="badge--custom">Beta</b-badge>
      </b-container>
    </header>
    <main class="main">
      <b-container>
        <router-view/>
      </b-container>
    </main>
  </div>
</template>

<style lang="scss">

// Bootstrap overrides
:root {
  --primary: #7749F8;
  --bg-primary: var(--primary) !important;
  // in design this is marked as danger but is being used as secondary
  --secondary: #DC3545;
  --bg-secondary: var(--secondary) !important;
  --tertiary: #6C757D;
  --bg-tertiary: var(--tertiary) !important;
  --greyLight: #CED4DA;
  // just a little trick i learned to prevent gray vs grey errors
  --grayLight: var(var(--greyLight));
  --greyLightest: #F8F9FA;
  --grayLightest: var(--greyLightest);
}

.primary {
  color: var(--primary) !important;
}
.bg-primary {
  background-color: var(--primary) !important;
}
.btn-secondary {
  background: var(--secondary) !important;
}
.progress {
  border-radius: 2px !important;
}

.btn-link {
  font-weight: 400 !important;
}

#app {
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // put this button style stubborn button override elsewhere
  .btn {
    font-weight: 700;
    border: none;
  }
}

// in between pt-4 and pt-5
main {
  padding-top: 2rem;
}

img {
  width: 100%;
}


.header--topBar {
  position:sticky;
  top: 0;
  font-size: 23px;
  font-weight: 700;
  // design calls for 60px, which is between py-2 and py-3
  min-height: 3.75rem;
  z-index: 1;
}

h1 {
  // maxes out at the 40px (2.5rem) thatS in the design
  font-size: clamp(2rem, 1.5313rem + 1.5625vw, 2.5rem);
  font-weight: 700;
  color: #152536;
}

[role="columnheader"] {
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
.custom-control-label {
  user-select: none;
}

.spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: var(--primary);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

.text-huge {
  font-size: clamp(4rem, -5.6rem + 32vw, 20rem);
}

.text-small {
  font-size: 0.75rem;
}

.pb-rem-5 {
  padding-bottom: 5rem;
}

.lh-1 {
  line-height: 1;
}

.badge {
  &--custom {
    font-size: 0.625rem;
    font-weight: 700;
    background: transparent;
    border:1px solid currentColor;
    text-transform: uppercase;
    vertical-align: middle;
  }
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}

</style>
