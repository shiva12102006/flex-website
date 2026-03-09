import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Bell, User, LayoutDashboard, BookOpen, Calendar, Settings, LogOut } from "lucide-react";

export default function DashboardUI() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col gap-6">
        <h1 className="text-2xl font-bold">MyCourse</h1>

        <nav className="flex flex-col gap-4 text-gray-600">
          <div className="flex items-center gap-2 text-teal-600 font-semibold">
            <LayoutDashboard size={18} /> Dashboard
          </div>
          <div className="flex items-center gap-2 hover:text-teal-600 cursor-pointer">
            <BookOpen size={18} /> Courses
          </div>
          <div className="flex items-center gap-2 hover:text-teal-600 cursor-pointer">
            <Calendar size={18} /> Assignment
          </div>
          <div className="flex items-center gap-2 hover:text-teal-600 cursor-pointer">
            <Calendar size={18} /> Events
          </div>
          <div className="flex items-center gap-2 hover:text-teal-600 cursor-pointer">
            <Settings size={18} /> Settings
          </div>
          <div className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
            <LogOut size={18} /> Logout
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-6">

        {/* Top Bar */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow">
            <Search size={18} />
            <Input placeholder="Search" className="border-none focus-visible:ring-0" />
          </div>

          <div className="flex items-center gap-4">
            <Bell className="cursor-pointer" />
            <div className="flex items-center gap-2">
              <User />
              <span className="font-medium">William Jones</span>
            </div>
          </div>
        </div>

        {/* Welcome Card */}
        <Card className="bg-teal-500 text-white rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold">Welcome Back, Jones!</h2>
            <p className="opacity-90">Let's Upgrade Platinum Plans Now</p>
            <Button className="mt-4 bg-orange-400 hover:bg-orange-500 text-white">Join Now</Button>
          </CardContent>
        </Card>

        {/* Courses */}
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((c)=> (
            <Card key={c} className="rounded-2xl">
              <CardContent className="p-4 space-y-3">
                <div className="h-28 bg-gray-200 rounded-xl"></div>
                <h3 className="font-semibold">Course {c}</h3>
                <p className="text-sm text-gray-500">Coding • Beginner</p>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div className="h-2 w-1/2 bg-teal-500 rounded"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Learning Progress</h3>
              <div className="h-40 flex items-center justify-center text-gray-400">
                Chart Area
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Course Task</h3>
              <div className="flex justify-between">
                <span>Start Task One</span>
                <span className="text-sm text-gray-500">3 days</span>
              </div>
              <div className="flex justify-between">
                <span>Start Task Two</span>
                <span className="text-sm text-gray-500">3 days</span>
              </div>
              <div className="flex justify-between">
                <span>Start Task Three</span>
                <span className="text-sm text-gray-500">4 days</span>
              </div>
            </CardContent>
          </Card>

        </div>

      </main>
    </div>
  );
}
