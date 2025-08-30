import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Users, Target, Zap, Award } from 'lucide-react'

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "15+ years in contact center technology, former AWS Solutions Architect",
      expertise: ["Amazon Connect", "Cloud Architecture", "Digital Transformation"]
    },
    {
      name: "Michael Rodriguez", 
      role: "CTO",
      bio: "Microsoft MVP, 12+ years building enterprise communication solutions",
      expertise: ["Microsoft Dynamics", "Power Platform", "AI/ML Integration"]
    },
    {
      name: "Jennifer Kim",
      role: "VP of Delivery",
      bio: "Former Genesys consultant, expert in large-scale contact center migrations",
      expertise: ["Project Management", "Change Management", "Migration Strategy"]
    },
    {
      name: "David Thompson",
      role: "Lead Solutions Architect", 
      bio: "Certified in both AWS and Microsoft platforms, integration specialist",
      expertise: ["System Integration", "API Development", "Security & Compliance"]
    }
  ]

  const certifications = [
    {
      platform: "AWS",
      certs: [
        "AWS Solutions Architect Professional",
        "AWS Advanced Networking",
        "Amazon Connect Certified"
      ]
    },
    {
      platform: "Microsoft",
      certs: [
        "Microsoft Certified: Azure Solutions Architect",
        "Microsoft 365 Certified: Teams Administrator",
        "Power Platform Solution Architect"
      ]
    }
  ]

  const values = [
    {
      icon: Target,
      title: "Customer-First Approach",
      description: "Every decision we make starts with what's best for our clients' success and their customers' experience."
    },
    {
      icon: Zap,
      title: "Innovation & Excellence",
      description: "We stay ahead of technology trends and maintain the highest standards in everything we deliver."
    },
    {
      icon: Users,
      title: "Partnership Mindset",
      description: "We're not just vendors—we're strategic partners invested in your long-term success."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our track record speaks for itself: 200+ successful implementations with 98% client satisfaction."
    }
  ]

  const stats = [
    { number: "200+", label: "Successful Implementations" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "50M+", label: "Customer Interactions Enabled" },
    { number: "15", label: "Average Years Experience" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4">About YashSphere AI</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Experts in Cloud
              <span className="text-primary block">Contact Centers</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're a specialized team of contact center experts dedicated to helping organizations 
              modernize their customer experience with Amazon Connect and Microsoft Dynamics 365 Contact Center.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To make customer service simpler, smarter, and more resilient by delivering 
                world-class cloud contact center solutions that drive real business outcomes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that great customer experience starts with the right technology foundation, 
                implemented by experts who understand both the technical and business challenges you face.
              </p>
              <Button size="lg">
                Talk to an Expert <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that delivers consistent results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Diagnose",
                title: "Understand Your Challenges",
                description: "Deep-dive assessment of current state, pain points, and business objectives"
              },
              {
                step: "Design", 
                title: "Architect the Solution",
                description: "Custom solution design that aligns with your technology stack and goals"
              },
              {
                step: "Implement",
                title: "Execute with Precision",
                description: "Phased deployment with rigorous testing and minimal business disruption"
              },
              {
                step: "Optimize",
                title: "Drive Continuous Value",
                description: "Ongoing optimization, training, and support to maximize your investment"
              }
            ].map((phase, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {index + 1}
                  </div>
                  <Badge variant="secondary" className="mb-2">{phase.step}</Badge>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Industry veterans with deep expertise in cloud contact centers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              Recognized expertise in leading cloud platforms
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                    <span>{cert.platform}</span>
                    <Badge variant="secondary">Certified Partner</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {cert.certs.map((certification, certIndex) => (
                      <li key={certIndex} className="flex items-center justify-center space-x-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span>{certification}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for talented individuals who share our passion for 
            delivering exceptional customer experiences through technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Collaborative Culture</h3>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Cutting-Edge Technology</h3>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Growth Opportunities</h3>
              </CardContent>
            </Card>
          </div>
          <Button size="lg">
            View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your contact center
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-black">
              Learn About Our Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

