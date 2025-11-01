import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const allBlogPosts = [
  {
    id: 1,
    title: "Why Product Management is the Bridge Between Technology and Business Success",
    category: "Product Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&auto=format&fit=crop&crop=center",
    excerpt: "Drawing from my experience building platforms like Haven Stay, I've learned that great products aren't just well-coded—they're strategically positioned to solve real problems and drive measurable business outcomes.",
    readTime: "6 min read",
    date: "2025-01-12"
  },
  {
    id: 2,
    title: "Building Trust Through Design: The Psychology Behind User Experience",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=450&auto=format&fit=crop&crop=center",
    excerpt: "Every pixel tells a story. Here's how I approach design thinking to create interfaces that users don't just use—they trust and rely on, fostering long-term engagement and loyalty.",
    readTime: "7 min read",
    date: "2025-01-08"
  },
  {
    id: 3,
    title: "From Lagos to Global: Navigating Cross-Cultural Product Development",
    category: "Business",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=450&auto=format&fit=crop&crop=center",
    excerpt: "Working with international clients has taught me that great products transcend borders. Here's what I've learned about building for diverse audiences and adapting to different cultural contexts.",
    readTime: "5 min read",
    date: "2025-01-05"
  }
];

export function Blog() {
  const navigate = useNavigate();

  const handleReadMore = (postId: number) => {
    window.open('https://zenthosinsights.hashnode.dev', '_blank');
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
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Articles</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {allBlogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in opacity-0 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
                onClick={() => handleReadMore(post.id)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop';
                    }}
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Button
                      variant="link"
                      className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform duration-300"
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
        <div className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                View All Articles
                <ChevronDown className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              <DropdownMenuItem
                onClick={() => window.open('https://zenthosinsights.hashnode.dev', '_blank')}
                className="cursor-pointer"
              >
                Hashnode Blog
                <span className="ml-auto text-xs text-muted-foreground">↗</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
}
