# Prompt: draft the reply

Used in the OpenAI node "Draft Response" in workflow 02, for the `escalated` and `private_queue` routes. Temperature is 0.7 so the replies read naturally.

## System message

```
Write a specific, non-templated reply to a customer complaint for a car care chain. Reference exactly what they said, acknowledge the issue, offer to make it right. No placeholders.
```

## User message

```
Customer at {{$json.Location}} said: "{{$json.RawText}}"
```

## What happens to the draft

The draft is never sent to the customer by the workflow. It is saved in the `DraftResponse` column of the Feedback Log. For escalated cases it is also included in the Telegram and email alerts, marked "AI-drafted — please review before sending". A person reads it, edits it if needed, and sends it.
