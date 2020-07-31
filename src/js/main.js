const $ = (element) => document.getElementById(element);

class Model {
    constructor({  } = {}) {
        this.accessKey = 'kBhKp8DtvAU5rOFphaQOr_lVxKZkBzBUYSdGzI0yQ14',
        this.secretKey = 'rKiNW9tfYItmKkXQwujyttdB8MoBVuZhSS5HBVmf-No',
        this.baseApi = 'https://api.unsplash.com/'
    }
}

class View {
    constructor({  } = {}) {
        this.dom = {
            loader: $('loader'),
        };
    }

    showLoader() {
        this.dom.loader.hidden = false;
    }

    hideLoader() {
        this.dom.loader.hidden = true;
    }
}

class Controller {
    constructor({  } = {}) {
        
    }
}

class App {
    constructor({ model, view, controller }) {
        this.model = model;
        this.view = view;
        this.controller = controller;
    }
}

const app = new App({
    model: new Model(),
    view: new View(),
    controller: new Controller(),
});

console.log(app);
