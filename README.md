# Types for Smart Access

Types used by Smart Access SDK and other Smart Access related services.

## Install

`npm install @smart-consent-access/sa-typings`

## Usage

### Example
`import { SAAuthTicket } from "@smart-consent-access/sa-typings";`

```
const result: SAAuthTicket = await SA.policyEnforcement.ticketAudit({
      ticket: ticket,
    });
```
