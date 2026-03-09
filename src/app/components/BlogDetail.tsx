import { Link, useParams } from "react-router";
import { Clock, Calendar, User, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";
import { BLOGS } from "./Home";
import imgGrowCenterLogo from "figma:asset/48010cd5f7619e67f2d00d3ffee3cc006415de36.png";

function Navbar() {
  const { t } = useTranslation();
  
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={imgGrowCenterLogo} alt="Grow Center" className="h-10 w-auto object-contain" />
          <span className="font-bold text-[#162947] text-lg hidden sm:block">Grow Center</span>
        </Link>
        {/* Right buttons */}
        <div className="flex items-center gap-3">
          <LanguageSelector />
          <Link
            to="/"
            className="flex items-center gap-2 text-[#162947] font-bold text-sm px-5 py-2 rounded-full border-2 border-[#162947] hover:bg-[#162947] hover:text-white transition-colors whitespace-nowrap"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('nav.backToHome')}
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0e1e36] text-white pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={imgGrowCenterLogo} alt="Grow Center" className="h-10 w-auto object-contain" />
              <span className="font-bold text-xl">Grow Center</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students to unlock their future through English language mastery.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Courses", "Blog", "Contact"].map((l) => (
                <li key={l}>
                  <Link to="/" className="text-gray-400 text-sm hover:text-[#BFDB38] transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Latest Posts */}
          <div>
            <h4 className="font-bold text-base mb-4">Latest Posts</h4>
            <ul className="space-y-2">
              {BLOGS.slice(0, 3).map((post) => (
                <li key={post.id}>
                  <Link to={`/blog/${post.id}`} className="text-gray-400 text-sm hover:text-[#BFDB38] transition-colors line-clamp-1">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Jl. Pendidikan No. 123, Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+6281234567890" className="hover:text-[#BFDB38] transition-colors">+62 812 3456 7890</a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@growcenter.id" className="hover:text-[#BFDB38] transition-colors">info@growcenter.id</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-white/10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© 2026 Grow Center. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#BFDB38] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#BFDB38] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function BlogDetail() {
  const { id } = useParams();
  const blogPost = BLOGS.find(post => post.id === Number(id));

  if (!blogPost) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-[1280px] mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#162947] mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
          <Link 
            to="/"
            className="inline-block bg-[#BFDB38] text-[#162947] font-bold px-8 py-3 rounded-full hover:bg-[#a3be22] transition-colors"
          >
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related posts (all posts except current one)
  const relatedPosts = BLOGS.filter(post => post.id !== blogPost.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#F2FAFF] py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[#606060] hover:text-[#BFDB38] transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <span className="inline-block bg-[#ECF4C3] text-[#162947] font-bold text-sm px-4 py-1 rounded-full mb-4">
            Blog Article
          </span>
          
          <h1 className="text-[#162947] text-3xl md:text-5xl font-bold leading-tight mb-6">
            {blogPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-[#606060] text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{blogPost.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Grow Center Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="max-w-[900px] mx-auto px-6 py-8">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={blogPost.img} 
              alt={blogPost.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-white pb-20">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#606060] text-lg leading-relaxed mb-6 font-medium">
              {blogPost.excerpt}
            </p>
            
            {blogPost.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-[#606060] text-base leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-[#BFDB38]/10 to-[#ECF4C3]/30 rounded-2xl p-8 text-center">
            <h3 className="text-[#162947] text-2xl font-bold mb-4">
              Ready to Start Your English Journey?
            </h3>
            <p className="text-[#606060] mb-6 max-w-md mx-auto">
              Join thousands of students who have transformed their English skills with Grow Center.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/#our-course"
                className="bg-[#BFDB38] text-[#162947] font-bold px-8 py-3 rounded-full hover:bg-[#a3be22] transition-colors"
              >
                Explore Courses
              </Link>
              <a
                href="#contact"
                className="border-2 border-[#162947] text-[#162947] font-bold px-8 py-3 rounded-full hover:bg-[#162947] hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-[#162947] font-bold mb-4">Share this article:</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-[#1877f2] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                Facebook
              </button>
              <button className="px-4 py-2 bg-[#1da1f2] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                Twitter
              </button>
              <button className="px-4 py-2 bg-[#0077b5] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                LinkedIn
              </button>
              <button className="px-4 py-2 bg-[#25d366] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#F2FAFF] py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <h2 className="text-[#162947] text-3xl font-bold mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md group hover:shadow-xl transition-shadow"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[#BFDB38] text-xs font-medium mb-2">{post.date}</p>
                    <h3 className="text-[#162947] font-bold text-base leading-snug mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-[#606060] text-sm font-semibold flex items-center gap-1 hover:text-[#BFDB38] transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}