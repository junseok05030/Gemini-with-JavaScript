const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyBeLNwgzTDjqbIYu9-I8EFxDsOoy320n0A");

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "소설 하나 써봐";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
