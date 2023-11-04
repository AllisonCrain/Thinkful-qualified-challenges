/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
  return parks.filter((parkNames) => parkNames.location.state === state);
}

function getWishlistParksForUser(parks, users, userName) {
  return parks.filter((parkObject) => 
    users[userName].wishlist.includes(parkObject.id)
  );
}

function userHasVisitedAllParksInState(parks, users, state, userName) {
  return getParksByState(parks, state).every((park) => users[userName].visited.includes(park.id));
}

function userHasVisitedParkOnWishlist(users, user1, user2) {
  const userA = users[user1].visited;
  const userB = users[user2].wishlist;
  return userA.some((id) => userB.includes(id));
}


function getUsersForUserWishlist(users, userName) {
  const wishList = users[userName].wishlist;
  const userNames = [];
  for (let userName in users) {
    if(wishList.some((id) => users[userName].visited.includes(id))) {
      userNames.push(userName);
    }
  }
  return userNames;
}
  


module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
