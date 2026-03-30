// Audio narration script for each workflow stage
// Extended timing for complete narration
export const NARRATION_SCRIPT = {
  'content-authoring': {
    text: "Stage one: Content Authoring. This is where technical writers, product managers, and subject matter experts collaborate to create documentation. They use Git and pull request workflows to ensure every single change is peer reviewed for quality and accuracy.",
    duration: 12000
  },
  'validation-qa': {
    text: "Stage two: Validation and Quality Assurance. Our automated CI/CD pipelines validate content quality. The CX Engineering team checks metadata integrity, catches broken links, and uses AI-assisted review to ensure content meets our high standards before moving forward.",
    duration: 12000
  },
  'content-event-service': {
    text: "Stage three: Content Event Service. This is the heart of our workflow. The Platform Team generates structured events for every content change, storing metadata and triggering downstream processes. This creates our single source of truth that orchestrates everything.",
    duration: 12000
  },
  'distribution': {
    text: "Stage four: Distribution. Content flows through multiple channels simultaneously. The GTM team publishes to RSS feeds for real-time updates, sends Slack notifications for team awareness, triggers marketing automation, and syncs with our MCP AI Server making content accessible to intelligent systems.",
    duration: 12000
  },
  'docs-publishing': {
    text: "Stage five: Documentation Publishing. The CX Documentation Team builds content using Asciidoctor and deploys to docs dot mulesoft dot com. Every build is optimized for search engines and accessibility, then distributed globally via CDN. Our documentation reaches developers worldwide in seconds.",
    duration: 12000
  },
  'content-maintenance': {
    text: "Stage six: Content Maintenance. This creates the intelligent feedback loop. CX Operations monitors performance through analytics, support tickets, and user feedback. These signals flow back to authoring and the event service, creating continuous improvement. This is how we maintain our single source of truth.",
    duration: 12000
  }
};

// Enhanced opening narration - explains what and why
export const INTRO_NARRATION = "Welcome to the MuleSoft Content Workflow demonstration. Today we're showing you how MuleSoft CX has built a single source of truth for all content. Instead of multiple teams creating documentation, blogs, and training materials separately, we've created one canonical workflow that powers everything. This ensures consistent messaging, eliminates duplicate effort, and dramatically speeds up our time to market. Let's walk through each stage of this workflow.";

// Closing narration
export const OUTRO_NARRATION = "And that completes our workflow. What you've just seen is how we transform a single piece of content into multiple distribution channels while maintaining quality, consistency, and traceability. One source of truth. Multiple channels. Continuous improvement through feedback. This is the power of the MuleSoft Content Experience.";
