# Podcast Feature Setup Guide

## Google Cloud Text-to-Speech Setup

To enable the podcast generation feature, you need to set up Google Cloud Text-to-Speech API:

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or use existing one)
3. Note your Project ID

### Step 2: Enable Text-to-Speech API

1. Navigate to **APIs & Services** > **Library**
2. Search for "Cloud Text-to-Speech API"
3. Click **Enable**

### Step 3: Create Service Account

1. Go to **IAM & Admin** > **Service Accounts**
2. Click **Create Service Account**
3. Name it: `studyhive-tts`
4. Grant role: **Cloud Text-to-Speech User**
5. Click **Done**

### Step 4: Create & Download Key

1. Click on your new service account
2. Go to **Keys** tab
3. Click **Add Key** > **Create New Key**
4. Choose **JSON** format
5. Download the key file

### Step 5: Configure Environment

Save the downloaded JSON key file to your project:

```bash
# Save as google-tts-credentials.json in project root
mv ~/Downloads/studyhive-tts-*.json google-tts-credentials.json
```

Add to your `.env` file:

```env
GOOGLE_APPLICATION_CREDENTIALS=./google-tts-credentials.json
```

**Important:** Add `google-tts-credentials.json` to `.gitignore`:

```bash
echo "google-tts-credentials.json" >> .gitignore
```

### Step 6: Restart Server

```bash
npm start
```

## Pricing

Google Cloud Text-to-Speech pricing:

- **Free tier:** 1 million characters/month (Neural voices)
- **After free tier:** $16 per 1 million characters

For a typical 500-word summary (~3,000 characters):

- Free tier covers ~333 podcast generations/month
- After that: ~$0.05 per podcast

## Available Voices

The app includes 6 neural voices:

- **US English:** Female (Neural2-F), Male (Neural2-J)
- **UK English:** Female (Neural2-A), Male (Neural2-B)
- **Australian English:** Female (Neural2-A), Male (Neural2-B)

You can add more voices by editing the `<select>` in `playground.html`.

See [full voice list](https://cloud.google.com/text-to-speech/docs/voices).

## Troubleshooting

### Error: "Could not load the default credentials"

Make sure:

1. `google-tts-credentials.json` exists in project root
2. `.env` has `GOOGLE_APPLICATION_CREDENTIALS=./google-tts-credentials.json`
3. Server was restarted after adding the env variable

### Error: "API has not been used"

Wait 1-2 minutes after enabling the API, then try again.

### Audio not playing

1. Check browser console for errors
2. Verify `/audio` directory was created
3. Check that the MP3 file exists in `/audio/podcast_*.mp3`

## Alternative: Free Browser Text-to-Speech

If you don't want to set up Google Cloud, you can use the browser's built-in Speech API (free, no setup):

```javascript
// Simple browser TTS (add to playground.js)
function speakSummary(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1.0;
  speechSynthesis.speak(utterance);
}
```

**Pros:** Free, instant, no API setup
**Cons:** Lower quality, can't download MP3, browser-dependent
