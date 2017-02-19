import LocalStore from './localStore';

let store = (name, existing) => {
  return new LocalStore(name, existing, (e) => {
    alert({
      title: 'Browser not supported.',
      text: 'Unfortunately, due to either your browser being out-of-date or being in private browsing mode, it is currently not supported. Please try again with a more up-to-date browser (not in incognito or private browsing mode).'
    });
  });
};

export default store;