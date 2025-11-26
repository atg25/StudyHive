# Public

Frontend files served to users.

## Structure

```
public/
├── index.html          # Landing page
├── playground.html     # Interactive demo
└── assets/             # JavaScript and CSS
    └── js/
        ├── api-config.js       # Environment-aware API URLs
        ├── playground.js       # Main frontend logic
        └── playground-data.js  # Sample data
```

---

## Files

### index.html

**Purpose**: Landing page for the StudyHive platform.

**Access**: http://localhost:3000/

**Features**:

- Project overview
- Team information
- Links to demo

---

### playground.html

**Purpose**: Interactive demo interface for AI features.

**Access**: http://localhost:3000/playground.html

**Features**:

- **AI Summaries**: Generate summaries from notes
- **Flashcards**: Create Q&A pairs automatically
- **Podcasts**: Convert notes to audio

**How it works**:

1. User enters notes
2. Clicks generate button
3. Frontend calls API via `api-config.js`
4. Backend processes with Gemini/TTS
5. Results displayed in interface

---

## JavaScript Modules

### api-config.js

**Purpose**: Environment-aware API configuration.

**What it does**:

- Auto-detects environment (localhost vs production)
- Provides API endpoint URLs
- No hardcoded URLs in frontend code

**Usage**:

```javascript
// Loaded in playground.html
<script src="assets/js/api-config.js"></script>

// Used in playground.js
fetch(API_CONFIG.SUMMARY_ENDPOINT, {...})
fetch(API_CONFIG.PODCAST_ENDPOINT, {...})
```

**Configuration**:

```javascript
const API_CONFIG = {
  BASE_URL: "http://localhost:3000", // Auto-detected
  SUMMARY_ENDPOINT: "http://localhost:3000/api/generate-summary",
  PODCAST_ENDPOINT: "http://localhost:3000/api/generate-podcast",
  FLASHCARD_ENDPOINT: "http://localhost:3000/api/generate-flashcards",
};
```

**Environment detection**:

- `localhost:3000` → Development mode
- Other domains → Production mode (requires configuration)

---

### playground.js

**Purpose**: Main frontend logic for the demo interface.

**What it handles**:

- Tab switching (Summaries, Flashcards, Podcasts)
- Form submissions
- API calls
- Loading states
- Error handling
- Audio playback

**Key functions**:

- `generateSummary()` - Calls summary endpoint
- `generateFlashcards()` - Calls flashcards endpoint
- `generatePodcast()` - Calls podcast endpoint
- Voice selection dropdown population

**Dependencies**:

- Requires `api-config.js` to be loaded first
- Uses `playground-data.js` for sample data

---

### playground-data.js

**Purpose**: Sample lecture notes for quick testing.

**Contains**:

- Pre-written lecture notes
- Various topics (biology, history, etc.)
- Used for demo purposes

---

## How Frontend Works

### Flow for AI Summary:

1. **User Input**:

   ```
   User pastes notes → Clicks "Generate Summary"
   ```

2. **Frontend**:

   ```javascript
   // playground.js
   fetch(API_CONFIG.SUMMARY_ENDPOINT, {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ notes: userNotes }),
   });
   ```

3. **Backend** (server.js):

   ```javascript
   // Sanitize input
   const cleanNotes = sanitizeInput(req.body.notes);

   // Call Gemini API
   const summary = await gemini.generateContent(cleanNotes);

   // Return response
   res.json({ success: true, summary });
   ```

4. **Frontend Display**:
   ```javascript
   // Show summary in UI
   document.getElementById("summaryOutput").textContent = summary;
   ```

---

### Flow for Podcast:

1. **User Input**:

   ```
   User pastes notes → Selects voice → Clicks "Generate Podcast"
   ```

2. **Frontend**:

   ```javascript
   fetch(API_CONFIG.PODCAST_ENDPOINT, {
     method: "POST",
     body: JSON.stringify({
       notes: userNotes,
       voice: selectedVoice, // e.g., "en-US-Studio-Q"
     }),
   });
   ```

3. **Backend**:

   ```javascript
   // Generate SSML with byte limit
   const ssml = createSSML(notes);  // Max 4000 bytes

   // Call Google Cloud TTS
   const audioBuffer = await ttsClient.synthesizeSpeech({...});

   // Save audio file
   fs.writeFileSync(`audio/podcast_${timestamp}.mp3`, audioBuffer);

   // Return URL
   res.json({ audioUrl: `/audio/podcast_${timestamp}.mp3` });
   ```

4. **Frontend Playback**:
   ```javascript
   // Create audio element
   const audio = new Audio(`${API_CONFIG.BASE_URL}${audioUrl}`);
   audio.play();
   ```

---

## Development

### Making Frontend Changes

1. **Edit files in this folder**: `public/`
2. **Test in browser**: http://localhost:3000/playground.html
3. **Check console**: Press F12 for errors
4. **Reload page**: Changes take effect immediately

### Adding New Features

**Example: Add new API endpoint**

1. **Backend** (server.js):

   ```javascript
   app.post("/api/new-feature", async (req, res) => {
     // Your logic
   });
   ```

2. **API Config** (api-config.js):

   ```javascript
   NEW_FEATURE_ENDPOINT: `${BASE_URL}/api/new-feature`;
   ```

3. **Frontend** (playground.js):
   ```javascript
   async function useNewFeature() {
     const response = await fetch(API_CONFIG.NEW_FEATURE_ENDPOINT, {...});
   }
   ```

---

## Voice Options

Current voices in dropdown (playground.html):

```html
<select id="voiceSelect">
  <!-- Studio Voices (Highest Quality) -->
  <option value="en-US-Studio-Q" selected>Studio Q (Female) - Best</option>
  <option value="en-US-Studio-O">Studio O (Female)</option>
  <option value="en-US-Studio-K">Studio K (Male)</option>

  <!-- Journey Voices -->
  <option value="en-US-Journey-F">Journey F (Female)</option>
  <option value="en-US-Journey-D">Journey D (Male)</option>

  <!-- Neural2 Fallbacks -->
  <option value="en-US-Neural2-A">Neural2 A (Male)</option>
  <option value="en-US-Neural2-C">Neural2 C (Female)</option>
</select>
```

**Default**: `en-US-Studio-Q` (highest quality)

---

## Static File Serving

Files in `public/` are served by Express:

```javascript
// server.js
app.use(express.static(path.join(__dirname, "public")));
```

**URL mapping**:

- `public/index.html` → http://localhost:3000/index.html
- `public/playground.html` → http://localhost:3000/playground.html
- `public/assets/js/api-config.js` → http://localhost:3000/assets/js/api-config.js

---

## Troubleshooting

### "API calls failing"

**Check**:

1. Server is running: `npm start`
2. Correct endpoint: Check browser console (F12)
3. CORS enabled: Should be automatic

### "Audio not playing"

**Check**:

1. File exists: http://localhost:3000/audio/
2. Audio format: Should be MP3
3. Browser console: Look for 404 errors

### "Environment detection wrong"

**Fix**:
Edit `api-config.js`:

```javascript
const isLocalhost = window.location.hostname === "localhost";
const BASE_URL = isLocalhost
  ? "http://localhost:3000"
  : "https://your-production-url.com"; // Update this
```

---

## Best Practices

1. **Always use API_CONFIG** for URLs (no hardcoding)
2. **Check console** for errors during development
3. **Test all features** after making changes
4. **Keep JavaScript modular** (separate concerns)
5. **Add error handling** for all API calls
