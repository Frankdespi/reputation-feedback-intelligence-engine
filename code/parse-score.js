// n8n Code node: "Parse Score"
// Mode: Run Once for Each Item
//
// The OpenAI node replaces $json with its own response, so this node rebuilds
// the item from "Normalize" and adds the parsed score on top of it.
// If the model output cannot be read as JSON, parseFailed is set and
// confidence is forced to 0, which sends the item to human review.
try {
  const raw = $json.output?.[0]?.content?.[0]?.text ?? $json.message?.content;
  const parsed = JSON.parse(raw);
  return { json: { ...$('Normalize').item.json, ...parsed, parseFailed: false } };
} catch (e) {
  return { json: { ...$('Normalize').item.json, parseFailed: true, confidence: 0 } };
}
