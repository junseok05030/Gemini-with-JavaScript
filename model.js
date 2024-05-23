const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBeLNwgzTDjqbIYu9-I8EFxDsOoy320n0A");

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

async function run() {
  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt = "이 개는 뭐야?";

  const imageParts = fileToGenerativePart("dog.png", "image/png");

  const result = await model.generateContent([prompt, imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
