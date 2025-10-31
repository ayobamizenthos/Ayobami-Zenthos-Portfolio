import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
      <p>Effective technical communication is a skill that improves with practice. Each conversation, presentation, and documentation effort teaches me new ways to make complex ideas more accessible.</p>
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { allBlogPosts } from "@/pages/Blog";

export function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = allBlogPosts.find(p => p.id === parseInt(id || "0"));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt || post.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/blog')}
            className="mb-6 hover:bg-muted"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-primary">A</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Ayobami Zenthos</p>
                <p className="text-sm text-muted-foreground">Web Developer & Technical Writer</p>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="hover:bg-muted"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-primary/20 prose-blockquote:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => navigate('/blog')}
                className="hover:bg-muted"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </div>

            <Button
              variant="outline"
              onClick={handleShare}
              className="hover:bg-muted"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-muted/30 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary">A</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Written by Ayobami Zenthos — Web Developer & Technical Writer.</h3>
                <p className="text-muted-foreground mb-4">
                  Building intuitive web experiences and documenting the lessons along the way.
                </p>
                <p className="text-muted-foreground text-sm">
                  Portfolio: ayobamizenthos.com
                </p>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}