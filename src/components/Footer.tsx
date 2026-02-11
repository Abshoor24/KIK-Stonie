export default function Footer() {
  return (
    <footer className="w-full bg-gray-100">
      {/* Top Line */}
      <div className="border-t border-gray-300"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-gray-700">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-4">Lorem Ipsum</h4>
            <ul className="space-y-2">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Lorem Ipsum</h4>
            <ul className="space-y-2">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4">Lorem Ipsum</h4>
            <ul className="space-y-2">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-black text-white text-xs text-center py-4 tracking-widest">
        COPYRIGHTS SITE.COM. ALL RIGHTS RESERVED
      </div>
    </footer>
  )
}
