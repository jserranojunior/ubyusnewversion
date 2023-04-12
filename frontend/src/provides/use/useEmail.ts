import axios from "axios";
import state from "./storeEmail";
import { toRefs } from "vue";

const instance = axios.create({
  // baseURL: "https://ubyusadvisors.com",
  baseURL: "https://ubyusadvisors.com",
});

export const useEmail = () => {
  async function sendEmail() {
    state.statusSendmail = "enviandoEmail";
    const url = `/back?name=${state.inputsEmail.name}&email=${state.inputsEmail.email}&message=${state.inputsEmail.message}&phone=${state.inputsEmail.phone}`;
    // const url = `/back?name=${state.inputsEmail.name}&email=${state.inputsEmail.email}&message=${state.inputsEmail.message}`;

    instance
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        state.statusSendmail = "enviadoComSuccesso";
        state.inputsEmail.name = "";
        state.inputsEmail.email = "";
        state.inputsEmail.message = "";

        return true;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        state.statusSendmail = "erroAoEnviarEmail";
        return false;
      });
  }

  return { sendEmail, ...toRefs(state) };
};
