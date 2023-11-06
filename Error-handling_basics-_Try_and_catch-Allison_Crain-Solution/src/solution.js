function getCarColor(car) {
  try {
    if(!car || car === null) {
      throw "Color unknown";
    }else {
      return car.color;
    }
  }
  catch (error) {
    return `${error}`;
  }
}

//do not remove
module.exports = getCarColor;
