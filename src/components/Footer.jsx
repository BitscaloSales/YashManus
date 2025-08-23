import { Link } from 'react-router-dom'
import { Cloud, Zap, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'
import logo from '../assets/yashsphere-logo.png'  // adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="YashSphere AI Logo" 
                className="h-10 w-auto" 
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Expert cloud contact center solutions for Amazon Connect and Microsoft Dynamics 365 Contact Center. 
              From strategy to implementation, we deliver smarter customer experiences.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/amazon-connect" className="text-gray-300 hover:text-white">Amazon Connect</Link></li>
              <li><Link to="/microsoft-dynamics" className="text-gray-300 hover:text-white">Microsoft Dynamics</Link></li>
              <li><Link to="/migrations" className="text-gray-300 hover:text-white">Migrations</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">Bitscalo_Sales@outlook.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">+91-9306410903</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">New Delhi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 YashSphere AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
