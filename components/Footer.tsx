
export default function Footer(){
  return(
    <footer className="border-t border-white/10 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-3xl font-black">ANNA-DTP</h3>
          <p className="text-gray-400 mt-4">
            AI-native telecom digital twinning infrastructure.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Platform</h4>
          <ul className="space-y-3 text-gray-400">
            <li>Digital Twin Studio</li>
            <li>AI Optimization</li>
            <li>Synthetic Data</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Resources</h4>
          <ul className="space-y-3 text-gray-400">
            <li>Research</li>
            <li>Documentation</li>
            <li>Enterprise</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="text-gray-400">enterprise@anna-dtp.ai</p>
        </div>
      </div>
    </footer>
  )
}
