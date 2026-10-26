
const messageInput = document.getElementById("message");
const checkButton = document.getElementById("check-button");
const result = document.getElementById("result");

// Common warning words and phrases.
// This is a rule-based demo, not a trained AI model.
const warningPhrases = [
  {
    phrase: "account blocked",
    reason: "The message says an account is blocked."
  },
  {
    phrase: "account is blocked",
    reason: "The message says an account is blocked."
  },
  {
    phrase: "send otp",
    reason: "It asks you to share a one-time password (OTP)."
  },
  {
    phrase: "share otp",
    reason: "It asks you to share a one-time password (OTP)."
  },
  {
    phrase: "verify your account",
    reason: "It asks you to verify your account."
  },
  {
    phrase: "account suspended",
    reason: "It claims an account has been suspended."
  },
  {
    phrase: "click this link",
    reason: "It urges you to click a link."
  },
  {
    phrase: "claim your prize",
    reason: "It offers a prize that may be unexpected."
  },
  {
    phrase: "won a prize",
    reason: "It claims you have won a prize."
  },
  {
    phrase: "send money",
    reason: "It asks you to send money."
  },
  {
    phrase: "bank details",
    reason: "It asks for sensitive banking information."
  },
  {
    phrase: "share your password",
    reason: "It asks you to share your password."
  },
  {
    phrase: "urgent",
    reason: "It uses urgent language to pressure you."
  },
  {
    phrase: "limited time",
    reason: "It creates a sense of time pressure."
  },
  {
    phrase: "act now",
    reason: "It pressures you to act immediately."
  },
  {
    phrase: "prize",
    reason: "It mentions a prize that may be unexpected."
  },
  {
    phrase: "otp",
    reason: "It mentions a one-time password (OTP). Never share an OTP."
  },
  {
    phrase: "password",
    reason: "It mentions a sensitive password."
  }
];

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, function (character) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function findWarnings(message) {
  const lowerMessage = message.toLowerCase();

  return warningPhrases.filter(function (item) {
    return lowerMessage.includes(item.phrase);
  });
}

function highlightWarnings(message, warnings) {
  // Escape pasted text before adding our own highlight markup.
  let safeMessage = escapeHtml(message);

  const phrases = [...new Set(warnings.map(item => item.phrase))]
    .sort((a, b) => b.length - a.length);

  phrases.forEach(function (phrase) {
    const escapedPhrase = escapeHtml(phrase);
    const pattern = new RegExp(
      escapedPhrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "gi"
    );

    safeMessage = safeMessage.replace(
      pattern,
      match => `<mark>${match}</mark>`
    );
  });

  return safeMessage;
}

function checkMessage() {
  const message = messageInput.value.trim();

  if (!message) {
    result.hidden = false;
    result.innerHTML = `
      <h2 class="result-heading">Paste a message first</h2>
      <p class="result-reason">
        Enter the text you want to check, then try again.
      </p>
    `;
    messageInput.focus();
    return;
  }

  const warnings = findWarnings(message);
  const highlightedMessage = highlightWarnings(message, warnings);

  if (warnings.length > 0) {
    const reasons = [...new Set(warnings.map(item => item.reason))];

    result.innerHTML = `
      <h2 class="result-heading result-scam">⚠ Likely scam</h2>
      <p>We found ${warnings.length} common warning indicator(s).</p>
      <div class="result-message">${highlightedMessage}</div>
      <p class="result-reason">
        <strong>Why:</strong> ${reasons.map(escapeHtml).join(" ")}
        This is not a definitive verdict. Verify through official channels.
      </p>
    `;
  } else {
    result.innerHTML = `
      <h2 class="result-heading result-safe">✓ Looks safe</h2>
      <div class="result-message">${highlightedMessage}</div>
      <p class="result-reason">
        No common warning indicators were detected by this basic checker.
        This does not guarantee the message is safe.
      </p>
    `;
  }

  result.hidden = false;
}

checkButton.addEventListener("click", checkMessage);
