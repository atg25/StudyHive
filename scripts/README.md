# Scripts

Maintenance and utility scripts for the StudyHive platform.

## Available Scripts

### cleanup-audio.js

**Purpose**: Automatically clean up old audio files to prevent storage bloat.

**What it does**:

- Deletes audio files older than 24 hours
- Enforces 100MB storage limit (deletes oldest files first)
- Provides detailed cleanup reports

**Usage**:

```bash
# Auto-runs on server startup and every 6 hours
npm start

# Manual cleanup
npm run cleanup

# Direct execution
node scripts/cleanup-audio.js
```

**Output**:

```
🧹 Starting audio cleanup...
📊 Current storage: 73.45MB
🗑️  Deleted 12 files (71.32MB freed)
✅ Cleanup complete. Current storage: 2.13MB
```

**Configuration** (in server.js):

```javascript
CONFIG.AUDIO_CLEANUP_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours
```

---

### validate-env.js

**Purpose**: Verify that all required environment variables and credentials are properly configured.

**What it checks**:

- ✅ `.env` file exists
- ✅ `GEMINI_API_KEY` is set
- ✅ `GOOGLE_APPLICATION_CREDENTIALS` is set
- ✅ Google Cloud credentials file exists
- ✅ Credentials file is valid JSON

**Usage**:

```bash
# Recommended before first run
npm run validate

# Direct execution
node scripts/validate-env.js
```

**Success output**:

```
✅ Environment variables validated
✅ GEMINI_API_KEY found
✅ GOOGLE_APPLICATION_CREDENTIALS found
✅ Google Cloud credentials file exists
✅ Ready to start
```

**Error output**:

```
❌ GEMINI_API_KEY not found in environment
Create a .env file with: GEMINI_API_KEY=your_key_here
```

---

### pre-deploy-check.sh

**Purpose**: Run comprehensive checks before deploying to production.

**What it checks**:

- Environment variables are set
- Dependencies are installed
- No security vulnerabilities
- All tests pass (when implemented)

**Usage**:

```bash
npm run pre-deploy
```

---

## Adding New Scripts

When creating new utility scripts:

1. **Place in this folder**: `scripts/your-script.js`
2. **Add npm script** in `package.json`:
   ```json
   "scripts": {
     "your-script": "node scripts/your-script.js"
   }
   ```
3. **Document here**: Add section above
4. **Use consistent patterns**:
   - Export functions for reusability
   - Provide CLI interface when appropriate
   - Include error handling
   - Add console output for visibility

---

## Script Dependencies

These scripts use core Node.js modules only:

- `fs` - File system operations
- `path` - Path manipulation
- `dotenv` - Environment variables

No external dependencies required for scripts to run.

---

## Automation

**Auto-running scripts:**

The cleanup script runs automatically via the server:

```javascript
// server.js
const { cleanupOldFiles } = require("./scripts/cleanup-audio");

// Run on startup
cleanupOldFiles();

// Run every 6 hours
setInterval(cleanupOldFiles, 6 * 60 * 60 * 1000);
```

To disable auto-cleanup, remove the `setInterval` call from `server.js`.
