function toggleMode() {

  const html = document.documentElement
  html.classList.toggle("light")
  

//------------------------------------------------------------------//


  // Pegar a tag img

  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains  ("light")) {
    // se tiver ligth mode, adicionar a imagem light
    img.setAttribute("src", "./assets/002avatar.png")
    img.setAttribute("alt", "anime-solo-leveling-claro")
  } else {
    // se tiver sem light mode,manter a imagem normal

    img.setAttribute("src", "./assets/003perfil.png")
    img.setAttribute("alt", "anime-solo-leveling-dark")

  }
  
}

//---------------------------------------------------------------//


// ===== Configuração do Áudio =====
const audio = new Audio("./midia/happynation.mp3");

let audioUnlocked = false;

// ===== Tenta desbloquear o áudio =====
function tryUnlockAudio() {
    // Tenta tocar o áudio silenciosamente para desbloquear
    audio.volume = 0;
    audio.play()
        .then(() => {
            // Sucesso - áudio pode ser tocado
            audio.pause();
            audio.currentTime = 0;
            audio.volume = 1; // Restaura volume normal
            audioUnlocked = true;
        })


        //.catch(e => {
            // Falha - mostra o botão de ativação
          //  if (!document.getElementById('enable-audio-btn')) {
         //       showEnableAudioButton();
         //   }
        //});
}

// ===== Mostra botão de ativação =====
function showEnableAudioButton() {
    const button = document.createElement('button');
    button.id = 'enable-audio-btn';
    button.innerHTML = '🔊 Ativar Som';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        background: #FF5722;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        z-index: 10000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    button.addEventListener('click', () => {
        // Toca o áudio durante a interação do usuário para desbloquear
        audio.volume = 1;
        audio.play()
            .then(() => {
                audio.pause();
                audio.currentTime = 0;
                audioUnlocked = true;
                button.remove();
            })
            .catch(e => {
                alert('Não foi possível ativar o áudio. Verifique as permissões do navegador.');
            });
    });
    
    document.body.appendChild(button);
}

// ===== Konami Code =====
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                   'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// ===== Ativa o Easter Egg =====
function activateEasterEgg() {
    if (audioUnlocked) {
        playAudio();
        showEasterEggMessage();
    } else {
        // Mostra alerta apenas se ainda não mostrou o botão
        if (!document.getElementById('enable-audio-btn')) {
            alert('🔊 Ative o som para ouvir o Easter Egg!');
            showEnableAudioButton();
        }
    }
}

// ===== Toca o áudio =====
function playAudio() {
    audio.currentTime = 0;
    audio.play().catch(e => console.log("Erro ao tocar:", e));
}

// ===== Mostra mensagem =====
function showEasterEggMessage() {
    const msg = document.createElement('div');
    msg.innerHTML = '🎮🎵 Easter Egg Ativado!';
    msg.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 10000;
        animation: fadeIn 0.5s;
    `;
    
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}

// ===== Inicialização =====
// Tenta desbloquear silenciosamente ao carregar a página
tryUnlockAudio();

// Adiciona evento para tentar desbloquear em qualquer interação do usuário
document.addEventListener('click', () => {
    if (!audioUnlocked) {
        tryUnlockAudio();
    }
}, { once: true });




  



