"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Home, Users, Settings, HelpCircle, MessageSquare, ToggleLeft } from "lucide-react"

const leads = [
  {
    name: "Ethan Carter",
    email: "ethan.carter@example.com",
    company: "Tech Innovators Inc.",
    jobTitle: "Software Engineer",
    location: "San Francisco, CA",
    status: "Active",
  },
  {
    name: "Olivia Bennett",
    email: "olivia.bennett@example.com",
    company: "Global Solutions Ltd.",
    jobTitle: "Product Manager",
    location: "New York, NY",
    status: "Active",
  },
  {
    name: "Noah Thompson",
    email: "noah.thompson@example.com",
    company: "Digital Dynamics Corp.",
    jobTitle: "Marketing Director",
    location: "Chicago, IL",
    status: "Active",
  },
  {
    name: "Ava Rodriguez",
    email: "ava.rodriguez@example.com",
    company: "Creative Minds Agency",
    jobTitle: "Graphic Designer",
    location: "Los Angeles, CA",
    status: "Active",
  },
  {
    name: "Liam Harrison",
    email: "liam.harrison@example.com",
    company: "Innovative Systems LLC",
    jobTitle: "IT Consultant",
    location: "Austin, TX",
    status: "Active",
  },
  {
    name: "Isabella Martinez",
    email: "isabella.martinez@example.com",
    company: "Strategic Ventures Group",
    jobTitle: "Business Analyst",
    location: "Seattle, WA",
    status: "Active",
  },
  {
    name: "Jackson Lewis",
    email: "jackson.lewis@example.com",
    company: "Future Tech Solutions",
    jobTitle: "Data Scientist",
    location: "Boston, MA",
    status: "Active",
  },
  {
    name: "Sophia Walker",
    email: "sophia.walker@example.com",
    company: "NextGen Innovations",
    jobTitle: "UX/UI Designer",
    location: "Denver, CO",
    status: "Active",
  },
  {
    name: "Aiden Hall",
    email: "aiden.hall@example.com",
    company: "Pioneer Industries",
    jobTitle: "Sales Manager",
    location: "Miami, FL",
    status: "Active",
  },
  {
    name: "Mia Clark",
    email: "mia.clark@example.com",
    company: "Visionary Enterprises",
    jobTitle: "Operations Director",
    location: "Atlanta, GA",
    status: "Active",
  },
]

export default function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 border-r border-slate-700">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-8">LeadGenius</h2>
          <nav className="space-y-2">
            <a
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              Home
            </a>
            <a href="/leads" className="flex items-center gap-3 px-3 py-2 text-white bg-slate-700 rounded-lg">
              <Users className="w-5 h-5" />
              Leads
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5" />
              Settings
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
            >
              <HelpCircle className="w-5 h-5" />
              Help and Docs
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Feedback
            </a>
          </nav>
        </div>
        <div className="absolute bottom-6 left-6">
          <div className="flex items-center gap-3 px-3 py-2 text-slate-400">
            <ToggleLeft className="w-5 h-5" />
            Demo mode
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Leads</h1>
            <p className="text-slate-400">Leads from the approved database</p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search leads"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-700">
                <tr>
                  <th className="text-left p-4 text-slate-300 font-medium">Name</th>
                  <th className="text-left p-4 text-slate-300 font-medium">Email</th>
                  <th className="text-left p-4 text-slate-300 font-medium">Company</th>
                  <th className="text-left p-4 text-slate-300 font-medium">Job Title</th>
                  <th className="text-left p-4 text-slate-300 font-medium">Location</th>
                  <th className="text-left p-4 text-slate-300 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead, index) => (
                  <tr key={index} className="border-t border-slate-700 hover:bg-slate-700/50 transition-colors">
                    <td className="p-4 text-white font-medium">{lead.name}</td>
                    <td className="p-4 text-slate-400">{lead.email}</td>
                    <td className="p-4 text-slate-400">{lead.company}</td>
                    <td className="p-4 text-slate-400">{lead.jobTitle}</td>
                    <td className="p-4 text-slate-400">{lead.location}</td>
                    <td className="p-4">
                      <Badge className="bg-slate-600 text-white hover:bg-slate-600">{lead.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
