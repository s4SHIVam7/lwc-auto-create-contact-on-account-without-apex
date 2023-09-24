# Modal Window Lightning Web Component (LWC)

This Lightning Web Component (LWC) provides a reusable modal window that can be easily integrated into Salesforce Lightning App Pages and Lightning Record Pages. The modal window allows you to display additional information or actions to users without navigating away from the current page.

![Modal Window Demo](demo.gif)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [ScreenShots](#ScreenShots)
- [Contact](#contact)

## Features

- Click a button to open the modal window.
- Modal window includes a customizable header, content, and footer.
- Close the modal window using the close button or the provided "Close" button.
- Cross icon for closing the modal window in the header.(Optional)
- Fully customizable styling using Salesforce Lightning Design System (SLDS) classes.
- Suitable for various use cases where a modal dialog is required.

## Installation

To use this Lightning Web Component in your Salesforce org, follow these steps:

1. **Clone or Download this Repository**:
   - Clone this GitHub repository to your local machine using the following command:
     ```
     git clone https://github.com/s4SHIVam7/Modal_window_lwc.git
     ```

2. **Deploy the Lightning Web Component**:
   - Deploy the `modalWindow_lwc` Lightning Web Component to your Salesforce org.

3. **Customize the Modal Window**:
   - Modify the `modalWindow_lwc.html` as per your requirement.

4. **Add the Component to Your Salesforce Page**:
   - Add the `modalWindow_lwc` component to your Lightning App or Record Page.

## Usage

1. **Open a Salesforce Lightning Page or App**:
   - Navigate to a Salesforce Lightning Page or App where you've added the `modalWindow_lwc` component.

2. **Click on Open Modal Button**:
   - Click on the Open Modal Button to display another window.

3. **Click on Close Button**:
   -  Click on the Close Button to dismiss the window.


## Customization

You can customize the header, body, footer by modifying the `modalWindow_lwc.html`.

```javascript
<div class="slds-modal slds-fade-in-open" if:true={isModalOpen}>
                <div class="slds-modal__container">
                    <header class="slds-modal__header">
                        <h2 class="slds-text-heading_medium">Salesforce LWC</h2>
                    </header>
        
                    <div class="slds-modal__content slds-p-around_medium">
                        <p>hi buddy, have a good day :) </p>
                    </div>

                    <footer class="slds-modal__footer">
                        <button class="slds-button slds-button_neutral" onclick={closeModal}>Close</button>
                    </footer>
                </div>
            </div>
```

## ScreenShots

1. Main Component:
![image](https://github.com/s4SHIVam7/Modal_window_lwc/assets/60181328/ca0c3470-36f7-4d0d-b004-896a5fe7474f)

2. When Clicked on Open Modal Button: 
![image](https://github.com/s4SHIVam7/Modal_window_lwc/assets/60181328/ec3eb3b3-539f-4fca-9406-020a3680dca8)

3. When Clicked on Close Button: 
![image](https://github.com/s4SHIVam7/Modal_window_lwc/assets/60181328/a8983d59-51be-4eb7-8f6e-3dcccc9a5572)


## Contact

For questions, support, or feedback, please feel free to reach out:

- **Telegram**: [@shivam_l](https://t.me/shivam_l)
- **LinkedIn**: [Shivam Laidwar](https://www.linkedin.com/in/shivam-laidwar/)





 





