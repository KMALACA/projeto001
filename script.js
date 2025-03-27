// ===== TOGGLE MODE =====
function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");
    
    // Atualiza a imagem do perfil
    const profileImg = document.getElementById("profile-img");
    if (html.classList.contains("light")) {
      profileImg.src = siteConfig.profile.images.light;
      profileImg.alt = siteConfig.profile.images.alt.light;
    } else {
      profileImg.src = siteConfig.profile.images.dark;
      profileImg.alt = siteConfig.profile.images.alt.dark;
    }
  }
  
  // ===== EASTER EGG =====
  const easterEgg = {
    audio: new Audio(siteConfig.easterEgg.audio),
    unlocked: false,
    konamiIndex: 0,
    
    // Tenta desbloquear o áudio
    tryUnlock: function() {
      this.audio.volume = 0;
      this.audio.play()
        .then(() => {
          this.audio.pause();
          this.audio.currentTime = 0;
          this.audio.volume = 1;
          this.unlocked = true;
        })
        .catch(() => this.showEnableButton());
    },
    
    // Mostra botão de ativação
    showEnableButton: function() {
      if (document.getElementById('enable-audio-btn')) return;
      
      const button = document.createElement('button');
      button.id = 'enable-audio-btn';
      button.textContent = '🔊 Ativar Som';
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
        this.audio.volume = 1;
        this.audio.play()
          .then(() => {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.unlocked = true;
            button.remove();
          })
          .catch(() => alert('Não foi possível ativar o áudio.'));
      });
      
      document.body.appendChild(button);
    },
    
    // Ativa o easter egg
    activate: function() {
      if (this.unlocked) {
        this.play();
        this.showMessage();
      } else {
        alert('🔊 Ative o som para ouvir o Easter Egg!');
        this.showEnableButton();
      }
    },
    
    // Toca o áudio
    play: function() {
      this.audio.currentTime = 0;
      this.audio.play().catch(console.error);
    },
    
    // Mostra mensagem
    showMessage: function() {
      const msg = document.createElement('div');
      msg.textContent = '🎮🎵 Easter Egg Ativado!';
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
    },
    
    // Verifica o código Konami
    checkKonami: function(key) {
      if (key === siteConfig.easterEgg.konamiCode[this.konamiIndex]) {
        this.konamiIndex++;
        if (this.konamiIndex === siteConfig.easterEgg.konamiCode.length) {
          this.activate();
          this.konamiIndex = 0;
        }
      } else {
        this.konamiIndex = 0;
      }
    }
  };
  
  // ===== INICIALIZAÇÃO =====
  document.addEventListener('DOMContentLoaded', () => {
    // Tenta desbloquear o áudio
    easterEgg.tryUnlock();
    
    // Adiciona listener para o Konami Code
    document.addEventListener('keydown', (e) => {
      easterEgg.checkKonami(e.key);
    });
    
    // Tenta desbloquear com interação do usuário
    document.addEventListener('click', () => {
      if (!easterEgg.unlocked) {
        easterEgg.tryUnlock();
      }
    }, { once: true });
  });