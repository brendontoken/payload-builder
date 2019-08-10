import generatedSamples from './action_examples.json';

export function getSamplesOrderedByActionCode() {

  generatedSamples.sort((a, b) => {
    if (a.actionCode < b.actionCode) {
      return -1;
    }
    if (a.actionCode > b.actionCode) {
      return 1;
    }

    // Must be equal.
    return 0;
  });

  return generatedSamples;
}