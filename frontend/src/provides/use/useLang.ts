import { reactive, toRefs } from "vue";

export const useLang = () => {
  const state = reactive({
    lang: "portugues",
    placeholderNameContact: "Nome Completo",
  });
  async function setLangStorage(lang: any) {
    localStorage.setItem("lang", lang);
  }
  function setLangState(lang: any) {
    state.lang = lang;
  }
  function verifyLangEnglish() {
    const langStorage: any = localStorage.getItem("lang");
    if (langStorage == "english" || langStorage == "portugues") {
      return langStorage;
    }
  }
  function setPlaceholderContact(lang: string) {
    if (lang == "english") {
      state.placeholderNameContact = "Full Name";
      console.log(state.placeholderNameContact);
    } else {
      state.placeholderNameContact = "Nome Completo";
      console.log(state.placeholderNameContact);
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
