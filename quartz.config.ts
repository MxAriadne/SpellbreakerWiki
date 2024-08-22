import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Spellbreaker Wiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "your-quartz-site.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "local",  // Use system fonts similar to Obsidian's defaults
      cdnCaching: true,
      typography: {
        header: "Inter",  // Common font similar to Obsidian's default
        body: "Inter",
        code: "JetBrains Mono",  // Similar to Obsidian's code block font
      },
      colors: {
        lightMode: {
          light: "#ffffff",  // Obsidian's light mode background
          lightgray: "#d4d4d4",  // Light gray for borders and lines
          gray: "#888888",  // Regular gray text
          darkgray: "#444444",  // Darker text
          dark: "#000000",  // Primary text color in light mode
          secondary: "#3a3a3a",  // Secondary text color
          tertiary: "#2b2b2b",  // Tertiary elements like footers or less important info
          highlight: "rgba(200, 200, 255, 0.15)",  // Similar to Obsidian's highlight color
          textHighlight: "#ffec99",  // Text highlight similar to Obsidian's selection color
        },
        darkMode: {
          light: "#171717",  // Background (Base)
          lightgray: "#51576d",  // Borders and lines (Overlay0)
          gray: "#626880",  // Regular gray text (Overlay2)
          darkgray: "#babbf1",  // Slightly lighter gray (Text)
          dark: "#a079ff",  // Primary text color (Flamingo)
          secondary: "#a079ff",  // Secondary text color (Mauve)
          tertiary: "#7E61C5",  // Tertiary elements (Pink)
          highlight: "rgba(202, 158, 230, 0.3)",  // Highlight color with flamingo accent
          textHighlight: "#ef9f76",  // Text highlight (Peach)
       }
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",  // Use Obsidian's syntax highlighting theme
          dark: "dracula",  // Same for dark mode
        },
        keepBackground: true,  // Preserve background colors from the theme
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects({
        '/SpellbreakerWiki/Game-Consoles': '/SpellbreakerWiki/Game-Consoles/Game-Consoles'
      }),      
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
