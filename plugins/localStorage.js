import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: "my-app",
      // paths: ['cart']
    })(store);
  });
};
