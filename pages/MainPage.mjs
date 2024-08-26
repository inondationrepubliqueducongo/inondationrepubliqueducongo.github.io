export default {
    name: 'MainPage', // необходимо для ссылки на самого себя
    components: {},
    directives: {},
    emits: [],
    props: [],
    setup(props, {attrs, slots, emit, expose}) {
    },
    template: `
      <div class="headline text-center lead" style="
        background-image: url('../assets/img/river.jpg'); background-size: cover; background-position: center; 
        min-height: 50vh;
        display: flex; flex-direction: column; justify-content: space-evenly; align-items: center;
        color: white; ">
        <h1>Le Géoportail<br/> de la République du Congo</h1>
        <div style="max-width: 60ch">
          Le portail de référence pour l'information géographique sur le territoire,
          dédié au suivi des inondations en République du Congo
        </div>

      </div>
      <p class="text-justify">Les inondations au Congo sont un défi constant pour les communautés locales, provoquant
        des perturbations majeures et des dommages étendus. Notre portail propose des informations géographiques
        précises et à jour pour suivre ces événements et comprendre leur impact. Grâce à nos outils, vous pouvez accéder
        à des cartes détaillées et des données cruciales pour mieux anticiper les crises. Nous visons à aider les
        décideurs et les organisations à élaborer des stratégies de prévention efficaces et à renforcer la résilience
        des régions touchées. Ensemble, agissons pour une gestion plus efficace des inondations et une protection accrue
        des populations.</p>
    `
}
