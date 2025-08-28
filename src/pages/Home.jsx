import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Users, TrendingUp, Clock, DollarSign, Zap, Shield, Globe, MessageSquare, BarChart3, Headphones } from 'lucide-react'
import { Link } from 'react-router-dom'
import dashboardImage from '../assets/HvTgRy5XiD7u.webp'
import amazonConnectImage from '../assets/Amazon_Connect_logo.png'
import microsoftImage from '../assets/MSDynamicsCClogo.jpg'

const Home = () => {
  const outcomes = [
    { icon: Clock, title: "40% Faster Resolution", description: "Reduce average handling time with smart routing" },
    { icon: TrendingUp, title: "25% Higher CSAT", description: "Deliver exceptional customer experiences" },
    { icon: DollarSign, title: "30% Lower Costs", description: "Optimize operations and reduce overhead" },
    { icon: Users, title: "50% Better Agent Productivity", description: "Empower agents with AI-powered tools" }
  ]

  const integrations = [
    "Salesforce", "HubSpot", "Zendesk", "Freshdesk", "WhatsApp", 
    "Microsoft 365", "Power Platform", "Service Hub"
  ]

  const testimonials = [
    {
      quote: "YashSphere AI transformed our contact center in just 8 weeks. The migration was seamless and our CSAT scores improved by 30%.",
      author: "Sarah Johnson",
      role: "VP of Customer Experience",
      company: "TechCorp"
    },
    {
      quote: "Finally, a partner who understands both the technical and business sides of contact center transformation.",
      author: "Michael Chen",
      role: "IT Director",
      company: "FinanceFirst"
    }
  ]

  const faqs = [
    {
      question: "How long does a typical migration take?",
      answer: "SMB implementations typically take 4-8 weeks, while enterprise deployments range from 12-20 weeks depending on complexity."
    },
    {
      question: "What about security and compliance?",
      answer: "Both Amazon Connect and Microsoft Dynamics 365 Contact Center meet SOC2, GDPR, and industry-specific compliance requirements. We ensure secure data migration and ongoing compliance."
    },
    {
      question: "Which platform is right for us?",
      answer: "Amazon Connect excels for AWS-native organizations, while Microsoft Dynamics 365 Contact Center is ideal for Microsoft 365 environments. We'll help you choose based on your ecosystem."
    },
    {
      question: "How do you approach pricing?",
      answer: "We offer value-based pricing tied to your business outcomes, with transparent project scoping and no hidden fees."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Cloud Contact Center Experts</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Smarter Contact Centers.
                <span className="text-primary"> Simpler Operations.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We design, implement, and optimize Amazon Connect and Microsoft Dynamics 365 Contact Center solutions. 
                From discovery to deployment—fewer phone trees, more first-contact resolutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="text-lg px-8 py-3">
                    Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                    Free Migration Assessment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={dashboardImage} 
                alt="Contact Center Dashboard" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Two Best-in-Class Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the platform that fits your ecosystem. We deliver end-to-end implementation for both.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Amazon Connect Card */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-50"></div>
              <CardHeader className="relative">
                <div className="flex items-center space-x-3 mb-4">
                  <img src={amazonConnectImage} alt="Amazon Connect" className="w-16 h-16 rounded-lg" />
                  <div>
                    <CardTitle className="text-2xl">Amazon Connect</CardTitle>
                    <CardDescription>AWS-Native Contact Center</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Infinite scalability with AWS infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Contact Lens AI for real-time insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Pay-per-use pricing model</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Native AWS service integrations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Advanced omnichannel routing</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <Link to="/amazon-connect">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {/*<Button variant="outline" className="flex-1" asChild>
                    <Link to="/contact">Book Demo</Link>
                  </Button>*/}
                </div>
              </CardContent>
            </Card>

            {/* Microsoft Dynamics Card */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
              <CardHeader className="relative">
                <div className="flex items-center space-x-3 mb-4">
                  <img src={microsoftImage} alt="Microsoft Dynamics 365" className="w-16 h-16 rounded-lg" />
                  <div>
                    <CardTitle className="text-2xl">Microsoft Dynamics 365</CardTitle>
                    <CardDescription>Contact Center</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Deep Microsoft 365 integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Copilot AI assistance for agents</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Unified case management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Power Platform automation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Teams-native experience</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <Link to="/microsoft-dynamics">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to="/contact">Book Demo</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proven Business Outcomes
            </h2>
            <p className="text-xl text-gray-600">
              Our clients see measurable improvements within the first quarter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <outcome.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{outcome.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", description: "Assess current state and define requirements" },
              { step: "02", title: "Design", description: "Architect the optimal solution for your needs" },
              { step: "03", title: "Implement", description: "Deploy with minimal disruption to operations" },
              { step: "04", title: "Optimize", description: "Continuous improvement and managed services" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your existing tools and workflows
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((integration, index) => (
              <Badge key={index} variant="secondary" className="text-lg px-6 py-2">
                {integration}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <p className="text-lg text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
            Ready to Transform Your Contact Center?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies who've modernized their customer experience with YashSphere AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Free Migration Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

