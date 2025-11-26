const textToSpeech = require("@google-cloud/text-to-speech");

async function listVoices() {
  const client = new textToSpeech.TextToSpeechClient();
  const request = {
    languageCode: "en-US",
  };

  const [result] = await client.listVoices(request);
  const voices = result.voices;

  console.log("Available voices:");
  voices.forEach(voice => {
    console.log(`\n${voice.name}`);
    console.log(`  Natural Names: ${voice.naturalSampleRateHertz} Hz`);
    console.log(`  Supported Audio Encodings: ${voice.supportedAudioEncodings}`);
  });
}

listVoices().catch(console.error);
