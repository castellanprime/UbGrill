const uuid = require("uuid");

var UbgrillAPI = {
  clients: [
    {
      email: "admin@ubgill.com",
      username: "admin07",
      password: "Admin89t",
      token: "g345sf0"
    },
    {
      email: "test@ubgill.com",
      username: "test",
      password: "test",
      token: "d23owe9"
    }
  ],
  reservations: {},
  inventory: {
    byId: {
      Drinks: [
        {
          productName: "Juice",
          productPerOrder: 1,
          price: 1.99,
          quantity: 15,
          details: "* Delivered in ice * (c) Kinyu-z.net",
          link: "http://www.kinyu-z.net/data/wallpapers/125/1142136.jpg"
        },
        {
          productName: "Water",
          productPerOrder: 1,
          price: 1.99,
          quantity: 15,
          details: "* Delivered in ice * (c) Pexels.com",
          link:
            "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
        },
        {
          productName: "Lemonade",
          productPerOrder: 1,
          price: 1.99,
          quantity: 15,
          details: "* Delivered in ice * (c) Pexels.com",
          link:
            "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
        },
        {
          productName: "Soda",
          productPerOrder: 1,
          price: 1.99,
          quantity: 15,
          details: "* Delivered in ice * (c) Pexels.com",
          link:
            "https://images.pexels.com/photos/106368/pexels-photo-106368.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
        },
        {
          productName: "Iced Tea",
          productPerOrder: 1,
          price: 1.99,
          quantity: 15,
          details: "* Delivered in ice * (c) Pexels.com",
          link:
            "https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
        },
        {
          productName: "Coconut Water",
          productPerOrder: 1,
          price: 1.99,
          quantity: 15,
          details: "* Delivered in ice * (c) Pexels.com",
          link:
            "https://images.pexels.com/photos/221074/pexels-photo-221074.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
        }
      ],
      Chairs: [
        {
          productName: "Wood",
          productPerOrder: 2,
          price: 4.99,
          quantity: 30,
          details: "* Delivered as a pair * (c) Pexels.com",
          link:
            "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
        },
        {
          productName: "Steel",
          productPerOrder: 2,
          price: 4.99,
          quantity: 30,
          details: "* Delivered as a pair * (c) Pexels.com",
          link:
            "https://images.pexels.com/photos/279616/pexels-photo-279616.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
        },
        {
          productName: "Recliner",
          productPerOrder: 1,
          price: 9.99,
          quantity: 10,
          details: "* (c) Pexels.com",
          link:
            "https://images.pexels.com/photos/106839/pexels-photo-106839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
        },
        {
          productName: "Plastic",
          productPerOrder: 1,
          price: 3.99,
          quantity: 10,
          details: "* Delivered as a pair * (c) Pexels.com",
          link:
            "https://images.pexels.com/photos/161029/cottage-lake-water-nature-161029.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
        },
        {
          productName: "Table-wood",
          productPerOrder: 1,
          price: 4.99,
          quantity: 15,
          details: "* (c) Pexels.com",
          link:
            "https://images.pexels.com/photos/279626/pexels-photo-279626.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
        },
        {
          productName: "Table-foldable",
          productPerOrder: 1,
          price: 4.99,
          quantity: 15,
          details: "* (c) OpenClip-Art",
          link:
            "https://openclipart.org/image/2400px/svg_to_png/203162/foldingtable.png"
        }
      ],
      Grills: [
        {
          productName: "Small Charcoal Grill",
          productPerOrder: 1,
          quantity: 18,
          price: 4.95,
          link:
            "https://cdn.pixabay.com/photo/2014/04/03/10/06/barbecue-309842_960_720.png",
          details:
            "* High Burn temp * Flavor of food = rich, barbecue taste. * Grill Cover Included * Can cook small amount of meat at once * (c) Pixbay.com"
        },
        {
          productName: "Small Propane Gas Grill",
          productPerOrder: 1,
          quantity: 28,
          price: 24.99,
          link:
            "https://upload.wikimedia.org/wikipedia/commons/a/a4/Propane_gas_grill_in_the_snow_-_closeup.jpeg",
          details:
            "* Portable * Flavour of food = little smoke * Smaller smoke boxes * Small cooking temp * Comes with 6 ltrs of gas(prefilled) * (c) Wikipedia.com"
        },
        {
          productName: "Small Smoker Grill",
          perOrder: 1,
          quantity: 18,
          price: 24.99,
          link:
            "https://upload.wikimedia.org/wikipedia/commons/9/90/Xl_big_green_egg.jpg",
          details:
            "* Lowest cooking temp * Cook for a very long time * Ash removable tray * Comes with 6 ltrs of gas(prefilled)"
        },
        {
          productName: "Big Charcoal Grill",
          productPerOrder: 1,
          quantity: 3,
          price: 5.99,
          details:
            "* Foldable front shelf for more working space * Can cook a lot of food at once * Ash catcher * (c) Flickr.com",
          link:
            "https://c1.staticflickr.com/4/3852/14736175800_687171bcdf_b.jpg"
        },
        {
          productName: "Big Propane Gas Grill",
          productPerOrder: 1,
          quantity: 3,
          price: 38.55,
          link:
            "https://upload.wikimedia.org/wikipedia/commons/2/2b/Gasbbq.JPG",
          details:
            "* Portable * Flavour of food = little smoke * Small cooking temp * Comes with 9 ltrs of gas(prefilled) * (c) Wikipedia.com"
        },
        {
          productName: "Big Smoker Grill",
          perOrder: 1,
          quantity: 3,
          price: 38.55,
          link:
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/2012-04_Smoker_09_RaBoe.jpg",
          details:
            "* Foldable front shelf for more working space\n * Can cook a lot of food at once\n * Ash catcher\n * Comes with 9 ltrs of gas(prefilled) * (c) Wikipedia.com"
        }
      ],
      Other: [
        {
          productName: "Charcoal",
          productPerOrder: 1,
          price: 4.99,
          quantity: 15,
          details: "* Delivered as a 50lb bag * (c) Pexels.com",
          link:
            "https://images.pexels.com/photos/266455/pexels-photo-266455.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
        },
        {
          productName: "Turf",
          productPerOrder: 1,
          price: 4.99,
          quantity: 15,
          details: "* Delivered as a 50in by 50in mat * (c) Pexels.com",
          link:
            "https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
        },
        {
          productName: "Utensils",
          productPerOrder: 1,
          price: 4.99,
          quantity: 15,
          details: "* Includes disposable plastic plates * (c) Pexels.com",
          link:
            "https://images.pexels.com/photos/45187/cutlery-eat-cutlery-set-shiny-45187.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
        }
      ]
    },
    allIds: ["Drinks", "Chairs", "Grills", "Other"]
  },
  orders: {},
  auth: function(name, pass) {
    console.log("Username to check: ", name);
    console.log("Password to check: ", pass);
    for (let i in this.clients) {
      console.log("User, ", this.clients[i]);
      if (
        this.clients[i]["username"] === name &&
        this.clients[i]["password"] === pass
      ) {
        console.log("Found user.");
        return this.clients[i];
      }
    }
  },
  checkToken: function(token) {
    for (let i in this.clients) {
      if (this.clients[i]["token"] === token) {
        console.log("Found user. Can execute function");
        return true;
      }
    }
    return false;
  },
  saveUser: function(name, pass, firstname, lastname, email) {
    var newUser = {
      email: email,
      password: pass,
      firstname: firstname,
      lastname: lastname,
      username: name
    };
    this.reservations[newUser.username] = [];
    newUser.token = uuid.v4();
    this.clients.push(newUser);
    return newUser.token;
  },
  addReservation: function(reservation, username, token) {
    if (this.checkToken(token)) {
      this.reservations[username] = [].concat(
        this.reservations[username],
        reservation
      );
      return { status: true, reservation: this.reservations[username] };
    }
    return { status: false, reservation: null };
  },
  addProductsToOrder: function (reservation, username, token){
    if (this.checkToken(token)) {
      this.orders[username] = [].concat(
        this.reservations[username],
        reservation
      );
      return { status: true, reservation: this.reservations[username] };
    }
    return { status: false, reservation: null };
  }
};

export default UbgrillAPI;
