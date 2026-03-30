# MuleSoft Content Workflow - Audio Narration Script

This script is designed for a **~20 second demo** with approximately **3 seconds per stage**. Total runtime with intro/outro: ~22-24 seconds.

---

## 🎬 Opening (Before playthrough starts)

**INTRO:**
> "Welcome to the MuleSoft Content Workflow. This is how we transform AsciiDoc authoring into a single source of truth that powers documentation, marketing, and AI systems across the organization."

---

## 📝 Stage-by-Stage Narration

### Stage 1: Content Authoring (3 seconds)
> "Our journey begins with **Content Authoring**, where writers, product managers, and subject matter experts collaborate to create documentation. Using Git and pull request workflows, every change goes through peer review, ensuring quality and accuracy from the very start."

**Key Points:**
- Writers, PMs, SMEs collaborate
- Git/PR workflows
- Peer review ensures quality

---

### Stage 2: Validation & QA (3 seconds)
> "Next, our CI/CD pipeline takes over with **Validation and Quality Assurance**. The CX Engineering team has built automated checks that validate metadata, catch broken links, and even use AI-assisted review to ensure content meets our high standards before it moves forward."

**Key Points:**
- CI/CD automation
- CX Engineering ownership
- AI-assisted validation
- Quality gates

---

### Stage 3: Content Event Service (3 seconds)
> "The **Content Event Service** is the brain of our workflow. Managed by the Platform Team, it generates structured events for every content change, storing metadata and triggering downstream processes. This is our single source of truth that orchestrates everything."

**Key Points:**
- Central orchestration
- Platform Team manages
- Structured events
- Single source of truth

---

### Stage 4: Distribution (3 seconds)
> "**Distribution** is where the magic happens. The GTM team distributes updates through multiple channels simultaneously: RSS feeds for real-time updates, Slack notifications for team awareness, marketing automation hooks, and our MCP AI Server making content accessible to AI systems."

**Key Points:**
- Multi-channel distribution
- RSS feeds
- Slack webhooks
- MCP AI Server integration
- GTM team ownership

---

### Stage 5: Docs Publishing (3 seconds)
> "The CX Documentation Team publishes content to **docs.mulesoft.com** using Asciidoctor. Every build is optimized for search engines and accessibility, then distributed globally via CDN. Our documentation reaches developers worldwide in seconds."

**Key Points:**
- docs.mulesoft.com
- Asciidoctor build
- SEO and accessibility
- Global CDN distribution

---

### Stage 6: Content Maintenance (3 seconds)
> "Finally, **Content Maintenance** creates the feedback loop that makes this system intelligent. CX Ops monitors performance through analytics, support tickets, and user feedback. These signals flow back to authoring and the event service, creating continuous improvement. This is how we maintain our single source of truth."

**Key Points:**
- Feedback loop
- Analytics and signals
- CX Ops + Writers
- Continuous improvement

---

## 🎬 Closing (After playthrough completes)

**OUTRO:**
> "This workflow represents our commitment to content excellence. One source of truth, multiple distribution channels, and continuous improvement through feedback. That's the power of the MuleSoft Content Experience."

---

## 📊 Timing Guide

| Section | Duration | Cumulative Time |
|---------|----------|----------------|
| Intro | 5s | 0:05 |
| Stage 1 | 3s | 0:08 |
| Stage 2 | 3s | 0:11 |
| Stage 3 | 3s | 0:14 |
| Stage 4 | 3s | 0:17 |
| Stage 5 | 3s | 0:20 |
| Stage 6 | 3s | 0:23 |
| Outro | 5s | 0:28 |
| **Total** | **~28s** | |

---

## 🎤 Presentation Tips

### Voice & Delivery
- **Pace:** Moderate, clear enunciation
- **Tone:** Professional but engaging
- **Energy:** Enthusiastic about the workflow
- **Emphasis:** Stress team names and key technologies

### Stage Emphasis Points
1. **Authoring:** "collaboration" and "peer review"
2. **Validation:** "automated" and "AI-assisted"
3. **Event Service:** "single source of truth"
4. **Distribution:** "multiple channels simultaneously"
5. **Publishing:** "worldwide in seconds"
6. **Maintenance:** "feedback loop" and "continuous improvement"

### Visual Cues
- Point to stages as they light up
- Gesture to show flow between stages
- Highlight feedback loops when mentioning them
- Draw attention to RSS/MCP side outputs

---

## 🎥 Alternative: Extended Demo (60 seconds)

If you want a longer, more detailed demo, you can expand each stage narration:

### Extended Stage 1 (7-8s)
> "Let's begin with Content Authoring. This is where our technical writers, product managers, and subject matter experts come together. They use Git repositories and Perforce for version control, and every single change goes through a pull request workflow. This means peer review, quality checks, and collaborative improvement before any content moves forward. It's our first line of defense for content quality."

### Extended Stage 2 (7-8s)
> "Once content is submitted, our Validation and QA stage takes over. The CX Engineering team has built a sophisticated CI/CD pipeline with Jenkins and GitHub Actions. It runs automated checks for metadata integrity, validates all links to catch any broken references, checks formatting consistency, and even includes AI-assisted review that looks for clarity and completeness. Nothing moves forward without passing these quality gates."

[Continue pattern for remaining stages...]

---

## 🔊 Audio Production Notes

### Recording Your Own Narration

**Equipment:**
- Microphone: USB condenser mic (Blue Yeti, Audio-Technica AT2020)
- Environment: Quiet room with minimal echo
- Software: Audacity, GarageBand, or Adobe Audition

**Recording Settings:**
- Sample Rate: 44.1 kHz
- Bit Depth: 16-bit
- Format: WAV or MP3 (192 kbps+)

**Post-Production:**
1. Remove background noise
2. Normalize audio levels
3. Add slight compression (3:1 ratio)
4. Export as MP3 (VBR 192 kbps)
5. Sync with stage timing

### Using the Built-In Text-to-Speech

The app includes **automatic audio narration** using the Web Speech API:

1. **Enable Audio:** Click "🔊 Audio ON" button in control panel
2. **Start Playthrough:** Click Play button
3. **Adjust Speed:** Use speed selector (0.5x to 4x)
4. **Voice Selection:** Browser will use system default voice
   - **Mac:** Samantha (high quality)
   - **Windows:** Microsoft voices
   - **Chrome:** Google voices

**Benefits of Built-In TTS:**
- No pre-recording needed
- Works offline
- Adjustable speed
- Instant updates if script changes

---

## 📱 Interactive Demo Flow

### For Live Presentation

**Opening (30 seconds):**
1. Show full screen app
2. Read intro narration
3. Click Play with Audio ON
4. Let automation run through all stages

**Middle (60 seconds):**
1. Pause after Stage 3
2. Click on Distribution stage
3. Show detail panel with sample data
4. Point out RSS and MCP outputs
5. Resume playthrough

**Closing (30 seconds):**
1. Let playthrough complete
2. Read outro narration
3. Click Reset
4. Open for Q&A

### For Self-Guided Demo

1. Visitor clicks Play
2. Audio narration explains each stage
3. Visitor can pause and click stages for details
4. Can adjust speed to their preference
5. Reset and replay as needed

---

## ✍️ Script Customization

To customize the narration:

1. **Edit:** `/src/data/narrationScript.js`
2. **Modify text** for each stage
3. **Keep timing** around 2-4 seconds per stage
4. **Test** with audio enabled
5. **Adjust speed** if needed

### Example Customization:

```javascript
'content-authoring': {
  text: "Your custom narration here...",
  duration: 3000
}
```

---

## 🎯 Key Messages to Emphasize

1. **Single Source of Truth** - Mentioned multiple times
2. **Team Ownership** - Clear accountability at each stage
3. **Automation** - Reduces manual work, increases quality
4. **Multi-Channel** - Content serves many purposes
5. **Feedback Loop** - Continuous improvement
6. **Speed** - "Worldwide in seconds"
7. **Quality** - Multiple validation points

---

## 💡 Pro Tips

1. **Practice** the narration several times before presenting
2. **Match your pace** to the playthrough speed
3. **Use the speaking indicator** to know when audio is playing
4. **Test audio** before your presentation
5. **Have backup** - Know the script if audio fails
6. **Engage audience** - Ask questions during pause moments
7. **Highlight feedback loop** - It's a key differentiator

---

## 🚀 Advanced: Multi-Language Support

To add support for other languages:

1. Create additional narration files (e.g., `narrationScript.es.js`)
2. Add language selector to ControlPanel
3. Load appropriate narration based on selection
4. Use appropriate TTS voices for each language

---

This narration script transforms your visual demo into a complete multimedia experience that engages both visual and auditory learners, making your content workflow crystal clear to any audience.
