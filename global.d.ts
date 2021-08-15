declare module 'vue-preferences' {
  import { App } from 'vue';
  interface vuePreferenceOptions<T>{
    defaultValue?: T;
    reactive?: Boolean;
  }

  interface vuePreference<T>{
    get: () => T;
    set: (newVal: T) => void;
  }
  
  function preference<T>(key: string, options?: vuePreferenceOptions<T>): vuePreference<T>;

  function install<T>(Vue: App, options?: T): void;

  export {
    preference,
    install
  }
}

declare module 'vue-grid-layout' {
  import { App } from 'vue';
  
  function install<T>(Vue: App, options?: T): void;
  export {
    install
  }
}


type coords = [number, number];