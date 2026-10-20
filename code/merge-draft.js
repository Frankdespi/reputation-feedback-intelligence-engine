// n8n Code node: "Merge Draft"
// Mode: Run Once for Each Item
//
// The "Draft Response" OpenAI node also replaces $json, so the original fields
// are merged back in from "Compute Route" together with the drafted reply.
const draftText = $json.output?.[0]?.content?.[0]?.text ?? $json.message?.content;
return { json: { ...$('Compute Route').item.json, DraftResponse: draftText } };
