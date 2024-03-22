<script>
  import '../app.css'
</script>

<div class="container">

<nav class="navbar" role="navigation" aria-label="main navigation" style="border-bottom:solid 1px #d7d7d7">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <span class="has-text-weight-bold" style="font-family: 'DM Sans', sans-serif">lemonbrown</span>
      </a>
    </div>
  
    <div class="navbar-menu">
      <div class="navbar-start"> 
        <a href="/categories/dev" class="navbar-item">
            Dev
          </a>
          <a href="/categories/life" class="navbar-item">
            Life
          </a>
      </div>
    </div>
  </nav>
</div>
<div class="section">
    <div class="container">
        <slot />
    </div>
</div>
