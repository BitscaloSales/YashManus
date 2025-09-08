import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const Resources = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Amazon Connect Migration Checklist: 15 Critical Steps for Success",
      excerpt: "A comprehensive guide to planning and executing your Amazon Connect migration without missing crucial details that could derail your project.",
      author: "Sarah",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Amazon Connect",
      featured: true,
      url: "https://www.linkedin.com/pulse/amazon-connect-migration-checklist-15-critical-steps-success-zfjhf/?trackingId=l60B3W8EZr1qhwt1eDNY1Q%3D%3D",
      image: "/images/amazon_connect_migration_feature_image.png"
    },
    {
      id: 2,
      title: "Microsoft Dynamics 365 Contact Center Best Practices",
      excerpt: "Proven strategies for maximizing your Microsoft investment, from Teams integration to Power Platform automation that drives real results.",
      author: "Amrit K",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Microsoft Dynamics",
      url: "https://www.linkedin.com/pulse/microsoft-dynamics-365-contact-center-best-practices-lessons-ux9mc/",
      image: "/images/MicrosoftDynamics365ContactCenterBestPractices.png"

    },
    {
      id: 3,
      title: "The Complete Omnichannel Routing Playbook: Beyond Basic Setup",
      excerpt: "Advanced routing strategies that reduce wait times by 40% and improve first-call resolution rates across voice, chat, email, and social channels.",
      author: "Sarah",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Strategy",
      url: "https://www.linkedin.com/pulse/complete-omnichannel-routing-playbook-beyond-basic-setup-yashsphere-jajbc/",
      image: "/images/omnichannel_routing_feature_image.png"
    },
    {
      id: 4,
      title: "IVR Design Patterns That Actually Reduce AHT (With Real Examples)",
      excerpt: "Stop frustrating customers with phone trees. Learn the IVR design principles that leading brands use to improve self-service and reduce handling time.",
      author: "Sarah",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "IVR Design",
      url: "https://www.linkedin.com/pulse/amazon-connect-migration-checklist-15-critical-steps-success-zfjhf/?trackingId=l60B3W8EZr1qhwt1eDNY1Q%3D%3D",
      image: "/images/ivr_design_patterns_feature.png"
    },
    {
      id: 5,
      title: "Workforce Management Quick Start Guide for Growing Contact Centers",
      excerpt: "From basic scheduling to advanced forecasting: how to implement WFM that scales with your business without overwhelming your team.",
      author: "Zen",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "WFM",
      url: "https://www.linkedin.com/pulse/amazon-connect-migration-checklist-15-critical-steps-success-zfjhf/?trackingId=l60B3W8EZr1qhwt1eDNY1Q%3D%3D"
    },
    {
      id: 6,
      title: "Contact Center Analytics That Actually Move CSAT: 12 KPIs That Matter",
      excerpt: "Move beyond vanity metrics. Discover the analytics and dashboards that correlate with customer satisfaction and drive actionable improvements.",
      author: "Sarah",
      date: "February 15, 2024",
      readTime: "11 min read",
      category: "Analytics",
      url: "https://www.linkedin.com/pulse/amazon-connect-migration-checklist-15-critical-steps-success-zfjhf/?trackingId=l60B3W8EZr1qhwt1eDNY1Q%3D%3D"
    }
  ]

  const categories = ["All", "Amazon Connect", "Microsoft Dynamics", "Strategy", "IVR Design", "WFM", "Analytics"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4">Knowledge Center</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert insights, best practices, and actionable guides to help you succeed
              with your contact center transformation. Learn from our experience with 200+ implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Subscribe to Newsletter <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Download Migration Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
          </div>

          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left column with text */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 flex items-center">
                  <div>
                    <Badge className="mb-4">{post.category}</Badge>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg">
                        Read Full Article <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Right column with image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          ))}

        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Practical insights from our team of contact center experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="h-48 overflow-hidden">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-100 flex items-center justify-center h-full text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span>{post.date}</span>
                  </div>
                  <a href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated with Expert Insights
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest contact center trends, best practices, and implementation guides
            delivered to your inbox monthly.
          </p>
          <Card className="max-w-md mx-auto p-6">
            <CardContent className="p-0">
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="w-full" size="lg">
                  Subscribe to Newsletter <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resource Downloads */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Free Resources & Downloads
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive guides and templates to accelerate your contact center transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Migration Checklist",
                description: "Step-by-step checklist for Amazon Connect and Microsoft Dynamics migrations",
                type: "PDF Guide"
              },
              {
                title: "ROI Calculator Template",
                description: "Calculate the business impact and ROI of your contact center modernization",
                type: "Excel Template"
              },
              {
                title: "IVR Design Workbook",
                description: "Templates and best practices for designing customer-friendly IVR flows",
                type: "PDF Workbook"
              },
              {
                title: "Vendor Comparison Matrix",
                description: "Detailed comparison of Amazon Connect vs Microsoft Dynamics 365 Contact Center",
                type: "PDF Comparison"
              },
              {
                title: "Implementation Timeline Template",
                description: "Project planning template with realistic timelines and milestones",
                type: "Project Template"
              },
              {
                title: "Training Curriculum Guide",
                description: "Comprehensive training plans for administrators, supervisors, and agents",
                type: "Training Guide"
              }
            ].map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{resource.type}</Badge>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Download Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Personalized Guidance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our experts are here to help you navigate your specific contact center challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Schedule Expert Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-black">
              Download Migration Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources

