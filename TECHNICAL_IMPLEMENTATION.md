# Technical Implementation Details - MuleSoft Content Workflow

## Overview

This demo now shows **actual technical implementation** at each stage, not just conceptual ideas. It displays what's really happening in the system with real technical details, data formats, and processes.

---

## Stage-by-Stage Technical Breakdown

### 🔵 Stage 1: Content Authoring

**Owner:** Content Team (Writers, PMs, SMEs)

**What Writers Actually Do:**
- Write in **AsciiDoc format** with metadata attributes
- Add `:page-component-version:` for versioning
- Set `:page-product-tag:` for categorization
- Define `:page-aliases:` for URL redirects
- Embed `:keywords:` for SEO
- Create cross-references with `xref:`
- Commit to feature branch in Git

**Technical Details Shown:**
```asciidoc
= API-Led Connectivity Guide
:page-component-version: 4.5
:page-product-tag: anypoint-platform
:page-deployment: cloudhub
:page-aliases: old-api-guide.adoc
:page-category: tutorials
:keywords: api, rest, connectivity
```

---

### 🟢 Stage 2: Validation & QA

**Owner:** Writers (with automated tools) ⚠️ **CORRECTED - was CX Engineering**

**What Actually Happens:**
- **Asciidoctor** validates AsciiDoc syntax
- Custom validators check **required metadata**
- **Vale linter** checks writing style and tone
- Automated link checker validates all `xref:` and external URLs
- Image reference validator ensures all images exist
- Product tag validator checks against allowed tags
- All checks run in **GitHub Actions** on PR

**Technical Checks:**
```json
{
  "asciidoc_syntax": "passed",
  "required_metadata": "passed (no missing fields)",
  "internal_links": "passed (47 checked, 0 broken)",
  "external_links": "passed (12 checked, 0 broken)",
  "images": "passed (8 found, 0 missing)",
  "vale_linting": "warning (2 style suggestions)",
  "product_tags": "passed",
  "version_check": "passed (v4.5)"
}
```

---

### 🟠 Stage 3: Content Event Service

**Owner:** Platform Team

**What Actually Happens:**
1. **Git webhook** fires when PR merges to main
2. **Parser** reads merged AsciiDoc files
3. **Metadata extractor** pulls all `:page-*` attributes
4. **Diff calculator** determines what changed
5. **Event generator** creates JSON payload
6. **Schema validator** validates against JSON schema
7. **Database writer** stores in PostgreSQL events table
8. **Kafka publisher** sends to `content.updated` topic
9. **Redis cache** stores for quick retrieval
10. **Webhook sender** notifies subscribers
11. **Audit logger** records event
12. **Metrics collector** sends to DataDog

**Event Payload:**
```json
{
  "event_id": "evt_2026_03_23_a7f2c1d",
  "event_type": "content.updated",
  "source": {
    "repository": "mulesoft/docs-general",
    "commit_sha": "a7f2c1d89e",
    "pr_number": 1247
  },
  "payload": {
    "file_path": "modules/ROOT/pages/api-led-connectivity.adoc",
    "metadata": {
      "component_version": "4.5",
      "product_tag": "anypoint-platform"
    }
  },
  "kafka_topic": "content.updated",
  "kafka_partition": 3,
  "kafka_offset": 891247
}
```

---

### 🔴 Stage 4: Distribution

**Owner:** GTM Team

**What Actually Happens:**

**RSS Feed:**
- Consumes from Kafka topic
- Generates `<item>` XML element
- Sets `<guid>` with unique ID
- Adds `<pubDate>` timestamp
- Publishes to `feed.xml`

**Slack Webhooks:**
- Formats message with doc preview
- Includes metadata (product, version)
- POSTs to webhook URL
- Tracks message timestamp

**Marketing Automation (Marketo):**
- Updates campaign with new content
- Tags contacts with product interest
- Schedules email blast

**AI-Generated GTM Collateral (First Drafts):**
- **Blog Post:** AI generates complete blog draft for https://blogs.mulesoft.com/bloghome/
  - Title, body, excerpt, SEO optimization
  - Follows MuleSoft brand guidelines and tone
  - ~800-1000 words, ready for review
- **Marketing Announcement:** Email/newsletter copy
  - Subject line and body text
  - Compelling call-to-action
  - Audience-specific messaging
- **Trailhead Module Outline:** Learning path structure
  - Module title, units, and topics
  - Estimated duration and learning objectives
  - Follows guidelines: https://confluence.internal.salesforce.com/spaces/MTDT/pages/685745688/MuleSoft+Trailhead+Content+Authoring
- **Video Script:** Step-by-step video documentation script
  - Scene breakdown and timing
  - Narration and on-screen text
  - Follows guidelines: https://confluence.internal.salesforce.com/spaces/MTDT/pages/1265931750/Creating+MuleSoft+CX+Video+Documentation

**MCP AI Server:**
- Parses AsciiDoc to plain text
- Generates **vector embeddings** (OpenAI)
- Stores in **Pinecone** vector database
- Updates search index
- Makes available via **MCP protocol**

**Technical Output:**
```json
{
  "rss": {
    "feed_url": "https://docs.mulesoft.com/feed.xml",
    "item_guid": "api-led-connectivity-v4.5-2026-03-23"
  },
  "slack": {
    "channel": "#docs-updates",
    "recipients": 247
  },
  "gtm_collateral": {
    "blog_post": {
      "title": "Mastering API-Led Connectivity in MuleSoft 4.5",
      "word_count": 847,
      "target_url": "https://blogs.mulesoft.com/bloghome/"
    },
    "marketing_announcement": {
      "subject": "New: API-Led Connectivity Guide for MuleSoft 4.5",
      "word_count": 234
    },
    "trailhead_outline": {
      "module_title": "API-Led Connectivity Fundamentals",
      "units": 4,
      "estimated_duration": "45 min"
    },
    "video_script": {
      "title": "API-Led Connectivity in 5 Minutes",
      "scenes": 6,
      "estimated_duration": "5:30"
    }
  },
  "mcp_server": {
    "vector_db": "pinecone",
    "embedding_model": "text-embedding-3-large",
    "chunks_indexed": 23,
    "mcp_endpoint": "mcp://docs.mulesoft.com/search"
  }
}
```

---

### 🟣 Stage 5: Docs Publishing

**Owner:** CX/Documentation Team

**What Actually Happens:**
1. **Webhook** triggers build in CI/CD
2. **Git clone** pulls latest main branch
3. **Antora** reads `playbook.yml` configuration
4. **Asciidoctor** converts `.adoc` → HTML
5. **Template engine** applies site templates
6. **CSS/JS bundler** packages assets
7. **Navigation generator** creates site nav
8. **Sitemap generator** creates `sitemap.xml`
9. **S3 uploader** uploads to AWS bucket
10. **CloudFront invalidation** clears CDN cache
11. **Algolia indexer** indexes content for search
12. **Robots.txt generator** creates crawl rules
13. **Database updater** logs build status
14. **Metrics sender** reports to DataDog

**Build Output:**
```json
{
  "build_id": "build_2026_03_23_1436",
  "antora_version": "3.1.4",
  "asciidoctor_version": "2.0.20",
  "pages_built": 1247,
  "pages_updated": 23,
  "s3_upload": {
    "bucket": "docs-mulesoft-com-prod",
    "files_uploaded": 1736,
    "size_mb": 342.7
  },
  "cdn_invalidation": {
    "paths_invalidated": 25,
    "status": "completed"
  },
  "deployed_url": "https://docs.mulesoft.com/general/api-led-connectivity"
}
```

---

### 🔵 Stage 6: Content Maintenance

**Owner:** CX Ops + Writers

**What Actually Happens:**
1. **Google Analytics 4** tracks page metrics
2. **Event collector** logs pageviews, sessions, events
3. **Search analyzer** tracks "no results" queries
4. **Bounce rate monitor** flags pages >60%
5. **Time-on-page calculator** computes averages
6. **Scroll depth tracker** measures engagement
7. **Support case parser** extracts doc URLs from tickets
8. **Case correlator** links cases to pages
9. **Jira auto-creator** creates tickets for low scores
10. **Weekly reporter** emails analytics
11. **Stale content detector** flags >180 days old
12. **Signal generator** creates improvement events
13. **Kafka publisher** sends to `content.signals` topic
14. **Event triggerer** creates update requests

**Analytics Output:**
```json
{
  "page_url": "https://docs.mulesoft.com/general/api-led-connectivity",
  "metrics": {
    "pageviews": 5847,
    "unique_visitors": 4329,
    "avg_time_on_page_sec": 204,
    "bounce_rate_pct": 32.4,
    "scroll_depth_avg_pct": 67.8
  },
  "support_signals": {
    "cases_mentioning_page": 7,
    "common_issues": ["authentication unclear", "missing deployment steps"]
  },
  "recommendations": [
    "Expand authentication section",
    "Add troubleshooting for common errors"
  ],
  "improvement_signal": {
    "event_type": "content.improvement_needed",
    "kafka_topic": "content.signals",
    "assigned_to": "jane.smith@mulesoft.com"
  }
}
```

---

## What Shows on Screen During Playthrough

### Left Side: Technical Details Panel
When demo is playing, you see:

**Panel Header:**
- ⚙️ Technical Implementation
- Current stage name

**What's Happening:**
- Bulleted list of 7-15 technical steps
- Each step fades in sequentially
- Shows actual system operations

**Code/Data Sample:**
- Preview of actual data format
- First 400 characters of sample
- Shows real technical structure

### Center: Workflow Visualization
- Stage boxes pulse and glow
- Connecting lines animate
- Progress indicator updates

### Right Side: Full Details (on click)
- Complete stage information
- All technical steps
- Full sample data
- Tools and participants

---

## Technical Stack Shown

### Languages & Formats
- **AsciiDoc** - Source format
- **JSON** - Event format
- **XML** - RSS format
- **HTML** - Output format

### Tools & Services
- **Git/Perforce** - Version control
- **GitHub Actions** - CI/CD
- **Asciidoctor** - AsciiDoc processor
- **Antora** - Site generator
- **Vale** - Linter
- **Kafka** - Message queue
- **PostgreSQL** - Event database
- **Redis** - Cache
- **AWS S3** - Storage
- **CloudFront** - CDN
- **Algolia** - Search
- **Pinecone** - Vector DB
- **OpenAI** - Embeddings
- **Google Analytics** - Metrics
- **Jira** - Task tracking
- **Marketo** - Marketing automation
- **DataDog** - Monitoring

---

## Key Technical Concepts Demonstrated

### 1. **Event-Driven Architecture**
- Kafka topics for async communication
- Event sourcing for audit trail
- Pub/sub pattern for distribution

### 2. **Metadata-Driven Publishing**
- AsciiDoc attributes control behavior
- Structured metadata enables automation
- Versioning through attributes

### 3. **Multi-Channel Distribution**
- Single source feeds multiple outputs
- Each channel consumes same event
- Parallel processing via message queue

### 4. **AI Integration**
- Vector embeddings for semantic search
- MCP protocol for AI access
- Real-time content indexing

### 5. **Feedback Loops**
- Analytics inform content updates
- Support signals trigger improvements
- Continuous quality enhancement

---

## Validation Correction ✅

**IMPORTANT:** Validation is done by **Writers**, not CX Engineering.

- Writers run validators locally
- Automated tools in GitHub Actions
- Peer review by other writers
- CX Engineering builds the tools, but Writers execute the validation

---

## Demo Experience

When you click **"Play Demo"**:

1. **Technical panel slides in from left**
2. Each stage shows **7-15 technical steps**
3. Steps animate in sequence
4. **Sample data** shows actual format
5. **Real technical details** displayed
6. Shows **what's actually happening** in the system

When you **click any stage manually**:
- Right panel opens
- Shows complete technical implementation
- Full sample data available
- Copy button for code samples

---

## Value of Technical Details

### For Technical Audiences
- Shows real implementation, not just concepts
- Demonstrates actual tools and services
- Proves technical sophistication
- Validates architecture decisions

### For Stakeholders
- Transparency into system operations
- Understanding of complexity
- Appreciation of automation
- Confidence in robustness

### For Teams
- Documentation of actual process
- Onboarding resource
- Troubleshooting reference
- System architecture diagram

---

This is now a **technical implementation walkthrough**, not just a conceptual demo! 🚀
