const data = { username: "example" };

fetch("https://dalle360-6k6gsdlfoa-el.a.run.app/generate-image", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const API = () => {
    return (
        <div>API</div>
    );
}

export default API;