import "../scss/main.scss";

console.log("Hi, I am Alicja - nice to meet you 🚀"); //tutaj warto dodawać coś takiego, ktoś kto przegląda konsole może mu się to spodobać

fetch(
  "https://api.github.com/users/alicjabegovic/repos?sort=created&direction=asc"
)
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector(".projects-grid--js");
    for (let repo of res) {
      const { description, homepage, html_url, name } = repo;

      const template = `<article class="project">
      <div class="project__window">
        <span class="project__circle"></span>
        <span class="project__circle"></span>
        <span class="project__circle"></span>
      </div>
      <div class="project__content">
        <img src="img/github-icon.svg" alt="">
        <h3 class="project__tittle project__grid">
          <span class="project__label">project:</span> 
          <span>${name}</span>
        </h3>
        <p class="project__grid project__grid--description">
          <span class="project__label">description:</span>
          <span>${description}</span>
        </p>
        <p class="project__grid">
          <span class="project__label">demo:</span>
          <span>&lt;<a target="_blank" class="project__link" href="${homepage}" title="${name}- demo">see_here</a>&gt;</span>
        </p>
        <p class="project__grid">
          <span class="project__label">github:</span>
          <span>&lt;<a target="_blank" class="project__link" href="${html_url}" title="${name} - code">source_code</a>&gt;</span>
        </p>
      </div>
    </article>`;

      if (description) {
        container.innerHTML += template;
      }
    }
  })

  .catch((e) => console.log(e));

/* 

jak API będzie mi działało to ja wtedy w HTML-u muszę usunąć dwa pozostałe projekty wpisane na sztywno i zostawić tylko jeden bo API będzie mi automatycznie uzupełniał wszystkie projekty które mam na githubie 

i na końcu muszę wrzucić ikonkę githuba do folderu public i do img

z target="_blank" trzeba uważać bo można zostać ofiarą hackerów, trzeba jeszcze dodać własność, która będzie nas zabezpieczać przezd atakami hackerów - rel= noopener;
trzeba go dodać do każdej strony którą podajemy - to w żaden sposób nie zmienia htmla a my jesteśmy dodatkowo zabezpieczeni :)

uzupełnić sobie w każdym projekcie readme.md
  
*/