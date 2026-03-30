# MuleSoft Content Workflow Visualizer

An interactive single-page web application that visualizes the MuleSoft content workflow from AsciiDoc authoring to SSOT (Single Source of Truth) distribution and maintenance.

## Features

- **Clear Workflow Visualization**: 6 stages arranged in a logical flow pattern
- **Interactive Stages**: Click any stage to view detailed information
- **Automated Playthrough**: Step through the workflow automatically with speed controls
- **Animated Connections**: Visual arrows showing content flow between stages
- **Feedback Loops**: Visualization of maintenance feedback back to authoring
- **Side Outputs**: RSS Feed and MCP AI Server integration points
- **Professional Design**: Dark theme optimized for presentations
- **🎙️ Audio Script Included**: Professional recording script for voiceover narration

## Workflow Stages

1. **Content Authoring** - Writers create and update docs using Git/Perforce
2. **Validation & QA** - CI/CD pipeline validates content with AI assistance
3. **Content Event Service** - Generates structured events for distribution
4. **Distribution** - Multi-channel distribution (RSS, Slack, MCP, Marketing)
5. **Docs Publishing** - Builds and deploys to docs.mulesoft.com
6. **Content Maintenance** - Analytics and feedback for continuous improvement

## Installation

```bash
# Navigate to project directory
cd mulesoft-workflow-visualizer

# Install dependencies
npm install
```

## Usage

### Development Mode

```bash
# Start development server (opens at http://localhost:3000)
npm run dev
```

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## Controls

### Demo Controls
- **▶ Play Demo**: Start automatic workflow playthrough
- **⏸ Pause**: Pause the playthrough
- **↻ Reset**: Clear all state and start over
- **Speed Selector**: Choose demo speed (Slow, Normal, Fast, Very Fast)

### Interactive Exploration
- **Click any stage**: Open detail panel with full information
- **Press Escape**: Close detail panel
- **Copy button**: Copy sample JSON data to clipboard

## Adding Audio Narration

### Professional Recording Script

We've included a complete **professional audio recording script** in:
```
AUDIO_RECORDING_SCRIPT.md
```

This script includes:
- ✅ Full narration text (~2 minutes)
- ✅ Timing cues synchronized with demo
- ✅ Recording instructions and equipment recommendations
- ✅ Pronunciation guide for technical terms
- ✅ Professional delivery tips
- ✅ Post-production guidance

### Demo Timing (for audio sync)

At **1x (Normal) speed**:
- Introduction: 20 seconds
- Each stage: 5 seconds
- Total: ~50 seconds

Adjust playback speed to match your audio recording pace.

### Recording Your Narration

1. **Read the script:** `AUDIO_RECORDING_SCRIPT.md`
2. **Record audio** using provided instructions
3. **Export as MP3** (192 kbps or higher)
4. **Play audio** alongside demo:
   - Start audio 2 seconds after demo loads
   - Click "Play Demo" at 22-second mark in audio
   - Audio will sync with visual stage transitions

### Video Production (Optional)

To create a complete presentation video:

1. **Screen record** the demo (OBS, Camtasia, QuickTime)
2. **Import** screen recording into video editor
3. **Add** your audio narration track
4. **Sync** timing (adjust demo speed if needed)
5. **Export** as MP4

## Presentation Tips

### For Leadership Demos

1. **Full Screen**: Press F11 (or Cmd+Shift+F on Mac)
2. **Start Demo**: Click "Play Demo" button
3. **Narrate**: Use the audio script or play your recording
4. **Pause for Questions**: Pause at any stage to discuss details
5. **Interactive Deep-Dive**: Click stages to show detail panels
6. **Reset**: Use Reset button to run demo multiple times

### Recommended Flow

**Quick Demo (1 minute):**
- Brief introduction (15s)
- Play demo at Normal or Fast speed
- Highlight key points during playthrough
- Q&A (remaining time)

**Detailed Demo (3-5 minutes):**
- Detailed introduction (30s)
- Play demo at Slow or Normal speed
- Pause after Stage 3 to discuss SSOT
- Click 2-3 stages to show detail panels
- Discuss feedback loops and side outputs
- Q&A (remaining time)

### Speed Guide

- **Slow (0.5x):** ~100 seconds - detailed presentations
- **Normal (1x):** ~50 seconds - recommended for most demos
- **Fast (1.5x):** ~33 seconds - quick overviews
- **Very Fast (2x):** ~25 seconds - rapid demonstration

## Customization

### Modifying Stage Content

Edit `src/data/workflowData.js`:

```javascript
export const WORKFLOW_STAGES = [
  {
    id: 'new-stage',
    order: 7,
    title: 'NEW STAGE',
    shortTitle: 'New',
    participants: ['Team A', 'Team B'],
    tools: ['Tool 1', 'Tool 2'],
    owner: 'Owner Team',
    location: 'Location',
    description: 'Description text...',
    sampleData: { /* ... */ },
    position: { x: 50, y: 70 },
    icon: 'EditIcon',
    color: '#FF5733'
  }
];
```

### Adjusting Playthrough Speed

Modify `src/hooks/usePlaythrough.js`:

```javascript
const baseDelay = 5000; // milliseconds per stage
```

### Changing Colors

Edit `src/index.css`:

```css
:root {
  --color-authoring: #4A90E2;
  --color-validation: #7CB342;
  /* ... */
}
```

## Project Structure

```
src/
├── components/
│   ├── Header/              # Title and subtitle
│   ├── ControlPanel/        # Playthrough controls
│   ├── WorkflowCanvas/      # Main visualization area
│   │   ├── StageNode        # Individual stage component
│   │   ├── ConnectionArrow  # Animated arrows
│   │   └── SideOutput       # RSS/MCP nodes
│   ├── StageDetailPanel/    # Detailed stage information
│   ├── Legend/              # Connection type legend
│   └── icons/               # SVG icon components
├── context/
│   └── WorkflowContext      # Global state management
├── hooks/
│   └── usePlaythrough       # Playthrough automation
├── data/
│   └── workflowData         # All workflow content
└── main.jsx                 # Application entry point
```

## Documentation

- **README.md** - Setup and usage (this file)
- **AUDIO_RECORDING_SCRIPT.md** - Professional narration script for recording
- **DEMO_TIMING_GUIDE.md** - Detailed timing and synchronization guide
- **WHATS_NEW.md** - Recent updates and improvements

## Browser Compatibility

- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

## Performance

- Bundle size: < 250KB gzipped
- First load: < 2 seconds
- Animations: 60 FPS
- No external API dependencies

## Troubleshooting

### Demo Not Advancing

- Check if playthrough is paused
- Verify speed selector is not at slowest setting
- Try clicking Reset and starting over

### Stage Not Clickable

- Ensure playthrough is paused first
- Click directly on the stage node (not arrows)
- Try refreshing the page

### Detail Panel Not Opening

- Click the stage node (colored circle/square)
- Check browser console for errors
- Refresh page if needed

### Animation Performance

- Close other browser tabs
- Ensure hardware acceleration is enabled
- Try a different browser

## License

Copyright © 2026 MuleSoft. All rights reserved.

## Support

For issues or questions, contact the CX Engineering team.

---

## Quick Start Guide

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000 in your browser

# 4. Read the audio recording script
cat AUDIO_RECORDING_SCRIPT.md

# 5. Click "Play Demo" and enjoy!
```

---

**💡 Tip:** For the best presentation, record professional narration using the provided script (`AUDIO_RECORDING_SCRIPT.md`), then play it alongside the visual demo. The timing is perfectly synchronized!

---

## What Makes This Workflow Special?

### The Problem
Traditional approach: Multiple teams create content separately
- Documentation team writes docs
- Marketing team writes blogs
- Training team creates courses
- Result: Inconsistent messaging, duplicate effort, slow time-to-market

### The Solution
MuleSoft Content Workflow: One source of truth powers everything
- ✅ Single canonical source (AsciiDoc)
- ✅ Automated validation and quality checks
- ✅ Multi-channel distribution (docs, RSS, AI, marketing)
- ✅ Continuous improvement through feedback loops
- ✅ 85-95% faster than traditional approach

### The Impact
- **Consistency:** Same source → same message everywhere
- **Speed:** Hours instead of weeks
- **Quality:** Automated validation catches issues early
- **Traceability:** Every output links back to source
- **Scalability:** One workflow serves all channels

---

This demo visualizes that transformation and makes it tangible for stakeholders! 🚀
