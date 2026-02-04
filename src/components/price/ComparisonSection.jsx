import './ComparisonSection.css';

export default function ComparisonSection() {
  return (
    <section className="comparison-section">
      <div className="container">
        <h2 className="section-title">COMPARE PLANS</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Features</th>
                <th>Starter</th>
                <th>Pro</th>
                <th>Elite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gym Access</td>
                <td>Mon-Fri 5am-10pm</td>
                <td>24/7</td>
                <td>24/7</td>
              </tr>
              <tr>
                <td>Group Classes</td>
                <td>—</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Personal Training</td>
                <td>—</td>
                <td>—</td>
                <td>4 sessions/month</td>
              </tr>
              <tr>
                <td>Guest Passes</td>
                <td>—</td>
                <td>2/month</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Recovery Zone</td>
                <td>—</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Nutrition Support</td>
                <td>—</td>
                <td>Consultation</td>
                <td>Full program</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
