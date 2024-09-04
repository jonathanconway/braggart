import { startCase } from "lodash";

/**
 * Converts a string to sentence case.
 *
 * @example "One Two Three" => "One two three"
 * @example "one-two-three" => "One two three"
 * @example "OneTwoThree" => "One two three"
 *
 * @param input Input string
 * @returns Output string converted to sentence case
 */
export function sentenceCase(input: string) {
  const sentenceLower = startCase(input).toLowerCase();
  return `${sentenceLower[0].toUpperCase()}${sentenceLower.substring(1)}`;
}
