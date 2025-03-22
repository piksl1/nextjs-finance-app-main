"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LineChart,
  Shield,
  Wallet,
  DollarSign,
  ArrowRight,
  PieChart,
  BarChart,
  Lock,
  Mail,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="content-container min-h-screen bg-gray-50 mb-0 pb-0">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-blue-700" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  FinancePro
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-10">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  Smart Finance{" "}
                  <span className="text-blue-700">Management</span> Made Simple
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  Track your finances, create budgets, and gain insights to
                  achieve your financial goals.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/login"
                    className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
                  >
                    Get Started with Email
                    <Mail className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/dashboard/"
                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-colors flex items-center justify-center"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-2 rounded-xl shadow-lg">
                  <Image
                    src="/landing-image.jpg"
                    alt="Financial Dashboard"
                    className="rounded-lg shadow-sm w-full"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">
                Powerful Financial Tools
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Everything you need to master your financial life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Expense Tracking
                </h3>
                <p className="text-gray-500">
                  Automatically categorize and track all your expenses in
                  real-time.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Smart Insights
                </h3>
                <p className="text-gray-500">
                  Get personalized recommendations and visual reports of your
                  financial health.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Secure by Design
                </h3>
                <p className="text-gray-500">
                  Bank-level encryption ensures your financial data remains
                  private and protected.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Email Signup Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Left Column - Benefits */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Join Our Financial Community
                  </h2>
                  <p className="text-lg text-gray-600">
                    Start your journey to financial success today
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <LineChart className="w-5 h-5 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Personalized Dashboard
                        </h3>
                        <p className="text-gray-600">
                          Customize your financial overview to match your goals
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Smart Wallet Integration
                        </h3>
                        <p className="text-gray-600">
                          Connect all your accounts in one secure place
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <PieChart className="w-5 h-5 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Wealth Distribution
                        </h3>
                        <p className="text-gray-600">
                          Visualize and optimize your asset allocation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - CTA */}
                <div className="flex flex-col justify-center">
                  <div className="bg-blue-700 text-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Take Control?
                    </h3>
                    <p className="text-blue-100 mb-8">
                      Join thousands of users who are already managing their
                      finances smarter with FinancePro.
                    </p>
                    <div className="space-y-4">
                      <Link
                        href="/login"
                        className="w-full bg-white text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
                      >
                        Get Started Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                      <div className="text-center">
                        <span className="text-blue-100">
                          Already a member?{" "}
                        </span>
                        <Link
                          href="/login"
                          className="text-white hover:text-blue-100 font-medium underline"
                        >
                          Log in
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">
                Trusted by thousands
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                See what our users are saying about us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/profile-2.jpg"
                      alt="Sarah K."
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Sarah K.</h3>
                    <p className="text-gray-500 text-sm">
                      Small Business Owner
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  &ldquo;This app has transformed how I manage both my personal
                  and business finances. The insights are incredibly
                  valuable.&rdquo;
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/profile-1.jpg"
                      alt="Michael T."
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Michael T.</h3>
                    <p className="text-gray-500 text-sm">Financial Analyst</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  &ldquo;Even as a finance professional, I find the tools here
                  incredibly useful. The dashboard visualization is
                  top-notch.&rdquo;
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/profile-3.jpg"
                      alt="Alex J."
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Alex J.</h3>
                    <p className="text-gray-500 text-sm">Recent Graduate</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  &ldquo;As someone just starting out, this app has been perfect
                  for helping me build good financial habits right from the
                  start.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="footer-wrapper bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="hover:text-white transition-colors"
                  >
                    Log In
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <div className="flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">
                FinancePro
              </span>
            </div>
            <p>
              &copy; {new Date().getFullYear()} FinancePro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
