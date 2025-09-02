import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Shield, Clock, Users, Zap } from 'lucide-react'

const Migrations = () => {
  const migrationSteps = [
    {
      step: "Discovery",
      duration: "1-2 weeks",
      description: "Current state assessment, data audit, and migration planning",
      details: [
        "Legacy system analysis",
        "Data mapping and validation",
        "Risk assessment",
        "Timeline development"
      ]
    },
    {
      step: "Design",
      duration: "2-3 weeks", 
      description: "Solution architecture and migration strategy",
      details: [
        "Target platform configuration",
        "Integration planning",
        "Rollback procedures",
        "Testing protocols"
      ]
    },
    {
      step: "Pilot",
      duration: "1-2 weeks",
      description: "Limited production deployment with select operations",
      details: [
        "Parallel running",
        "Data validation",
        "Performance testing",
        "User acceptance testing"
      ]
    },
    {
      step: "Cutover",
      duration: "1 week",
      description: "Full production migration with minimal downtime",
      details: [
        "Final data migration",
        "DNS/routing changes",
        "Go-live support",
        "Immediate issue resolution"
      ]
    },
    {
      step: "Optimize",
      duration: "Ongoing",
      description: "Post-migration optimization and continuous improvement",
      details: [
        "Performance tuning",
        "User training",
        "Process refinement",
        "Ongoing support"
      ]
    }
  ]

  const riskManagement = [
    {
      title: "Rollback Planning",
      description: "Comprehensive rollback procedures ensure business continuity if issues arise"
    },
    {
      title: "Data Migration",
      description: "Secure, validated data transfer with zero data loss guarantee"
    },
    {
      title: "Recording Migration", 
      description: "Seamless transfer of historical recordings with proper indexing"
    },
    {
      title: "Business Continuity",
      description: "Minimal downtime strategies keep your operations running smoothly"
    }
  ]

  const compliance = [
    {
      standard: "GDPR",
      description: "European data protection compliance throughout migration"
    },
    {
      standard: "SOC2",
      description: "Security controls and audit trails maintained during transition"
    },
    {
      standard: "HIPAA",
      description: "Healthcare data protection for regulated industries"
    },
    {
      standard: "PCI DSS",
      description: "Payment card industry compliance for financial services"
    }
  ]

  const timelines = [
    {
      size: "SMB (1-50 agents)",
      timeline: "4-8 weeks",
      complexity: "Standard integrations, basic customizations"
    },
    {
      size: "Mid-Market (51-200 agents)", 
      timeline: "8-16 weeks",
      complexity: "Multiple integrations, custom workflows"
    },
    {
      size: "Enterprise (200+ agents)",
      timeline: "16-24 weeks", 
      complexity: "Complex integrations, extensive customizations"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4">Migration Specialists</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Seamless Contact Center
              <span className="text-primary block">Migrations</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Migrate from legacy or on-premises systems to Amazon Connect or Microsoft Dynamics 365 Contact Center 
              with zero data loss and minimal downtime. Our proven methodology ensures success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Get My Migration Plan <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Free Assessment
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Migration Process
            </h2>
            <p className="text-xl text-gray-600">
              A phased approach that minimizes risk and ensures success
            </p>
          </div>

          <div className="space-y-8">
            {migrationSteps.map((step, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <CardHeader className="lg:col-span-1">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{step.step}</CardTitle>
                        <CardDescription className="text-primary font-semibold">{step.duration}</CardDescription>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4">{step.description}</p>
                  </CardHeader>
                  <CardContent className="lg:col-span-2 pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Risk Management & Continuity
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive safeguards protect your operations throughout the migration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskManagement.map((risk, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{risk.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{risk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Security
            </h2>
            <p className="text-xl text-gray-600">
              Maintain regulatory compliance throughout your migration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((comp, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <Badge variant="secondary" className="mx-auto mb-2">{comp.standard}</Badge>
                  <CardTitle className="text-lg">{comp.description}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Change Management */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Training & Change Management
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Comprehensive Training Programs</h3>
                    <p className="text-gray-600">Role-based training for administrators, supervisors, and agents with hands-on workshops</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Change Management Support</h3>
                    <p className="text-gray-600">Structured approach to help your team adapt to new processes and technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">90-Day Support Period</h3>
                    <p className="text-gray-600">Extended support to ensure smooth adoption and address any post-migration issues</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Training Modules Include:</h3>
              <ul className="space-y-3">
                {[
                  "Platform navigation and basics",
                  "Call handling and routing",
                  "Omnichannel management", 
                  "Reporting and analytics",
                  "Advanced features and customizations",
                  "Troubleshooting and support"
                ].map((module, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{module}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Expectations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Timeline Expectations
            </h2>
            <p className="text-xl text-gray-600">
              Migration timelines based on organization size and complexity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {timelines.map((timeline, index) => (
              <Card key={index} className={`text-center ${index === 1 ? 'border-primary shadow-lg scale-105' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{timeline.size}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">{timeline.timeline}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{timeline.complexity}</p>
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
            Ready to Start Your Migration?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a personalized migration plan tailored to your specific needs and timeline
          </p>
          <div className="bg-white p-6 rounded-lg max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Your Migration Plan</h3>
            <form className="space-y-4" action="mailto:Bitscalo_Sales@outlook.com" method="post" encType="text/plain">
              <input 
                type="text" 
                name="company"
                placeholder="Company Name" 
                className="w-full p-3 border border-gray-300 rounded-md text-gray-900"
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                className="w-full p-3 border border-gray-300 rounded-md text-gray-900"
                required
              />
              <select name="platform" className="w-full p-3 border border-gray-300 rounded-md text-gray-900" required>
                <option value="">Current Platform</option>
                <option value="cisco">Cisco UCCX/UCCE</option>
                <option value="avaya">Avaya</option>
                <option value="genesys">Genesys</option>
                <option value="five9">Five9</option>
                <option value="other">Other</option>
              </select>
              <Button type="submit" className="w-full" size="lg">
                Get My Plan <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Migrations

