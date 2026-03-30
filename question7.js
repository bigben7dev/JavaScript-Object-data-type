let profile = {
  firstName: "Kingston",
  lastName: "Williams",
  age: 43,
  hobbies: ["football", "movies", "skating", "dancing"],
};
let fullName = profile[0];
fullName = profile.firstName + " " + profile.lastName;
console.log(fullName);
console.log(profile.hobbies.length);

for (let i = 0; i < profile.hobbies.length; i++) {
  console.log(profile.hobbies[i]);
}
