function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {       
      /// EXAM: COMPLÉTEZ LE CODE ICI ! 
      const journal = data;
      console.log(journal);

      // TODO 1: REMPLIR LE HEADER
 let titreContainer = document.getElementById('nom-journal')
      console.log(titreContainer);
 
      let titrePrincipale = journal.title
      console.log(titrePrincipale);
 
      titreContainer.insertAdjacentHTML("beforeend", titrePrincipale);
 
      let subtitleContainer = document.getElementById('phrase-accroche')
      console.log(subtitleContainer);
 
      let subtitle = journal.strap
      console.log(subtitle);
 
 
      subtitleContainer.insertAdjacentHTML("beforeend", subtitle);
      // TODO 2: REMPLIR LA NAVIGATION
      let themeNav = document.getElementById('themes-nav')
 
 
 
journal.topics.forEach((topic) => {
  let nav= `<div class = container>
  <div class= nav-theme-btn >
<p class = nav-theme-btn:hover  >${topic.title}${topic.icon}</p>
</div>
</div>
  `
    themeNav.insertAdjacentHTML("beforeend", nav);
});

      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL
       let articlesPrincipale = document.getElementById('article-principal')
      let principal = `<div class= container-full>
 <img src= "${journal.lead.imageHero}" class = hero-image  >
 <h3 id = hero-description>${journal.lead.headline}</h3>
 <h2 >${journal.lead.body}</h2>
 <p id = hero-description>${journal.lead.summary}</p>
 <p id = hero-auteur> Par ${journal.lead.author} ; ${journal.lead.date}</p>
 <p class= read-article-btn>${journal.cta.text}</p>
 </div>`
articlesPrincipale.insertAdjacentHTML('afterbegin',principal)
      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
let article=document.getElementById('articles-grid')
     
journal.stories.forEach(histoire => {
  let carte=`<div class =articles-section>
  <div class = container>
  <div class = article-card>
  <div class = article-content>
  <h3 class = article-content h3>${histoire.headline}</h3>
    <img src = "${histoire.image}" class = article-card img>
  <p class = article-content p >${histoire.summary}</p>
  <p class = article-content p >${histoire.body}</p>
  <p class = article-author >Par ${histoire.author}.${histoire.date}</p>
 
   <p class= read-article-btn>${journal.cta.text}</p>
   
 
  </div>`
  article.insertAdjacentHTML('afterbegin',carte)
})
 

      // TODO 5: REMPLIR LES THEMES
let themes=document.getElementById('themes-list')
 
journal.topics.forEach(topic => {
 
  let petiteCarte=`<div class = themes-section>
 
<div class = theme-item>
<p class = theme-icon>${topic.icon} </p>
<h3 class= >${topic.title}</h3>
<p class = >${topic.description}</p>
</div>
</div>
</div>`
 
themes.insertAdjacentHTML("beforeend",petiteCarte)
});
 
      // TODO 6: REMPLIR LES AUTEURS
        let auteur=document.getElementById('authors-list')
      journal.contributors.forEach(contributor => {
        let carteAuteur=`<div class = authors-section>
       <div class = container >
        <div class = author-card>
     <img src = "${contributor.image}" class = author-image >
     <h3 class = author-card h3 >${contributor.firstName}</h3>
       <p>${contributor.expertise} </p>
        <p ="${contributor.bio} " class = author-bio ></p>
        <a href class= author-socials a>${contributor.email}</a>
        </div>
        </div>
        </div>`
      
auteur.insertAdjacentHTML("beforeend",carteAuteur)
      })

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION
let boutton=document.getElementById('call-to-action')
   console.log(boutton);
   
      let btn=`<div class= container>
      <p> Rejoins nous vite!!!</p>
      <p class= cta-button>${journal.cta.label}</p>
      </div>`
           boutton.insertAdjacentHTML("beforeend",btn);
 

      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 // BONUS: 
 // Alert quand on appuie sur le bouton CTA
 // Fonction de filtrage par thème
 // Classer les articles par popularité ou notation
 
