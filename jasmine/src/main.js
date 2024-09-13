// Creating class "Person"
class Person {
  // the following properties fname, lname, age, state and country.
  constructor(fname, lname, age, state, country) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.state = state;
    this.country = country;
  }
}
// Array of objects of class Person

const people = [
  new Person('Robbin', 'Skeen', 18, 'Mississippi', 'USA'),
]

// This function will try to print all info of the array of objects 'people'
function printInfo (people) {
  console.log('Details of All People:')
  for (let x in people) {
    console.log(`First Name: ${people[x].fname}`)
    console.log(`Last Name: ${people[x].lname}`)
    console.log(`Age: ${people[x].age}`)
    console.log(`State: ${people[x].state}`)
    console.log(`Country: ${people[x].country}`)
    console.log("----------")
  }
}

// This function will get a state and filter information based off of what state they are from.
function filterState (state, people) {
  console.log(`People from ${state}:`)
  for (let x in people) {
    if (people[x].state === state) {
      console.log(`First Name: ${people[x].fname}`)
      console.log(`Last Name: ${people[x].lname}`)
      console.log(`Age: ${people[x].age}`)
      console.log(`State: ${people[x].state}`)
      console.log(`Country: ${people[x].country}`)
      console.log("----------")
    } else {
      continue;
    }
  }
}
// end