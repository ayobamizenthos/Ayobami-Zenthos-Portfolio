import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Evolution of Full-Stack Development: My Journey from Frontend to End-to-End Solutions",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
    content: `
      <p>When I first started my journey in web development, I was fascinated by the visual aspects of creating user interfaces. The ability to transform a design mockup into an interactive, responsive experience felt like digital magic. But as I worked on more projects and collaborated with different teams, I began to see the bigger picture.</p>

      <p>Building Haven Stay taught me that great user experiences require more than beautiful interfaces—they need robust backend systems, efficient databases, and thoughtful API design. The frontend is just the tip of the iceberg; the real complexity lies in creating scalable, maintainable systems that can grow with business needs.</p>

      <p>This evolution from frontend specialist to full-stack developer has been transformative. It taught me to think holistically about digital products, considering not just how something looks, but how it performs, scales, and integrates with other systems.</p>

      <h2>The Technical Foundation</h2>
      <p>My journey began with mastering the fundamentals of modern web development. React became my canvas for creating interactive user interfaces, while Node.js and Express.js provided the server-side capabilities I needed to build complete applications.</p>

      <p>Working with databases like PostgreSQL and MongoDB showed me the importance of data architecture. Choosing the right database isn't just about storing information—it's about designing systems that can efficiently retrieve, update, and analyze data as your application grows.</p>

      <h2>Lessons from Real Projects</h2>
      <p>Every project I've worked on has reinforced the value of full-stack thinking. When building 6:45 Fitness, I learned that user authentication, payment processing, and data analytics are just as important as the workout tracking interface.</p>

      <p>These experiences taught me that the most successful digital products are those where every layer of the technology stack works harmoniously toward a common goal: delivering exceptional value to users.</p>

      <h2>Looking Forward</h2>
      <p>As technology continues to evolve, the full-stack developer's role becomes even more critical. We're not just building websites anymore—we're creating digital ecosystems that integrate with APIs, IoT devices, and AI services.</p>

      <p>My journey from frontend to full-stack development has been challenging but incredibly rewarding. It has given me the perspective to create more comprehensive, impactful solutions that truly serve users' needs.</p>
    `,
    readTime: "8 min read",
    date: "2024-10-28",
    featured: true
  },
  {
    id: 2,
    title: "Why Product Management is the Bridge Between Technology and Business Success",
    category: "Product Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    content: `
      <p>During my work on Haven Stay, I witnessed firsthand how technical excellence alone doesn't guarantee business success. The platform had beautiful code, responsive design, and robust functionality, but it wasn't until we aligned our development efforts with clear business objectives that we saw real growth.</p>

      <p>This experience opened my eyes to the critical role of product management in bridging the gap between technical capabilities and business outcomes. Product management isn't just about managing features—it's about ensuring that every line of code serves a strategic purpose.</p>

      <h2>The Product Mindset</h2>
      <p>Adopting a product mindset means constantly asking: "Does this feature move us closer to our business goals?" and "How does this impact our users' ability to achieve their objectives?"</p>

      <p>When building digital products, I now approach each decision with both technical and business considerations. This dual perspective helps me create solutions that are not only technically sound but also commercially viable.</p>

      <h2>User-Centric Development</h2>
      <p>Product management taught me the importance of understanding user needs deeply. It's not enough to build what we think users want—we need to validate assumptions through research, testing, and iteration.</p>

      <p>This user-centric approach has transformed how I approach development projects. Instead of starting with technical solutions, I now begin by understanding the problem we're trying to solve and the value we want to deliver.</p>

      <h2>Measuring Success</h2>
      <p>One of the most valuable lessons from product management is learning to measure success beyond code quality. Metrics like user engagement, conversion rates, and business impact become as important as technical performance indicators.</p>

      <p>This holistic view of success ensures that our development efforts contribute meaningfully to business objectives while delivering exceptional user experiences.</p>
    `,
    readTime: "6 min read",
    date: "2024-10-25",
    featured: true
  },
  {
    id: 3,
    title: "Building Trust Through Design: The Psychology Behind User Experience",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop",
    content: `
      <p>In my experience working on platforms like Akoka Parish and Aperture Architects, I've learned that design isn't just about aesthetics—it's about building trust. Users don't just interact with interfaces; they form relationships with them.</p>

      <p>When someone uses your application, they're placing trust in your ability to deliver on their needs. Every design decision either strengthens or weakens that trust. Here's how I approach this responsibility.</p>

      <h2>Consistency Builds Confidence</h2>
      <p>Consistent design patterns create familiarity and reduce cognitive load. When users encounter familiar interface elements, they feel more confident navigating your application. This consistency extends beyond visual design to include interaction patterns and information architecture.</p>

      <p>In my work, I establish design systems that maintain consistency across all touchpoints, creating a cohesive experience that users can rely on.</p>

      <h2>Transparency Fosters Trust</h2>
      <p>Users appreciate knowing what's happening behind the scenes. Loading states, progress indicators, and clear error messages help users understand the system's status and capabilities. This transparency reduces anxiety and builds confidence in the application's reliability.</p>

      <p>I've found that being honest about limitations and clear about processes creates more trust than trying to hide complexities behind flashy interfaces.</p>

      <h2>Progressive Disclosure</h2>
      <p>Not all information needs to be presented at once. Progressive disclosure—showing information as it's needed—respects users' cognitive capacity and prevents overwhelm. This approach demonstrates respect for users' time and attention.</p>

      <p>In complex applications like Haven Stay, progressive disclosure helps users focus on their immediate goals while knowing they can access additional features when needed.</p>

      <h2>Emotional Design</h2>
      <p>Great design considers users' emotional state. Pleasant micro-interactions, thoughtful error handling, and celebratory success states create positive emotional associations with your product.</p>

      <p>These emotional touches transform utilitarian interactions into memorable experiences that users want to repeat.</p>

      <h2>The Long-Term Impact</h2>
      <p>Trust built through thoughtful design creates loyal users who not only return but also advocate for your product. In a competitive digital landscape, this trust becomes your most valuable asset.</p>

      <p>My approach to design has evolved from creating pretty interfaces to building trustworthy digital relationships. Every design decision now considers not just functionality, but the trust it helps establish.</p>
    `,
    readTime: "7 min read",
    date: "2024-10-22",
    featured: true
  },
  {
    id: 4,
    title: "From Lagos to Global: Navigating Cross-Cultural Product Development",
    category: "Business",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop",
    content: `
      <p>My work with international clients has been one of the most educational aspects of my career. Building digital products for audiences across different cultures, time zones, and market conditions has taught me valuable lessons about adaptability and cultural sensitivity in product development.</p>

      <p>What works perfectly in Lagos might need significant adjustments for users in London, New York, or Singapore. This global perspective has made me a more thoughtful and effective product developer.</p>

      <h2>Cultural Context Matters</h2>
      <p>Color meanings, date formats, currency displays, and even button placements can have different significance across cultures. For instance, red might signify danger in Western cultures but prosperity in some Asian cultures.</p>

      <p>Understanding these cultural nuances helps create products that feel natural and respectful to users from different backgrounds. It's not about changing your product's identity—it's about making it accessible and appropriate for diverse audiences.</p>

      <h2>Language and Localization</h2>
      <p>Technical writing and user interface text need to go beyond simple translation. Idioms, humor, and cultural references that work in one context might not resonate in another.</p>

      <p>I've learned to write clear, universal copy that can be easily localized while maintaining the product's voice and personality.</p>

      <h2>Time Zone Considerations</h2>
      <p>Working across time zones requires different communication strategies and project management approaches. Asynchronous communication becomes more important, and documentation quality becomes critical.</p>

      <p>These challenges have improved my ability to work efficiently in distributed teams and create self-documenting systems.</p>

      <h2>Market-Specific Features</h2>
      <p>Different markets have unique needs and preferences. Payment methods, regulatory requirements, and user behaviors vary significantly across regions.</p>

      <p>Building flexibility into product architecture allows for market-specific customizations without compromising the core product experience.</p>

      <h2>Building Global Mindset</h2>
      <p>The most valuable lesson from cross-cultural product development is developing a global mindset. It's about recognizing that there's no single "right" way to build products—success comes from understanding and respecting diverse perspectives.</p>

      <p>This global awareness has made me a more empathetic developer and a better collaborator. It has taught me that great products don't just work well—they work well for everyone.</p>
    `,
    readTime: "5 min read",
    date: "2024-10-20"
  },
  {
    id: 5,
    title: "The Art of Technical Communication: Making Complex Ideas Accessible",
    category: "Communication",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    excerpt: "Breaking down complex technical concepts for stakeholders isn't just about simplification—it's about building shared understanding and driving better decisions.",
    content: `
      <p>One of the most challenging aspects of my role as a full-stack developer and product manager is communicating complex technical concepts to non-technical stakeholders. Whether explaining API architectures to business executives or database schemas to marketing teams, the ability to make technical ideas accessible is crucial for project success.</p>

      <p>Over the years, I've developed approaches that transform intimidating technical jargon into clear, actionable insights that drive better decision-making.</p>

      <h2>Know Your Audience</h2>
      <p>Effective technical communication starts with understanding your audience's background and needs. A CTO will want different details than a CEO. Tailoring your explanation to their context ensures the information is both relevant and digestible.</p>

      <p>I always ask myself: "What does this person need to know to make good decisions?" This focus on utility helps prioritize information and eliminate unnecessary technical details.</p>

      <h2>Use Analogies Wisely</h2>
      <p>Analogies are powerful tools for making complex ideas accessible, but they must be chosen carefully. A good analogy should be familiar to your audience and accurately represent the technical concept without oversimplifying important nuances.</p>

      <p>For instance, explaining database relationships using family trees or explaining APIs using restaurant kitchens helps stakeholders grasp concepts without getting lost in technical terminology.</p>

      <h2>Progressive Disclosure</h2>
      <p>Not everyone needs to understand the full technical complexity at once. Start with high-level concepts and provide deeper details as needed. This approach respects your audience's time while ensuring they have access to information when they need it.</p>

      <p>I've found that providing layered explanations—executive summaries with detailed appendices—works well for most stakeholders.</p>

      <h2>Visual Communication</h2>
      <p>Diagrams, flowcharts, and simple wireframes often communicate complex ideas more effectively than paragraphs of text. Visual representations help stakeholders see relationships and processes that might be difficult to understand through description alone.</p>

      <p>Tools like Figma, Lucidchart, and even simple sketches have become essential parts of my communication toolkit.</p>

      <h2>Building Shared Understanding</h2>
      <p>The goal of technical communication isn't just to inform—it's to build shared understanding that enables collaborative decision-making. When stakeholders truly understand technical concepts, they become better partners in the development process.</p>

      <p>This shared understanding leads to better requirements, more realistic timelines, and ultimately, more successful products.</p>

      <h2>Continuous Learning</h2>
      <p>Effective technical communication is a skill that improves with practice. Each conversation, presentation, and documentation effort teaches me new ways to make complex ideas more accessible.</p>

      <p>I'm constantly refining my approaches, learning from both successes and misunderstandings. This commitment to improvement has made me not just a better developer, but a better collaborator and leader.</p>
    `,
    readTime: "6 min read",
    date: "2024-10-18"
  },
  {
    id: 6,
    title: "Sustainable Development: Writing Code That Lasts",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    excerpt: "In a world of rapid technological change, I've learned that the most valuable code isn't the most innovative—it's the most maintainable and adaptable.",
    content: `
      <p>As someone who has maintained codebases for several years, I've come to appreciate that sustainable development isn't about using the latest frameworks or following every trend. It's about writing code that can evolve, be maintained, and serve business needs long after the initial development is complete.</p>

      <p>Here are the principles that guide my approach to creating lasting software solutions.</p>

      <h2>Clarity Over Cleverness</h2>
      <p>Readable code is maintainable code. While it's tempting to show off technical prowess with complex algorithms or clever abstractions, the real value comes from code that other developers (including future you) can easily understand and modify.</p>

      <p>I prioritize clear variable names, logical structure, and comprehensive documentation. If code can't be understood by someone new to the project within a reasonable time, it needs to be simplified.</p>

      <h2>Modular Architecture</h2>
      <p>Well-structured code is like a well-organized toolbox—everything has its place and can be found when needed. I focus on creating modular systems where components have clear responsibilities and minimal interdependencies.</p>

      <p>This approach makes it easier to update individual parts without affecting the entire system, reducing the risk of introducing bugs during maintenance.</p>

      <h2>Comprehensive Testing</h2>
      <p>Automated tests aren't just quality assurance—they're insurance policies for future development. Well-written tests document expected behavior and catch regressions before they reach production.</p>

      <p>I invest time in writing tests that are both thorough and maintainable, treating them as first-class citizens in the development process.</p>

      <h2>Documentation as Code</h2>
      <p>Documentation should be as much a part of the development process as writing code itself. I create README files, API documentation, and inline comments that explain not just what the code does, but why it was designed that way.</p>

      <p>Good documentation reduces onboarding time and prevents knowledge silos within development teams.</p>

      <h2>Future-Proofing</h2>
      <p>While predicting the future is impossible, I build systems with change in mind. Using established patterns, avoiding tight coupling, and creating abstraction layers makes it easier to adapt to new requirements or technologies.</p>

      <p>This approach doesn't mean over-engineering—it means making thoughtful decisions about what might change and designing accordingly.</p>

      <h2>The Long-Term Perspective</h2>
      <p>Sustainable development requires thinking beyond the current sprint or release. Every decision should consider its impact on future maintenance, scalability, and evolution.</p>

      <p>This long-term perspective has served me well, creating codebases that continue to deliver value years after their initial development. In a field that values innovation, sustainable development practices ensure that innovation can be maintained and built upon.</p>
    `,
    readTime: "9 min read",
    date: "2024-10-15"
  },
  {
    id: 7,
    title: "The Human Element in Digital Transformation",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    excerpt: "Technology changes lives, but people change businesses. My approach to digital transformation always starts with understanding the human impact.",
    content: `
      <p>Digital transformation is often discussed in terms of technology adoption, process automation, and efficiency gains. But in my experience working with various organizations, the most successful transformations are those that prioritize people over technology.</p>

      <p>Technology enables change, but people drive it. Understanding this fundamental truth has shaped how I approach digital transformation projects.</p>

      <h2>People-First Mindset</h2>
      <p>Every digital transformation affects people—employees, customers, and stakeholders. The most successful initiatives start by understanding how changes will impact these groups and designing solutions that support rather than disrupt their needs.</p>

      <p>This people-first approach ensures that technology serves human needs rather than forcing people to adapt to technological constraints.</p>

      <h2>Change Management</h2>
      <p>Technical implementation is only part of digital transformation. Equally important is managing the human side of change—addressing fears, building skills, and creating buy-in across the organization.</p>

      <p>I've learned that resistance to change often stems from fear of the unknown. Clear communication, training programs, and phased implementations help ease this transition.</p>

      <h2>Building Digital Literacy</h2>
      <p>Digital transformation requires not just new tools, but new ways of thinking and working. Investing in digital literacy programs helps organizations build the capabilities needed to leverage new technologies effectively.</p>

      <p>This investment pays dividends in both immediate adoption and long-term innovation capacity.</p>

      <h2>Cultural Transformation</h2>
      <p>Technology changes processes, but culture determines whether those changes stick. Organizations that successfully transform digitally create cultures that embrace experimentation, learning, and continuous improvement.</p>

      <p>Cultural change takes time and consistent leadership, but it's the foundation for sustainable digital transformation.</p>

      <h2>Measuring Human Impact</h2>
      <p>Success metrics for digital transformation should include not just technical and financial measures, but human ones as well. Employee satisfaction, customer experience, and organizational agility provide important insights into transformation effectiveness.</p>

      <p>These human metrics often predict long-term success better than purely technical indicators.</p>

      <h2>The Holistic Approach</h2>
      <p>Digital transformation is a complex interplay of technology, processes, and people. The most successful transformations address all three elements comprehensively, creating systems that are not just more efficient, but more human-centered.</p>

      <p>My approach to digital transformation has evolved from focusing on technology implementation to creating holistic change that improves both business outcomes and human experiences.</p>
    `,
    readTime: "7 min read",
    date: "2024-10-12"
  },
  {
    id: 8,
    title: "From Wireframes to Revenue: Measuring Design's Business Impact",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    excerpt: "Good design creates beautiful interfaces. Great design drives business results. Here's how I measure and optimize for both.",
    content: `
      <p>Early in my career, I believed that good design was subjective—a matter of aesthetics and personal taste. But working on revenue-generating products taught me that great design is measurable and directly impacts business outcomes.</p>

      <p>Here's how I've learned to connect design decisions to business results, creating interfaces that are both beautiful and profitable.</p>

      <h2>Defining Success Metrics</h2>
      <p>Before starting any design project, I work with stakeholders to define what success looks like. Is it increased conversion rates, higher user engagement, or improved customer satisfaction? These metrics guide design decisions and provide clear benchmarks for evaluation.</p>

      <p>Having clear success criteria ensures that design efforts align with business objectives from the start.</p>

      <h2>User Experience Metrics</h2>
      <p>Good design reduces friction and improves usability. I track metrics like task completion rates, time to complete actions, error rates, and user satisfaction scores to measure how well designs serve user needs.</p>

      <p>These metrics help identify usability issues and guide iterative improvements that enhance both user experience and business performance.</p>

      <h2>Conversion Optimization</h2>
      <p>Design directly impacts conversion rates. A/B testing different design approaches helps identify which variations perform better for specific business goals. I've found that even small design changes can have significant impacts on conversion rates.</p>

      <p>Systematic testing and measurement ensure that design decisions are data-driven rather than subjective.</p>

      <h2>Retention and Loyalty</h2>
      <p>Great design creates emotional connections that drive user retention. I measure return visit rates, session duration, and user lifetime value to understand how design contributes to long-term customer relationships.</p>

      <p>These metrics reveal whether designs create memorable experiences that users want to return to.</p>

      <h2>Brand Impact</h2>
      <p>Design communicates brand values and personality. Brand recognition surveys, social media engagement, and word-of-mouth referrals help measure how well design supports brand objectives.</p>

      <p>Strong brand design creates competitive advantages that extend beyond individual interactions.</p>

      <h2>Iterative Optimization</h2>
      <p>Measuring design impact is an ongoing process. I use analytics tools to continuously monitor performance and identify opportunities for improvement. This data-driven approach ensures that designs evolve to meet changing user needs and business goals.</p>

      <p>Regular measurement and optimization create a cycle of continuous improvement that compounds over time.</p>

      <h2>The Business Case for Good Design</h2>
      <p>Investing in good design isn't a luxury—it's a strategic necessity. Well-designed products perform better across all key business metrics, creating competitive advantages that drive growth and profitability.</p>

      <p>My approach to design has evolved from creating pretty interfaces to building measurable business assets. Every design decision now considers both aesthetic appeal and business impact.</p>
    `,
    readTime: "8 min read",
    date: "2024-10-10"
  },
  {
    id: 9,
    title: "Building Communities: The Social Architecture of Digital Products",
    category: "Product Strategy",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop",
    excerpt: "Products don't exist in isolation. The most successful ones build communities around shared values and experiences.",
    content: `
      <p>Working on platforms like Akoka Parish and 6:45 Fitness has shown me that the most successful digital products don't just serve individual users—they build communities. These communities become the product's most valuable asset, driving growth, retention, and advocacy.</p>

      <p>Here's what I've learned about designing products that foster meaningful communities.</p>

      <h2>Shared Purpose and Values</h2>
      <p>Successful communities form around shared purposes and values. Whether it's fitness enthusiasts supporting each other's goals or church members building spiritual connections, the product becomes a platform for these shared experiences.</p>

      <p>Understanding and amplifying these shared values creates stronger, more engaged communities.</p>

      <h2>Social Features as Core Functionality</h2>
      <p>Social features shouldn't be add-ons—they should be core to the product experience. User profiles, discussion forums, achievement systems, and collaborative features create opportunities for meaningful interactions.</p>

      <p>When social features are thoughtfully integrated, they enhance rather than distract from the core product value.</p>

      <h2>Facilitating Connections</h2>
      <p>Great communities provide tools and spaces for people to find and engage with others who share their interests. This might include interest-based groups, mentorship programs, or collaborative challenges. The key is creating low-friction ways for people to find and connect.</p>

      <p>Thoughtful connection features turn passive users into active community members.</p>

      <h2>Recognition and Rewards</h2>
      <p>Communities thrive when contributions are recognized and valued. Achievement systems, leaderboards, and social recognition features motivate participation and create positive feedback loops.</p>

      <p>These systems should feel authentic and aligned with community values rather than purely transactional.</p>

      <h2>Community Governance</h2>
      <p>As communities grow, they need structures for self-governance. Clear guidelines, moderation systems, and community leadership programs help maintain healthy, positive environments.</p>

      <p>Effective governance ensures communities remain welcoming and aligned with their core values.</p>

      <h2>Measuring Community Health</h2>
      <p>Community success requires different metrics than individual product usage. Engagement rates, member retention, content creation, and sentiment analysis help understand community health and identify areas for improvement.</p>

      <p>These metrics guide decisions about community features and moderation approaches.</p>

      <h2>The Long-Term Investment</h2>
      <p>Building communities takes time and consistent effort. The most successful communities evolve organically, with the product serving as a catalyst rather than a controller.</p>

      <p>This long-term perspective has taught me that communities are not built—they're cultivated. The most valuable communities emerge when products create the right conditions for human connection and shared purpose.</p>
    `,
    readTime: "6 min read",
    date: "2024-10-08"
  },
  {
    id: 10,
    title: "The Future of Work: Remote Collaboration in a Digital Age",
    category: "Business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    excerpt: "Working remotely has reshaped how I approach collaboration, communication, and team building. Here are the lessons that have served me well.",
    content: `
      <p>The shift to remote work has fundamentally changed how I approach collaboration and team dynamics. Working across time zones and cultures has taught me valuable lessons about building effective remote teams and maintaining productivity without physical proximity.</p>

      <p>These lessons have not just helped me work better remotely—they've made me a more effective collaborator overall.</p>

      <h2>Asynchronous Communication</h2>
      <p>Remote work requires embracing asynchronous communication. Instead of expecting immediate responses, I've learned to provide comprehensive context in written communications and create systems that work without real-time interaction.</p>

      <p>This approach has improved my writing skills and made our processes more resilient to time zone differences.</p>

      <h2>Clear Documentation</h2>
      <p>When team members can't walk over to ask questions, documentation becomes critical. I've become much more diligent about documenting processes, decisions, and project details. This not only helps remote collaboration but also improves knowledge sharing across the entire organization.</p>

      <p>Good documentation has become a cornerstone of my work approach, benefiting both remote and co-located teams.</p>

      <h2>Trust and Autonomy</h2>
      <p>Remote work requires a different management approach based on trust and autonomy rather than oversight. I've learned to focus on outcomes rather than hours worked, and to create clear expectations that allow team members to work in ways that suit them best.</p>

      <p>This trust-based approach has led to higher job satisfaction and better work quality.</p>

      <h2>Virtual Team Building</h2>
      <p>Building team cohesion remotely requires intentional effort. Regular virtual social events, one-on-one check-ins, and collaborative activities help maintain the human connections that are essential for effective teamwork.</p>

      <p>These efforts ensure that remote teams feel connected and supported despite physical distance.</p>

      <h2>Digital Tool Proficiency</h2>
      <p>Remote work has made me much more proficient with digital collaboration tools. From project management platforms to video conferencing systems, I've learned to leverage technology to create seamless remote work experiences.</p>

      <p>This technical proficiency has improved not just my remote work capabilities, but my overall digital literacy.</p>

      <h2>Work-Life Balance</h2>
      <p>Remote work blurs the boundaries between work and personal life. I've learned to set clear boundaries, create dedicated workspaces, and maintain routines that support both productivity and well-being.</p>

      <p>These practices have helped me maintain sustainable work patterns in a 24/7 connected world.</p>

      <h2>The Hybrid Future</h2>
      <p>As organizations move toward hybrid models, the lessons from remote work will become increasingly valuable. The ability to collaborate effectively across distances and time zones will be a key skill for the future workforce.</p>

      <p>My remote work experience has prepared me well for this future, teaching me flexibility, digital proficiency, and the importance of human connection in an increasingly digital world.</p>
    `,
    readTime: "5 min read",
    date: "2024-10-05"
  }
];

export function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.id === parseInt(id || "0"));

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
        text: post.excerpt,
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
          dangerouslySetInnerHTML={{ __html: post.content }}
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