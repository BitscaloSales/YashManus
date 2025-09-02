import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Cloud, Zap, Shield, BarChart3, MessageSquare, Users, Globe, Headphones } from 'lucide-react'
import amazonConnectImage from '../assets/y0ek7uW4kP2v.png'
import dashboardImage from '../assets/r1ghl0nRshnl.png'

const AmazonConnect = () => {
  const outcomes = [
    { metric: "35%", description: "Increase in CSAT scores" },
    { metric: "28%", description: "Reduction in AHT" },
    { metric: "45%", description: "Improvement in self-service containment" },
    { metric: "40%", description: "Boost in agent productivity" }
  ]

  const capabilities = [
    {
      icon: MessageSquare,
      title: "Omnichannel Routing",
      description: "Voice, chat, email, and social media in one unified platform"
    },
    {
      icon: BarChart3,
      title: "Contact Lens Analytics",
      description: "Real-time sentiment analysis and conversation insights"
    },
    {
      icon: Zap,
      title: "Agent Assist",
      description: "AI-powered recommendations and knowledge base integration"
    },
    {
      icon: Users,
      title: "Intelligent IVR",
      description: "Natural language processing for better self-service"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC2, PCI DSS, and HIPAA compliance built-in"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy across 25+ AWS regions worldwide"
    }
  ]

  const integrations = [
    "Salesforce Service Cloud", "HubSpot Service Hub", "Zendesk", "Freshdesk",
    "ServiceNow", "Microsoft Dynamics", "Slack", "WhatsApp Business",
    "Amazon S3", "Amazon Redshift", "Tableau", "Power BI"
  ]

  const pricingTiers = [
    {
      name: "Launch",
      description: "Perfect for SMB pilots or single queue deployments",
      features: [
        "Basic omnichannel setup",
        "Standard IVR configuration",
        "Contact Lens essentials",
        "Basic reporting dashboard",
		"Basic Support - 2 Weeks"
      ],
      startingFrom: "$500"
    },
    {
      name: "Scale",
      description: "Multi-queue operations with advanced analytics",
      features: [
        "Advanced omnichannel routing",
        "Custom IVR flows",
        "Full Contact Lens suite",
        "CRM integrations",
        "Workforce management basics",
        "Custom dashboards"
      ],
      startingFrom: "$1K-1.5K"
    },
    {
      name: "Enterprise",
      description: "Complex implementations with premium features",
      features: [
        "Enterprise omnichannel",
        "Advanced WFM & QA",
        "Custom AI/ML models",
        "Complex integrations",
        "Dedicated success manager",
        "24/7 premium support"
      ],
      startingFrom: "$5K+"
    }
  ]

  const faqs = [
    {
      question: "Is Amazon Connect right for our organization?",
      answer: "Amazon Connect is ideal for organizations already using AWS services, those requiring infinite scalability, or companies wanting pay-per-use pricing. It's particularly strong for data-driven organizations that want to leverage AWS's AI/ML capabilities."
    },
    {
      question: "How long does implementation typically take?",
      answer: "SMB implementations: 4-8 weeks. Mid-market: 8-16 weeks. Enterprise: 12-24 weeks. Timeline depends on complexity, integrations, and data migration requirements."
    },
    {
      question: "What training and support do you provide?",
      answer: "We provide comprehensive training for administrators, supervisors, and agents. This includes hands-on workshops, documentation, and ongoing support during the first 90 days post-launch."
    },
    {
      question: "How do you handle analytics and reporting?",
      answer: "Amazon Connect includes real-time and historical reporting out-of-the-box. We can also integrate with your existing BI tools like Tableau, Power BI, or build custom dashboards using AWS QuickSight."
    },
    {
      question: "What are the ongoing costs?",
      answer: "Amazon Connect uses pay-per-use pricing: ~$0.018 per minute for voice, ~$0.004 per chat message. Additional costs for Contact Lens, data storage, and third-party integrations. We help optimize costs through proper configuration."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800">AWS Native Solution</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Amazon Connect
                <span className="text-primary block">Implementation & Migration</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Leverage AWS's cloud-native contact center with infinite scalability, 
                pay-per-use pricing, and powerful AI capabilities. Perfect for organizations 
                already in the AWS ecosystem or those wanting enterprise-grade flexibility.
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
                src={amazonConnectImage} 
                alt="Amazon Connect Interface" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proven Business Outcomes
            </h2>
            <p className="text-xl text-gray-600">
              Real results from Amazon Connect implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                  <p className="text-gray-600">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for modern customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                AWS-Native Architecture Benefits
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Infinite Scalability</h3>
                    <p className="text-gray-600">Handle seasonal spikes or rapid growth without infrastructure concerns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Global Resilience</h3>
                    <p className="text-gray-600">99.9% uptime SLA with automatic failover across AWS regions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
                    <p className="text-gray-600">Built on AWS's security framework with end-to-end encryption</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">AI/ML Integration</h3>
                    <p className="text-gray-600">Native access to Amazon Lex, Polly, Transcribe, and Comprehend</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={dashboardImage} 
                alt="Amazon Connect Analytics Dashboard" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Approach
            </h2>
            <p className="text-xl text-gray-600">
              Phased deployment minimizes risk and ensures success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: "Discovery",
                duration: "1-2 weeks",
                description: "Current state assessment, requirements gathering, and solution design"
              },
              {
                phase: "Build",
                duration: "2-4 weeks",
                description: "Environment setup, configuration, integrations, and testing"
              },
              {
                phase: "Pilot",
                duration: "1-2 weeks",
                description: "Limited production deployment with select agents and call types"
              },
              {
                phase: "Rollout",
                duration: "1-2 weeks",
                description: "Full production deployment, training, and go-live support"
              }
            ].map((phase, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl">{phase.phase}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{phase.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect Amazon Connect with your existing tools and data sources
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-2">
                  <p className="font-medium text-gray-700">{integration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Implementation Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Value-based pricing tied to your business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'border-primary shadow-lg scale-105' : ''}`}>
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-lg">{tier.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">
                    Starting from {tier.startingFrom}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={index === 1 ? "default" : "outline"}>
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
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
            Ready to Scale with Amazon Connect?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the thousands of organizations leveraging AWS's cloud-native contact center
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
            
            <Link to="/contact">
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-black">
              Free Migration Assessment
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AmazonConnect

