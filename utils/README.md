# Utils

Helper utilities for exploring and testing Google AI services.

## Available Utilities

### list-voices.js

**Purpose**: List all available Google Cloud Text-to-Speech voices and their capabilities.

**Usage**:

```bash
npm run list-voices
```

**Output**:

```
Available Google Cloud TTS Voices:

Studio Voices (Highest Quality):
  en-US-Studio-Q (FEMALE) - Best for podcasts
  en-US-Studio-O (FEMALE)
  en-US-Studio-K (MALE)

Journey Voices (High Quality):
  en-US-Journey-F (FEMALE)
  en-US-Journey-D (MALE)
  en-US-Journey-O (MALE)

Neural2 Voices (Standard Quality):
  en-US-Neural2-A (MALE)
  en-US-Neural2-C (FEMALE)
  ... (50+ more voices)
```

**Use this to**:

- See all available voices
- Choose the best voice for your use case
- Verify TTS API credentials are working

**Requirements**:

- `GOOGLE_APPLICATION_CREDENTIALS` must be set in `.env`
- Google Cloud TTS API must be enabled

---

### list-models.js

**Purpose**: List all available Google Gemini AI models and their specifications.

**Usage**:

```bash
npm run list-models
```

**Output**:

```
Available Gemini Models:

models/gemini-2.5-flash
  - Display Name: Gemini 2.5 Flash
  - Input Token Limit: 1,048,576
  - Output Token Limit: 8,192
  - Supported: generateContent, countTokens

models/gemini-2.0-flash
  - Display Name: Gemini 2.0 Flash
  - Input Token Limit: 1,048,576
  - Output Token Limit: 8,192
  - Supported: generateContent, countTokens

... (more models)
```

**Use this to**:

- See all available AI models
- Check token limits
- Verify Gemini API credentials are working
- Choose the right model for your task

**Requirements**:

- `GEMINI_API_KEY` must be set in `.env`

---

## How to Use

### Before first run:

Make sure you have a `.env` file with:

```env
GEMINI_API_KEY=your_gemini_key_here
GOOGLE_APPLICATION_CREDENTIALS=./google-tts-credentials.json
```

### Quick test:

```bash
# Test Gemini API
npm run list-models

# Test Google Cloud TTS
npm run list-voices
```

If either fails, check:

1. `.env` file exists
2. API keys are correct
3. Google Cloud credentials file exists
4. APIs are enabled in Google Cloud Console

---

## Voice Recommendations

**Best for podcasts**: `en-US-Studio-Q` (default in playground)

- Highest quality
- Natural intonation
- Best for long-form content

**Alternative options**:

- `en-US-Journey-F` - High quality, slightly faster
- `en-US-Neural2-C` - Good quality, cheaper

**Current hierarchy in playground**:

1. Studio voices (best quality, highest cost)
2. Journey voices (high quality, medium cost)
3. Neural2 voices (good quality, lowest cost)

---

## Adding New Utilities

When creating new helper utilities:

1. **Place in this folder**: `utils/your-utility.js`
2. **Add npm script** in `package.json`:
   ```json
   "scripts": {
     "your-utility": "node utils/your-utility.js"
   }
   ```
3. **Document here**: Add section above
4. **Keep them simple**: Single purpose, read-only operations
5. **Include error handling**: Provide clear error messages

---

## Difference from Scripts

**Utils** (this folder):

- Read-only operations
- Exploration and testing
- Developer tools
- Don't modify application state

**Scripts** (`scripts/` folder):

- Maintenance operations
- Modify application state (e.g., delete files)
- Production utilities (e.g., cleanup, validation)
- Auto-run capabilities
