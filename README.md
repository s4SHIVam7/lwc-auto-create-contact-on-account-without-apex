# Auto Create Contact with Account Lightning Web Component (LWC)

This Lightning Web Component (LWC) provides an automated way to create a contact record whenever an account is created in Salesforce. The component ensures that a contact associated with the account is automatically generated, saving time and effort for users.

![Auto Create Contact Demo](demo.gif)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Screenshots](#screenshots)
- [Contact](#contact)

## Features

- Automatically creates a contact record when an account is created.
- The created contact is associated with the corresponding account.
- Seamlessly integrates into Salesforce Lightning App Pages and Lightning Record Pages.
- Requires no manual intervention, streamlining data entry processes.
- Added tooltip help text for Contact Last Name field.
- Automatically sets Contact Last Name to Account's Last Name if not provided.
- Added toast messages for success (green) and error (red).

## Installation

To use this Lightning Web Component in your Salesforce org, follow these steps:

1. **Clone or Download this Repository**:
   - Clone this GitHub repository to your local machine using the following command:
     ```
     git clone https://github.com/s4SHIVam7/Auto_Create_Contact_LWC.git
     ```

2. **Deploy the Lightning Web Component**:
   - Deploy the `RecordCreatorWithoutApex` Lightning Web Component to your Salesforce org.

3. **Add the Component to Your Salesforce Page**:
   - Add the `RecordCreatorWithoutApex.` component to your Lightning App or Record Page.

## Usage

1. **Open a Salesforce Lightning Page or App**:
   - Navigate to a Salesforce Lightning Page or App where you want to enable automatic contact creation.

2. **Create a New Account**:
   - Create a new account as you normally would.

3. **Automated Contact Creation**:
   - As soon as you create the account, a corresponding contact is automatically created and associated with that account.

## Customization

This Lightning Web Component is designed for a specific use case where a contact needs to be created automatically with each account. There's minimal customization required. However, you can modify the component if needed.

## Screenshots

1. Main Component:
![image](https://github.com/s4SHIVam7/lwc-auto-create-contact-on-account-without-apex/assets/60181328/6f6a48cb-cc56-4f62-b369-3679f5c6d152)

2. ToopTip HelpText:
![image](https://github.com/s4SHIVam7/lwc-auto-create-contact-on-account-without-apex/assets/60181328/7cb12c36-c5c0-472e-b793-aa9d9f5472b5)

3. Error Toast Message (kept accountName as empty):
![image](https://github.com/s4SHIVam7/lwc-auto-create-contact-on-account-without-apex/assets/60181328/6b147ada-2934-49fa-b8db-415a423e3899)

4. Success (Entered Account Name and Contact Name):
![image](https://github.com/s4SHIVam7/lwc-auto-create-contact-on-account-without-apex/assets/60181328/b117e281-13fe-4961-89b9-78a5c3190953)

5. Account & Contact (different name):
![image](https://github.com/s4SHIVam7/lwc-auto-create-contact-on-account-without-apex/assets/60181328/ab4e242a-7291-4a24-b3d6-9be7e102fc90)

6. Success (Entered Account Name only):
![image](https://github.com/s4SHIVam7/lwc-auto-create-contact-on-account-without-apex/assets/60181328/038ac85f-dbed-47a5-bcb3-742e7f615d84)

7. Account & Contact (same name) :
![image](https://github.com/s4SHIVam7/lwc-auto-create-contact-on-account-without-apex/assets/60181328/aadab6d7-3d09-420b-9776-05a55760ca99)


## Contact

For questions, support, or feedback, please feel free to reach out:

- **Telegram**: [@shivam_l](https://t.me/shivam_l)
- **LinkedIn**: [Shivam Laidwar](https://www.linkedin.com/in/shivam-laidwar/)
