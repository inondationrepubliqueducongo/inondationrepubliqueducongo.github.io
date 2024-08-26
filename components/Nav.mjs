export default {
    name: 'Nav', // необходимо для ссылки на самого себя
    components: {},
    directives: {},
    emits: [],
    props: {},
    setup(props, {attrs, slots, emit, expose}) {
    },
    template: `
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Geoportail</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto m-0">
            <li class="nav-item">
              <RouterLink class="nav-link" exactActiveClass='active' to="/">Inondations</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <RouterLink class="nav-link dropdown-toggle" activeClass='active'
                          :to="{name:'MapFlood'}" role="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                Cartes
              </RouterLink>
              <ul class="dropdown-menu" onclick="this.classList.remove('show')">
                <li>
                  <RouterLink class="dropdown-item" exactActiveClass='active'
                              :to="{name:'MapFlood', params: {territory:'congo'}}">Congo
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item" exactActiveClass='active'
                              :to="{name:'MapFlood', params: {territory:'brazzaville'}}">Brazzaville
                  </RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
}
