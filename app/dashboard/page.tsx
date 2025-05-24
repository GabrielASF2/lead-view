"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, User } from "lucide-react"

const databases = [
  { name: "Database Alpha", created: "2023-01-15", size: "1000 leads" },
  { name: "Database Beta", created: "2023-02-20", size: "1500 leads" },
  { name: "Database Gamma", created: "2023-03-25", size: "2000 leads" },
  { name: "Database Delta", created: "2023-04-30", size: "2500 leads" },
  { name: "Database Epsilon", created: "2023-05-05", size: "3000 leads" },
]

export default function DashboardPage() {
  const [selectedDatabase, setSelectedDatabase] = useState<string | null>(null)

  const handleDatabaseSelect = (dbName: string) => {
    setSelectedDatabase(dbName)
    // Simulate sending access request
    setTimeout(() => {
      window.location.href = "/access-request"
    }, 500)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-800">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="w-6 h-6" />
            <span className="text-xl font-semibold">LeadGenius</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-white font-medium">
              Dashboard
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              Leads
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              Campaigns
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              Integrations
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              Settings
            </a>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <User className="w-5 h-5" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Select a database</h1>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-0">
              <div className="overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-700">
                    <tr>
                      <th className="text-left p-4 text-slate-300 font-medium">Name</th>
                      <th className="text-left p-4 text-slate-300 font-medium">Created</th>
                      <th className="text-left p-4 text-slate-300 font-medium">Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {databases.map((db, index) => (
                      <tr
                        key={index}
                        className="border-t border-slate-700 hover:bg-slate-700/50 cursor-pointer transition-colors"
                        onClick={() => handleDatabaseSelect(db.name)}
                      >
                        <td className="p-4 text-white">{db.name}</td>
                        <td className="p-4 text-slate-400">{db.created}</td>
                        <td className="p-4 text-slate-400">{db.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
