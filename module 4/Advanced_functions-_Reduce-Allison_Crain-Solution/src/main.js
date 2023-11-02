/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function squareKmTotal(parks) {
  let result = parks.reduce((total, area) => {
    return total += area.areaInSquareKm}, 0);
  return result;
}

function parkNameAndState(parks) {
  let object = parks.reduce((accumulator, park) => {
    accumulator[park.name] = park.location.state;
    return accumulator}, {});
  return object;               
}


function parkByState(parks) {
  let answer = parks.reduce((value, park) => {
    let state = park.location.state;
    if (value[state]== null) {
      value[state] =[] 
    }
    value[state].push(park);
    return value},{});
  return answer
}

module.exports = { squareKmTotal, parkNameAndState, parkByState };
