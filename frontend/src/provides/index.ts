import { provide } from "vue";
import { useLang } from "./use/useLang";
import { useEmail } from "./use/useEmail";

// import { useFinancial } from "@/modules/financeiro/use/useFinancial";
// import { useApiConnect } from "@/http/use/useApiConnect";
// import { useAcl } from "@/modules/acl/use/useAcl.js";

export const Provides = () => {
  // provide("financial", useFinancial());
  provide("lang", useLang());
  provide("email", useEmail());

  // provide("apiconnect", useApiConnect());
  // provide("acl", useAcl());
};
