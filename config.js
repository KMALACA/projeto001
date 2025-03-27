// Configurações do site - fácil de editar
const siteConfig = {
  // Informações do perfil
  profile: {
    name: "Matheus",
    images: {
      dark: "./assets/003perfil.png",
      light: "./assets/002avatar.png",
      alt: {
        dark: "anime-solo-leveling-dark",
        light: "anime-solo-leveling-claro"
      }
    }
  },
  
  // Links principais
  mainLinks: [
    { name: "Steam", url: "https://steamcommunity.com/id/KMALACA" },
    { name: "Twitch", url: "https://www.twitch.tv/matheus_0n" },
    { name: "Linkedin", url: "https://www.linkedin.com" },
    { name: "Github", url: "https://github.com/KMALACA" }
  ],
  
  // Links sociais (ícones)
  socialLinks: [
    { 
      name: "Steam", 
      url: "https://steamcommunity.com/id/KMALACA",
      svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-fill)" xmlns="http://www.w3.org/2000/svg"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.91-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.029 4.524 4.524s-2.03 4.524-4.524 4.524h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.346-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0z"/></svg>`
    },
    { 
      name: "Twitch", 
      url: "https://www.twitch.tv/matheus_0n",
      svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="var(--twitch-icon-fill)" xmlns="http://www.w3.org/2000/svg"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>`
    },
    { 
      name: "Linkedin", 
      url: "https://www.linkedin.com/in/matheus-dias-558931321/",
      svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-fill)" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
    },
    { 
      name: "Github", 
      url: "https://github.com/KMALACA",
      svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-fill)" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`
    }
  ],
  
  // Easter Egg
  easterEgg: {
    audio: "./midia/happynation.mp3",
    konamiCode: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
  },
  
  // Rodapé
  footer: {
    text: "Feito pelo",
    author: "KMALACA",
    authorUrl: "https://github.com/KMALACA",
    year: "2025"
  }
};

// Inicializa os elementos dinâmicos da página
function initDynamicElements() {
  // Preenche links principais
  const mainLinksContainer = document.getElementById('main-links');
  siteConfig.mainLinks.forEach(link => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
    mainLinksContainer.appendChild(li);
  });
  
  // Preenche links sociais
  const socialLinksContainer = document.getElementById('social-links');
  siteConfig.socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = "_blank";
    a.innerHTML = link.svg;
    socialLinksContainer.appendChild(a);
  });
  
  // Atualiza rodapé
  const footer = document.getElementById('footer');
  footer.innerHTML = `
    ${siteConfig.footer.text} <a href="${siteConfig.footer.authorUrl}" target="_blank">${siteConfig.footer.author}</a> // Matheus © ${siteConfig.footer.year}
  `;
}

// Executa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initDynamicElements);