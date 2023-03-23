<template></template>
<script lang="ts" setup>
  import { ref, reactive } from "vue";

  function toSubmit() {
    const form2 = ref(null) as any;

    const state = reactive({
      form: "",
    });

    function postDuns() {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({ iSealKey: "A71883085517" }),
      };
      fetch(
        "https://profiles.dunsregistered.com/TPBR-BAS-004_POR.aspx",
        requestOptions
      ).then((response) => {
        console.log(response);

        window.open(
          "https://profiles.dunsregistered.com/TPBR-BAS-004_POR.aspx",
          "formresult",
          "toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=1020,height=700,Left=0,top=0,titlebar=yes"
        );
      });
    }

    postDuns();

    /*     form2.submit(); */
  }
</script>
