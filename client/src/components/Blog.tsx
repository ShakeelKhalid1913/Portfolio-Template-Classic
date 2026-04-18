import { Button } from "@/components/ui/button";
import { ArrowUpRight, Calendar, User } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      id: "1",
      title: "The Future of Web Design: Trends to Watch in 2024",
      excerpt: "Exploring emerging design trends that are shaping the future of web design, from AI-powered interfaces to immersive experiences.",
      date: "April 15, 2024",
      author: "Alex Carter",
      category: "Design",
      readTime: "5 min read",
    },
    {
      id: "2",
      title: "Building Scalable React Applications",
      excerpt: "Best practices for structuring large-scale React applications, including component architecture, state management, and performance optimization.",
      date: "April 8, 2024",
      author: "Alex Carter",
      category: "Development",
      readTime: "8 min read",
    },
    {
      id: "3",
      title: "The Art of User-Centric Design",
      excerpt: "How to create designs that truly resonate with users by understanding their needs, behaviors, and pain points.",
      date: "March 30, 2024",
      author: "Alex Carter",
      category: "Design",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="blog" className="section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="accent-line mb-4" />
          <h2 className="text-foreground mb-4">Latest Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Insights and thoughts on design, development, and digital innovation.
            Stay updated with the latest trends and best practices.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 ease-out group"
            >
              {/* Placeholder Image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-all duration-300 ease-out">
                  📝
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground pt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <span>{post.readTime}</span>
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="w-full mt-4 text-primary hover:bg-primary/10"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-foreground text-foreground hover:bg-foreground/10"
          >
            View All Articles
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
