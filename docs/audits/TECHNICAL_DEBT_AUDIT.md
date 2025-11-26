# Technical Debt Audit - StudyHive

**Date:** November 26, 2025  
**Auditor:** GitHub Copilot  
**Scope:** Full codebase analysis

---

## 🔴 CRITICAL ISSUES (Fix Immediately)

### 1. **Security: Missing .gitignore File**

- **Risk:** HIGH - API keys and credentials could be committed to Git
- **Location:** Root directory
- **Impact:** Exposed `.env` file with `GEMINI_API_KEY` and Google Cloud credentials
- **Fix:** Create `.gitignore` to exclude:
  ```
  .env
  node_modules/
  audio/
  google-tts-credentials.json
  *.log
  .DS_Store
  ```

### 2. **Resource Leak: Audio Files Not Cleaned Up**

- **Risk:** MEDIUM - Disk space exhaustion
- **Location:** `/audio/` directory (26 files, ~73MB)
- **Impact:** Old podcast files accumulate indefinitely
- **Fix:** Implement automatic cleanup:
  - Delete files older than 24 hours
  - Add cron job or scheduled cleanup endpoint
  - Set max storage limit (e.g., 100MB)

### 3. **Dependency Vulnerabilities**

- **Risk:** MEDIUM
- **Outdated packages:**
  - `@google/generative-ai`: 0.2.1 → 0.24.1 (22 versions behind!)
  - `dotenv`: 16.6.1 → 17.2.3
  - `express`: 4.21.2 → 5.1.0 (major version update)
- **Fix:** Update dependencies, test thoroughly
  ```bash
  npm update @google/generative-ai dotenv
  # Review Express v5 breaking changes before updating
  ```

---

## 🟠 HIGH PRIORITY (Fix Before Production)

### 4. **No Environment Validation**

- **Location:** `server.js` line 11
- **Issue:** Missing validation for required environment variables
- **Impact:** Silent failures if API keys are invalid/missing
- **Fix:**
  ```javascript
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY not found in environment");
  }
  // Add Google Cloud credentials check
  ```

### 5. **In-Memory Rate Limiting (Not Production-Ready)**

- **Location:** `server.js` lines 28-57
- **Issue:** Rate limit data lost on server restart
- **Impact:** Ineffective DoS protection
- **Fix:** Use Redis or similar persistent store
  ```javascript
  // TODO: Replace with Redis
  // const redis = require('redis');
  // const client = redis.createClient();
  ```

### 6. **Hardcoded localhost URLs in Frontend**

- **Location:** `playground.js` lines 88, 172
- **Issue:** Will break in production deployment
- **Fix:** Use environment-aware base URL
  ```javascript
  const API_BASE =
    process.env.NODE_ENV === "production"
      ? "https://api.studyhive.com"
      : "http://localhost:3000";
  ```

### 7. **No Error Logging/Monitoring**

- **Location:** Throughout codebase
- **Issue:** Only console.log/error, no persistent logs
- **Impact:** Cannot debug production issues
- **Fix:** Implement proper logging:
  ```javascript
  const winston = require('winston');
  const logger = winston.createLogger({...});
  ```

---

## 🟡 MEDIUM PRIORITY (Improve Quality)

### 8. **Missing Input Sanitization**

- **Location:** `server.js` lines 62, 109, 292
- **Issue:** User input not sanitized before AI generation
- **Risk:** Prompt injection attacks
- **Fix:** Add input validation:
  ```javascript
  const sanitizeInput = (text) => {
    return text
      .replace(/<script>/gi, "")
      .replace(/javascript:/gi, "")
      .trim()
      .slice(0, 10000); // Max length
  };
  ```

### 9. **No Request Timeout Protection**

- **Location:** All API endpoints
- **Issue:** Long-running AI requests can hang indefinitely
- **Fix:** Add timeout middleware:
  ```javascript
  app.use(timeout("60s"));
  ```

### 10. **Inefficient Text Processing**

- **Location:** `server.js` lines 146-164
- **Issue:** Multiple regex passes on same text
- **Fix:** Combine regex operations or use single parsing pass

### 11. **Magic Numbers Throughout Code**

- **Location:** `server.js` lines 33, 34, 174, 227
- **Issue:** Hardcoded values without constants
- **Fix:** Extract to constants:
  ```javascript
  const CONFIG = {
    RATE_LIMIT_WINDOW_MS: 15 * 60 * 1000,
    MAX_REQUESTS_PER_WINDOW: 10,
    MAX_TTS_BYTES: 4000,
    SSML_BYTE_LIMIT: 5000,
  };
  ```

### 12. **Missing TypeScript/JSDoc**

- **Location:** All `.js` files
- **Issue:** No type safety or IntelliSense
- **Fix:** Add JSDoc comments:
  ```javascript
  /**
   * @param {string} summary - User's study summary
   * @param {string} voice - TTS voice ID
   * @returns {Promise<{audioUrl: string}>}
   */
  async function generatePodcast(summary, voice) {...}
  ```

### 13. **Incomplete Error Handling**

- **Location:** `server.js` line 337
- **Issue:** Flashcard JSON parse fails silently
- **Fix:** Return proper error status, log failure

### 14. **No CORS Configuration**

- **Location:** `server.js` line 23
- **Issue:** `cors()` allows all origins
- **Fix:** Restrict to specific domains:
  ```javascript
  app.use(
    cors({
      origin:
        process.env.ALLOWED_ORIGINS?.split(",") || "http://localhost:3000",
    })
  );
  ```

---

## 🟢 LOW PRIORITY (Nice to Have)

### 15. **Console.log Debugging Statements**

- **Location:** 20+ instances across codebase
- **Issue:** Production logs cluttered with debug info
- **Fix:** Use debug levels:
  ```javascript
  if (process.env.DEBUG) console.log(...);
  ```

### 16. **No Health Check Monitoring**

- **Location:** `server.js` line 352
- **Issue:** Basic health check, no DB/API connectivity tests
- **Fix:** Add comprehensive health checks

### 17. **Missing API Documentation**

- **Location:** N/A
- **Issue:** No Swagger/OpenAPI spec
- **Fix:** Add API documentation with examples

### 18. **No Unit Tests**

- **Location:** N/A
- **Issue:** Zero test coverage
- **Fix:** Add Jest/Mocha tests:
  ```javascript
  describe('generatePodcast', () => {
    it('should generate MP3 from summary', async () => {...});
  });
  ```

### 19. **File System Operations Not Async**

- **Location:** `server.js` line 17
- **Issue:** `fs.existsSync()` blocks event loop
- **Fix:** Use async alternatives:
  ```javascript
  const fs = require("fs").promises;
  if (!(await fs.stat(audioDir).catch(() => false))) {
    await fs.mkdir(audioDir);
  }
  ```

### 20. **No Compression Middleware**

- **Location:** `server.js`
- **Issue:** Large responses not gzipped
- **Fix:** Add compression:
  ```javascript
  const compression = require("compression");
  app.use(compression());
  ```

### 21. **Missing Helmet.js Security Headers**

- **Location:** `server.js`
- **Issue:** No security headers (CSP, HSTS, etc.)
- **Fix:**
  ```javascript
  const helmet = require("helmet");
  app.use(helmet());
  ```

---

## 📊 CODE QUALITY METRICS

### Complexity Analysis

- **server.js**: 363 lines, 3 main endpoints
- **playground.js**: 316 lines, good modular structure
- **Cyclomatic Complexity**: Moderate (acceptable)

### Maintainability

- ✅ Code is readable and well-structured
- ✅ Good separation of concerns
- ⚠️ Needs comments for complex logic
- ❌ No documentation for API contracts

### Performance

- ✅ Efficient async/await usage
- ✅ Proper fallback mechanisms
- ⚠️ Multiple regex passes could be optimized
- ⚠️ No caching for repeated requests

### Security

- ❌ Missing .gitignore (CRITICAL)
- ❌ No input sanitization
- ❌ CORS allows all origins
- ⚠️ No rate limiting persistence
- ⚠️ Error messages expose internals

---

## 🎯 RECOMMENDED ACTION PLAN

### Phase 1: Pre-Production (Before Dec 3)

1. ✅ **Add .gitignore** (5 min)
2. ✅ **Environment validation** (10 min)
3. ✅ **Fix hardcoded URLs** (15 min)
4. ✅ **Add audio cleanup cron** (20 min)

### Phase 2: Production Hardening (Dec 4-10)

1. Update dependencies (test thoroughly)
2. Implement Redis rate limiting
3. Add proper logging (Winston)
4. Input sanitization
5. Add security headers (Helmet)

### Phase 3: Quality Improvements (Ongoing)

1. Add unit tests (aim for 70% coverage)
2. API documentation (Swagger)
3. TypeScript migration
4. Performance monitoring (NewRelic/Datadog)

---

## 💰 COST IMPLICATIONS

### Current Architecture

- **Free tier usage:** ✅ Within limits
- **Scalability:** ⚠️ In-memory rate limiting won't scale
- **Storage:** ⚠️ 73MB audio files (growing)

### Recommended Upgrades

- Redis hosting: $10-20/month
- Log aggregation (Papertrail): $7/month
- Monitoring (Datadog): $15/month
- **Total:** ~$32-42/month for production

---

## 📈 TECHNICAL DEBT SCORE

**Overall Score: 6.5/10** (Acceptable for demo, needs work for production)

### Breakdown:

- **Security:** 5/10 ⚠️ (Missing .gitignore, no input sanitization)
- **Performance:** 7/10 ✅ (Good async usage, minor optimizations needed)
- **Maintainability:** 7/10 ✅ (Clean code, needs docs)
- **Reliability:** 6/10 ⚠️ (Rate limiting, error handling gaps)
- **Scalability:** 5/10 ⚠️ (In-memory storage, no clustering)

---

## ✅ WHAT'S GOOD

1. ✅ **Clean, readable code structure**
2. ✅ **Proper async/await patterns**
3. ✅ **Good error fallback mechanisms** (SSML → Plain text → Neural2)
4. ✅ **Byte-aware truncation** (prevents API errors)
5. ✅ **Rate limiting implemented** (needs persistence)
6. ✅ **Modular frontend design**
7. ✅ **Voice quality optimization** (Studio → Journey → Neural2)

---

## 🏁 CONCLUSION

**Verdict:** Code is **production-ready for a demo/MVP** but needs hardening for full production deployment.

**Priority fixes for Dec 3 presentation:**

1. Add .gitignore immediately
2. Validate environment variables
3. Clean up old audio files manually
4. Test all user flows

**Post-launch priorities:**

1. Security hardening (input sanitization, CORS)
2. Dependency updates
3. Logging infrastructure
4. Redis rate limiting
