function playSound(e){
    const audio=document.querySelector(`audio[data_key="${e.keyCode}"]`)
    const key=document.querySelector(`.key[data_key="${e.keyCode}"]`)
    if (!audio) return ;
    audio.currentTime=0;
    audio.play();         
    key.classList.add('playing')
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
document.addEventListener('keydown',playSound); 