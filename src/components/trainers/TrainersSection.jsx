import { useEffect, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import HeadCoaches from "./HeadCoaches";
import "./TrainersSection.css";
import { useLoaderData, useNavigation } from "react-router-dom";
import Trainers from "./Trainers";

export default function TrainersSection() {
  const data = useLoaderData();
  const navigation = useNavigation();

  // If you want to show a global spinner while the loader runs
  if (navigation.state === "loading") {
    return <p>Loading trainers...</p>;
  }

  let headCoaches = data.headCoaches;
  let trainers = data.trainers;

  return (
    <>
      {/* Trainers Header */}
      <PageHeader
        title="MEET YOUR COACHES"
        subTitle="Expert trainers dedicated to your success"
      />

      {/* Lead Trainers */}
      <section className="lead-trainers-section">
        <div className="container">
          <h2 className="section-title">HEAD COACHES</h2>

          <div className="lead-trainers-grid">
            {headCoaches.map((headCoach) => {
              return <HeadCoaches headCoach={headCoach} />;
            })}
          </div>
        </div>
      </section>

      {/* All Trainers Grid */}
      <section className="all-trainers-section">
        <div className="container">
          <h2 className="section-title">OUR TRAINING TEAM</h2>

          <div className="trainers-grid">
            {trainers.map((trainer) => {
              return <Trainers trainer={trainer} />;
            })}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="specializations-section">
        <div className="container">
          <h2 className="section-title">TRAINING SPECIALIZATIONS</h2>
          <p className="section-subtitle">
            Find the perfect coach for your goals
          </p>

          <div className="specializations-grid">
            <div className="specialization-card">
              <div className="spec-icon">💪</div>
              <h3>Strength Training</h3>
              <p>
                Build muscle, increase power, and develop maximal strength with
                our certified strength coaches.
              </p>
            </div>

            <div className="specialization-card">
              <div className="spec-icon">🔥</div>
              <h3>Weight Loss</h3>
              <p>
                Achieve sustainable fat loss through personalized training and
                nutrition guidance.
              </p>
            </div>

            <div className="specialization-card">
              <div className="spec-icon">⚡</div>
              <h3>Athletic Performance</h3>
              <p>
                Enhance speed, agility, and sport-specific skills for
                competitive athletes.
              </p>
            </div>

            <div className="specialization-card">
              <div className="spec-icon">🧘</div>
              <h3>Mobility & Recovery</h3>
              <p>
                Improve flexibility, reduce pain, and optimize movement
                patterns.
              </p>
            </div>

            <div className="specialization-card">
              <div className="spec-icon">🥊</div>
              <h3>Combat Sports</h3>
              <p>
                Learn boxing, kickboxing, and MMA techniques with experienced
                fighters.
              </p>
            </div>

            <div className="specialization-card">
              <div className="spec-icon">🎯</div>
              <h3>Functional Fitness</h3>
              <p>
                Train movements that translate to everyday life and overall
                wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="trainers-cta-section">
        <div className="cta-content">
          <h2>Ready to Work With a Coach?</h2>
          <p>Schedule your complimentary consultation today</p>
          <div className="cta-buttons">
            <a href="contact.html" className="btn-cta">
              Book Free Consultation
            </a>
            <a href="pricing.html" className="btn-cta-secondary">
              View Training Packages
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
