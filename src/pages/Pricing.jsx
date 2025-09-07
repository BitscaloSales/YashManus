import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Launch",
      description: "Perfect for SMB pilots or single queue deployments",
      price: "Starting from $500",
      duration: "4-8 weeks",
      features: [
        "Basic omnichannel setup (voice, chat, email)",
        "Standard IVR configuration",
        "Single CRM integration",
        "Basic reporting dashboard",
        "Agent training (up to 25 agents)",
        "30-day post-launch support"
      ],
      addOns: [
        "Social Apps integration",
        "Advanced analytics",
        "Additional CRM Integrations"
      ]
    },
    {
      name: "Scale",
      description: "Multi-queue operations with advanced analytics & Integrations",
      price: "Starting from $1K", 
      duration: "8-16 weeks",
      popular: true,
      features: [
        "Advanced omnichannel routing",
        "Custom IVR flows and self-service",
        "Multiple CRM/helpdesk integrations",
        "Workforce management basics",
        "Quality management setup",
        "Custom dashboards and reporting",
        "Agent training (up to 100 agents)",
        "90-day post-launch support"
      ],
      addOns: [
        "CRM Integrations",
        "Custom AI/bots",
        "Premium analytics"
      ]
    },
    {
      name: "Enterprise",
      description: "Complex implementations with premium features and support",
      price: "Starting from $2K",
      duration: "16-24 weeks", 
      features: [
        "Enterprise omnichannel platform",
        "Advanced WFM & quality management",
        "Complex integrations (5+ systems)",
        "Custom AI/ML models and bots",
        "Advanced analytics and BI",
        "Dedicated customer success manager",
        "Unlimited agent training",
        "12-month premium support"
      ],
      addOns: [
        "Multi-business deployment",
        "Custom development",
        "24/7 white-glove support"
      ]
    }
  ]

  const addOnServices = [
    {
      category: "Advanced Analytics",
      services: [
        { name: "Custom Power BI dashboards", price: "" },
        { name: "Real-time wallboards", price: "" },
        { name: "Predictive analytics setup", price: "" }
      ]
    },
    {
      category: "Custom IVR & Bots",
      services: [
        { name: "Advanced IVR flows", price: "" },
        { name: "Conversational AI bots", price: "" },
        { name: "Voice biometrics", price: "" }
      ]
    },
    {
      category: "Premium Support",
      services: [
        { name: "24/7 managed services", price: "" },
        { name: "Dedicated success manager", price: "" },
        { name: "Priority support SLA", price: "" }
      ]
    }
  ]

  const faqs = [
    {
      question: "How do you determine the final project cost?",
      answer: "We provide fixed-price quotes based on detailed requirements gathering. Costs depend on platform choice, number of integrations, customization complexity, and agent count. No hidden fees or scope creep."
    },
    {
      question: "What's included in the base pricing?",
      answer: "Base pricing includes discovery, solution design, implementation, basic training, and initial support period. Platform licensing costs (AWS/Microsoft) are separate and billed directly by the vendor."
    },
    {
      question: "Do you offer financing or payment plans?",
      answer: "Yes, we offer flexible payment schedules tied to project milestones. Typical structure: 30% at contract signing, 40% at go-live, 30% at project completion."
    },
    {
      question: "What about ongoing platform costs?",
      answer: "Amazon Connect: ~$0.018/minute voice, ~$0.004/chat. Microsoft Dynamics 365: varies by licensing model. We help optimize these costs and provide transparent estimates."
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Absolutely. Many clients start with Launch and upgrade to Scale or Enterprise as they grow. We design solutions with scalability in mind."
    },
    {
      question: "What if the project scope changes?",
      answer: "We handle scope changes through formal change requests with transparent pricing. Our detailed discovery phase minimizes surprises, but we're flexible when business needs evolve."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4">Transparent Pricing</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simple, Value-Based
            <span className="text-primary block">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Fixed-price implementations with no hidden fees. Choose the package that fits your 
            organization size and complexity. All pricing includes training and support.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'border-primary shadow-xl scale-105' : 'hover:shadow-lg'} transition-all duration-300`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <CardDescription className="text-lg mt-2">{tier.description}</CardDescription>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-primary">{tier.price}</div>
                    <div className="text-sm text-gray-500 mt-1">Timeline: {tier.duration}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Included Features:</h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Popular Add-ons:</h4>
                    <ul className="space-y-1">
                      {tier.addOns.map((addOn, addOnIndex) => (
                        <li key={addOnIndex} className="text-sm text-gray-600">
                          • {addOn}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full" 
                    variant={tier.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Add-on Services & Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Extend your implementation with specialized services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {addOnServices.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex justify-between items-start">
                        <span className="text-sm font-medium flex-1">{service.name}</span>
                        <span className="text-sm text-primary font-semibold ml-2">{service.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Our Pricing Model Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fixed-Price Guarantee</h3>
                    <p className="text-gray-600">No surprises or scope creep. You know exactly what you'll pay upfront.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Value-Based Outcomes</h3>
                    <p className="text-gray-600">Pricing tied to business value, not just hours. We succeed when you succeed.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Flexible Payment Terms</h3>
                    <p className="text-gray-600">Milestone-based payments align with project progress and cash flow.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Comprehensive Inclusions</h3>
                    <p className="text-gray-600">Training, support, and documentation included—no hidden extras.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">ROI Calculator</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Average project cost:</span>
                  <span className="font-semibold">$45K - $125K</span>
                </div>
                <div className="flex justify-between">
                  <span>Typical annual savings:</span>
                  <span className="font-semibold text-green-600">$150K - $500K</span>
                </div>
                <div className="flex justify-between">
                  <span>Payback period:</span>
                  <span className="font-semibold text-primary">3-8 months</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold">3-year ROI:</span>
                    <span className="font-bold text-green-600">300-800%</span>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6">
                Calculate Your ROI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pricing FAQs
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
            Ready to Get Your Custom Quote?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a consultation to discuss your specific needs and get accurate pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/contact">
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-black">
              Schedule Consultation
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing

