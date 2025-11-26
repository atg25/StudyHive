require("dotenv").config();

async function listModels() {
  try {
    console.log("Fetching available models...\n");

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Available models:");
    console.log("=".repeat(80));

    for (const model of data.models) {
      console.log(`\nModel: ${model.name}`);
      console.log(`Display Name: ${model.displayName}`);
      console.log(`Description: ${model.description}`);
      console.log(
        `Supported Methods: ${model.supportedGenerationMethods.join(", ")}`
      );
      console.log("-".repeat(80));
    }
  } catch (error) {
    console.error("Error listing models:", error.message);
  }
}

listModels();
