import { defineConfig } from 'vitepress'
import * as fs from 'fs'
import * as path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Qualflare Documentation",
  description: "Comprehensive user documentation for Qualflare QA Test Management",

  // Ignore dead links for placeholder pages that will be created in later phases
  ignoreDeadLinks: true,

  // Generate sitemap after build
  buildEnd: ({ outDir }) => {
    const hostname = 'https://docs.qualflare.com'
    const sitemapPath = path.resolve(outDir, 'sitemap.xml')

    // Collect all HTML files from the output directory
    const urls: string[] = []

    function collectHtmlFiles(dir: string, baseDir: string) {
      const files = fs.readdirSync(dir)

      for (const file of files) {
        const fullPath = path.join(dir, file)
        const stat = fs.statSync(fullPath)

        if (stat.isDirectory()) {
          collectHtmlFiles(fullPath, baseDir)
        } else if (file.endsWith('.html')) {
          // Get the relative path from the outDir
          const relativePath = path.relative(baseDir, fullPath)
          // Remove .html extension and convert to URL path
          let urlPath = relativePath.replace(/\.html$/, '')
          // If it's index.html, just use the directory path
          if (urlPath.endsWith('index')) {
            urlPath = urlPath.replace(/\/index$/, '') || '/'
          } else {
            urlPath = urlPath.replace(/index$/, '')
          }
          urls.push(urlPath)
        }
      }
    }

    collectHtmlFiles(outDir, outDir)

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${hostname}/${url === '' ? '' : url + '/'}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`

    fs.writeFileSync(sitemapPath, sitemap, 'utf-8')
    console.log(`\n✓ Generated sitemap.xml with ${urls.length} URLs`)

    // Also generate robots.txt
    const robotsPath = path.resolve(outDir, 'robots.txt')
    const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${hostname}/sitemap.xml
`
    fs.writeFileSync(robotsPath, robots, 'utf-8')
    console.log(`✓ Generated robots.txt`)
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Quick Start', link: '/quick-start/' },
      { text: 'Concepts', link: '/concepts/' },
      { text: 'How-to Guides', link: '/how-to/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'CLI Tool', link: '/cli/' },
      { text: 'FAQ', link: '/faq/' }
    ],

    sidebar: [
      {
        text: 'Quick Start',
        items: [
          { text: 'Getting Started', link: '/quick-start/' }
        ]
      },
      {
        text: 'Concepts',
        items: [
          { text: 'Overview', link: '/concepts/' },
          {
            text: 'Organizational Entities',
            items: [
              { text: 'Workspaces', link: '/concepts/workspaces' },
              { text: 'Projects', link: '/concepts/projects' },
              { text: 'Users & Roles', link: '/concepts/users' }
            ]
          },
          {
            text: 'Testing Entities',
            items: [
              { text: 'Test Cases', link: '/concepts/test-cases' },
              { text: 'Test Suites', link: '/concepts/test-suites' },
              { text: 'Test Plans', link: '/concepts/test-plans' },
              { text: 'Shared Steps', link: '/concepts/shared-steps' }
            ]
          },
          {
            text: 'Execution & QA Entities',
            items: [
              { text: 'Launches', link: '/concepts/launches' },
              { text: 'Case Runs', link: '/concepts/case-runs' },
              { text: 'Defects', link: '/concepts/defects' },
              { text: 'Milestones', link: '/concepts/milestones' }
            ]
          }
        ]
      },
      {
        text: 'How-to Guides',
        items: [
          { text: 'Overview', link: '/how-to/' },
          { text: 'Creating Test Cases', link: '/how-to/test-creation' },
          { text: 'Organizing Tests', link: '/how-to/test-organization' },
          { text: 'Executing Tests', link: '/how-to/test-execution' },
          { text: 'Reporting Test Results', link: '/how-to/test-reporting' },
          { text: 'Track Defects', link: '/how-to/defect-tracking' },
          { text: 'Collaborate with Your Team', link: '/how-to/collaboration' },
          { text: 'Analyze Quality Metrics', link: '/how-to/analytics' }
        ]
      },
      {
        text: 'Feature Reference',
        items: [
          { text: 'Overview', link: '/reference/' },
          {
            text: 'Test Management',
            items: [
              { text: 'Test Cases', link: '/reference/test-cases' },
              { text: 'Test Suites', link: '/reference/test-suites' },
              { text: 'Test Plans', link: '/reference/test-plans' }
            ]
          },
          {
            text: 'Test Execution',
            items: [
              { text: 'Launches', link: '/reference/launches' },
              { text: 'Environments', link: '/reference/environments' }
            ]
          },
          {
            text: 'Defect Management',
            items: [
              { text: 'Defects', link: '/reference/defects' },
              { text: 'Milestones', link: '/reference/milestones' }
            ]
          },
          {
            text: 'Analytics & Reporting',
            items: [
              { text: 'Dashboards', link: '/reference/dashboards' },
              { text: 'Search & Filter', link: '/reference/search' }
            ]
          },
          {
            text: 'Settings',
            items: [
              { text: 'Workspace Settings', link: '/reference/workspace-settings' },
              { text: 'Project Settings', link: '/reference/project-settings' }
            ]
          }
        ]
      },
      {
        text: 'CLI Tool',
        items: [
          { text: 'Overview', link: '/cli/' },
          { text: 'Installation', link: '/cli/installation' },
          { text: 'Upload Command', link: '/cli/upload' },
          { text: 'Other Commands', link: '/cli/other-commands' },
          { text: 'CI/CD Integration', link: '/cli/ci-cd' }
        ]
      },
      {
        text: 'Troubleshooting & FAQ',
        items: [
          { text: 'Troubleshooting', link: '/faq/troubleshooting' },
          { text: 'Frequently Asked Questions', link: '/faq/' },
          { text: 'Getting Help', link: '/faq/getting-help' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qualflare/qualflare' }
    ]
  }
})
