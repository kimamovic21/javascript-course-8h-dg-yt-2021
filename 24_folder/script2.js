// 24 Modules

import * as Guitars from './guitars2.js';
import User from './user.js';

console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

const me = new User('name.surname@mail.com', 'Kerim');
console.log(me);
console.log(me.greeting());

