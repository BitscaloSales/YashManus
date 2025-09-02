import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Users, BarChart3, MessageSquare, Zap, Shield, Globe } from 'lucide-react'
import microsoftImage from '../assets/tT8qbGDnMg5l.jpg'
import teamsImage from '../assets/99QifyWOXIwR.jpg'

const MicrosoftDynamics = () => {
  const outcomes = [
    { metric: "42%", description: "Improvement in first-call resolution" },
    { metric: "38%", description: "Increase in CSAT scores" },
    { metric: "35%", description: "Boost in operational efficiency" },
    { metric: "50%", description: "Faster case resolution with unified data" }
  ]

  const capabilities = [
    {
      icon: MessageSquare,
      title: "Omnichannel Routing",
      description: "Voice, chat, email, SMS, and social media unified in Teams"
    },
    {
      icon: Zap,
      title: "Copilot AI Assistance",
      description: "AI-powered agent guidance and automated case summaries"
    },
    {
      icon: Users,
      title: "Unified Case Management",
      description: "Complete customer context across all touchpoints"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Power BI integration for comprehensive insights"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Microsoft's Zero Trust security model built-in"
    },
    {
      icon: Globe,
      title: "Power Platform Integration",
      description: "Automate workflows with Power Automate and Power Apps"
    }
  ]

  const microsoftAdvantages = [
    {
      title: "Native Microsoft 365 Integration",
      description: "Seamlessly works with Teams, Outlook, SharePoint, and OneDrive for unified collaboration"
    },
    {
      title: "Teams-Native Experience",
      description: "Agents work within familiar Teams interface with no context switching"
    },
    {
      title: "Power Platform Automation",
      description: "Build custom workflows and apps without code using Power Automate and Power Apps"
    },
    {
      title: "Unified Security & Compliance",
      description: "Leverage Microsoft's comprehensive security framework and compliance tools"
    }
  ]

  const integrations = [
    "Microsoft Teams", "Outlook", "SharePoint", "OneDrive",
    "Power BI", "Power Automate", "Power Apps", "Azure AD",
    "Dynamics 365 CRM", "WhatsApp Business", "Facebook Messenger", "Twitter"
  ]

  const pricingTiers = [
    {
      name: "Launch",
      description: "Perfect for Teams-first organizations starting their journey",
      features: [
        "Basic omnichannel setup",
        "Teams integration",
        "Standard case management",
        "Power BI essentials",
        "Basic Copilot features"
      ],
      startingFrom: "$18K"
    },
    {
      name: "Scale",
      description: "Advanced features for growing contact centers",
      features: [
        "Advanced omnichannel routing",
        "Full Copilot suite",
        "Custom Power Apps",
        "Advanced analytics",
        "Workforce management",
        "Knowledge management"
      ],
      startingFrom: "$52K"
    },
    {
      name: "Enterprise",
      description: "Complete solution for complex organizations",
      features: [
        "Enterprise omnichannel",
        "Custom AI models",
        "Advanced Power Platform",
        "Complex integrations",
        "Dedicated success manager",
        "24/7 premium support"
      ],
      startingFrom: "$135K"
    }
  ]

  const faqs = [
    {
      question: "How does licensing work with Microsoft?",
      answer: "Dynamics 365 Contact Center requires specific licensing that includes Teams Phone and additional contact center capabilities. We help navigate Microsoft's licensing model and ensure you have the right mix of licenses for your needs."
    },
    {
      question: "What's the typical implementation timeline?",
      answer: "SMB implementations: 6-10 weeks. Mid-market: 10-18 weeks. Enterprise: 16-28 weeks. Microsoft implementations often take slightly longer due to the complexity of integrating with existing Microsoft environments."
    },
    {
      question: "How do you handle change management?",
      answer: "Since most organizations already use Teams, user adoption is typically faster. We provide comprehensive training on the contact center features and help establish new workflows that leverage the Microsoft ecosystem."
    },
    {
      question: "What training do you provide?",
      answer: "We offer role-based training for administrators, supervisors, and agents. This includes hands-on workshops for Teams integration, Power Platform customizations, and ongoing support during the first 90 days."
    },
    {
      question: "How do analytics and reporting work?",
      answer: "Dynamics 365 Contact Center integrates natively with Power BI for comprehensive analytics. We can also connect to existing Microsoft data sources and create custom dashboards that align with your KPIs."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Microsoft Native Solution</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Microsoft Dynamics 365
                <span className="text-primary block">Contact Center</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform customer service with Microsoft's unified contact center solution. 
                Perfect for organizations already invested in the Microsoft ecosystem, 
                delivering seamless Teams integration and powerful AI capabilities.
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
                src={microsoftImage} 
                alt="Microsoft Dynamics 365 Contact Center" 
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
              Real results from Microsoft Dynamics 365 Contact Center implementations
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
              Everything you need for modern customer service in the Microsoft ecosystem
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

      {/* Microsoft Stack Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Microsoft Stack Advantages
              </h2>
              <div className="space-y-6">
                {microsoftAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamsImage} 
                alt="Microsoft Teams Contact Center Interface" 
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
              Phased deployment leveraging your existing Microsoft investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: "Assessment",
                duration: "1-3 weeks",
                description: "Microsoft environment audit, licensing review, and solution design"
              },
              {
                phase: "Configuration",
                duration: "3-6 weeks",
                description: "Teams setup, Power Platform customization, and integrations"
              },
              {
                phase: "Pilot",
                duration: "2-3 weeks",
                description: "Limited rollout with select teams and call types"
              },
              {
                phase: "Deployment",
                duration: "1-3 weeks",
                description: "Full production rollout, training, and change management"
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
              Native Microsoft Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Leverage your existing Microsoft investment for seamless workflows
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
              Value-based pricing for Microsoft ecosystem implementations
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
            Ready to Transform with Microsoft?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Leverage your Microsoft investment for world-class customer service
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

export default MicrosoftDynamics

