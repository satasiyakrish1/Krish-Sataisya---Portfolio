import React from 'react';
import './LoadingSkeleton.css';

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton">
      {/* Navbar Skeleton */}
      <div className="skeleton-navbar">
        <div className="skeleton-logo"></div>
        <div className="skeleton-nav-items">
          <div className="skeleton-nav-item"></div>
          <div className="skeleton-nav-item"></div>
          <div className="skeleton-nav-item"></div>
          <div className="skeleton-nav-item"></div>
        </div>
        <div className="skeleton-cta"></div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="skeleton-hero">
        <div className="container">
          {/* Tag */}
          <div className="skeleton-hero-tag"></div>
          
          {/* Heading */}
          <div className="skeleton-hero-title"></div>
          
          {/* Subtext */}
          <div className="skeleton-hero-subtitle"></div>
          
          {/* CTAs */}
          <div className="skeleton-hero-ctas">
            <div className="skeleton-hero-button primary"></div>
            <div className="skeleton-hero-button secondary"></div>
          </div>
          
          {/* Hero Visual */}
          <div className="skeleton-hero-visual">
            <div className="skeleton-hero-visual-content">
              <div className="skeleton-hero-visual-text"></div>
              <div className="skeleton-hero-visual-play"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker Section Skeleton */}
      <div className="skeleton-ticker">
        <div className="skeleton-ticker-item"></div>
        <div className="skeleton-ticker-item"></div>
        <div className="skeleton-ticker-item"></div>
      </div>

      {/* Why Me Section Skeleton */}
      <div className="skeleton-section">
        <div className="container">
          <div className="skeleton-heading"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-grid">
            <div className="skeleton-feature-card"></div>
            <div className="skeleton-feature-card"></div>
            <div className="skeleton-feature-card"></div>
          </div>
        </div>
      </div>

      {/* Stats Section Skeleton */}
      <div className="skeleton-stats">
        <div className="container">
          <div className="skeleton-stats-grid">
            <div className="skeleton-stat-item"></div>
            <div className="skeleton-stat-item"></div>
            <div className="skeleton-stat-item"></div>
            <div className="skeleton-stat-item"></div>
          </div>
        </div>
      </div>

      {/* Services Section Skeleton */}
      <div className="skeleton-section">
        <div className="container">
          <div className="skeleton-heading"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-services-grid">
            <div className="skeleton-service-card">
              <div className="skeleton-service-title"></div>
              <div className="skeleton-service-list">
                <div className="skeleton-service-item"></div>
                <div className="skeleton-service-item"></div>
                <div className="skeleton-service-item"></div>
              </div>
            </div>
            <div className="skeleton-service-card">
              <div className="skeleton-service-title"></div>
              <div className="skeleton-service-list">
                <div className="skeleton-service-item"></div>
                <div className="skeleton-service-item"></div>
                <div className="skeleton-service-item"></div>
              </div>
            </div>
            <div className="skeleton-service-card">
              <div className="skeleton-service-title"></div>
              <div className="skeleton-service-list">
                <div className="skeleton-service-item"></div>
                <div className="skeleton-service-item"></div>
                <div className="skeleton-service-item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section Skeleton */}
      <div className="skeleton-section">
        <div className="container">
          <div className="skeleton-heading"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-projects-grid">
            <div className="skeleton-project-card">
              <div className="skeleton-project-visual"></div>
              <div className="skeleton-project-content">
                <div className="skeleton-project-title"></div>
                <div className="skeleton-project-desc"></div>
                <div className="skeleton-project-tags">
                  <div className="skeleton-project-tag"></div>
                  <div className="skeleton-project-tag"></div>
                  <div className="skeleton-project-tag"></div>
                </div>
              </div>
            </div>
            <div className="skeleton-project-card">
              <div className="skeleton-project-visual"></div>
              <div className="skeleton-project-content">
                <div className="skeleton-project-title"></div>
                <div className="skeleton-project-desc"></div>
                <div className="skeleton-project-tags">
                  <div className="skeleton-project-tag"></div>
                  <div className="skeleton-project-tag"></div>
                  <div className="skeleton-project-tag"></div>
                </div>
              </div>
            </div>
            <div className="skeleton-project-card">
              <div className="skeleton-project-visual"></div>
              <div className="skeleton-project-content">
                <div className="skeleton-project-title"></div>
                <div className="skeleton-project-desc"></div>
                <div className="skeleton-project-tags">
                  <div className="skeleton-project-tag"></div>
                  <div className="skeleton-project-tag"></div>
                  <div className="skeleton-project-tag"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
