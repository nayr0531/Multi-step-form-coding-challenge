export const personalInfoForm = () => {
  return `
    <div class="personal-info step-form">
          <h1 class="step-form-title">Personal info</h1>
          <p class="step-form-instruction">Personal info Please provide your name, email address, and phone number.
          </p>
          <div class="form">
            <div class="form-input name">
              <label for="name">Name</label>
               <p class="error">This field is required</p>
              <input type="text" name="name" id="name" placeholder="e.g. King Ryan" autocomplete="off">
              </div>
            <div class="form-input email">
              <label for="email">Email Address</label>
              <p class="error">This field is required</p>
              <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" autocomplete="off">
            </div>
            <div class="form-input phone">
              <label for="phone">Phone Number</label>
              <p class="error">This field is required</p>
              <input type="text" name="phone" id="phone" placeholder="e.g. +1 234 567 890" autocomplete="off">
            </div>
          </div>
          <button class="btn-personal-info step-form-btn">Next Step</button>
    </div>
    `;
};

export default personalInfoForm();
