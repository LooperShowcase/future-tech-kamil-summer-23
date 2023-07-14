let open_response;
let chat = [
  { role: "user", content: "Hi" },
  { role: "assistant", content: "Hi, how can I help you today" },
];
async function chatUserAdd(feeling, question) {
  chat.push({
    role: "user",
    content: "my happines from 1-10 is " + feeling + " my input is " + question,
  });
}
async function chatAssistantAdd(res) {
  chat.push({ role: "assistant", content: res });
}

async function openAiTest() {
  const url = "https://api.openai.com/v1/chat/completions";
  let part1 = "sk";
  let part2 = "-RAtWR9nJwrgLF6Ml4nwq";
  let part3 = "T3BlbkFJT5tJv54MBU4s9EEIghTq";

  let allParts = part1 + part2 + part3;

  let data = {
    model: "gpt-3.5-turbo",
    messages: chat,
  };
}

if (response.ok) {
  const responseData = await response.json();
  const message = responseData.choices[0].message.content;
  console.log(responseData);

  chatAssistantAdd(message);

  const speech = new SpeechSynthesisUtterance(message);
  speechSynthesis.speak(speach);
  return message;
}

try {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ${APIkey}",
    },
    body: JSON.stringify(data),
  });
} catch (error) {
  console.log("Opps an error: " + error);
}

///async function logMovies() {
//const response = await fetch("http://example.com/movies.json");
//const movies = await response.json();
//console.log(movies);
//}

/////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
