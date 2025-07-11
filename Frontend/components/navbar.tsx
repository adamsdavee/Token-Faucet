"use client"

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Core Faucet</h1>
              <p className="text-xs text-slate-500">Testnet Token Distribution</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-sm text-slate-600">
              <span className="font-semibold">Core Testnet</span>
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" title="Faucet Active" />
          </div>
        </div>
      </div>
    </nav>
  )
}
