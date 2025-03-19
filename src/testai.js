import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const val = process.env.REACT_APP_API_AI_KEY;
const cl = process.env.REACT_APP_MODEL_CLIENT;

export async function maibdn() {
  const client = new ModelClient(
    cl,
    new AzureKeyCredential(val),
  );

  const response = await client.path("/chat/completions").post({
    body: {
      messages: [{ role: "user", content: "You only provide information to the point and related to various generes of books. Suggest one book with the genre and author's name. No pleasentries" }],
      model: "gpt-4",
      max_tokens: 50
    },
  });

  if (isUnexpected(response)) {
    throw response.body.error;
  }

  console.log(response.body.choices[0].message.content);
  return response.body.choices[0].message.content;
}

maibdn().catch((err) => {
  console.error("The sample encountered an error:", err);
});