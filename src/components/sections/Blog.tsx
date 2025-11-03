import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackBlogClick, trackNavigationClick } from "@/lib/analytics";
import avzdaxImage from "@/assets/Gemini_Generated_Image_bfpn89bfpn89bfpn.png";

const allBlogPosts = [
  {
    id: 3,
    title: "Building in Public: Why Visibility Matters in Tech",
    category: "Career",
    image: "/src/assets/dev journey.webp",
    excerpt: "When I started learning to code, I believed skill was everything. Turns out, visibility is just as powerful. Here's my journey from building quietly to creating opportunities through sharing my story.",
    readTime: "5 min read",
    date: "2025-01-28"
  },
  {
    id: 2,
    title: "Mobile-First Design: Why It Matters More Than Ever",
    category: "Responsive design",
    image: "/src/assets/mobile design.webp",
    excerpt: "Back in the early days of the web, desktop screens ruled everything. Designers built wide, beautiful layouts — then tried to 'make them fit' on smaller screens later. That approach doesn't work anymore. Today, the web is mobile.",
    readTime: "6 min read",
    date: "2025-10-13"
  },
  {
    id: 1,
    title: "Why Product Management is the Bridge Between Technology and Business Success",
    category: "Product Strategy",
    image: "/src/assets/product.jpeg",
    excerpt: "Drawing from my experience building platforms like Haven Stay, I've learned that great products aren't just well-coded—they're strategically positioned to solve real problems and drive measurable business outcomes.",
    readTime: "6 min read",
    date: "2025-10-14"
  },
  {
    id: 4,
    title: "Inside AVZDAX: Building Africa's Proactive Security Future",
    category: "Security Technology",
    image: avzdaxImage,
    excerpt: "Last weekend, I had an eye-opening conversation with Gbenga A. Sosan, the Founder and CEO of AVZDAX, one of Africa's most ambitious security-tech companies. What struck me wasn't just the scale of their vision — it was the clarity of their mission.",
    readTime: "5 min read",
    date: "2025-10-30"
  }
];

export function Blog() {
  const navigate = useNavigate();

  const handleReadMore = (postId: number) => {
    const posts = allBlogPosts.find(post => post.id === postId);
    if (posts) {
      trackBlogClick(posts.title, postId);
    }

    const postUrls: { [key: number]: string } = {
      3: 'https://zenthosinsights.hashnode.dev/how-im-building-my-developer-brand-and-why-you-should-too',
      2: 'https://zenthosinsights.hashnode.dev/mobile-first-design-why-it-matters-more-than-ever',
      1: 'https://zenthosinsights.hashnode.dev/why-product-management-is-the-bridge-between-technology-and-business-success',
      4: 'https://zenthosinsights.hashnode.dev/inside-avzdax-building-africas-proactive-security-future',
      // Add other post URLs here as needed
    };
    const url = postUrls[postId] || 'https://zenthosinsights.hashnode.dev';
    window.open(url, '_blank');
  };

  return (
    <section id="blog" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Blog</h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-tight">
            Insights from my journey in tech, design, and product development.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing lessons learned, industry trends, and practical advice for building better digital experiences.
          </p>
        </div>


        {/* Blog Posts Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-12 text-center">Featured Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-7xl mx-auto">
            {allBlogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in opacity-0 cursor-pointer focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
                onClick={() => handleReadMore(post.id)}
                role="article"
                aria-labelledby={`blog-title-${post.id}`}
                aria-describedby={`blog-excerpt-${post.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={`Cover image for ${post.title} - ${post.category}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop';
                    }}
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 id={`blog-title-${post.id}`} className="text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p id={`blog-excerpt-${post.id}`} className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <span className="text-xs text-muted-foreground font-medium">{post.date}</span>
                    <Button
                      variant="link"
                      className="text-primary hover:text-primary/80 p-0 h-auto font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More →
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View All Blog Button */}
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            onClick={() => {
              trackNavigationClick('view_all_articles');
              window.open('https://zenthosinsights.hashnode.dev', '_blank');
            }}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full px-10 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 hover:scale-105"
          >
            Read My Latest Tech Insights
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
