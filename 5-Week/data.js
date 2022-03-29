const firstName = "Ahmet";
const lastName = "Dolu";

const fullName = () => firstName + " " + lastName;

// module.exports.firstName = firstName;
// module.exports.lastName = lastName;

module.exports = {
    ad: firstName,
    lastName,
    fullName
};