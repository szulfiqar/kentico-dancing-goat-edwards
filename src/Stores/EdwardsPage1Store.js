import { Client } from '../Client.js';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {
  initLanguageCodeObject,
  defaultLanguage,
  languageCodes
} from '../Utilities/LanguageCodes';
import { spinnerService } from '@simply007org/react-spinners';

let unsubscribe = new Subject();
let changeListeners = [];
const resetStore = () => {
  let languageInitialized = {};
  languageCodes.forEach(language => {
    languageInitialized[language] = false;
  });

  return {
    cafes: initLanguageCodeObject(),
    languageInitialized: languageInitialized
  };
};
let { cafes, languageInitialized } = resetStore();

let notifyChange = newlanguage => {
  changeListeners.forEach(listener => {
    listener(newlanguage);
  });
};

let fetchDetails = language => {
  if (languageInitialized[language]) {
    notifyChange(language);
    return;
  }

  let query = Client.items()
    .type('edwards_demo');
  // if (language) {
  //   query.languageParameter(language);
  // }

  query
    .toObservable()
    .pipe(takeUntil(unsubscribe))
    .subscribe(response => {
      cafes = response.items;
      notifyChange(language);
      languageInitialized[language] = true;
    });
};

class Edwards {
  // Actions

  providePartnerCafes(language) {
    if (spinnerService.isShowing('apiSpinner') === false) {
      spinnerService.show('apiSpinner');
    }
    fetchDetails(language);
  }

  provideCompanyCafes(language) {
    if (spinnerService.isShowing('apiSpinner') === false) {
      spinnerService.show('apiSpinner');
    }
    fetchDetails(language);
  }

  // Methods

  getPartnerCafes(language) {
    spinnerService.hide('apiSpinner');
    return cafes[language].filter(cafe => cafe.country.value !== 'USA');
  }

  getCompanyCafes(language) {
    spinnerService.hide('apiSpinner');
    return cafes;
  }


  fetchPageDetails(language) {
    fetchDetails(language);
  }

  // Listeners

  addChangeListener(listener) {
    changeListeners.push(listener);
  }

  removeChangeListener(listener) {
    changeListeners = changeListeners.filter(element => {
      return element !== listener;
    });
  }

  unsubscribe() {
    unsubscribe.next();
    unsubscribe.complete();
    unsubscribe = new Subject();
  }
}
let EdwardsPage1Store = new Edwards();

export { EdwardsPage1Store, resetStore };
