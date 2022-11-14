const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with.

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result,
// 2. store the result with a variable
// 3. appropriately log the results to the console


//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS
//! const atINSECTUS = contacts.filter(contact => contact.company === "INSECTUS")
//? console.log(atINSECTUS)

//2. an array all of the contacts, with only the name property
//! const names = contacts.map(contact => contact.name)
//? console.log(names)

//3. an array of all of the contacts over the age of 50
//! const overFifty = contacts.filter(contact => contact.age > 50)
//? console.log(overFifty)

//4. the first ten contacts when alphabetically ordered by name
//! const firstTenSorted = contacts.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)).splice(0, 10)
//? console.log(firstTenSorted)

//5. the oldest person's name
//! const oldestName = contacts.sort((a, b) => b.age - a.age)[0].name
//? console.log(oldestName)

//6. the contact id with the name Isabella Burke
//! const isabellaId = contacts.find(contact => contact.name === "Isabella Burke").id
//? console.log(isabellaId)

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties
const namesSplit = contacts.map(contact => {
    const nameArr = contact.name.split(" ")
    contact.firstName = nameArr[0]
    contact.lastName = nameArr[1]

    return contact
})

//? console.log(namesSplit)

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend
const contactFriends = contacts.map(contact => {
    const friendsArr = []

    contact.friends.forEach(id => friendsArr.push(contacts.find(Contact => Contact.id === id)))
    contact.friends = friendsArr

    return contact
})

//? console.log(contactFriends)

//9. the average age of the contacts
const averageAge = contacts.reduce((total, current) => total = total + current.age, 0) / contacts.length
//? console.log(averageAge)

//10. the median age of the contacts
const medianAge = contacts.sort((a, b) => a.age - b.age)[Math.round(contacts.length / 2)].age
//? console.log(medianAge)