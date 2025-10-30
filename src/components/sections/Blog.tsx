import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "10 Web Design Trends That Will Dominate 2025",
    category: "Design",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop",
    excerpt: "Discover the latest design trends shaping the future of web experiences.",
    link: "https://zenthosinsights.hashnode.dev"
  },
  {
    title: "Building a Strong Brand Identity from Scratch",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop",
    excerpt: "A step-by-step guide to creating a memorable brand that resonates.",
    link: "https://zenthosinsights.hashnode.dev"
  },
  {
    title: "The Psychology of Color in Digital Design",
    category: "Design",
    image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&auto=format&fit=crop",
    excerpt: "Understanding how color choices impact user behavior and engagement.",
    link: "https://zenthosinsights.hashnode.dev"
  },
];

export function Blog() {
  return (
    <section id="blog" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Blog</h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Take a look at my thoughts and inspirations below and read the ones that resonate with you.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in opacity-0"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold leading-tight">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                <Button
                  variant="link"
                  className="text-primary hover:text-primary/80 p-0 h-auto font-semibold"
                  asChild
                >
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read More →
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Read All Button */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-lg font-semibold"
            asChild
          >
            <a href="https://zenthosinsights.hashnode.dev" target="_blank" rel="noopener noreferrer">
              Read All Posts
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
