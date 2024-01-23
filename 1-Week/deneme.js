//const obj = { hello: "world" };
const obj = { value: "50" };

const request = new Request("ttp://10.194.69.214:3671/dimmers/6/level", {
  method: "PUT",
  body: JSON.stringify(obj),
});

request.json().then((data) => {
  // do something with the data sent in the request
});