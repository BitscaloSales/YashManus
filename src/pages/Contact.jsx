import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react'

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91-9306410903",
      description: "Mon-Fri, 9 AM - 6 PM IST",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email", 
      details: "Bitscalo_Sales@outlook.com",
      description: "We respond within 2 hours",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      details: "Available on website",
      description: "Instant responses during business hours",
      action: "Start Chat"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      details: "Book a consultation",
      description: "30-minute strategy session",
      action: "Book Now"
    }
  ]

  const offices = [
    {
      city: "New Delhi",
      address: "Business District",
      zipcode: "New Delhi, India",
      phone: "+91-9306410903",
      primary: true
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's Transform Your
              <span className="text-primary block">Contact Center</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to modernize your customer experience? Our experts are here to help you 
              choose the right platform and create a roadmap for success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the best way to connect with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {method.details}
                  </CardDescription>
                  <p className="text-gray-600">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Get Your Free Consultation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tell us about your current challenges and goals. We'll provide personalized 
                recommendations and a roadmap for your contact center transformation.
              </p>

              <Card className="p-6">
                <form className="space-y-6" action="mailto:Bitscalo_Sales@outlook.com" method="post" encType="text/plain">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+91-9306410903"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Platform
                      </label>
                      <select name="current_platform" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select current platform</option>
                        <option value="cisco">Cisco UCCX/UCCE</option>
                        <option value="avaya">Avaya</option>
                        <option value="genesys">Genesys</option>
                        <option value="five9">Five9</option>
                        <option value="other">Other</option>
                        <option value="none">Starting from scratch</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Agents
                      </label>
                      <select name="agent_count" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select agent count</option>
                        <option value="1-25">1-25 agents</option>
                        <option value="26-100">26-100 agents</option>
                        <option value="101-500">101-500 agents</option>
                        <option value="500+">500+ agents</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select name="timeline" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">When do you want to start?</option>
                      <option value="immediate">Immediately</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your challenges and goals
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Describe your current pain points, what you're hoping to achieve, and any specific requirements..."
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-3">
                    Send Message <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 2 hours during business hours
                  </p>
                </form>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              {/* Book Demo Card */}
              <Card className="bg-gradient-to-br from-primary to-secondary text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Book a Live Demo</CardTitle>
                  <CardDescription className="text-white/90">
                    See Amazon Connect or Microsoft Dynamics 365 Contact Center in action
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-white/90">
                    <li>• 30-minute personalized demo</li>
                    <li>• See your use cases in action</li>
                    <li>• Get answers to your questions</li>
                    <li>• Receive implementation timeline</li>
                  </ul>
                  <Button variant="secondary" className="w-full">
                    Schedule Demo <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose YashSphere AI?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <span>200+ successful implementations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <span>98% client satisfaction rate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <span>AWS & Microsoft certified experts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <span>Fixed-price, no surprises</span>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-md">
                    <p className="text-sm text-green-800">
                      <strong>Emergency Support:</strong> Available 24/7 for existing clients
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600">
              We're here to serve you across major business hubs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className={`text-center hover:shadow-lg transition-shadow duration-300 ${office.primary ? 'border-primary' : ''}`}>
                {office.primary && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Headquarters
                  </Badge>
                )}
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{office.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600">{office.address}</p>
                  <p className="text-gray-600">{office.zipcode}</p>
                  <p className="text-primary font-semibold">{office.phone}</p>
                  <Button variant="outline" className="w-full mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p>Find our offices and get directions</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Compliance Links */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600">
              <p>© 2024 YashSphere AI. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-600 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-600 hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/security" className="text-gray-600 hover:text-primary transition-colors duration-200">
                Security
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

