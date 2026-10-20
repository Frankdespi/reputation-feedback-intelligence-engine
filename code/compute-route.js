// n8n Code node: "Compute Route"
// Mode: Run Once for All Items
//
// The previous node looks up earlier negative feedback from the same contact
// (with "Always Output Data" turned on). Any returned row with a FeedbackID
// means this customer has complained before.
const priorItems = $input.all();
const priorNegative = priorItems.some(item => item.json?.FeedbackID);
const { sentiment, severity } = $('Parse Score').first().json;

let route;
if (sentiment === "positive") {
  route = "ready_to_post";
} else if (severity === "high" || priorNegative) {
  route = "escalated";
} else {
  route = "private_queue";
}

return { json: { ...$('Parse Score').first().json, repeatNegative: priorNegative, route } };
