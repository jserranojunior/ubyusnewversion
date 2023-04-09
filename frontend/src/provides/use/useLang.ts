import { toRefs } from "vue";
import { state } from "./storeLang";

export const useLang = () => {
  async function setLangStorage(lang: any) {
    localStorage.setItem("lang", lang);
  }
  function setLangState(lang: any) {
    state.lang = lang;
    console.log(state.lang);
  }
  function verifyLangEnglish() {
    const langStorage: any = localStorage.getItem("lang");
    if (langStorage == "english" || langStorage == "portugues") {
      state.lang = langStorage;
    }
  }
  function setPlaceholderContact(lang: string) {
    if (state.lang == "english") {
      state.placeholderNameContact = "Full Name";
    } else {
      state.placeholderNameContact = "Nome Completo";
    }
  }
  async function changeLang(lang: any) {
    await setLangStorage(lang).then(() => {
      setLangState(lang);
      setPlaceholderContact(lang);
    });
  }

  return { setLangState, verifyLangEnglish, changeLang, ...toRefs(state) };
};
