const $ = (element) => document.getElementById(element);
const debug = true;

const utils = {
    deepEqual: function(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    },
    createLog: function() {
        let n = 0;
        return (msg, color = null) => {
            if (!debug) return void 0;

            if (msg instanceof Error) {
                console.error(`${new Date().toISOString()}-LOG-#${++n} => ${msg}`);
                return false;
            }
            console.log(`%c${new Date().toISOString()}-LOG-#${++n} => ${msg}`, `${color ? 'color:' + color : ''}`);
            return true;
        }
    },
    timeout: function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    wait: async function(ms) {
        return await Promise.all([this.timeout(ms / 2)], [this.timeout(ms / 2)]);
    }
};

class Model {
    constructor({  } = {}) {
        this.accessKey = 'kBhKp8DtvAU5rOFphaQOr_lVxKZkBzBUYSdGzI0yQ14';
        this.secretKey = 'rKiNW9tfYItmKkXQwujyttdB8MoBVuZhSS5HBVmf-No';
        this.count = 10;
        this.baseApi = 'https://api.unsplash.com';
        this.randomApi = `${this.baseApi}/photos/random?client_id=${this.accessKey}&count=${this.count}`;

        this.photoStore = [];
        this.imagesLoaded = false;
    }

    constructSearchApiUrl(query) {
        return `${this.baseApi}/search/photos?client_id=${this.accessKey}&count=${this.count}&query=${query}`;
    }

    setCount(n) {
        this.count = n;
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

    renderImage() {

    }
}

class Controller {
    constructor({  } = {}) {
        
    }

    async getPhotos(model) {
        try {
            const res = await fetch(model.randomApi);
            return res.json();
        } catch (err) {
            return Promise.reject(err);
        }
    }
}

class Photo {
    constructor(photo) {
        this.id = photo.id;
        this.likes = photo.likes;
        this.description = photo.description;
        this.location = {
            latitude: photo.location.latitude,
            longitude: photo.location.longitude
        };
        this.urls = {
            raw: photo.urls.raw,
            regular: photo.urls.regular,
            small: photo.urls.small
        };
        this.links = {
            self: photo.links.self,
            html: photo.links.html,
            download: photo.links.download
        };
        this.user = {
            id: photo.user.id,
            username: photo.user.username,
            name: photo.user.name,
            portfolio_url: photo.user.portfolio_url,
            bio: photo.user.bio,
            location: photo.user.location,
            instagram_username: photo.user.instagram_username,
            links: {
                self: photo.user.links.self,
                html: photo.user.links.html,
                photos: photo.user.links.photos,
                likes: photo.user.links.likes,
                portfolio: photo.user.links.portfolio
            }
        }
    }
}

class App {
    constructor({ model, view, controller, log }) {
        this.model = model;
        this.view = view;
        this.controller = controller;
        this.log = log;
    }

    async getPhotos() {
        const res = await this.controller.getPhotos(this.model);
        if (res instanceof Error) {
            return this.log(res);
        }

        this.model.photoStore = res.map(photo => new Photo(photo));
        console.log(this.model.photoStore);
    }
}

const log = utils.createLog();

const app = new App({
    model: new Model(),
    view: new View(),
    controller: new Controller(),
    log: log
});

console.log(app);

app.getPhotos();

const ex = {
    "id": "Dwu85P9SOIk",
    "created_at": "2016-05-03T11:00:28-04:00",
    "updated_at": "2016-07-10T11:00:01-05:00",
    "width": 2448,
    "height": 3264,
    "color": "#6E633A",
    "downloads": 1345,
    "likes": 24,
    "liked_by_user": false,
    "description": "A man drinking a coffee.",
    "exif": {
      "make": "Canon",
      "model": "Canon EOS 40D",
      "exposure_time": "0.011111111111111112",
      "aperture": "4.970854",
      "focal_length": "37",
      "iso": 100
    },
    "location": {
      "name": "Montreal, Canada",
      "city": "Montreal",
      "country": "Canada",
      "position": {
        "latitude": 45.473298,
        "longitude": -73.638488
      }
    },
    "current_user_collections": [ // The *current user's* collections that this photo belongs to.
      {
        "id": 206,
        "title": "Makers: Cat and Ben",
        "published_at": "2016-01-12T18:16:09-05:00",
        "last_collected_at": "2016-06-02T13:10:03-04:00",
        "updated_at": "2016-07-10T11:00:01-05:00",
        "cover_photo": null,
        "user": null
      },
      // ... more collections
    ],
    "urls": {
      "raw": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
      "full": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
      "regular": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
      "small": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
      "thumb": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/Dwu85P9SOIk",
      "html": "https://unsplash.com/photos/Dwu85P9SOIk",
      "download": "https://unsplash.com/photos/Dwu85P9SOIk/download",
      "download_location": "https://api.unsplash.com/photos/Dwu85P9SOIk/download"
    },
    "user": {
      "id": "QPxL2MGqfrw",
      "updated_at": "2016-07-10T11:00:01-05:00",
      "username": "exampleuser",
      "name": "Joe Example",
      "portfolio_url": "https://example.com/",
      "bio": "Just an everyday Joe",
      "location": "Montreal",
      "total_likes": 5,
      "total_photos": 10,
      "total_collections": 13,
      "instagram_username": "instantgrammer",
      "twitter_username": "crew",
      "links": {
        "self": "https://api.unsplash.com/users/exampleuser",
        "html": "https://unsplash.com/exampleuser",
        "photos": "https://api.unsplash.com/users/exampleuser/photos",
        "likes": "https://api.unsplash.com/users/exampleuser/likes",
        "portfolio": "https://api.unsplash.com/users/exampleuser/portfolio"
      }
    }
  }
