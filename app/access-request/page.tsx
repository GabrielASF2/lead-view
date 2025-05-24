"use client"

import { Button } from "@/components/ui/button"
import { Eye, User, Settings } from "lucide-react"

export default function AccessRequestPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-800">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-white">
            <Eye className="w-6 h-6" />
            <span className="text-xl font-semibold">LeadSight</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-white font-medium">
              Dashboard
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              Leads
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              Docs
            </a>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <User className="w-5 h-5" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] p-6">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-white mb-6">Access request sent</h1>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Your request to access the database has been sent to the developer. You will receive an email notification
            once your request has been approved.
          </p>
          <Button
            onClick={() => (window.location.href = "/dashboard")}
            className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold px-8 py-3"
          >
            Go back to dashboard
          </Button>
        </div>
      </main>
    </div>
  )
}
