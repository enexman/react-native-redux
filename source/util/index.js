
export const sortRandom = () => Math.random() - 0.5;

export const getRandomNumber = (max) => Math.floor(Math.random() * max);

export const getRandomSumParameter = (max) => Math.floor(1 + Math.random() * max);

export const generatorId = () => `id${Math.random().toString(16).slice(2)}`;

export const deepCopy = (obj) => {
  let rv;

  switch (typeof obj) {
    case "object":
      if (obj === null) {
        // null => null
        rv = null;
      } else {
        switch (Object.prototype.toString.call(obj)) {
          case "[object Array]":
            // It an array, create a new array with
            // deep copies of the entries
            rv = obj.map(deepCopy);
            break;
          case "[object Date]":
            // Clone the date
            rv = new Date(obj);
            break;
          case "[object RegExp]":
            // Clone the RegExp
            rv = new RegExp(obj);
            break;
          // ...probably a few others
          default:
            // Some other kind of object, deep-copy its
            // properties into a new object
            rv = Object.keys(obj).reduce((prev, key) => {
              prev[key] = deepCopy(obj[key]);
              return prev;
            }, {});
            break;
        }
      }
      break;
    default:
      // It a primitive, copy via assignment
      rv = obj;
      break;
  }
  return rv;
};

export const getRandomDistance = () => Math.floor(Math.random() * 100);

export const somebodyNearly = (activeRoom, monsters) => {
  return activeRoom.direction.some((direction) => {
    return monsters.some((monster) => {
      return monster.room === direction.name && !monster.dead;
    })
  });
};
