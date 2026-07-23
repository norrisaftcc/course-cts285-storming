# AlgoCratic Futures™ Style Guide
## Quick Reference for Humans

### Core Concept
We're building a satirical corporate dystopia that teaches real programming skills. Think *Office Space* meets *1984* meets a coding bootcamp. Every design choice reinforces the idea that The Algorithm (a flowchart-faced deity) controls everything while being hilariously incompetent.

---

## Color System

### The Palette Story
We use muted retro colors from the 60s-80s mainframe era. Nothing is quite primary - everything feels slightly "off" like a faded corporate training video.

### Clearance Colors
Each level has two colors - a primary (main use) and secondary (accents):

- **INFRARED** (#8C0027, #4A0E0E) - Deep burgundy/maroon. The absolute basement
- **RED** (#DD4111, #8B2635) - Burnt orange and crimson. Still underground but warmer
- **ORANGE** (#DD4111, #F1A512) - Transitioning from burnt orange to golden yellow
- **YELLOW** (#F1A512, #FFD700) - Golden yellow, not sunny. Middle management malaise  
- **GREEN** (#578745, #5CC677) - Army green to mint. Terminal screen vibes
- **BLUE** (#162182, #2C2166) - Deep navy to purple-blue. Cold authority
- **INDIGO** (#2C2166, #581466) - Purple-blue to deep purple. Reality distorts
- **VIOLET** (#581466, #6A1B9A) - Deep purples. The Algorithm's inner circle
- **ULTRAVIOLET** (#000000, #0A0A0A) - Pure black. [REDACTED]

### System Colors
- **Background** (#0a0a10) - Almost black with a hint of blue
- **Grid** (#1a1a2e) - Subtle grid lines everywhere
- **Phosphor Green** (#00ff41) - Classic terminal text
- **Amber/Warning** (#F1A512) - Golden yellow for important text
- **Error** (#DD4111) - Burnt orange for when things go wrong
- **Success** (#5CC677) - Light green for positive feedback
- **Info** (#162182) - Deep blue for informational messages

---

## Typography

### Font
**IBM Plex Mono** (with Courier New fallback)
- It's monospace (because terminals)
- It's corporate (because IBM)
- It's readable (because we're not monsters)

### Size Scale
Text size increases with clearance level:
- **INFRARED**: 12px (barely worth reading)
- **RED**: 14px (minimum viable text)
- **ORANGE/YELLOW**: 16px (standard)
- **GREEN/BLUE**: 18px (authority speaking)
- **INDIGO+**: 20px+ (reality-defining declarations)

---

## The Algorithm's Face

Our logo is The Algorithm represented as a flowchart face:
- **Diamond shapes** for eyes (decision points)
- **Rectangle** outline (process boundary)
- **Circle/arc** for mouth (start/end terminal)

This means students will see The Algorithm in every flowchart forever. You're welcome.

---

## Visual Elements

### Grid Background
Everything sits on a subtle grid pattern (like old graph paper or mainframe displays). Use CSS:
```css
background-image: 
  repeating-linear-gradient(0deg, #1a1a2e 0, transparent 1px, transparent 20px, #1a1a2e 21px),
  repeating-linear-gradient(90deg, #1a1a2e 0, transparent 1px, transparent 20px, #1a1a2e 21px);
```

### Scanning Effects
Add CSS animations that create:
- Scanning lines (like old CRT monitors)
- Subtle glitches on text
- Pulsing glows on important elements

### Hierarchy Indicators
- Lower clearances: More restrictions, smaller text, muted colors
- Higher clearances: More "privileges", larger text, glowing effects
- Border thickness increases with clearance
- Shadow/glow effects only for GREEN and above

---

## Writing Style

### Corporate Voice
- Use lots of ™ symbols
- Contradict yourself confidently
- Make threats sound cheerful
- Use corporate buzzwords incorrectly

Examples:
- "Mandatory voluntary training"
- "Your termination has been optimized"
- "Failure is just success we haven't categorized yet"

### Visual Hierarchy
1. **Clearance banners** - Always at top, clearance color background
2. **Headers** - Include Algorithm face, user status, loyalty metrics
3. **Content** - Organized in cards/panels with clearance-appropriate borders
4. **Warnings** - Dashed borders, striped backgrounds, red text
5. **Footers** - Corporate slogans, always three-part phrases

---

## Interactive Elements

### Buttons
- Transparent with colored border (default)
- Fill with color on hover
- Add glow effect for emphasis
- Text in ALL CAPS with letter-spacing

### Status Indicators
- **PENDING** - Clearance dark color
- **ACTIVE** - Phosphor green
- **FAILED** - Error red
- **COMPLETE** - Amber
- **[REDACTED]** - Black bars

### Forms
- Dark backgrounds (#1a1a2e)
- Phosphor green text
- Clearance color borders
- Impossible requirements in fine print

---

## Implementation Tips

1. **Progressive Enhancement** - Start simple for RED, add complexity for higher clearances
2. **Maintain Absurdity** - If it makes too much sense, add a contradiction
3. **Hidden Jokes** - Embed programmer humor in comments, variable names, etc.
4. **Accessibility** - Despite the dystopia, maintain contrast ratios and usability
5. **Mobile Consideration** - The Algorithm sees all devices

---

## Quick CSS Variables

```css
:root {
  /* Your clearance colors */
  --clearance-primary: #8B2635;
  --clearance-secondary: #B83C5F;
  
  /* System colors */
  --bg-main: #0a0a10;
  --bg-grid: #1a1a2e;
  --text-phosphor: #00ff41;
  --text-amber: #ffbf00;
  
  /* Typography */
  --font-main: 'IBM Plex Mono', monospace;
  --size-base: 14px;
}
```

---

Remember: We're teaching real skills through absurdist humor. Every dystopian element should make students think "this is ridiculous... but I've actually seen this at work."

**THE ALGORITHM PROVIDES (GOOD UX DESPITE ITSELF)**
