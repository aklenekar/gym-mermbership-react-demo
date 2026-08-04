# Project Feature Roadmap & Specifications

This document defines the feature roadmap and domain modules for the Gym Membership system across backend (`ApexGym`) and frontend (`gym-membership-react-demo`).

---

## 1. Membership & Billing
* **Payment Gateway Integration**: Stripe / Razorpay integration + invoice generation.
* **Auto-renewal & Dunning**: Auto-renewal rules, retry logic for failed payments, dunning notification emails.
* **Group Memberships**: Support for family and corporate group membership accounts.
* **Referral Program**: Referral links/codes with system credits.

---

## 2. Equipment & Facility Management [IN PROGRESS ⏳]
* **Equipment Inventory & Maintenance**: Tracking equipment list, usage status, and automated maintenance scheduling. [DONE ✅]
* **Locker Assignment System**: Digital locker allocation and tracking. [PENDING]
* **Capacity & Occupancy Tracking**: Live check-in / check-out tracking using QR or NFC scans. [PENDING]

---

## 3. Member Engagement
* **Gamification & Streaks**: Workout streaks, badges, and community leaderboards.
* **Body Measurement & Progress Photos**: Historical tracking of member body metrics and progress photos.
* **Push Notifications**: Class reminders, goal nudges via FCM / OneSignal.
* **Social Feed**: Community feed for members to post PRs, workout logs, and milestones.

---

## 4. Trainer Domain [IN PROGRESS ⏳]
* **Trainer Availability & Calendar**: 1-on-1 PT session scheduling and trainer calendar management. [PENDING]
* **Trainer Commission & Payroll**: Commission rate tracking and payroll calculation. [DONE ✅]
* **Client Progress Notes**: Trainer logs and notes for individual client workouts. [PENDING]

---

## 5. Admin & Operations
* **Waitlist Automation**: Auto-promoting members from class waitlists when spots open up.
* **Multi-branch / Multi-location**: Support for multiple gym locations and branch filtering.
* **Staff Shift Scheduling**: Shift roster and staff management.
* **Inventory & POS**: Retail point-of-sale inventory for supplements and merchandise.
* **Automated Churn Prediction**: AI/Heuristic identification of members at risk of cancellation.

---

## 6. AI Extensions
* **Pose Estimation Form-Check**: Video upload analysis for exercise form feedback.
* **Injury Risk Flagging**: Algorithms monitoring workload progression to flag overuse/injury risks.
* **AI Progress Reports**: Automated monthly progress summaries generated per member.

---

## 7. Notifications & Communication
* **Email & SMS Service Abstraction**: Centralized notification provider interface.
* **Automated Lifecycle Comms**: Automated emails for onboarding welcome, renewal alerts, and win-back campaigns.
