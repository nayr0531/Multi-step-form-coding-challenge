export const addsOnForm = () => {
  return `
    <div class="adds-on-form step-form">
      <h1 class="step-form-title">Pick add-ons</h1>
      <p class="step-form-instruction">Add-ons help enhance your gaming experience.</p>
   
      <div class="adds-on-option">
          <div class="option">
            <input type="checkbox" class="checkbox" id="Online-Service">
            <div>
              <span class="adds-on-title">Online Service</span>
              <span class="adds-on-description">Access to multiplayer games</span>
            </div>
            <span class="cost">+$1/mo</span>
          </div>

          <div class="option">
            <input type="checkbox" class="checkbox" id="Online-Service">
            <div>
              <span class="adds-on-title">Larger storage</span>
              <span class="adds-on-description">Extra 1TB of cloud save</span>
            </div>
            <span class="cost">+$2/mo</span>
          </div>


          <div class="option">
            <input type="checkbox" class="checkbox" id="Online-Service">
            <div>
              <span class="adds-on-title">Customizable Profile</span>
              <span class="adds-on-description">Custom theme on your profile</span>
            </div>
            <span class="cost">+$2/mo</span>
          </div>
        </div>

      <button class="btn-plan-goback btn-goback">Go Back</button>  
      <button class="btn-adds-on step-form-btn">Next Step</button>
      </div>
  `;
};
export default addsOnForm();
