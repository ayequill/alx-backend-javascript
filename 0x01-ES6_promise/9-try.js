const guardrail = (mathFN) => {
  const processed = [];
  try {
    processed.push(mathFN());
  } catch (error) {
    processed.push(`Error: ${error.message}`);
  } finally {
    processed.push('Guardrail was processed');
  }
  return processed;
};

export default guardrail;
