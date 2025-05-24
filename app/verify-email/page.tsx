"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database } from "lucide-react"

export default function VerifyEmailPage() {
  const [isResending, setIsResending] = useState(false)

  const handleResend = () => {
    setIsResending(true)
    setTimeout(() => {
      setIsResending(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-8 text-white">
          <Database className="w-6 h-6" />
          <span className="text-xl font-semibold">LeadViz</span>
        </div>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Almost there!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <p className="text-slate-300">
              We've sent you an email at alex.anderson@example.com. Please follow the instructions in the email.
            </p>
            <Button
              onClick={handleResend}
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold"
              disabled={isResending}
            >
              {isResending ? "Sending..." : "Resend Verification Email"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
