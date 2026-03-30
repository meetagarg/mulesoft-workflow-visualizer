# Audio Troubleshooting Guide

## Quick Fix Steps

### 1. Check Browser Console
Open browser console (F12 or Cmd+Option+I) and look for:
- "Available voices: X" (should show a number > 0)
- "Selected voice: [name]" (should show a voice name)
- "Speaking: [text]" (when audio plays)

### 2. Test Audio Button
**NEW: There's now a "🎤 Test" button in the control panel!**

1. Refresh your browser (http://localhost:3000)
2. Look at the control panel (top-right)
3. You should see:
   - 🔊 Audio ON button
   - 🎤 Test button
4. Click **"🎤 Test"** button
5. You should hear: "Testing audio narration. If you can hear this, audio is working correctly."

**If you hear the test:** Audio works! The playthrough narration should also work.

**If you don't hear the test:** Continue with troubleshooting below.

### 3. Check System Volume
- Mac: Check volume in menu bar (should be > 50%)
- Windows: Check system volume and application volume
- Make sure sound is not muted

### 4. Check Browser Permissions
Some browsers require user interaction before playing audio:
1. Click anywhere on the page first
2. Then click Test button
3. Then try Play

### 5. Try Different Browser
**Best Audio Quality:**
- **Mac:** Safari (uses Samantha voice)
- **Mac/Windows:** Chrome (uses Google voices)
- **Windows:** Edge (uses Microsoft voices)

## Detailed Diagnostics

### Check Console Output

After refreshing the page, you should see in console:

```
Available voices: 84 [Array of voices]
Selected voice: Samantha
```

When clicking Test:
```
Speaking: Testing audio narration...
Speech started
Speech ended
```

### Common Issues & Solutions

#### Issue 1: "Available voices: 0"
**Cause:** Browser hasn't loaded voices yet
**Solution:**
- Refresh the page
- Wait 1-2 seconds and try again
- Try a different browser

#### Issue 2: "No voice selected!"
**Cause:** Voice loading failed
**Solution:**
- Open Chrome settings → Languages → Add English (United States)
- On Mac: System Preferences → Accessibility → Spoken Content → System Voice
- Refresh browser

#### Issue 3: Audio plays but no sound
**Cause:** Volume is muted or very low
**Solution:**
- Check system volume (turn up to 70-80%)
- Check browser tab isn't muted (look for speaker icon in tab)
- Try headphones to rule out speaker issues

#### Issue 4: "Speech synthesis error"
**Cause:** Browser speech API issue
**Solution:**
- Close and reopen browser
- Try private/incognito mode
- Update browser to latest version

### Browser-Specific Issues

#### Chrome
- Sometimes voices don't load on first page load
- **Fix:** Refresh page (Cmd+R or Ctrl+R)
- Check chrome://settings/languages

#### Safari
- Usually has best voices on Mac
- If not working: System Preferences → Accessibility → Spoken Content
- Make sure "Speak selection" is enabled

#### Firefox
- May have limited voice options
- **Fix:** Install additional language packs
- Check about:config → media.webspeech.synth.enabled = true

## Manual Testing Script

If automated audio fails, you can manually test browser speech API:

1. Open browser console (F12)
2. Paste this code:

```javascript
const utterance = new SpeechSynthesisUtterance("Hello, this is a test");
const voices = window.speechSynthesis.getVoices();
console.log('Voices available:', voices.length);
if (voices.length > 0) {
  utterance.voice = voices[0];
  window.speechSynthesis.speak(utterance);
}
```

3. Press Enter
4. You should hear "Hello, this is a test"

**If this works:** The issue is in our app code (file a bug report)
**If this doesn't work:** Browser speech API is not working

## Voice Information by OS

### Mac (Best Quality)
Default voices available:
- **Samantha** (US Female) - Excellent
- **Alex** (US Male) - Excellent
- **Victoria** (US Female) - Good
- **Daniel** (UK Male) - Good

To add more voices:
1. System Preferences → Accessibility
2. Spoken Content → System Voice → Customize
3. Download additional voices

### Windows
Default voices available:
- **Microsoft Zira** (US Female) - Good
- **Microsoft David** (US Male) - Good
- **Microsoft Mark** (US Male) - Good

### Chrome (All Platforms)
Google voices (require internet):
- **Google US English Female** - Very Good
- **Google US English Male** - Very Good
- **Google UK English Female** - Very Good

## Fallback: Manual Narration

If audio completely fails, use the narration script:

**File:** `NARRATION_SCRIPT.md`

This contains the complete script you can read aloud manually during the demo.

## Advanced Debugging

### Enable Verbose Logging

The app now logs detailed information:

**In useNarration.js:**
- Logs when voices load
- Logs selected voice
- Logs when speaking starts/stops
- Logs any errors

**Check console for:**
```
Available voices: [number]
Selected voice: [name]
Speaking: [text preview]
Speech started
Speech ended
```

### Check speechSynthesis Status

In console:
```javascript
console.log('Speaking:', window.speechSynthesis.speaking);
console.log('Pending:', window.speechSynthesis.pending);
console.log('Paused:', window.speechSynthesis.paused);
```

Should show:
- `speaking: true` when narrating
- `speaking: false` when idle

## Still Not Working?

### Option 1: Disable Audio
If audio continues to fail, you can disable it and use the app without narration:
- Click "🔇 Audio OFF" to disable
- Visual workflow still works perfectly
- Use manual script from NARRATION_SCRIPT.md

### Option 2: Record Custom Audio
See NARRATION_SCRIPT.md for instructions on:
- Recording your own narration
- Using professional audio software
- Syncing pre-recorded audio with playthrough

### Option 3: File a Bug
If you've tried everything above, please report:
1. Browser name and version
2. Operating system
3. Console output (copy all logs)
4. Result of manual test script
5. Whether Test button produces sound

## Success Indicators

You know audio is working when:
✅ Console shows "Available voices: X" where X > 0
✅ Console shows "Selected voice: [name]"
✅ Test button produces sound
✅ "Speaking..." indicator appears during playthrough
✅ Voice info shows at bottom of control panel
✅ You can hear the narration!

## Quick Reference Commands

```bash
# Restart dev server
cd /Users/meeta.garg/Documents/mulesoft-workflow-visualizer
npm run dev

# Check for errors
# Look at terminal output for any errors

# Clear browser cache
# Chrome: Cmd+Shift+Delete (Mac) or Ctrl+Shift+Delete (Windows)
# Safari: Cmd+Option+E
```

## Contact Support

If nothing works, the CX Engineering team can help debug!
