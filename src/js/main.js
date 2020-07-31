class Model {
    constructor({  } = {}) {
        this.accessKey = 'kBhKp8DtvAU5rOFphaQOr_lVxKZkBzBUYSdGzI0yQ14',
        this.secretKey = 'rKiNW9tfYItmKkXQwujyttdB8MoBVuZhSS5HBVmf-No',
        this.baseApi = 'https://api.unsplash.com/'
    }
}

class View {
    constructor({  } = {}) {
        
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
