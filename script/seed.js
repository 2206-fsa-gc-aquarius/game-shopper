"use strict";

const {
  db,
  models: { User, Product },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "test1", password: "123" }),
    User.create({ username: "test2", password: "123" }),
  ]);

  const products = await Promise.all([
    Product.create({
      name: "Tunic",
      description:
        "Explore a land filled with lost legends, ancient powers, and ferocious monsters in TUNIC, an isometric action game about a small fox on a big adventure.",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox One, Xbox Series S/X",
      genre: "Adventure, Action",
      price: 29.99,
      image:
        "https://media.rawg.io/media/games/2c1/2c1984e128ac48b89953ed4de4904a3b.jpg",
      esrb: "Everyone",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "Inscryption",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X, macOS",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "Unpacking",
      description:
        "Unpacking is a zen puzzle game about the familiar experience of pulling possessions out of boxes and fitting them into a new home. Part block-fitting puzzle, part home decoration, you are invited to create a satisfying living space while learning clues about the life you’re unpacking.",
      platform: "Xbox One, Xbox Series S/X, Nintendo Switch, macOS",
      genre: "Indie, Puzzle",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/c11/c1118fbcfd846c631ecb7646f8efc780.jpg",
      rating: 84,
      multiplayer: "No",
    }),
    Product.create({
      name: "Hitman 3",
      description:
        "Death Awaits. Agent 47 returns in HITMAN 3, the dramatic conclusion to the World of Assassination trilogy.",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox One, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 59.99,
      image:
        "https://media.rawg.io/media/games/126/126fbd5ceacddc6ad16fc96e50b1265b.jpg",
      rating: 87,
      multiplayer: "No",
    }),
    Product.create({
      name: "Kena: Bridge of Spirits",
      description:
        "A story-driven, action adventure combining exploration with fast-paced combat. As Kena, players find and grow a team of charming spirit companions called the Rot, enhancing their abilities and creating new ways to manipulate the environment.",
      platform: "PC, PlayStation 5, PlayStation 4",
      genre: "Adventure, Exploration, Action-Adventure, Adventure",
      price: 39.99,
      esrb: "Everyone 10+",
      image:
        "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
      rating: 81,
      multiplayer: "No",
    }),
    Product.create({
      name: "Subnautica: Below Zero",
      description:
        "Dive into a freezing underwater adventure on an alien planet. Below Zero is set two years after the original Subnautica. Return to Planet 4546B to uncover the truth behind a deadly cover-up. Survive by building habitats, crafting tools, & diving deeper into the world of Subnautica.",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox One, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      rating:, 
      image:
        "https://media.rawg.io/media/games/437/4377bf00ded8a2ba781aa74d8bff9220.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "NieR Replicant v1.22474487139...",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "Black Book",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "Biomutant",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "Battlefield 2042",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "Disco Elysium: Final Cut",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "Scarlet Nexus",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "Breathedge",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "Life is Strange: True Colors",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "Tales of Arise",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "Totally Accurate Battle Simulator",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "Narita Boy",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "Yakuza 3 Remastered",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "The Stanley Parable: Ultra Deluxe",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
    Product.create({
      name: "Curse of the Dead Gods",
      description:
        "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
      platform: "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
      genre: "Adventure, Indie, Strategy",
      price: 19.99,
      image:
        "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",
      rating: 85,
      multiplayer: "No",
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      test1: users[0],
      test2: users[1],
    },
    products: {
      product1: products[0],
      product2: products[1],
      product3: products[2],
      product4: products[3],
      product5: products[4],
      product6: products[5],
      product7: products[6],
      product8: products[7],
      product9: products[8],
      product10: products[9],
      product11: products[10],
      product12: products[11],
      product13: products[12],
      product14: products[13],
      product15: products[14],
      product16: products[15],
      product17: products[16],
      product18: products[17],
      product19: products[18],
      product20: products[19],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
