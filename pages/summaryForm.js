export const summaryForm = () => {
  return `
    <div class="summary-form step-form">
      <h1 class="step-form-title">Finishing up</h1>
      <p class="step-form-instruction">Double-check everything looks OK before confirming.</p>
      
        <div class="paying-form">
          <div class="summary-plan-cost">
            <div class="summary-title">
              <span class="duration">
                <span class="plan-selected">Arcade</span>
                <span class="plan-duration">(Monthly)</span>
              </span>
              <a class="btn-change">Change</a>
            </div>
            <span class="plan-price">$90/yr</span>
          </div>

          <div class="summary-addson-cost">
            <div class="addson">
              <span class="addson-title">Online service</span>
              <span class="cost">+$1/mo</span>
            </div>
            <div class="addson">
              <span class="addson-title">Larger storage</span>
              <span class="cost">+$2/mo</span>
            </div>
          </div>
        </div>

        <div class="summary-total">
          <div>
            <span class="total">Total</span>
            <span class="plan-duration-total">(per month)</span>
          </div>
          <span class="summary-total-cost">+$12/mo</span>
        </div>

      <button class="btn-plan-goback btn-goback">Go Back</button>  
      <button class="personal-info-btn step-form-btn">Confirm</button>
    </div>
  `;
};

export default summaryForm();
