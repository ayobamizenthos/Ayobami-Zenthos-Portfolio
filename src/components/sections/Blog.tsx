import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const featuredPosts = [
  {
    id: 1,
    title: "The Evolution of Full-Stack Development: My Journey from Frontend to End-to-End Solutions",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
    excerpt: "Reflecting on how I transitioned from specializing in frontend interfaces to building complete digital ecosystems that serve real business needs.",
    readTime: "8 min read",
    date: "2024-10-28",
    featured: true
  },
  {
    id: 2,
    title: "Why Product Management is the Bridge Between Technology and Business Success",
    category: "Product Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    excerpt: "Drawing from my experience building platforms like Haven Stay, I've learned that great products aren't just well-coded—they're strategically positioned to solve real problems.",
    readTime: "6 min read",
    date: "2024-10-25",
    featured: true
  },
  {
    id: 3,
    title: "Building Trust Through Design: The Psychology Behind User Experience",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop",
    excerpt: "Every pixel tells a story. Here's how I approach design thinking to create interfaces that users don't just use—they trust and rely on.",
    readTime: "7 min read",
    date: "2024-10-22",
    featured: true
  }
];

const allBlogPosts = [
  ...featuredPosts,
  {
    id: 4,
    title: "From Lagos to Global: Navigating Cross-Cultural Product Development",
    category: "Business",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop",
    excerpt: "Working with international clients has taught me that great products transcend borders. Here's what I've learned about building for diverse audiences.",
    readTime: "5 min read",
    date: "2024-10-20"
  },
  {
    id: 5,
    title: "The Art of Technical Communication: Making Complex Ideas Accessible",
    category: "Communication",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    excerpt: "Breaking down complex technical concepts for stakeholders isn't just about simplification—it's about building shared understanding and driving better decisions.",
    readTime: "6 min read",
    date: "2024-10-18"
  },
  {
    id: 6,
    title: "Sustainable Development: Writing Code That Lasts",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    excerpt: "In a world of rapid technological change, I've learned that the most valuable code isn't the most innovative—it's the most maintainable and adaptable.",
    readTime: "9 min read",
    date: "2024-10-15"
  },
  {
    id: 7,
    title: "The Human Element in Digital Transformation",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    excerpt: "Technology changes lives, but people change businesses. My approach to digital transformation always starts with understanding the human impact.",
    readTime: "7 min read",
    date: "2024-10-12"
  },
  {
    id: 8,
    title: "From Wireframes to Revenue: Measuring Design's Business Impact",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    excerpt: "Good design creates beautiful interfaces. Great design drives business results. Here's how I measure and optimize for both.",
    readTime: "8 min read",
    date: "2024-10-10"
  },
  {
    id: 9,
    title: "Building Communities: The Social Architecture of Digital Products",
    category: "Product Strategy",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop",
    excerpt: "Products don't exist in isolation. The most successful ones build communities around shared values and experiences.",
    readTime: "6 min read",
    date: "2024-10-08"
  },
  {
    id: 10,
    title: "The Future of Work: Remote Collaboration in a Digital Age",
    category: "Business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    excerpt: "Working remotely has reshaped how I approach collaboration, communication, and team building. Here are the lessons that have served me well.",
    readTime: "5 min read",
    date: "2024-10-05"
  }
];

export function Blog() {
  const navigate = useNavigate();

  const handleReadMore = (postId: number) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <section id="blog" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Blog</h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Insights from my journey in tech, design, and product development.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing lessons learned, industry trends, and practical advice for building better digital experiences.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Articles</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in opacity-0 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
                onClick={() => handleReadMore(post.id)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
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
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => navigate('/blog')}
          >
            <span className="flex items-center gap-2">
              View All Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
