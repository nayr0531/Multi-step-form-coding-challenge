export const planForm = () => {
  return `
    <div class="plan-form step-form">
      <h1 class="step-form-title">Select your plan</h1>
      <p class="step-form-instruction">You have the option of monthly or yearly billing.</p>
      
        <div class="plan-options">
          <div class="arcade option">
            <img src="./assets/images/icon-arcade.svg" alt="Arcade logo" class="logo">
            <div>
            <span class="plan-title">Arcade</span>
            <span class="cost">$9/mo</span>
            </div>
          </div>
          <div class="advaced option">
            <img src="./assets/images/icon-advanced.svg" alt="Advaced logo" class="logo">
            <div>
            <span class="plan-title">Advanced</span>
            <span class="cost">$12/mo</span>
            </div>
          </div>
          <div class="pro option">
            <img src="./assets/images/icon-pro.svg" alt="Pro logo" class="logo">
            <div>
            <span class="plan-title">Pro</span>        
            <span class="cost">$15/mo</span>
            </div>
          </div>
        </div>

        <div class="plan-paying">
          <span class="paying-option monthly active">Monthly</span>
          <button class="btn-plan-paying">
          <span class="btn-plan-paying-circle"></span>
          </button>
          <span class="paying-option yearly">Yearly</span>
        </button>
    
      <button class="btn-plan-goback btn-goback">Go Back</button>  
      <button class="btn-plan step-form-btn">Next Step</button>  
    </div>
  `;
};

export default planForm();
