import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import logoImage from '../assets/yashsphere-logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Amazon Connect', href: '/amazon-connect' },
    { name: 'Microsoft Dynamics', href: '/microsoft-dynamics' },
    { name: 'Migrations', href: '/migrations' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoImage} alt="YashSphere AI" className="h-10 w-10" />
            <span className="text-xl font-bold text-gray-900">YashSphere AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="ml-4">Book a Demo</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link to="/contact">
                  <Button className="w-full">Book a Demo</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

