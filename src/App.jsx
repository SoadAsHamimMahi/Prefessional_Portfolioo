import React, { useState, lazy, Suspense } from "react";
import "./assets/css/index.css";
import Header from "./pages/Header/Header";
import ScrollProgress from "./components/ScrollProgress";
import PageTransition from "./components/PageTransition";
import ErrorBoundary from "./components/ErrorBoundary";

import { Route, Routes, useLocation } from "react-router-dom";

// Lazy load components for code splitting
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Hero = lazy(() => import("./pages/Hero/Hero"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Education = lazy(() => import("./pages/Education/Education"));
const NotFound = lazy(() => import("./pages/NotFound"));

const LoadingFallback = () => (
  <div className="min-h-screen bg-[#04081A] dark:bg-[#04081A] flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-400 dark:text-gray-400">Loading...</p>
    </div>
  </div>
);

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state
  const location = useLocation();

  return (
    <ErrorBoundary>
      <ScrollProgress />
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </Suspense>
      ) : (
        // Router Mode: Use routes for navigation
        <PageTransition>
          <Suspense fallback={<LoadingFallback />}>
            <Routes key={location.pathname}>
              <Route path="/" element={<Hero />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      )}
    </ErrorBoundary>
  );
}
