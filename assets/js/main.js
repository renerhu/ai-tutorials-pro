// AI Tutorials Pro - Main JS

const articles = [
  {
    title: "ChatGPT vs Claude vs Gemini: Which AI Assistant Wins in 2026?",
    tag: "Comparisons",
    category: "comparison",
    excerpt: "We pit the three leading AI assistants against each other across real-world tasks — coding, writing, analysis, and more. See who comes out on top.",
    url: "/articles/chatgpt-vs-claude-vs-gemini-2026.html",
    date: "May 29, 2026",
    readTime: "8 min read"
  },
  {
    title: "How to Make Money with AI in 2026: 7 Proven Strategies",
    tag: "Make Money",
    category: "money",
    excerpt: "From AI-powered freelancing to automated content creation — discover seven real ways people are generating income with AI tools right now.",
    url: "/articles/make-money-with-ai-2026.html",
    date: "May 28, 2026",
    readTime: "10 min read"
  },
  {
    title: "10 Best AI Tools for Content Creation in 2026 (Tested)",
    tag: "Tool Reviews",
    category: "reviews",
    excerpt: "After testing 50+ AI tools, here are the top 10 that actually deliver results for blog posts, videos, social media, and marketing content.",
    url: "/articles/best-ai-content-tools-2026.html",
    date: "May 27, 2026",
    readTime: "7 min read"
  },
  {
    title: "Midjourney Tutorial: From Beginner to Pro in 30 Minutes",
    tag: "Tutorials",
    category: "tutorial",
    excerpt: "A complete walkthrough of Midjourney — from your first prompt to advanced techniques like style references, parameter tuning, and consistent characters.",
    url: "/articles/midjourney-beginner-tutorial.html",
    date: "May 26, 2026",
    readTime: "12 min read"
  },
  {
    title: "Claude 4 vs GPT-5: The Ultimate Coding Benchmarks",
    tag: "Comparisons",
    category: "comparison",
    excerpt: "We benchmarked the latest Claude 4 and GPT-5 on real coding challenges. Here's the data on accuracy, speed, and handling complex projects.",
    url: "/articles/claude-4-vs-gpt-5-coding-benchmarks.html",
    date: "May 25, 2026",
    readTime: "9 min read"
  },
  {
    title: "AI Prompt Engineering: The Complete Guide for 2026",
    tag: "Tutorials",
    category: "tutorial",
    excerpt: "Master the art of prompt engineering — from basic techniques to advanced frameworks like chain-of-thought, few-shot, and structured outputs.",
    url: "/articles/ai-prompt-engineering-guide-2026.html",
    date: "May 24, 2026",
    readTime: "15 min read"
  }
];

function loadArticles() {
  const container = document.getElementById('latest-articles');
  if (!container) return;

  articles.forEach(article => {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.innerHTML = `
      <span class="tag">${article.tag}</span>
      <h3><a href="${article.url}">${article.title}</a></h3>
      <p>${article.excerpt}</p>
      <div class="meta">
        <span>${article.date}</span>
        <span>${article.readTime}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', loadArticles);
