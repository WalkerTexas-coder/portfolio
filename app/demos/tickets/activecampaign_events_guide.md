# ActiveCampaign Event Tracking Implementation Guide

## Overview

ActiveCampaign Event Tracking allows you to capture any user activity and trigger automated marketing campaigns based on specific patient behaviors. Events are flexible and can track various patient interactions like check-ins, appointment bookings, lab purchases, or medication orders.

## Key Concepts

### What are Events?
Events represent any user activity that your application registers:
- Patient check-ins
- Appointment scheduling
- Lab test purchases
- Medication orders
- Membership signups
- Document downloads

### Why Use Events?
- **Trigger Automations**: Start email sequences based on patient behavior
- **Segment Patients**: Create targeted patient groups based on actions
- **Personalize Communications**: Include event-specific data in emails
- **Track Engagement**: Monitor patient interaction patterns

## Setup Requirements

### 1. Enable Event Tracking
**In ActiveCampaign UI:**
- Navigate to Website → Site Tracking → Event Tracking
- Toggle tracking status to "ON"
- Note the Event Key (required for all API calls)

**Via API:**
```javascript
// Turn ON event tracking
POST https://{{yourAccountName}}.api-us1.com/api/3/eventTracking
{
  "eventTracking": {
    "enabled": true
  }
}
```

### 2. Whitelist Event Names
Before using events in automations, whitelist the event names:

**In ActiveCampaign UI:**
- Go to Website → Site Tracking → Event Tracking
- Under "Events" section, click "Add Event"
- Enter event name (e.g., "patient_check_in_posted")

**Via API:**
```javascript
POST https://{{yourAccountName}}.api-us1.com/api/3/eventTrackingEvents
{
  "eventTrackingEvent": {
    "name": "patient_check_in_posted"
  }
}
```

## Event Implementation

### Required Parameters
Every event requires these parameters:
- **actid**: Your 9-digit ActiveCampaign account ID
- **key**: Your event tracking key
- **event**: String identifying your event
- **visit**: JSON with patient email (contact must exist in AC)

### Optional Parameters
- **eventdata**: Additional data to store with the event (used in email personalization)

### Basic Event Function
```typescript
const triggerActiveCampaignEvent = async (
  eventName: string, 
  eventData?: string, 
  email?: string
) => {
  try {
    const response = await fetch('https://trackcmp.net/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        actid: 'YOUR_ACCOUNT_ID',
        key: 'YOUR_EVENT_KEY',
        event: eventName,
        eventdata: eventData || '',
        visit: JSON.stringify({
          email: email || ''
        })
      })
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success) {
        console.log('ActiveCampaign event success:', result.message);
      } else {
        console.error('ActiveCampaign event error:', result.message);
      }
    }
  } catch (error) {
    console.error('Failed to send ActiveCampaign event:', error);
  }
};
```

## HealthPlatform Platform Events

### Account Management Events
```typescript
// Account lifecycle
await triggerActiveCampaignEvent('account_created', userInfo, patientEmail);
await triggerActiveCampaignEvent('account_confirmed', '', patientEmail);
await triggerActiveCampaignEvent('account_deactivated', reason, patientEmail);

// Security and verification
await triggerActiveCampaignEvent('id_verification_completed', '', patientEmail);
await triggerActiveCampaignEvent('password_reset_requested', '', patientEmail);
```

### Assessment and Questionnaire Events
```typescript
// Patient intake process
await triggerActiveCampaignEvent('questionnaire_completed', questionnaireType, patientEmail);
await triggerActiveCampaignEvent('ai_assessment_approved', assessmentResults, patientEmail);
await triggerActiveCampaignEvent('medical_review_completed', reviewOutcome, patientEmail);
```

### Appointment Management Events
```typescript
// Appointment lifecycle
await triggerActiveCampaignEvent('appointment_scheduled', appointmentDetails, patientEmail);
await triggerActiveCampaignEvent('appointment_cancelled', cancellationReason, patientEmail);
```

### Lab Testing Events
```typescript
// Lab test workflow
await triggerActiveCampaignEvent('lab_kit_ordered', kitType, patientEmail);
await triggerActiveCampaignEvent('lab_kit_registered', registrationDetails, patientEmail);
```

### Membership and Payment Events
```typescript
// Financial transactions
await triggerActiveCampaignEvent('membership_purchased', membershipType, patientEmail);
await triggerActiveCampaignEvent('payment_successful', paymentAmount, patientEmail);
await triggerActiveCampaignEvent('order_created', orderDetails, patientEmail);
await triggerActiveCampaignEvent('order_failed', failureReason, patientEmail);
```

### Subscription Management Events
```typescript
// Doctor review workflow
await triggerActiveCampaignEvent('subscription_dr_review_approved', subscriptionDetails, patientEmail);
await triggerActiveCampaignEvent('subscription_dr_review_canceled', cancellationReason, patientEmail);
await triggerActiveCampaignEvent('subscription_dr_review_denied', denialReason, patientEmail);
await triggerActiveCampaignEvent('subscription_dr_review_paused', pauseReason, patientEmail);
await triggerActiveCampaignEvent('subscription_dr_review_resumed', resumeDetails, patientEmail);
```

### Communication Events
```typescript
// Platform messaging
await triggerActiveCampaignEvent('hedfirst_message_recieved', messageContent, patientEmail);
```

## Creating Automations

### 1. Create Automation
- Go to Automations → Create an automation
- Select "Start from Scratch"
- Choose "Event is recorded" as trigger

### 2. Select Event
- Choose your whitelisted event name
- Configure any additional conditions

### 3. Add Actions
- Send emails
- Add tags
- Update contact fields
- Create deals

## Using Event Data in Emails

### Personalization Tags
Event data can be included in emails using personalization tags:
```
%EVENT:patient_check_in_posted%
```

### Example Email Templates

**Account Confirmation:**
```
Welcome to HealthPlatform!

Your account has been successfully confirmed. 

%EVENT:account_confirmed%

You can now access all membership benefits and schedule your first consultation.

Start Your Health Journey →
```

**Lab Kit Ordered:**
```
Your Lab Kit is On Its Way!

We've received your order for: %EVENT:lab_kit_ordered%

Your kit will arrive within 2-3 business days. Once it arrives, follow the simple instructions included to complete your testing.

Track Your Order →
```

**Subscription Approved:**
```
Great News - Your Treatment is Approved!

Dr. [Provider Name] has approved your subscription:

%EVENT:subscription_dr_review_approved%

Your medication will be shipped within 24 hours. You'll receive tracking information once it's sent.

View Your Treatment Plan →
```

**Appointment Scheduled:**
```
Appointment Confirmed

Your appointment has been scheduled:

%EVENT:appointment_scheduled%

We'll send you a reminder 24 hours before your appointment with the meeting link.

Add to Calendar →
```

## Best Practices

### Event Naming
- Use descriptive, consistent naming: `patient_check_in_posted`
- Avoid spaces, use underscores
- Be specific: `lab_metabolic_purchased` vs. `lab_purchased`

### Error Handling
- Always wrap event calls in try-catch blocks
- Don't let event failures impact core functionality
- Log errors for monitoring

### Data Privacy
- Only send necessary data in eventdata field
- Ensure HIPAA compliance for sensitive information
- Consider data retention policies

### Performance
- Make event calls asynchronous
- Consider batching events if sending many
- Monitor API rate limits

## Implementation Checklist

### Setup
- [ ] Enable event tracking in ActiveCampaign
- [ ] Obtain and store actid and event key
- [ ] Implement base event tracking function

### Event Configuration
- [ ] Define list of events to track
- [ ] Whitelist events in ActiveCampaign UI/API
- [ ] Document event data requirements

### Integration Points
- [ ] Account lifecycle events (created, confirmed, deactivated)
- [ ] Authentication events (ID verification, password reset)
- [ ] Assessment workflow events (questionnaire, AI assessment, medical review)
- [ ] Appointment events (scheduled, cancelled)
- [ ] Lab testing events (kit ordered, kit registered)
- [ ] Financial events (membership purchased, payments, orders)
- [ ] Subscription management events (all doctor review states)
- [ ] Communication events (message received)

### Testing
- [ ] Test event firing with sample data
- [ ] Verify events appear in ActiveCampaign contact records
- [ ] Test automation triggers
- [ ] Validate email personalization

### Monitoring
- [ ] Set up error logging
- [ ] Monitor event success rates
- [ ] Track automation performance
- [ ] Review event data quality

## Troubleshooting

### Events Not Appearing
- Verify event tracking is enabled
- Check that contact exists in ActiveCampaign
- Confirm actid and key are correct
- Ensure event name is whitelisted

### Automation Not Triggering
- Check event name matches exactly
- Verify automation is active
- Review automation conditions
- Test with known working contact

### Personalization Not Working
- Confirm event data is being sent
- Check personalization tag syntax
- Verify event has data to display
- Test with sample event data

## Security Considerations

- Store actid and event key as environment variables
- Never expose credentials in client-side code
- Implement rate limiting to prevent abuse
- Monitor for unusual event patterns
- Ensure compliance with healthcare data regulations

## Integration with HealthPlatform Platform

The HealthPlatform platform tracks comprehensive patient journey events across six key categories:

### 1. Account Lifecycle
- `account_created` → Welcome series, onboarding automation
- `account_confirmed` → Account activation confirmation, next steps guidance
- `account_deactivated` → Exit survey, win-back campaigns
- `id_verification_completed` → Verification success, proceed to services
- `password_reset_requested` → Security notification, assistance offer

### 2. Assessment & Medical Review
- `questionnaire_completed` → Thank you message, what's next communication
- `ai_assessment_approved` → Assessment results, treatment plan introduction
- `medical_review_completed` → Review outcome communication, next steps

### 3. Appointment Management
- `appointment_scheduled` → Confirmation, preparation instructions, reminders
- `appointment_cancelled` → Cancellation confirmation, rescheduling options

### 4. Lab Testing Workflow
- `lab_kit_ordered` → Shipping notification, preparation instructions
- `lab_kit_registered` → Registration confirmation, testing guidance

### 5. Financial Transactions
- `membership_purchased` → Welcome to membership, benefits overview
- `payment_successful` → Payment confirmation, receipt, service activation
- `order_created` → Order confirmation, tracking information
- `order_failed` → Payment issue resolution, retry instructions

### 6. Subscription Management
- `subscription_dr_review_approved` → Prescription approved, fulfillment notification
- `subscription_dr_review_canceled` → Cancellation confirmation, alternatives
- `subscription_dr_review_denied` → Denial explanation, appeal process
- `subscription_dr_review_paused` → Pause confirmation, resume options
- `subscription_dr_review_resumed` → Resume confirmation, treatment continuation

### 7. Platform Communication
- `hedfirst_message_recieved` → Message acknowledgment, response automation

Each event triggers targeted automation sequences ensuring patients receive timely, relevant communication throughout their healthcare journey.