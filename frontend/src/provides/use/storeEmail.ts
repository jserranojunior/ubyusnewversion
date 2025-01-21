import { reactive, toRefs } from "vue";

const state = reactive({
  inputsEmail: {
    name: "",
    email: "",
    phone: "",
    message: "",
  },
  statusSendmail: "disponivelEnvioEmail",
});

export default state;
