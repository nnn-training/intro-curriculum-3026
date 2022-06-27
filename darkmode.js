const localStorageKey = 'isLightmode'
const bodyElement = document.body;
const textareaElement = document.querySelector('textarea');
const userPosts = document.getElementsByClassName('card my-3');

//ライトモード、ダークモードの切り替えボタンを取得
const buttonElement = document.querySelectorAll('button')[1];

function getValue() {
  const result = localStorage.getItem(localStorageKey);
  return result === "true";
}

function updateUserPosts(isLightmode) {
  const darkmodeStyle = "card my-3 bg-secondary text-white";
  const lightmodeStyle = "card my-3"
  for (let i = 0; i < userPosts.length; i++) {
    if (userPosts[i].className === darkmodeStyle && isLightmode) {
      userPosts[i].className = lightmodeStyle;
    } else if (userPosts[i].className === lightmodeStyle && !isLightmode) {
      userPosts[i].className = darkmodeStyle;
    }
  }
}

function setDarkmode() {
  bodyElement.className = "container bg-dark text-white";
  textareaElement.className = "form-control bg-secondary text-white";

  //切り替えボタン内の文字を設定
  buttonElement.innerText = 'ライトモードに切り替え'; 
}

function setLightmode() {
  bodyElement.className = "container";
  textareaElement.className = "form-control";

   //切り替えボタン内の文字を設定
  buttonElement.innerText = 'ダークモードに切り替え';
}

function toggle() {
  const isLightmode = getValue();
  localStorage.setItem(localStorageKey, !isLightmode);
  if (isLightmode) {
    setDarkmode();
  } else {
    setLightmode();
  }
  updateUserPosts(!isLightmode);
}

function init() {
  if (!getValue()) {
    updateUserPosts(false);
    setDarkmode();
  }
}