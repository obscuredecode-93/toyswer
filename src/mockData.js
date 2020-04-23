import yellowCarImage from './Images/car.jpeg';
import starWarsImage from './Images/star-wars.jpeg';
import gameBoyImage from './Images/game-boy.jpeg';
import giJoeImage from './Images/gi-joe.jpg';
import blocksImage from './Images/blocks.jpeg';
import woodenToysImage from './Images/wooden-toys.jpeg';
import uuid from 'uuid/v1';

export const cart = {
  items: [{
    id: 1,
    title: 'Yellow Toy Car',
    description:
      'Speed off with your gang with this fun vehicle!',
    imageUrl: yellowCarImage,
    quantity:5
  }],
  total:25
}
export const mockData = [{
    id: 2,
    title: 'Yellow Toy Car',
    description:
      'Speed off with your gang with this fun vehicle!',
    imageUrl: yellowCarImage,
    price:5
  },
  {
    id: 3,
    title: 'Star Wars Robot',
    description:
      'Boys and girls can imagine racing into the galactic action to save the day!',
    imageUrl: starWarsImage,
    price:10
  },
  {
    id: 4,
    title: 'Game Boy',
    description:
      'The Classic Nintendo Gameboy!',
    imageUrl: gameBoyImage,
    price:25
  },
  {
    id: 5,
    title: 'GI Joe',
    description:
      'Articulated intelligence specialist action figure comes with a weapons and a display stand.',
    imageUrl: giJoeImage,
    price:37
  },
  {
    id: 6,
    title: 'Blocks',
    description:
      'Help kids develop strong motor skills and even resilience as they experiment with building, knocking blocks over, and building again.',
    imageUrl: blocksImage,
    price:15
  },
  {
    id: uuid(),
    title: 'Wooden Animal Toys',
    description:
      'The beautiful toy set can be used in many different ways to give your little one endless hours of fun and games!',
    imageUrl: woodenToysImage,
    price:40
  }
];