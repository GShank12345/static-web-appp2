import { InteractiveBrowserCredential } from "@azure/identity";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { KeyClient } from "@azure/keyvault-keys";
// import { AzureKeyCredential } from "@azure/core-auth";

// Configure vault URL
const vaultUrl = "https://kv-testhubg398190107389.vault.azure.net/";

// Azure SDK clients accept the credential as a parameter
const credential = new InteractiveBrowserCredential({clientId: "a3113145-7c2c-46f2-99e5-e5806086e378", tenantId:"42b9a4c1-0d05-469a-8be4-eb6d59776970", redirectUri: "http://localhost:4280/",});

// Create authenticated client
const client = new KeyClient(vaultUrl, credential, {
  headers:
  {
    "Access-Control-Allow-Origin" : "*"
  }
});
const keyName = "testai-api-secretkey"
const latestKey = await client.getKey(keyName);

console.log("client is =============================",client)
export async function maibdn() {
  const clientd = new ModelClient(
    "https://totsf-m7y7qqro-swedencentral.services.ai.azure.com/models", latestKey)
     

  const response = await clientd.path("/chat/completions").post({
   
    body: {
      messages: [{ role: "user", content: "You only provide information to the point and related to various generes of books. Suggest one book with the genre and author's name. No pleasentries" }],
      model: "gpt-4",
      max_tokens: 50,
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